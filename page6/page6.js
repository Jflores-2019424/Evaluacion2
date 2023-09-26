const btn = document.getElementById("btn")
const result = document.getElementById("res")

btn.addEventListener('click', ()=>{
    const date1 = new Date(document.getElementById("date1").value)
    const date2 = new Date(document.getElementById("date2").value)



    const res = Math.floor((date2 - date1) / (1000*60*60*24))

    result.innerHTML = res
})