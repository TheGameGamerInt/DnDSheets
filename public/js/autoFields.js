function updateNodes() {
    console.log('nodes')
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
    parents.forEach(element => {
        children.forEach(elem => {
            if (elem.getAttribute('automated') == element.getAttribute('child')) {
                Auto(elem, element)
            }
        })
    })
}
//Function that changes children based on parent value
function Auto(elem, parent) {
    console.log('aaa')
    if (!gid('autoButton').checked) return;
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
    gid("ch-class").appendChild(option);
}
for (i in races) {
    let option = document.createElement("option")
    let text = document.createTextNode(races[i].Name)
    option.value = races[i].Name
    option.appendChild(text);
    gid("ch-race").appendChild(option);
}

let SubRaces = subrace.filter((SR) => {
    return gid("ch-race").value == SR.BelongsTo
})
for (i in SubRaces) {
    let option = document.createElement("option")
    let text = document.createTextNode(SubRaces[i].Name)
    option.value = SubRaces[i].Name
    option.appendChild(text);
    gid("ch-subrace").appendChild(option);
}

if (!gid("ch-subrace").hasChildNodes()) {
    gid("ch-subrace").style.display = 'none'
    gid("ch-subraceL").style.display = 'none'
} else {
    gid("ch-subraceL").style.display = ''
    gid("ch-subrace").style.display = ''
}

//Only show options if race has options
gid("ch-race").onchange = function () {
    SubRaces = subrace.filter((SR) => {
        return gid("ch-race").value == SR.BelongsTo
    })
    while (gid("ch-subrace").hasChildNodes()) {
        gid("ch-subrace").removeChild(gid("ch-subrace").firstChild);
    }
    for (i in SubRaces) {
        let option = document.createElement("option")
        let text = document.createTextNode(SubRaces[i].Name)
        option.value = SubRaces[i].Name
        option.appendChild(text);
        gid("ch-subrace").appendChild(option);
    }
    if (!gid("ch-subrace").hasChildNodes()) {
        gid("ch-subrace").style.display = 'none'
        gid("ch-subraceL").style.display = 'none'
    } else {
        gid("ch-subraceL").style.display = ''
        gid("ch-subrace").style.display = ''
    }
}
console.log(scores)
for (i in scores) {
    let input = document.createElement("input")
    let div = document.createElement("div")
    let scoreMod = document.createElement('p')
    scoreMod.appendChild(document.createTextNode('0'))
    input.id = scores[i]
    input.value = 10
    div.id = 'div-' + scores[i]
    input.placeholder = scores[i]
    input.type = "number"
    input.setAttribute('child', scores[i])
    input.setAttribute('CType', 'score')
    scoreMod.setAttribute('Automated', scores[i])
    scoreMod.className = 'scoreMod'
    div.appendChild(input);
    div.appendChild(scoreMod)
    gid("AbScoresDiv").appendChild(div);
}
updateNodes()