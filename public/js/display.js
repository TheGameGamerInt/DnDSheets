if (!window.indexedDB) {
    alert("Your browser doesn't support a stable version of IndexedDB. Please use another browser.");
    window.location = '/'
}
let sheets,
    db,
    req,
    request = indexedDB.open("Sheets", 4);
request.onerror = event => {
  window.alert('This app uses IndexedDB to store your sheets. Without permission, we can not store them, and as such, can not offer our service.');
};
request.onsuccess = event => {
  db = event.target.result;
  console.log('Connected!')
  req = db.transaction(["Sheet"]).objectStore('Sheet').getAll()
  req.onsuccess = event => {
      let link = document.getElementById('link'),
      i = 1
      for (let j = 0; j<event.target.result.length;j++) {
      if (event.target.result[j].ID > i) {
          break;
      }
      i = event.target.result[j].ID+1
      }
      link.href = '/'+(i)
      while(list.firstChild){
        list.removeChild(list.firstChild);
    }
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
    let db = event.target.result;
    let Names = ["Sheet","Class","Subclass","Race","Subrace","Feature","Effect","Background","Scores"]
    
    Names.forEach(name => {
        if(!db.objectStoreNames.contains(name)) {;
        db.createObjectStore(name, { keyPath: "ID"})
    }})

}