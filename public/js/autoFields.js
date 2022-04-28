let fields = Array.from(document.getElementsByTagName('*')).filter((item) => {
    return item.hasAttribute('automated')
});
let parents = Array.from(document.getElementsByTagName('input')).filter((item) => {
    return item.hasAttribute('child')
})
let i = 0
console.log(1, fields)
console.log(2, parents)

let upD = new CustomEvent('parentUpdate', {
    detail: {
        parent: () => parents[i]
    }
})

fields.forEach(element => {
    console.log(element)
});

parents.forEach(element => {
    console.log(element)
    element.addEventListener('input', () => {
        fields.forEach(elem => {
            if (elem.getAttribute('name') == element.getAttribute('child')) {
                Auto(elem, element)
            }
        })
    })
})

function Auto(elem, parent) {
    if (!document.getElementById('autoButton').checked) return;
    switch (parent.getAttribute('CType')) {
        case 'score':
            elem.innerHTML = Math.floor((parent.value - 10) / 2)
            break;
        case 'PB':
            elem.value = Math.floor(2 + (parent.value - 1) / 4)
            break;
        case 'AC':

            break;
        case 'Feat':
            AddFeat(elem, parent)
    }
}
    
    for (i in classes) {
        let option = document.createElement("option")
        let text = document.createTextNode(classes[i].Name)
        option.value = classes[i].Name
        option.appendChild(text);
        console.log(document)
        document.getElementById("ch-class").appendChild(option);
    }
    for (i in races) {
        let option = document.createElement("option")
        let text = document.createTextNode(races[i].Name)
        option.value = races[i].Name
        option.appendChild(text);
        console.log(document)
        document.getElementById("ch-Races").appendChild(option);
    }