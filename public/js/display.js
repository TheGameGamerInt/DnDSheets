
function onStartup() {
    req = db.transaction(["Sheet",]).objectStore('Sheet').getAll()
    req.onsuccess = event => {
        console.log(event.target)
        let link = document.getElementById('link'),
            i = 1
        for (let j = 0; j < event.target.result.length; j++) {
            if (event.target.result[j].ID > i) {
                break;
            }
            i = event.target.result[j].ID + 1
        }
        link.href = '/' + (i)
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        event.target.result.forEach(item => {
            let text = document.createTextNode(item.Name),
                url = document.createElement('a'),
                li = document.createElement('li')
            url.href = '/' + item.ID
            url.appendChild(text)
            li.appendChild(url)
            document.getElementById('list').appendChild(li)
        })
    }
};
