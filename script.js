console.log('YPA')


let keyboardKeysEnglish = [
    [ {keycode: 'Backquote', char: '\`', shift: '\~', alternative: '\~'},
    {keycode: 'Digit1', char: '1', shift: '!'},
    {keycode: 'Digit2', char: '2', shift: '@'},
    {keycode: 'Digit3', char: '3', shift: '#'},
    {keycode: 'Digit4', char: '4', shift: '$'},
    {keycode: 'Digit5', char: '5', shift: '%'},
    {keycode: 'Digit6', char: '6', shift: '^'}, 
    {keycode: 'Digit7', char: '7', shift: '&'}, 
    {keycode: 'Digit8', char: '8', shift: '*'}, 
    {keycode: 'Digit9', char: '9', shift: '('}, 
    {keycode: 'Digit0', char: '0', shift: ')'}, 
    {keycode: 'Minus', char: '-', shift: '_'}, 
    {keycode: 'Equal', char: '=', shift: '+'}, 
    {keycode: 'Backspace', char: '-< Backspace', shift: '-< Backspace'}, ],
    [ {keycode: 'ShiftLeft', char: 'Shift', shift: 'Shift'},
    {keycode: 'KeyQ', char: 'q', shift: 'Q'},
    {keycode: 'KeyW', char: 'w', shift: 'W'},
    {keycode: 'KeyE', char: 'e', shift: 'E'},
    {keycode: 'KeyR', char: 'r', shift: 'R'},
    {keycode: 'KeyT', char: 't', shift: 'T'},
    {keycode: 'KeyY', char: 'y', shift: 'Y'} ],
    [ {keycode: 'ShiftLeft', char: 'Shift', shift: 'Shift'},
    {keycode: 'KeyA', char: 'a', shift: 'A'},
    {keycode: 'KeyS', char: 's', shift: 'S'},
    {keycode: 'KeyD', char: 'd', shift: 'D'},
    {keycode: 'KeyF', char: 'f', shift: 'F'},
    {keycode: 'KeyG', char: 'g', shift: 'G'},
    {keycode: 'KeyH', char: 'h', shift: 'H'} ],
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
    {keycode: 'KeyQ', char: 'й', shift: 'Й'},
    {keycode: 'KeyW', char: 'ц', shift: 'Ц'},
    {keycode: 'KeyE', char: 'у', shift: 'У'},
    {keycode: 'KeyR', char: 'к', shift: 'К'},
    {keycode: 'KeyT', char: 'е', shift: 'Е'},
    {keycode: 'KeyY', char: 'н', shift: 'Н'} ],
]

let keyboardKeys = keyboardKeysEnglish

const title = document.createElement('h1')
title.textContent = 'Virtual keyboard'
let KeyBoardBlock = document.createElement('div')
KeyBoardBlock.className = 'keyboard__block'
let rowOfKeyboard = ''

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
    rowOfKeyboard.append(temporaryDiv)
    temporaryDiv.append(smallDiv)
    temporaryDiv.append(bigDiv)
}


const createKeyboard = () => {
    KeyBoardBlock.innerHTML = ''
    keyboardKeys.forEach(row => {
        rowOfKeyboard = document.createElement('div')
        rowOfKeyboard.className = 'rowOfKeyboard'
        KeyBoardBlock.append(rowOfKeyboard)
        row.forEach(element => {
            createKeyDiv(element)
        })
    })
}
createKeyboard()

let KeyboardKeysOnBoard = document.querySelectorAll('.key__block')

let KeyboardKeysOnBoardSmall = document.querySelectorAll('.key__small')
let KeyboardKeysOnBoardShift = document.querySelectorAll('.key__shift')

const paintKeyOnKeydown = () => {
    document.addEventListener('keydown', (event) => {
        KeyboardKeysOnBoard = document.querySelectorAll('.key__block')
        KeyboardKeysOnBoard.forEach(element => {
            // console.log('event.code', event.code)
            // console.log('element.dataset.keyToCompare', element.dataset.keyToCompare)
            if (event.code == element.dataset.keyToCompare) {
                element.classList.add('colored')
            }
        })
    })
    document.addEventListener('keyup', (event) => {
        KeyboardKeysOnBoard = document.querySelectorAll('.key__block')
        KeyboardKeysOnBoard.forEach(element => {
            if (event.code == element.dataset.keyToCompare) {
                element.classList.remove('colored')
            }
        })
    })
}
paintKeyOnKeydown()


document.addEventListener('keyup', (event) => {
    if (event.code == 'ShiftLeft') {
        KeyboardKeysOnBoardSmall.forEach( el => el.classList.remove('hidden') )
        KeyboardKeysOnBoardShift.forEach( el => el.classList.add('hidden') )
    }
})

function runOnKeys(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);
      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();
      func();
    });
    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });
}

const changeLanguage = () => {
    if (keyboardKeys == keyboardKeysEnglish) {
        keyboardKeys = keyboardKeysRussian
        createKeyboard()
    } else {
        keyboardKeys = keyboardKeysEnglish
        createKeyboard()
    }
}

runOnKeys( () => changeLanguage(), "ShiftLeft",  "AltLeft");

const shiftPushed = () => {
        console.log('ShiftLeft pushed')
        KeyboardKeysOnBoardSmall = document.querySelectorAll('.key__small')
        KeyboardKeysOnBoardShift = document.querySelectorAll('.key__shift')
        KeyboardKeysOnBoardSmall.forEach( el => el.classList.add('hidden') )
        KeyboardKeysOnBoardShift.forEach( el => el.classList.remove('hidden') )
}
runOnKeys( () => shiftPushed(), "ShiftLeft");