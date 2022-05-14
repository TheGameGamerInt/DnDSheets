//Template for transactions to database
//
//onStartup() {
//  req = db.transaction([ArrayOfTablesToAccess], 'readwrite')
//  .objectStore('FirstTableToAccess').put(ObjectToUpdateOrAddBasedOnID)
//  .source.transaction.objectStore('SecondTableToAccess').get(IDOfObjectToGet)
//  .source.transaction.objectStore('NextTableToAccess').getAll(OptionalParameterToFilterResults)
//  req.onsuccess = event => {
//      let results = event.target.results
//  }
//}


let scores = ["Strength", "Dexterity", "Constitution", "Wisdom", "Intelligence", "Charisma"],
    classes = [{Name:"Barbarian"}, {Name:"Bard"}, {Name:"Cleric"}, {Name:"Druid"}, {Name:"Fighter"}, {Name:"Monk"}, {Name:"Paladin"}, {Name:"Ranger"}, {Name:"Rogue"}, {Name:"Sorcerer"}, {Name:"Warlock"}, {Name:"Wizard"}],
    races = [{Name:"Dragonborn"}, {Name:"Dwarf"}, {Name:"Elf"}, {Name:"Gnome"}, {Name:"Half-Elf"}, {Name:"Half-Orc"}, {Name:"Halfling"}, {Name:"Human"}, {Name:"Tiefling"}],
    subrace = [{Name:"Hill Dwarf", BelongsTo:"Dwarf"}, {Name:"High Elf", BelongsTo:"Elf"}, {Name:"Rock Gnome", BelongsTo:"Gnome"}, {Name:"Lightfoot", BelongsTo:"Halfling"}]
    features = [{Name:"Powerful build",Prerequisite:null,Effect:null /*temporary*/} ,{Name:"Stonecunning", Prerequisite:"Dwarf",Effect:null/*Temporary*/},{}]


















//Global connection to database
//Check if indexedDB is supported
if (!window.indexedDB) {
    alert("Your browser doesn't support a stable version of IndexedDB. Please use another browser.");
    window.location = '/'
}

//request to open the database
let db,
    request = indexedDB.open("Sheets", 1);

//Check for errors
request.onerror = event => {
    window.alert('Unable to access IndexedDB. Please permit access and/or leave incognito mode.\nWITHOUT ACCESS YOUR SHEETS WILL NOT BE STORED.');
};

//Call function to tell other scripts DB is connected
request.onsuccess = event => {
    db = event.target.result;
    console.log('Connected!')
    if (typeof onStartup === "function") {
        onStartup()
    }
    if (typeof DBonStartup === "function") {
        DBonStartup()
    }
}

//Add missing tables if DB version is outdated
request.onupgradeneeded = event => {
    let db = event.target.result;
    let Names = ["Sheet", "Class", "Subclass", "Race", "Subrace", "Feature", "Effect", "Background", "Scores", "Items", "CustomContent"]

    Names.forEach(name => {
        if (!db.objectStoreNames.contains(name)) {
            db.createObjectStore(name, {
                keyPath: "ID",
                autoIncrement: true
            })
        }
    })

}