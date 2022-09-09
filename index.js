const readline = require('readline/promises');
const { stdin: input, stdout: output, exit, removeAllListeners } = require('process');
const { readlink } = require('fs');

const rl = readline.createInterface({ input, output });

uppgift1 = async () => {
    /*
    1. Skriv ett program som tar in en temperatur (nummer) och skriver ut en rekommendation på
    hur man bör klä sig för att vara utomhus.
    Input variabler: temperatur (nummer)
    Output: Rekommendation på kläder
    */
    let input = await rl.question("Skriv temperatur: ")

    console.log("Temperatur är: " + input);

    if(parseInt(input) < 5) {
        console.log("Vinterkläder");
    }
    if(parseInt(input) >= 5 && parseInt(input) < 15) {
        console.log("Höst/vårväder, ta på dig en jacka");
    }
    if(parseInt(input) >= 15 && parseInt(input) < 20) {
        console.log("Ganska varmt, om solen är framme klarar du dig på tischa och shorts");
    }
    if(parseInt(input) >= 20) {
        console.log("Sommar, tischa och shorts");
    }

    uppgift2()
}

uppgift1()

uppgift2 = async () => {
    /*
    2. Skriv ett program som innehåller en hårdkodad array med text. Fyll arrayen med något
    valfritt. Programmet tar in en text och skriver ut om arrayen innehåller inputten. Om arrayen
    innehåller texten skall programmet också skriva ut vilket index den ligger på.
    Input variabler: text (sträng)
    Output: Ja eller nej beroende på om inputten finns eller inte plus index om den finns
    */
    let hardCodedArray = ["Godis", "Chips", "Choklad"]
    
    let input = await rl.question("Finns i arrayen?: ")

    for(let i = 0; i < hardCodedArray.length; i++) {
        if(input == hardCodedArray[i]) {
            console.log(hardCodedArray[i] + " fanns i arrayen! " + " på index platsen: " + i);
        }
    }

    uppgift3()
}

uppgift3 = async () => {
    /*
    3. Skriv ett program som kollar om en sträng är en palindrom.
    Input variabler: text (sträng)
    Output: Ja eller nej beroende på om inputten är en palindrom eller inte
    */
    let input = await rl.question("Choose a word: ")

    let newWord = "";

    for(let i = 0; i < input.length; i++) {
        newWord += input[input.length - i - 1]
    }
    if(newWord == input) {
        console.log("Det är en palindrom!");
    } else {
        console.log("Det är inte en palindrom kido");
    }

    uppgift4()
}

uppgift4 = async () => {
    /*
    4. Skriv ett program som räknar ut hur många ord en text innehåller. Ett ord definieras som en
    del text som är separerad med mellanslag.
    Input variabler: text (sträng)
    Output: Antal ord i inputten
    */
    let input = await rl.question("Skriv en liten historia så räknar jag antal ord i den: ")

    let amountOfWord = input.split(" ").length;

    console.log(amountOfWord);

    uppgift5()
}

uppgift5 = async () => {
    /*
    5. Skriv ett program som kan hantera addition och subtraktion mellan två tal. Man väljer i
    början av programmet om man vill göra addition eller subtraktion.
    Input variabler: operation (valfritt), tal 1 (nummer), tal 2 (nummer)
    Output: Svaret om man utför operationen på de två input talen
    */
    let input = await rl.question("1) Addition\n2) Subtraktion\nGör ditt val: ")

    let siffra1 = await rl.question("Välj siffra 1: ")
    let siffra2 = await rl.question("Välj siffra 2: ")

    switch(input) {
        case "1":
            console.log(Number(siffra1) + Number(siffra2))
            break
        case "2":
            console.log(Number(siffra1) - Number(siffra2))
            break
    }

    uppgift6()
}

uppgift6 = async () => {
    /*
    6. Skriv ett program som räknar ut om ett visst tal är ett primtal eller inte.
    Input variabler: nummer (nummer)
    Output: Ja eller nej beroende på om inputten är ett primtal eller inte
    */
    let input = await rl.question("Kolla om dit tal är ett primtal\nVälj ett nummer: ")

    let inputInt = Number(input)

    let primtal = true;
    for(let i = 2; i < inputInt; i++) {
        if(inputInt % i == 0) {
            primtal = false;
        }
    }

    console.log(primtal)

    uppgift7()
}

uppgift7 = async () => {
    /*
    7. Skriv ett program som räknar ut hur mycket pengar man kommer ha efter ett visst antal år
    om startsumman ökar med en viss procent varje år.
    Input variabler: antal år (nummer), start summa (nummer), procent (nummer)
    Output: Antal pengar efter ett visst antal år
    */
    let sum = Number(await rl.question("Välj summa: "))
    let year = Number(await rl.question("Välj år: "))
    let procent = Number(await rl.question("Välj procent: "))

    for(let i = 0; i < year; i++) {
        sum += sum * (procent * 0.01)
    }

    console.log(sum);

    uppgift8()
}

uppgift8 = async () => {
    /*8. 
    Skriv ett program som kan räkna ut följande tre saker. Man väljer i början vilka operation
    man vill göra.
    • Omkrets på cirkel. Input variabler: radie (nummer)
    • Area på cirkel. Input variabler: radie (nummer)
    • Sida på triangel (3:e av 2 angivna och rätvinklig). Input variabler: sida 1 (nummer), sida 2
    (nummer)
    • Area på rektangel. Input variabler: sida a (nummer), sida b (nummer)
    */
    let input = await rl.question("1) Omkrets på cirkel\n2) Area på cirkel\n3) Sida på triangel\n 4) Area på rektangel\nGör ditt val: ")

    switch(input) {
        case "1":
            let radie = Number(await rl.question("Välj radie: "))
            let omkrets = (2 * 3.1416) * radie
            console.log(omkrets);

        case "2":
            let radie2 = Number(await rl.question("Välj radie: "))
            let area = 3.1416 * (radie2 * radie2)
            console.log(area)
        case "3":
            let sida1 = Number(await rl.question("Välj sida 1: "))
            let sida2 = Number(await rl.question("Välj sida 2: "))

            let sida3 = (sida1 * sida1) + (sida2 * sida2)

            console.log(Math.sqrt(sida3))
        case "4":
            let sidaA = Number(await rl.question("Välj sida A: "))
            let sidaB = Number(await rl.question("Välj sida B: "))

            let area2 = 0.5 * sidaA * sidaB

            console.log(area2)
    }

    uppgift9()
}

uppgift9 = async () => {
    /*
    9. Skriv ett program som tar in en lista på alla gånger man handlat på en viss månad. Ta först in
    hur många gånger man handlat och sedan ett nummer per köp med kostnaden. Räkna sedan
    ut den totala kostnaden.
    Input variabler: antal köp (nummer), kostnad per köp (ett nummer per köp)
    Output: Totala kostnaden för alla köp
    */
    let input = Number(await rl.question("Hur många gånger har du handlat denna månaden?: "))

    let totalKostnad = Number(0)

    for(let i = 0; i < input; i++) {
        let dag = Number(i + 1)
        let köpKostnad = Number(await rl.question("Hur mycket handlade du för dag " + dag + "?: "))
        totalKostnad += köpKostnad
    }

    console.log("Du handlade för " + totalKostnad + " kronor denna månaden.");

    uppgift10()
}

uppgift10 = async () => {
    /*
    10. Skriv ett program som tar in ett visst antal nummer och räknar ut medelvärdet.
    Input variabler: antal nummer (nummer), nummer (ett nummer per antal)
    Output: Medelvärdet av alla input nummer
    */
    let input = Number(await rl.question("Hur många nummer vill du addera?: "))

    let totalt = Number(0)

    for(let i = 0; i < input; i++) {
        let nyttNummer = Number(await rl.question("Välja siffra: "))
        totalt += nyttNummer
    }

    console.log("Snittet är: " + (Number(totalt) / Number(input)))

    uppgift11()
}

uppgift11 = async () => {
    /*
    11. Skriv ett program som räknar ut om ett visst tal är delbart med 2, 3 eller 5.
    Input variabler: nummer (nummer)
    Output: Ja eller nej beroende på om inputten är delbart med 2, 3 eller 5
    */
    let input = Number(await rl.question("Välj ett nummer: "))

    if(input % 2 == 0 || input % 3 == 0 || input % 5 == 0) {
        console.log("Ja");
    } else {
        console.log("Nej");
    }

    uppgift12()
}

uppgift12 = async () => {
    /*
    12. Skriv ett program som tar in text om och om igen tills man skriver in ’exit’.
    Input variabler: text (sträng) (tills text == ’exit’)
    Output: Ingen
    */
    let loop = true
    while(loop) {
        let input = await rl.question("Write a string: ")

        if(input == "exit") {
            loop = false
        }
    }

    uppgift13()
}

uppgift13 = async () => {
    /*
    13. Skriv ett program som gör om engelska till morsekod och tvärtom.
    Input variabler: text (sträng)
    Output: Morsekod av inputten
    */
    const morseCode = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--.."
     }

     const MORSE_CODE = {
        ".-": "a",
        "-...":"b",
        "-.-.": "c",
        "-..": "d",
        ".":"e",
        "..-.":"f",
        "--.":"g",
        "....":"h",
        "..":"i",
        ".---":"j",
        "-.-":"k",
        ".-..":"l",
        "--":"m",
        "-.":"n",
        "---":"o",
        ".--.":"p",
        "--.-":"q",
        ".-.":"r",
        "...":"s",
        "-":"t",
        "..-":"u",
        "...-":"v",
        ".--":"w",
        "-..-":"x",
        "-.--":"y",
        "--..":"z",
        ".----":"1",
        "..---":"2",
        "...--":"3",
        "....-":"4",
        ".....":"5",
        "-....":"6",
        "--...":"7",
        "---..":"8",
        "----.":"9",
        "-----":"0",
        "|":" "
    }
     const convertToMorse = (str) => {
        return str.toUpperCase().split("").map(el => {
           return morseCode[el] ? morseCode[el] : el;
        }).join("");
     }

     const decodeMorse = (morseCode) => {
        let words = (morseCode).split('  ');
        let letters = words.map((w) => w.split(' '));
        let decoded = [];
      
        for(let i = 0; i < letters.length; i++){
          decoded[i] = [];
          for(let x = 0; x < letters[i].length; x++){
              if(MORSE_CODE[letters[i][x]]){
                  decoded[i].push( MORSE_CODE[letters[i][x]] );
              }
          }
        }
      
        return decoded.map(arr => arr.join('')).join(' ');
      }

    let input = await rl.question("1) English to morse code\n2) Morse Code to english:\nMake a choice: ")

    switch(input) {
        case "1":
            let input2 = await rl.question("Write some english and i will convert it for you: ")
            let decodeEnglish = convertToMorse(input2)
            console.log(decodeEnglish)
            break
        case "2":
            let input3 = await rl.question("Write some morse code and i will convert it for you: ")
            let decodeMorse = decodeMorse(input3)
            console.log(decodeMorse)
            break
    }

    exit()
}