const random = require('random');

function passwordgen() {
    const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const char = ["!", "-", "*", "%", "$", "#", "@"];
    let passw = "";
    for (let i = 0; i <= random.int(8, 16); i++) {
        passw += letter[random.int(0, letter.length - 1)];
    }
    for (let j = 0; j <= random.int(3, 6); j++) {
        passw += num[random.int(0, num.length - 1)];
    }
    for (let v = 0; v <= random.int(1, 3); v++) {
        passw += char[random.int(0, char.length - 1)];
    }
    

    passw.toString();
    return passw;
    
}

let password = passwordgen();

console.log(password);