let ID = parseInt(window.location.pathname.slice(6))

function DBonStartup() {
    db.transaction(['Sheet'])
        .objectStore('Sheet').get(ID)
        .onsuccess = event => {
            let res = event.target.result
            if (!res) return;
            console.log(res)
            let ind = xpReqs.findIndex((exp) => {
                return res.Exp < exp
            }) || 1
            gid('ch-name').value = res.Name
            gid('ch-gender').value = res.Gender || ''
            gid('ch-age').value = res.Age
            gid('ch-class').value = res.Class || 'Barbarian'
            gid('ch-race').value = res.Race || 'Dragonborn'
            gid('ch-subrace').value = res.SubRace || 'Hill Dwarf'
            gid('startingclass').value = (ind == -1) ? 20 : ind;
        }
    db.transaction(['Scores'])
        .objectStore('Scores').get(ID)
        .onsuccess = event => {
            let res = event.target.result
            if (!res) return;
            console.log(res)
            gid(scores[0]).value = res.STR || 10
            gid(scores[1]).value = res.DEX || 10
            gid(scores[2]).value = res.CON || 10
            gid(scores[3]).value = res.WIS || 10
            gid(scores[4]).value = res.INT || 10
            gid(scores[5]).value = res.CHA || 10
            updateNodes()
            console.log('updated')
        }
    console.log()
}