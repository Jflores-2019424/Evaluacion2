const btnH = document.getElementById("btn")
const vowelT = document.getElementById("vowels")
const consonantText = document.getElementById("consonant")

const vowelCounter = text => {
    const vowels = 'aeiou'

    let vowelScore = 0
    for (const letter of text) {
        if (vowels.includes(letter.toLowerCase())) {
            vowelScore++
        }
    }
    return vowelScore
}

const consonantCounter = text =>{
    const consonant = 'bcdfghjklmnñpqrstvwxyz'

    let consonantScore = 0
    for(const letter of text) {
        if(consonant.includes(letter.toLowerCase())){
            consonantScore++
        }
    }
    return consonantScore
}

btnH.addEventListener("click", ()=>{
    const text = document.querySelector("input").value
    
    vowelT.innerHTML = vowelCounter(text)
    consonantText.innerHTML = consonantCounter(text)
})