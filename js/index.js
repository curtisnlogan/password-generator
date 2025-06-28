/*
pseudocode
*/

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genPassBtn = document.querySelector('.gen-pass-btn').addEventListener("click", generatePasswords)
let passDisplay1 = document.querySelector('.pass-display-1')
let passDisplay2 = document.querySelector('.pass-display-2')

/* 
generatePasswords()
*/
function generatePasswords() {
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



