let letter = "ابتثجحخدذرزسشصضطظعغفقكلمنهوية"
let letterArray = letter.split("")
let letterDiv = document.querySelector(".letters")
letterArray.forEach(letter => {
    let letterSpan = document.createElement("span")
    letterSpan.classList.add("letter-box")
    letterSpan.innerHTML = letter
    letterDiv.appendChild(letterSpan)
})

let catagories = {
    افلام : ["الجزيرة","بيت الروبي","غبي منه فيه","همام في امستردام","ويجا","تيمور و شفيقة","الف مبروك"],
    بلاد : ["ايطاليا","البحرين","الامارات","قطر","السعودية","مصر"]
}
let catKeys = Object.keys(catagories)
let randomkey = Math.floor(Math.random()*catKeys.length)
let randomkeyValue = catKeys[randomkey]

let randomValue = Math.floor(Math.random()*catagories[randomkeyValue].length)
let randomValueValue = catagories[randomkeyValue][randomValue]

let wrongAttempt = 0

document.querySelector(".category span").innerHTML = randomkeyValue

let lettersGuess = document.querySelector(".letters-guess")
let theWord = Array.from(randomValueValue)
theWord.forEach(letter => {
    let letterSpan = document.createElement("span")
    if(letter == " ") {
        letterSpan.classList.add("with-space")
    }
    lettersGuess.appendChild(letterSpan)
})
let = compeletedCheckCount = 0;
let lettersSpan = document.querySelectorAll(".letters-guess span")
lettersSpan.forEach(span => {
    if(span.classList.contains("with-space")) {
        compeletedCheckCount++
    }
})

document.addEventListener("click",e => {
    let status = false
   
    if(e.target.classList.contains("letter-box")) {
        e.target.classList.add("clicked")

    let clickedLetter = e.target.innerHTML
    theWord.forEach((letter,index) => {
        if(letter == clickedLetter) {
            lettersSpan[index].innerHTML = clickedLetter
            status = true
            compeletedCheckCount++
            document.getElementById("success").play()
        }
    })
 
    console.log(compeletedCheckCount)
    if(compeletedCheckCount == theWord.length) {
        document.getElementById("finish").play()
        let container = document.querySelector(".container")
        letterDiv.classList.add("finished")
        successDiv = document.createElement("div")
        successDiv.classList.add("popup")
        successDiv.style.backgroundColor = "orange"
        successDiv.innerHTML = `برافوووو عليك شطورة يا نادووو  ${randomValueValue} `;
       container.appendChild(successDiv)

    }
    

    if(status === false && wrongAttempt < 8 ) { 
        wrongAttempt++
        document.querySelector(".hangman-draw").classList.add(`wrong-${wrongAttempt}`)
        document.getElementById("fail").play()
    }
    if(wrongAttempt == 8){
        let container = document.querySelector(".container")
        letterDiv.classList.add("finished")
        gameOverDiv = document.createElement("div")
        gameOverDiv.classList.add("popup")
        gameOverDiv.innerHTML = `الاجابة الصحيحة هي : ${randomValueValue} `;
       container.appendChild(gameOverDiv)
       document.getElementById("error").play()
    }
    }
    
})

