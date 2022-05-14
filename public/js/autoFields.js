
function updateNodes() {
//Get fields that should be automated in an array
let children = Array.from(document.getElementsByTagName('*')).filter((item) => {
    return item.hasAttribute('automated')
});
//Get fields that should automate the fields in children array as an array 
let parents = Array.from(document.getElementsByTagName('input')).filter((item) => {
    return item.hasAttribute('child')
})

//Add event listener to change children on parent update
parents.forEach(element => {
    element.addEventListener('input', () => {
        children.forEach(elem => {
            if (elem.getAttribute('automated') == element.getAttribute('child')) {
                Auto(elem, element)
            }
        })
    })
})
}
//Function that changes children based on parent value
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

//Add character options
for (i in classes) {
    let option = document.createElement("option")
    let text = document.createTextNode(classes[i].Name)
    option.value = classes[i].Name
    option.appendChild(text);
    document.getElementById("ch-class").appendChild(option);
}
for (i in races) {
    let option = document.createElement("option")
    let text = document.createTextNode(races[i].Name)
    option.value = races[i].Name
    option.appendChild(text);
    document.getElementById("ch-race").appendChild(option);
}

let SubRaces = subrace.filter((SR) => {
    return document.getElementById("ch-race").value == SR.BelongsTo
})
for (i in SubRaces) {
    let option = document.createElement("option")
    let text = document.createTextNode(SubRaces[i].Name)
    option.value = SubRaces[i].Name
    option.appendChild(text);
    document.getElementById("ch-subrace").appendChild(option);
}

if (!document.getElementById("ch-subrace").hasChildNodes()) {
    document.getElementById("ch-subrace").style.display = 'none'
    document.getElementById("ch-subraceL").style.display = 'none'
} else {
    document.getElementById("ch-subraceL").style.display = ''
    document.getElementById("ch-subrace").style.display = ''
}

//Only show options if race has options
document.getElementById("ch-race").onchange = function () {
    SubRaces = subrace.filter((SR) => {
        return document.getElementById("ch-race").value == SR.BelongsTo
    })
    while (document.getElementById("ch-subrace").hasChildNodes()) {
        document.getElementById("ch-subrace").removeChild(document.getElementById("ch-subrace").firstChild);
    }
    for (i in SubRaces) {
        let option = document.createElement("option")
        let text = document.createTextNode(SubRaces[i].Name)
        option.value = SubRaces[i].Name
        option.appendChild(text);
        document.getElementById("ch-subrace").appendChild(option);
    }
    if (!document.getElementById("ch-subrace").hasChildNodes()) {
        document.getElementById("ch-subrace").style.display = 'none'
        document.getElementById("ch-subraceL").style.display = 'none'
    } else {
        document.getElementById("ch-subraceL").style.display = ''
        document.getElementById("ch-subrace").style.display = ''
    }
}
console.log(scores)
for (i in scores) {
    let input = document.createElement("input")
    let div = document.createElement("div")
    let scoreMod = document.createElement('p')
    scoreMod.appendChild(document.createTextNode('0'))
    div.id=scores[i]
    input.placeholder = scores[i]
    input.type = "number"
    input.setAttribute('child', scores[i])
    input.setAttribute('CType', 'score')
    scoreMod.setAttribute('Automated', scores[i])
    scoreMod.className = 'scoreMod'
    div.appendChild(input);
    div.appendChild(scoreMod)
    document.getElementById("AbScoresDiv").appendChild(div);
}
updateNodes()