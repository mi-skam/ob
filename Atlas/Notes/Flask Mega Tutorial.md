#code/python #code/backend


### Install

Mit `pipenv` erzeugt man spielerisch eine Shell mit allen Abhängigkeiten. 

Wichtige Befehle:

- `pipenv install`
- `pipenv install -d` (Zur installation von Dev-Abhängigkeiten)

### Config

Flask-Anwendungen werden mit `flask run` gestartet. Dabei wird die auszuführende Anwendung in der Umgebungsvariablen `FLASK_APP` konfiguriert. 

Damit diese nicht immer wieder von Hand eingegeben werden muss, gibt ein ein Paket namens `python-dotenv` mit dessen Hilfe man flask mit einer `.flaskenv`  konfiguriert.  

Ein Beispiel:

```
FLASK_APP=microblog.py
FLASK_ENV=development
```

<aside>
🚧 Genauer verstehen wie das setup von `flask run` funktioniert!

</aside>

Wir legen eine Struktur, wie oben sichtbar. Also einen Ordner namens `app` der eine `__init__.py` umfasst, die automatisch geladen wird wenn etwas aus dem Ordner `app` importiert wird.

In `[mircroblog.py](http://mircroblog.py)` wird unsere Anwendung mit einer einzigen Zeile gestartet

`from app import app`

Dabei wird `__init__.py` ausgeführt (Import von flask und dem Config Objekt), initialisieren des app Objektes, setzen der Konfiguration mit `app.config.from_object(Config)` und dem (mir schwer nachvollziehbaren) `from app import routes` welches `[routes.py](http://routes.py)` ausführt.

Warum wird routes so importiert? app bezieht sich hierbei auf den Pfad oder das gerade initialisierte Objekt? Kann man von diesem importieren?

**Konfigurationsobjekte**

Das Konfigurationsobjekt `Config` ist eine Klasse in `config.py`, die diese Form hat

```python
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default-secret'
```

### Routen

Routen werden als Dekoratoren umgesetzt. Diese Dekoratoren sind Teil des `app` Objektes und werden mit der Methode `.route()` gesetzt. 

Beispiel:

```python
from app import app

@app.route('/')
def index():
    return '''
<!doctype html>
<html>
    <head>
      <title>Microblog</title>
    </head>
    <body>
		   <h1>Hello World.</h1>
    </body>
</html>
'''
```

In den Routen brauchen wir einzelne Sprachkonstrukte immer wieder:

- `redirect()`
    
    Mit redirect lenken wir den Browser auf eine neue Url, z.B. nach dem wir uns eingeloggt haben, kommen wir wieder auf die Index-Seite mit `redirect('/')`
    
- `url_for()`
    
    Damit wir die aktuellen Routen nicht in allen Funktionen und Templates händisch ändern müssen, gibt es die Hilfsfunktion url_for(). Mit dieser bekomme ich die Route, einer mit app.route() dekorierten Funktion zurück.
    
    Beispiel:
    
    ```python
    @app.route('/login2', methods=['GET', 'POST'])
    def login():
        pass
    
    # url_for('login') gibt mir /login2 zurück
    ```
    

### Templates

Flask setzt auf *Jinja2* als Templatesprache und bringt alles nötige dazu mit.  Templates werden im Ordner `app/templates` abgelegt.

Wichtige Sprachemerkmale:

- Basis-Templates von denen geerbt wird
    - Im **Basis-Template** wird mit `{% block content %} (% endblock %}` die Stelle markiert, an der die abgeleiteten Templates ihre Inhalte “injizieren”
    - Im **abgeleiteten Template** steht zunächst die Direktive `{% extends "<basistemplate>" %` , um zu zeigen welches Template man *erweitern* möchte
    - und dann wird alles in `{% block content %} (% endblock %}` gesetzt.
    
    ```python
    <!doctype html>
    <html>
        <head>
          <title>Welcome to Microblog</title>
        </head>
        <body>
            {% block content %}{% endblock %}
        </body>
    </html>
    ```
    
    ```python
    {% extends "base.html" %}
    
    {% block content %}
        <h1>Hello, {{ user.username }}!</h1>
        {% for post in posts %}
        <div>
            <p>{{ post.author.username }} says: <b>{{ post.body }}</b></p>
        </div>
        {% endfor %}
    {% endblock %}
    ```
    
- for-loop
    
    ```python
    {% for post in posts %}
        <div>
            <p>{{ post.author.username }} says: <b>{{ post.body }}</b></p>
        </div>
    {% endfor %}
    ```
    
- if-else
    
    ```python
    {% if title %}
          <title>{{ title }} - Microblog</title>
          {% else %}
          <title>Welcome to Microblog</title>
    {% endif %}
    ```
    
- with-expression
    
    ```python
    {% with messages = get_flashed_messages() %}
            {% if messages %}
            <ul>
              {% for message in messages %}
              <li>{{ message }}</li>
              {% endfor %}
            </ul>
            {% endif %}
            {% endwith %}
    ```
    

Um Templates zu rendern, greifen wir auf `render_template(template, ...data)` zurück. Dabei ist *template* der Parameter, der den Namen des Templatefiles bestimmt, und dann übergeben wir in den restlichen Parametern, die Daten, die wir im Template erwarten, in der Form `template_var=local_var`

Beispiel

```python
render_template('login.html', title='Sign In', form=form) 
```

### Forms

Für die *Forms* greifen wir auf **flask_wtf** zurück.

Installation

```bash
pipenv install flask-wtf
```

![Untitled-2022-04-26-1910.png](Flask%20Mega%20Tutorial%2063e52d615c8c44a5ab7a9a654ffb4115/Untitled-2022-04-26-1910.png)

In `[forms.py](http://forms.py)` definieren wir das Form (anlog zu einem Model für eine Persistenzschicht), in `login()` welches in `[routes.py](http://routes.py)` ist, wird das Form initialisiert `form = LoginForm()` und das Template *login.html* mit den Daten des Models gefüttert.

Wenn man Formular ausgefüllt hat, und auf den Submit Button gedrückt hat, wird das Form validiert (`form.validate_on_submit()`) und im Erfolgsfall auf den Index redirected. Dabei nutzen wir noch die `flash()`  Funktion, die uns hilft die eingegeben Daten im Frontend auszugeben.