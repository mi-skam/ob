---
parent: "[[Web Development]]"
date: 2024-01-17
tags:
  - 🦠
modified: 2024-01-17T15:47:51+01:00
---

Firestore is
1. realtime database.
2. NoSQL database (document based)

## Init Firebase

We create a Database in test mode in the web interface. [^1]
Then we add a `<script>` snippet to our html.

```js
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "learn-pwa-51779.firebaseapp.com",
  projectId: "learn-pwa-51779",
  storageBucket: "learn-pwa-51779.appspot.com",
  messagingSenderId: "1066412195315",
  appId: "1:1066412195315:web:7aaf2b00c6120eb71ee686",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
```

## Getting all documents in a collection

We get a handle to all current collections by referencing the collection's name with `collection('your_collection').get()`

```js
async function getCollection(name) {
  // db is a reference to the firebase/firestore
  const collections = await db.collection(name).get();
  collections.docs.forEach((doc) => {
    // a document is a complex object, to retrieve the data use data()
    console.log(doc.data());
  });
}
getCollection("cafes");
```

## Filtering documents (with a query)

As we have seen we work with a reference to the `db` and the `.collection(name)` method to get all documents from a collection. To only select some we express a query with a `.where(...query)` method, which gets put in between, like so `db.colletion(name).where(...query).get()`

A `query` can look like this:

```js
query = ['city', '==', 'Dresden'];
```

## Order the output

We sort the output by using `.orderBy(criteria)` method, e.G. `.orderBy('city')`

## Getting a document in a collection

To get a single document we use the `.doc(id)` method which expects the *id* of a document and returns this single document if found.

## Saving data to the firestore

We use a similar method, like we did for reading data, it's called `.add(data)`, which expects an object which consists of the data to be uploaded. 
In our example we bind it to the *submit event* of a button

```js
form.addEventListener("submit", (evt) => {
  evt.preventDefault(); // don't reload the page!
  db.collection("cafes").add({
    name: form.name.value,
    city: form.city.value,
  });
  // empty the form
  form.name.value = "";
  form.city.value = "";
});
```

## Update / Set Data

`.update(data)` works like `.add(data)` but instead of being part of the collection, it's a method on each document. So you could invoke an `.doc(id)` method to get a reference to a single document and then update the data `.doc(id).update(data)`.

`.set(data)` works like `.update(data)` but removes all former data before writing *data* to the object.

## Deleting a document

To delete a element we use the `.delete()` method on a single document. In our example we add the method on a *click* event handler.

```js
  cross.addEventListener("click", (evt) => {
    evt.stopPropagation();
    let id = evt.target.parentElement.getAttribute("data-id");
    db.collection("cafes").doc(id).delete();
  });
```

## Realtime updates

To get updates from our `db` we subscribe to change events called snapshots in the api `db.collection.onSnapshot(snapshot)` 

In a snapshot we get all changes to our documents by invoking `snapshot.docChanges()`. This returns an array with *change objects*.

Iterating over this changes, allows us to look for certain *change types*, e.G. "added" and "removed". 

In our example we render all "added" objects to our frontend and remove the ones, which are "removed"

```js
db.collection("cafes")
  .orderBy("city")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type === "added") {
        _renderCafe(change.doc);
      } else if (change.type === "removed") {
        let li = cafeList.querySelector(`[data-id=${change.doc.id}]`);
        cafeList.removeChild(li);
      }
    });
  });
```

[^1]: https://firebase.google.com/docs/web/setup?hl=de&authuser=0