class DBSheet {
    constructor(ID, Name, Exp, PB, Player, Gender, Alignment, Inspiration, MaxHP, HP, THP, DSaves, Gold, Age, Appearance, Personality) {
        (ID != null) ? this.ID = ID: null;
        this.Name = Name
        this.Exp = Exp || 0
        this.PB = PB || 2
        this.Player = Player || 'Me'
        this.Gender = Gender || ''
        this.Alignment = Alignment || ''
        this.Inspiration = Inspiration || false
        this.MaxHP = MaxHP || 10
        this.HP = HP || this.MaxHP
        this.THP = THP || 0
        this.DSaves = DSaves || [0, 0, 0]
        this.Gold = Gold || [0, 0, 0, 0]
        this.Age = Age || null
        this.Appearance = Appearance || {}
        this.Personality = Personality || {}
    }
}

class DBClass {
    constructor(BelongsTo, Name, Levels, HitDie) {
        this.BelongsTo = BelongsTo
        this.Name = Name
        this.Levels = Levels || 1
        this.HitDie = HitDie || this.Levels
    }
}

class DBSubClass {
    constructor(BelongsTo, Name) {
        this.BelongsTo = BelongsTo
        this.Name = Name
    }
}

class DBRace {
    constructor(BelongsTo, Name, Size) {
        this.BelongsTo = BelongsTo
        this.Name = Name
        this.Size = Size || 'Medium'
    }
}