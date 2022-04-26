if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Please use another browser.");
}
let db,
    request = indexedDB.open("Sheets", 5);
request.onerror = event => {
    window.alert('This app uses IndexedDB to store your sheets. Without permission, we can not store them, and as such, can not offer our service.');
};
request.onsuccess = event => {
    db = event.target.result;
    console.log('Connected!')
};
request.onupgradeneeded = event => {
    let db = event.target.result;
    let Names = ["Sheet", "Class", "Subclass", "Race", "Subrace", "Feature", "Effect", "Background", "Scores", "Items", "F-E", "I-F", "C-F", "SC-F", "R-F", "SR-F"]

    Names.forEach(name => {
        if (!db.objectStoreNames.contains(name)) {
            db.createObjectStore(name, {
                keyPath: "ID"
            })
        }
    })

}

const Templates = {Sheet: {},Class: {}, Subclass}

function AddNew() {
    let CS = {
            ID: parseInt(window.location.pathname.slice(1)),
            Name: 'New Character',
            Exp: 0,
            Player: '',
            Alignment: '',
            Inspiration: false,
            HP: 0,
            MaxHP: 0,
            THP: 0,
            DSaves: [0, 0, 0],
            Gold: 0,
        },
        Class = {
            ID: parseInt(window.location.pathname.slice(1)),
            Name: 'New Character',
            Exp: 0,
            Player: '',
            Alignment: '',
            Inspiration: false,
            HP: 0,
            MaxHP: 0,
            THP: 0,
            DSaves: [0, 0, 0],
            Gold: 0,
        }
    let request = db.transaction(['Sheet', 'Class', 'Subclass', 'Race', 'Subrace', 'Feature', 'Background', 'Scores'], "readwrite")
        .objectStore('Sheet').put(CS)
    //.objectStore('Class').put(Class)
    //.objectStore('Subclass').put(Subclass)
    //.objectStore('Race').put(Race)
    //.objectStore('Subrace').put(Subrace)
    //.objectstore('Feature').put(Feature)
    //.objectStore('Background').put(Background)
    //.objectstore('Scores').put(Scores)
    request.transaction.oncomplete = (event) => {
        alert('Character saved')
    }
}