const textH = document.getElementById("text")
const btnH = document.getElementById("btn")
const resH = document.getElementById("res")

btnH.addEventListener("click", ()=>{
    const value = document.querySelector("input").value
    const valueI = value.toLocaleLowerCase()
    const splValue = valueI.split("")
    const invValue = splValue.reverse()
    const res = invValue.join("")
    if(res == valueI){
        return resH.innerHTML = "true"
    }else{
        return resH.innerHTML = "false"
    }
})