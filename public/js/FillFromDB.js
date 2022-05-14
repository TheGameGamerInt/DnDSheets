let ID = parseInt(window.location.pathname.slice(6))

function DBonStartup() {
    let req = db.transaction(['Sheet'])
        .objectStore('Sheet').get(ID)
        req.onsuccess = event => {
            let res = event.target.result,
            ind = xpReqs.findIndex((exp) => {return res.Exp < exp})
            console.log('a')
            console.log(res)
            gid('ch-name').value = res.Name
            gid('ch-gender').value = res.Gender || ''
            gid('ch-age').value = res.Age
            gid('ch-class').value = res.Class || 'Barbarian'
            gid('ch-race').value = res.Race || 'Dragonborn'
            gid('ch-subrace').value = res.SubRace || 'Hill Dwarf'
            gid('startingclass').value = (ind== -1) ? 20: ind;
        }
}