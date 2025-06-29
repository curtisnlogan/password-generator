/*
*/

const characters = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?", "/"]

const charactersNumbers = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const charactersSymbols = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?", "/"]

let genPassBtn = document.querySelector('.gen-pass-btn').addEventListener('click', generatePasswords)
let passDisplay1 = document.querySelector('.pass-display-1')
let passDisplay2 = document.querySelector('.pass-display-2')
let numbersBtn = document.querySelector('.numbers-btn').addEventListener('click', numbersToggleFunc)
let symbolsBtn = document.querySelector('.symbols-btn').addEventListener('click', symbolsToggleFunc)
let numbersToggle = true
let symbolsToggle = true

/* 
*/
function generatePasswords() {
    userChars = document.querySelector('.user-input-inp').value;
    
    if (userChars === '12' && numbersToggle === true && symbolsToggle === true) {
        let pass1 = ''
        for (n = 0; n < 12; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass1 += characters[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 12; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass2 += characters[randomN]
        }
        passDisplay2.textContent = pass2
    }

    else if (userChars === '13' && numbersToggle === true && symbolsToggle === true) {
        let pass1 = ''
        for (n = 0; n < 13; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass1 += characters[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 13; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass2 += characters[randomN]
        }
        passDisplay2.textContent = pass2

    }

    else if (userChars === '14' && numbersToggle === true && symbolsToggle === true) {
        let pass1 = ''
        for (n = 0; n < 14; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass1 += characters[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 14; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass2 += characters[randomN]
        }
        passDisplay2.textContent = pass2
    }

    else if (userChars === '15' && numbersToggle === true && symbolsToggle === true) { 
        let pass1 = ''
        for (n = 0; n < 15; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass1 += characters[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 15; n++) {
            let randomN = Math.floor(Math.random() * characters.length)
            pass2 += characters[randomN]
        }
        passDisplay2.textContent = pass2
    }

    else if (userChars === '12' && numbersToggle === false && symbolsToggle === true) {
        let pass1 = ''
        for (n = 0; n < 12; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass1 += charactersSymbols[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 12; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass2 += charactersSymbols[randomN]
        }
        passDisplay2.textContent = pass2
    }

    else if (userChars === '13' && numbersToggle === false && symbolsToggle === true) {
        let pass1 = ''
        for (n = 0; n < 13; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass1 += charactersSymbols[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 13; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass2 += charactersSymbols[randomN]
        }
        passDisplay2.textContent = pass2

    }

    else if (userChars === '14' && numbersToggle === false && symbolsToggle === true) {
        let pass1 = ''
        for (n = 0; n < 14; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass1 += charactersSymbols[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 14; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass2 += charactersSymbols[randomN]
        }
        passDisplay2.textContent = pass2
    }

    else if (userChars === '15' && numbersToggle === false && symbolsToggle === true) { 
        let pass1 = ''
        for (n = 0; n < 15; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass1 += charactersSymbols[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 15; n++) {
            let randomN = Math.floor(Math.random() * charactersSymbols.length)
            pass2 += charactersSymbols[randomN]
        }
        passDisplay2.textContent = pass2
    }
    else if (userChars === '12' && numbersToggle === true && symbolsToggle === false) {
        let pass1 = ''
        for (n = 0; n < 12; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass1 += charactersNumbers[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 12; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass2 += charactersNumbers[randomN]
        }
        passDisplay2.textContent = pass2
    }

    else if (userChars === '13' && numbersToggle === true && symbolsToggle === false) {
        let pass1 = ''
        for (n = 0; n < 13; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass1 += charactersNumbers[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 13; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass2 += charactersNumbers[randomN]
        }
        passDisplay2.textContent = pass2

    }

    else if (userChars === '14' && numbersToggle === true && symbolsToggle === false) {
        let pass1 = ''
        for (n = 0; n < 14; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass1 += charactersNumbers[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 14; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass2 += charactersNumbers[randomN]
        }
        passDisplay2.textContent = pass2
    }

    else if (userChars === '15' && numbersToggle === true && symbolsToggle === false) { 
        let pass1 = ''
        for (n = 0; n < 15; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass1 += charactersNumbers[randomN]
        }
        passDisplay1.textContent = pass1
        
        let pass2 = ''
        for (n = 0; n < 15; n++) {
            let randomN = Math.floor(Math.random() * charactersNumbers.length)
            pass2 += charactersNumbers[randomN]
        }
        passDisplay2.textContent = pass2
    }
}

/*
*/
function numbersToggleFunc() {
    if (numbersToggle === true) {
        numbersToggle = false;
        document.querySelector('.numbers-btn').style.backgroundColor = '#d13d3f'
    }
    else {
        numbersToggle = true
        document.querySelector('.numbers-btn').style.backgroundColor = '#10B981'
    }
}

/*
*/
function symbolsToggleFunc() {
      if (symbolsToggle === true) {
        symbolsToggle = false
        document.querySelector('.symbols-btn').style.backgroundColor = '#d13d3f'
    }
    else {
        symbolsToggle = true
        document.querySelector('.symbols-btn').style.backgroundColor = '#10B981'
    }
}



