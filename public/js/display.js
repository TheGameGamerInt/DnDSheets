if (!window.indexedDB) {
    alert("Your browser doesn't support a stable version of IndexedDB. Please use another browser.");
    window.location = '/'
}
let sheets,
    db,
    req,
    request = indexedDB.open("Sheets", 2);
request.onerror = event => {
  window.alert('This app uses IndexedDB to store your sheets. Without permission, we can not store them, and as such, can not offer our service.');
};
request.onsuccess = event => {
  db = event.target.result;
  console.log('Connected!')
  req = db.transaction(["Sheet"]).objectStore('Sheet').getAll()
  req.onsuccess = event => {
    document.getElementById('list').innerHTML = ""
    event.target.result.forEach(item => {
    let text = document.createTextNode(item.Name),
    url = document.createElement('a'),
    li = document.createElement('li')
    url.href = '/' + item.ID
    url.appendChild(text)
    li.appendChild(url)
    document.getElementById('list').appendChild(li)
})
}
};
request.onupgradeneeded = event => {
    db = event.target.result,
    objectStore = db.createObjectStore("Sheet", { keyPath: "ID", autoIncrement: true })
}