const btn = document.getElementById("btn")
const validator = document.getElementById("validator")

btn.addEventListener('click', ()=>{
    const text = document.querySelector("input").value

    if(text.length < 8){
        validator.innerHTML = "Minimo 8 caracteres"
    }
    else if(!(text.match(/[A-Z]/))){
        validator.innerHTML = "Falta mayuscula"
    }
    else if(!(text.match(/[a-z]/))){
        validator.innerHTML = "Falta Minuscula"
    }
    else if(!(text.match(/[0-9]/))){
        validator.innerHTML = "Falta un numero"
    }
    else{
        validator.innerHTML = "Todo correcto"
    }

})