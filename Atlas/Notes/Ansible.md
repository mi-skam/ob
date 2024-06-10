
Ansible ist ein in Python geschriebenes Werkzeug zur Automatisierung von IT-Prozessen. Zu diesen gehören die **Installation von Software, Verteilung von Konfigurationen, Zugängen und Daten**, **Zustandsänderung von Programmen** (Anwendungen, Diensten).  Dabei werden in ***YAML*** geschriebene Anweisung etweder lokal ausgeführt oder an entfernte Systeme gesendet und dort ausgeführt.

Ansible benötigt lediglich eine Version von *Python 3.x* als Bedingung zur Ausführung. Zum Senden von Anweisungen nutzt Ansible *OpenSSH.* Im Folgenden erfolgt eine praktische Durchführung um Ansible zu installieren und praktisch nutzen zu können

## Installation

Ansible ist nicht direkt unter Windows lauffähig, man nutzt also ggfs eine WSL2- oder VM-Instanz (z.B. Ubuntu)

### mit Python - virtual environments

```bash

sudo apt install python3-venv
mkdir ~/.envs
python3 -m venv ~/.envs/ansible
source ~/.envs/ansible/bin/activate # to leave the venv, enter 'deactivate'
pip install ansible
# check ansible version
ansible --version
```

### ohne Python - micromamba

```bash

# Micromamba installieren
curl micro.mamba.pm/install.sh | bash
# Ansible Environmnt erzeugen
micromamba create -n ansible python ansible -c conda-forge
micromamba activate ansible
# check ansible version
ansible --version
```

## Konfiguration

Da Ansible OpenSSH nutzt um mit den entfernten Systemen zu kommunizieren, ist es hilfreich einen Deploy Schlüssel zu erzeugen und dessen öffentlichen Teil in die Liste der akzeptierten Schlüssel ( `~/.ssh/authorized_keys` ) einzutragen. Dies müssen Sie für alle Systeme tun, die von Ansible administriert werden sollen.

```bash

ssh-keygen -f ~/.ssh/deploy
ssh-copy-id -i ~/.ssh/deploy user@rechner1
...
ssh-copy-id -i ~/.ssh/deploy user@rechnern
```

### (optional) ~/.ssh/config

Man kann diesen ssh-Key auf mehreren Weise den Systemen zu ordnen. Der erste Weg ist das via dem Inventory-File wie es in dem nächsten Block geschildert wird. Nutzt man diesen Key aber auch in anderen Zusammenhängen, wie z.B. dem interaktiven ssh Remotezugriff, lohnt sich eine Konfiguration von ssh, welches dann auch von Ansible genutzt wird.


```bash
Host *.example.com
  User plumps
  IdentityFile ~/.ssh/deploy

Host marco
  HostName marco.example.com

Host romeo
  HostName romeo.example.com
```

  
## Vagrant

```ruby
# -*- mode: ruby -*
# vi: set ft=ruby :

BOX_NAME    = "almalinux/9"
BOX_IP      = "192.168.50.4"
HOST_NAME_1   = "ansible1"
DOMAIN      = "test"

Vagrant.configure(2) do |config|
  # General Vagrant VM configuration
  config.vm.box = BOX_NAME
  config.ssh.insert_key = false
  config.vm.synced_folder ".", "/vagrant", disabled: true
  # Hypervisor configuration
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512"
    vb.cpus = 2
    vb.linked_clone = true
  end

  # Server configuration
  config.vm.define HOST_NAME_1 do |server1|
    server1.vm.host_name = HOST_NAME_1 + '.' + DOMAIN
    server1.vm.network "private_network", ip: BOX_IP
  end
end

```

  
```

[dev]
ansible1 ansible_host=192.168.50.4 ansible_user=vagrant ansible_ssh_private_key_file=~/.vagrant.d/insecure_private_key

```

Mit dieser Kombination kann auf eine VM, die von vagrant verwaltet wird, über ssh (ansible) zugegriffen werden. Dabei muss der VM-Host *nicht* der ansible Master sein. 😎

## Inventory

Im Inventory werden alle zu administrierenden Systeme gelistet. Dies geschieht im ***ini*** oder ***yaml*** Style. Dabei werden einzelne Hosts als Name oder IP zu Gruppen in eckigen Klammern zusammen gefasst. Diese Hosts kann Host-weise, also explizit ansprechen oder indirekt über die Gruppenzugehörigkeit. In dem einfachen Beispiel wäre in marco, romeo und 10.10.0.1 Teil der Gruppe dev und diese nutzt den deploy key um die Verbindung herzustellen

```bash
[dev]
marco
romeo
10.10.0.1

[dev:vars]
ansible_ssh_private_key_file=~/.ssh/deploy

[web]
marco

[vm]
alma
```

[How to build your inventory — Ansible Documentation](https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#intro-inventory)

## Ansible Konfiguration

In der Ansible-Konfiguration stellt man für dieses Projekt gültige oder systemweite Einstellungen ein.  Am wichtigsten ist das Inventory-file zu konfigurieren.
- systemweit: `/etc/ansible/ansible.cfg`
- Projekt: `ansible.cfg`

```bash
[defaults]
inventory=hosts
remote_user=plumps
host_key_checking=False
```

[Ansible Configuration Settings — Ansible Documentation](https://docs.ansible.com/ansible/latest/reference_appendices/config.html)

## Interaktive Kommandos

Hat man die SSH-Keys eingerichtet und verteilt und die Ansible Konfiguration und das Host-File eingerichtet kann man mittels interaktiver Befehle testen, ob die Systeme erreichbar sind und die Konfiguration läuft.

Ein einfacher ping tut es `ansible dev -m ping`
Interaktive Befehle (Shell-Befehle) kann man so ausführen: `ansible dev -a "uptime"`

## Playbooks

Playbooks sind eine Ansammlung von ‘Plays’, die m YAML Format, definiert werden.
[https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html#about-playbooks](https://docs.ansible.com/ansible/latest/user_guide/playbooks_intro.html#about-playbooks)

| Themen                   | Links                                                                     |
| ------------------------ | ------------------------------------------------------------------------- |
| alle Beispiele           | https://github.com/mi-skam/ansible/tree/main/practice                     |
| Variablen und Debuggen   | https://github.com/mi-skam/ansible/blob/main/practice/learn-variables.yml |
| Installation von Apache  | https://github.com/mi-skam/ansible/blob/main/practice/deploy-httpd.yml    |
| Umgang mit Ansible Facts | https://github.com/mi-skam/ansible/blob/main/practice/facts.yml           |

  
### Plays

Elementare Ausführungseinheiten von Ansible. Dies bilden eine Zuweisung von gemanagten Systemen zu Aufgaben (Tasks). Plays enthalten Variablen, Rollen (Roles), und eine geordnete Liste von Aufgaben und können wiederholt ausgeführt werden.

### Tasks

Die Definiton dessen was “getan” werden soll. Tasks sind immer Teile eines Play.

### Roles

Eine Sammlung eines wieder verwendbaren Ansible Contents. (Tasks, Handlers, Variablen, Plugins, Templates, Files).  Um eine Role zu nutzen, muss diese in ein Play importiert werden.
[Roles — Ansible Documentation](https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html#role-directory-structure)

### Handlers

Eine Spezialform eines Tasks, welcher nur ausgeführt wird, wenn es von einem anderen Task den ‘change’ Status erhält.

## Modules

Module sind Code, die das umsetzten, was in einem Task gefordert wird. Das kann ein Programm in Python oder Shell Script sein.  Die Module werden (meinst) in den Tasks parametrisiert.
[Collection Index — Ansible Documentation](https://docs.ansible.com/ansible/latest/collections/index.html#list-of-collections)

## Plugins

Technisch gesehen handelt es sich um Module, die die Funktionalität von Ansible erweitern. Das kann ein formatter sein oder was auch auch immer.
[https://docs.ansible.com/ansible/latest/plugins/plugins.html#working-with-plugins](https://docs.ansible.com/ansible/latest/plugins/plugins.html#working-with-plugins)

## Collections

Ein strukturiertes Format. welches sämtlichen Content in einem erwarteten Format zur Verfügung stellt. Collections können via Ansible Galaxy verteilt werden.
[https://docs.ansible.com/ansible/latest/user_guide/collections_using.html#collections](https://docs.ansible.com/ansible/latest/user_guide/collections_using.html#collections)

## Cookbook
[https://github.com/ansible/ansible-examples](https://github.com/ansible/ansible-examples)

### Typische Dateistruktur für ein Playbook

![[Untitled.png]]

```bash

group_vars / # variables files
roles /
site.yml # master playbook to get the role going
hosts # inventory file
```

**group_vars**
In **group_vars** befinden sich yaml files, die für defaults genutzt werden können. Sie sind global nutzbar.

**roles**
In diesen **roles** befindet sich die Hauptfunktionalität des *Playbooks* . Man erleichtert sich das Erstellen der benötigten Ordnerstruktur mit dem Tool **ansible-galaxy**

```bash

ansible-galaxy init roles/<role-name>

```

![[Untitled 1.png]]
Eine Beispielrolle mit dem Namen “common”

Anatomie einer Rolle

1. **********************defaults********************** (Default-Variablen einer Rolle, können in ********vars******** bezw. im Playbook überschrieben werden)
2. **************files************** (Umfasst alle **********statischen********** Files, die wir auf den Host kopieren wollen)
3. ****************handlers**************** (Handler sind Tasks, die unter bestimmten Bedingungen ablaufen, häufig zum Neustarten von Diensten)
4. ********meta******** (Metadaten über eine Rolle)
5. **********tasks********** (Hier liegen die Kernaufgaben einer Rolle )
6. ******************templates****************** (Umfasst alle **********Jinja2 Templates********** )
7. **************tests************** (funktionale Tests für das Modul)
8. ********vars******** (siehe defaults) ********************

### LAMP (Linux, Apache, MariaDB, PHP)

**Rollen**

1. common
    1. Bereitet den Server vor
    2. installiert ggfs. notwendige Pakete
2. apache
    1. Installiert Apache2,
    2. konfiguriert einen default vhost
3. mariadb
    1. Installiert MariaDB
    2. Sichert die Installation ab
    3. Konfiguriert eine Standard-DB und einen Standard-Nutze
4. php
    1. Installiert php
    2. Installiert php-Module
    3. Installiert Composer
## Resources
[Ansible for dotfiles: the introduction I wish I've had](https://phelipetls.github.io/posts/introduction-to-ansible/)