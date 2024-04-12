class Password {
    constructor(){
        console.log("Welcome to Password generator")
        this.pass = ""
    }

    generatePassword(len, includeUppercase, includeLowercase, includeNumber, includeSymbol) {
        let num = "1234567890";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let specialCar = "!@#$%^&*()_?><.,:;";
        let characterSet = "";

        if (includeUppercase) characterSet += upperCase;
        if (includeLowercase) characterSet += lowerCase;
        if (includeNumber) characterSet += num;
        if (includeSymbol) characterSet += specialCar;

            let i = 0;
            while(this.pass.length < len) {
                this.pass += characterSet[Math.floor(Math.random() * characterSet.length)];
                i++;
            }
            this.pass = this.pass.substr(0, len)
            return this.pass
    }
}

function generate() {
    let passLen = document.getElementById("passLength").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let number = document.getElementById("number").checked;
    let symbol = document.getElementById("symbol").checked;

    let p = new Password();
    output.innerHTML = p.generatePassword(passLen, uppercase, lowercase, number, symbol);
}