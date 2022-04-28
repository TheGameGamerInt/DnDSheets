


let CS = {
    ID: parseInt(window.location.pathname.slice(1)),
    Name: 'New Character #'+ CS.ID,
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
    ID,
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: '',
    HitDie: [1,4],
    Levels: 1
},
Subclass = {
    ID,
    BelongsTo: function() {return Class.ID},
    Name: ""
},
Race = {
    ID,
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: ""
},
Subrace = {
    ID,
    BelongsTo: function() {return Race.ID},
    Name: ""
},
Background = {
    ID,
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: "",
},
Scores = {
    ID,
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    STR: 10,
    DEX: 10,
    CON: 10,
    WIS: 10,
    INT: 10,
    CHA: 10
},
Items = {
    ID,
    BelongsTo: parseInt(window.location.pathname.slice(1)),
    Name: '',
    Type: '',
    Rarity: 'Common',
    //WIP
},
FE = {
    ID,
    FeatureID: function() {return Feature.ID},
    EffectID: function() {return Effect.ID}
},
IF = {
    ID,
    ItemID: function() {return Item.ID},
    FeatureID: function() {return Feature.ID}
},
CF = {
    ID,
    ClassID: function() {return Class.ID},
    FeatureID: function() {return Feature.ID}
},
SCF = {
    ID,
    SubclassID: function() {return Subclass.ID},
    FeatureID: function() {return Feature.ID}
},
RF = {
    ID,
    RaceID: function() {return Race.ID},
    FeatureID: function() {return Feature.ID}
},
SRF = {
    ID,
    SubraceID: function() {return Subrace.ID},
    FeatureID: function() {return Feature.ID}
}

function AddNew() {
    
    let request = db.transaction(['Sheet', 'Class', 'Subclass', 'Race', 'Subrace', 'Feature', 'Background', 'Scores'], "readwrite")
        .objectStore('Sheet').put(CS)
        .objectStore('Class').put(Class)
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