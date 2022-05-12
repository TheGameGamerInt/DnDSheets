

class Race {
    constructor (Name, Size, Type, SubRaces, Features) {
    this.Name = Name
    this.Size = Size
    this.Type = Type
    this.SubRaces = SubRaces
    this.Features = Features
}}
    let Races = []
let Elf = new Race("Elf", Medium, Humanoid, [], [])
    Races.push(Elf);



    class SubRace {
    constructor (ParentRace, Name, Features) {
        this.ParentRace = ParentRace
        this.Name = Name
        this.Features = Features
    }
}
 let SubRaces =[]
 let HighElf = new SubRace(Elf, "High Elf", [])
    SubRaces.push(HighElf)
 
    SubRaces.forEach(subrace => {
        subrace.ParentRace.SubRaces.push(subrace)
    })

        