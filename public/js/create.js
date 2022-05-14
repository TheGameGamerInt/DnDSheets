//Define templates to be changed and inserted into DB
//Will be converted to classes
let Race = {
        BelongsTo: parseInt(window.location.pathname.slice(6)),
        Name: "",
        Features: []
    },
    Subrace = {
        BelongsTo: parseInt(window.location.pathname.slice(6)),
        Name: ""
    },
    Background = {
        BelongsTo: parseInt(window.location.pathname.slice(6)),
        Name: "",
    },
    Scores = {
        BelongsTo: parseInt(window.location.pathname.slice(6)),
        STR: 10,
        DEX: 10,
        CON: 10,
        WIS: 10,
        INT: 10,
        CHA: 10

    },
    Items = {
        BelongsTo: parseInt(window.location.pathname.slice(6)),
        Name: '',
        Type: '',
        Rarity: 'Common',
        //WIP
    },
    FE = {
        FeatureID: function () {
            return Feature.ID
        },
        EffectID: function () {
            return Effect.ID
        }
    },
    IF = {
        ItemID: function () {
            return Item.ID
        },
        FeatureID: function () {
            return Feature.ID
        }
    },
    CF = {
        ClassID: function () {
            return Class.ID
        },
        FeatureID: function () {
            return Feature.ID
        }
    },
    SCF = {
        SubclassID: function () {
            return Subclass.ID
        },
        FeatureID: function () {
            return Feature.ID
        }
    },
    RF = {
        RaceID: function () {
            return Race.ID
        },
        FeatureID: function () {
            return Feature.ID
        }
    },
    SRF = {
        SubraceID: function () {
            return Subrace.ID
        },
        FeatureID: function () {
            return Feature.ID
        }
    }


//Insert into DB
function AddNew() {
let ID = parseInt(window.location.pathname.slice(6))
let Name = gid('ch-name').value
let Gender = gid('ch-gender').value
let Age = gid('ch-age').value
let Level = gid('startingclass').value
let Class = gid('ch-class').value
let Race = gid('ch-race').value
let SubRace = gid('ch-subrace').value
    let request = db.transaction(['Sheet', 'Class', 'Subclass', 'Race', 'Subrace', 'Feature', 'Background', 'Scores'], "readwrite")
        .objectStore('Sheet').put(new DBSheet(ID,Name,xpReqs[Level-1],null,'You', Gender, null, null, null, null, null, null, null, Age, null, null))
        /**.source.transaction.objectStore('Class').put(Class)/****/
        /**.source.transaction.objectStore('Subclass').put(Subclass)/****/
        /**.source.transaction.objectStore('Race').put(new DBRace(ID,'Elf',null))/****/
        /**.source.transaction.objectStore('Subrace').put(Subrace)/****/
        /**.source.transaction.objectstore('Feature').put(Feature)/****/
        /**.source.transaction.objectStore('Background').put(Background)/****/
        .source.transaction.objectstore('Scores').put(Scores)/****/
    request.transaction.oncomplete = (event) => {
        alert('Character saved')
        window.location.pathname = '/'
    }
}