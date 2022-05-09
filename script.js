console.log('YPA')


let keyboardKeysEnglish = [
    [ {keycode: 'Backquote', char: '\`', shift: '\~', alternative: '\~'},
    {keycode: 'Numpad1', char: '1', shift: '!'},
    {keycode: 'Numpad2', char: '2', shift: '@'},
    {keycode: 'Numpad3', char: '3', shift: '#'},
    {keycode: 'Numpad4', char: '4', shift: '$'},
    {keycode: 'Numpad5', char: '5', shift: '%'},
    {keycode: 'Numpad6', char: '6', shift: '^'} ],
    [ {keycode: 'ShiftLeft', char: 'Shift', shift: 'Shift'},
    {keycode: 'KeyQ', char: 'q', shift: 'Q'},
    {keycode: 'KeyW', char: 'w', shift: 'W'},
    {keycode: 'KeyE', char: 'e', shift: 'E'},
    {keycode: 'KeyR', char: 'r', shift: 'R'},
    {keycode: 'KeyT', char: 't', shift: 'T'},
    {keycode: 'KeyY', char: 'y', shift: 'Y'} ],
]

let keyboardKeysRussian = [
    [ {keycode: 'Backquote', char: 'ё', shift: 'Ё', alternative: '\~'},
    {keycode: 'Numpad1', char: '1', shift: '!'},
    {keycode: 'Numpad2', char: '2', shift: '\"'},
    {keycode: 'Numpad3', char: '3', shift: '№'},
    {keycode: 'Numpad4', char: '4', shift: ';'},
    {keycode: 'Numpad5', char: '5', shift: '%'},
    {keycode: 'Numpad6', char: '6', shift: ':'} ],
    [ {keycode: 'ShiftLeft', char: 'Shift', shift: 'Shift'},
    {keycode: 'KeyQ', char: 'й', shift: 'Q'},
    {keycode: 'KeyW', char: 'w', shift: 'W'},
    {keycode: 'KeyE', char: 'e', shift: 'E'},
    {keycode: 'KeyR', char: 'r', shift: 'R'},
    {keycode: 'KeyT', char: 't', shift: 'T'},
    {keycode: 'KeyY', char: 'y', shift: 'Y'} ],
]

let keyboardKeys = keyboardKeysEnglish

const title = document.createElement('h1')
title.textContent = 'Virtual keyboard'
const KeyBoardBlock = document.createElement('div')
KeyBoardBlock.className = 'keyboard__block'
let RowOfKeydoard = ''

document.body.prepend(title, KeyBoardBlock)

const createKeyDiv = (obj) => {
    let temporaryDiv = document.createElement('div')
    temporaryDiv.className = 'key__block'
    let smallDiv = document.createElement('div')
    smallDiv.textContent = obj.char
    smallDiv.className = 'key__small'
    let bigDiv = document.createElement('div')
    bigDiv.textContent = obj.shift
    bigDiv.className = 'key__shift'
    bigDiv.classList.add('hidden')
    temporaryDiv.dataset.keyToCompare = obj.keycode
    RowOfKeydoard.append(temporaryDiv)
    // document.body.append(temporaryDiv)
    temporaryDiv.append(smallDiv)
    temporaryDiv.append(bigDiv)
}


keyboardKeys.forEach(row => {
    RowOfKeydoard = document.createElement('div')
    RowOfKeydoard.className = 'RowOfKeydoard'
    KeyBoardBlock.append(RowOfKeydoard)
    //bigDiv.classList.add('hidden')
    row.forEach(element => {
        createKeyDiv(element)
    })
    //RowOfKeydoard.append()
})

const KeyboardKeysOnBoard = document.querySelectorAll('.key__block')
const KeyboardKeysOnBoardSmall = document.querySelectorAll('.key__small')
const KeyboardKeysOnBoardShift = document.querySelectorAll('.key__shift')

let pressedKeys = new Set()


document.addEventListener('keydown', (event) => {
    console.log(event.code)
    pressedKeys.add(event.code)
    //for (pressed in pressedKeys)
    // if (pressedKeys.has('AltLeft' && "ShiftLeft")) {
    //     alert("AAAAAAAAAAAAAAAAAAA")
    //     return;
    // }

    let codes = ['AltLeft' , 'ShiftLeft']

    for (let code of codes) { // все ли клавиши из набора нажаты?
        console.log('code', code)
        console.log('pressedKeys', pressedKeys)
        if (!pressedKeys.has(code)) {
            console.log('!pressedKeys.has(code)', !pressedKeys.has(code))
            return console.log('pressedKeysReturn', pressedKeys);
        }
        //alert("AAAAAAAAAAAAAAAAAAA")
    }
    pressedKeys.clear();
    alert("AAAAAAAAAAAAAAAAAAA")
    // if(event.code in pressedKeys) return;
    // pressedKeys[event.code] = true;


    console.log('pressedKeys', pressedKeys)
    if (event.code == 'AltLeft' && event.code == 'ShiftLeft'  ) {
        // KeyboardKeysOnBoardShift.forEach( el => el.classList.toggle('hidden') )
        console.log('Alt-----------------------------------------')
        keyboardKeys = keyboardKeysRussian

    }
    if (event.code == 'ShiftLeft') {
        // KeyboardKeysOnBoardShift.forEach( el => el.classList.toggle('hidden') )
        console.log('ShiftLeft pushed')
        KeyboardKeysOnBoardSmall.forEach( el => el.classList.add('hidden') )
        KeyboardKeysOnBoardShift.forEach( el => el.classList.remove('hidden') )
    }
    KeyboardKeysOnBoard.forEach(element => {
        if (event.code == element.dataset.keyToCompare) {
            console.log('YPAAAAAAA')
            element.classList.add('colored')
        }
    })
    // if (event.code == 'KeyQ') {
    //     keyboardkey.classList.toggle('colored')
    // }
})


document.addEventListener('keyup', (event) => {
    // console.log("YPA 5555555555 times")
    // console.log(event.code)
    pressedKeys.delete(event.code)


    if (event.code == 'ShiftLeft') {
        // KeyboardKeysOnBoardShift.forEach( el => el.classList.toggle('hidden') )
        console.log('YPAAAAAAAAAAAAAAAA')
        KeyboardKeysOnBoardSmall.forEach( el => el.classList.remove('hidden') )
        KeyboardKeysOnBoardShift.forEach( el => el.classList.add('hidden') )
    }
    KeyboardKeysOnBoard.forEach(element => {
        if (event.code == element.dataset.keyToCompare) {
            console.log('YPAAAAAAA')
            element.classList.remove('colored')
        }
    })
})

// let keyboardkey = document.createElement('div')
// keyboardkey.textContent = 'Key q'
// keyboardkey.className = 'key__block'
// keyboardkey.dataset.keyToCompare = 'XXX'
// keyboardkey.dataset.keyToCompare = 'PPPPPPPPP'

// document.body.prepend(title, keyboardkey)

// keyboardkey.addEventListener('keydown', () => {
//     console.log("YPA 2 times")
// })

