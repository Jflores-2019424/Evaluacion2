const text = document.getElementById("text")

function message1() {
    const res1 = "Hola"
    return res1
}

function message2() {
    const res2 = "Buenas tardes"
    return res2
}

function message3() {
    const res3 = "Adios"
    return res3
}

function  message4() {
    const res4 = "T-T"
    return res4
}

function  message5() {
    const res5 = "<-o->"
    return res5
}

const random = [message1(), message2(), message3(), message4(), message5()]

function generateRandom() {
    const randomFunc = Math.floor(Math.random() * random.length)
    if(randomFunc == 0){
        console.log(message1())
    }else if(randomFunc == 1){
        console.log(message2())
    }else if(randomFunc == 2){
        console.log(message3())
    }else if(randomFunc == 3){
        console.log(message4())
    }else if(randomFunc == 4){
        console.log(message5())
    }
}

generateRandom()