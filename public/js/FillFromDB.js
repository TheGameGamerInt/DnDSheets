let ID = parseInt(window.location.pathname.slice(6))

function DBonStartup() {
    let req = db.transaction(['Sheet', 'Class', 'Subclass', 'Race', 'Subrace', 'Feature', 'Background', 'Scores'], "readwrite")
        .objectStore('Sheet').get(ID)
        .source.transaction.objectStore('Race').get(ID)
        req.onsuccess = event => {
            console.log('a')
            console.log(event)
        }
}