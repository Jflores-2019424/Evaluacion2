const btn = document.getElementById("btn")
const res = document.getElementById("res")

btn.addEventListener("click", ()=>{
    const text = document.querySelector("input").value
    const num = text.length
    res.innerHTML = num
})