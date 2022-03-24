
if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Please use another browser.");
}
let db;
let request = indexedDB.open("Sheets", 2);
request.onerror = event => {
  window.alert('This app uses IndexedDB to store your sheets. Without permission, we can not store them, and as such, can not offer our service.');
};
request.onsuccess = event => {
  db = event.target.result;
  console.log('Connected!')
};
request.onupgradeneeded = event => {
    let db = event.target.result,
    objectStore = db.createObjectStore("Sheet", { keyPath: "ID", autoIncrement: true })
}
function AddNew() {
    let NewSheet = {
    Name: 'New Character',
    Classes: '',
    Levels: '1',
    Exp: 0,
    Background: '',
    Player: '',
    Race: '',
    Alignment: '',
    Inspiration: 0,
    Prof: 2,
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
    Saves: '0, 0, 0, 0, 0, 0',
    Skills: '0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0',
    SubClasses: '',
    Speed: '30, 0, 0',
    HP: 4,
    MaxHP: 4,
    THP: 0,
    HD: '1d4',
    DSaves: '0, 0, 0',
    Gold: 0,
    Weapons: '',
    WeaponDesc: '',
    WeaponAttack: '',
    WeaponDmg: '',
    AC: 10,
    Initiative: 0,
    Profs: '',
    Equipment: '',
    PTraits: '',
    Ideals: '',
    Bonds: '',
    Flaws: '',
    Feats: '',
    Age: 0,
    Height: 0,
    Weight: 0,
    Eyes: '',
    Skin: '',
    Hair: '',
    Backstory: '',
    SpellAbility: '',
    SpellSave: 0,
    SpellAttack: 0,
    Cantrips: '',
    Spell1Slots: 0,
    Spell1: '',
    Spell2Slots: 0,
    Spell2: '',
    Spell3Slots: 0,
    Spell3: '',
    Spell4Slots: 0,
    Spell4: '',
    Spell5Slots: 0,
    Spell5: '',
    Spell6Slots: 0,
    Spell6: '',
    Spell7Slots: 0,
    Spell7: '',
    Spell8Slots: 0,
    Spell8: '',
    Spell9Slots: 0,
    Spell9: '',
    SlotsUsed: '0, 0, 0, 0, 0, 0, 0, 0, 0',
    Prepped: '',
    CharDesc: ''
    }
    console.log(window.location.pathname.slice(1))
    if (!isNaN(parseInt(window.location.pathname.slice(1)))) {
        NewSheet.ID = parseInt(window.location.pathname)
    }
    let request = db.transaction(["Sheet"], "readwrite")
    .objectStore('Sheet').put(NewSheet)
    request.onsuccess = (event) => {
        alert('Character saved')
    }
}