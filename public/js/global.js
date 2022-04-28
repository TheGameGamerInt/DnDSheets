// request.transaction.oncomplete = event => {
//  req = db.transaction([ArrayOfTablesToAccess], 'readwrite').objectStore('FirstTableToAccess').put(ObjectToUpdateOrAddBasedOnID)
//  .objectStore('SecondTableToAccess').get(IDOfObjectToGet)
//  .objectStore('NextTableToAccess').getAll(OptionalParameterToFilterResults)
//  req.onsuccess = event => {
//      
//  }
//}

let classes = [{Name:"Barbarian"}, {Name:"Bard"}, {Name:"Cleric"}, {Name:"Druid"}, {Name:"Fighter"}, {Name:"Monk"}, {Name:"Paladin"}, {Name:"Ranger"}, {Name:"Rogue"}, {Name:"Sorcerer"}, {Name:"Warlock"}, {Name:"Wizard"}],
    races = [{Name:"Dragonborn"}, {Name:"Dwarf"}, {Name:"Elf"}, {Name:"Gnome"}, {Name:"Half-Elf"}, {Name:"Half-Orc"}, {Name:"Halfling"}, {Name:"Human"}, {Name:"Tiefling"}]




















if (!window.indexedDB) {
    alert("Your browser doesn't support a stable version of IndexedDB. Please use another browser.");
    window.location = '/'
}

let db,
    request = indexedDB.open("Sheets", 5);

request.onerror = event => {
    window.alert('Unable to access IndexedDB. Please permit access and/or leave incognito mode.\nWITHOUT ACCESS YOUR SHEETS WILL NOT BE STORED.');
};

request.onsuccess = event => {
    db = event.target.result;
    console.log('Connected!')
    onStartup()
}

request.onupgradeneeded = event => {
    let db = event.target.result;
    let Names = ["Sheet", "Class", "Subclass", "Race", "Subrace", "Feature", "Effect", "Background", "Scores", "Items", "F-E", "I-F", "C-F", "SC-F", "R-F", "SR-F"]

    Names.forEach(name => {
        if (!db.objectStoreNames.contains(name)) {
            ;
            db.createObjectStore(name, {
                keyPath: "ID"
            })
        }
    })

}