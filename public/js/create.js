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
let CS = {
    ID: parseInt(window.location.pathname.slice(1)),
    Name: 'New Character #'+ parseInt(window.location.pathname.slice(1)),
    Exp: 0,
    PB: 2,
    Player: '',
    Alignment: '',
    Inspiration: false,
    HP: 0,
    MaxHP: 0,
    THP: 0,
    DSaves: [0, 0, 0],
    Gold: 0,
    Age: 0,
    Appearance: {
        Skin: "",
        Gender: "",
        Height: 0,
        Weight: 0,
        Eyes: ""
    },
    Personality: {
        BS: "I wanted to become an adventurer like you, before you took an arrow to the knee.",
        Goals: "I want to be the very best.",
        Ideals: "People should die when they are killed.",
        Traits: "I've got to catch all the evil people.",
        Flaws: "I'm flawless, and that's my flaw."
    } 
},
Class = {
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: '',
    HitDie: [1,4],
    Levels: 1
},
Subclass = {
    BelongsTo: function() {return Class.ID},
    Name: ""
},
Race = {
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: ""
},
Subrace = {
    BelongsTo: function() {return Race.ID},
    Name: ""
},
Background = {
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: "",
},
Scores = {
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    STR: 10,
    DEX: 10,
    CON: 10,
    WIS: 10,
    INT: 10,
    CHA: 10
},
Items = {
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: '',
    Type: '',
    Rarity: 'Common',
    //WIP
},
FE = {
    FeatureID: function() {return Feature.ID},
    EffectID: function() {return Effect.ID}
},
IF = {
    ItemID: function() {return Items.ID},
    FeatureID: function() {return Feature.ID}
},
CF = {
    ClassID: function() {return Class.ID},
    FeatureID: function() {return Feature.ID}
},
SCF = {
    SubclassID: function() {return Subclass.ID},
    FeatureID: function() {return Feature.ID}
},
RF = {
    RaceID: function() {return Race.ID},
    FeatureID: function() {return Feature.ID}
},
SRF = {
    SubraceID: function() {return Subrace.ID},
    FeatureID: function() {return Feature.ID}
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
        window.location.pathname = '/'
    }
}