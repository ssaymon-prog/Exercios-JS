function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if (num.value.length == 0) {
        alert("[ERRO] Digite um número")
    } else {
        let n = Number(num.value)
        let c = 1

        tab.innerHTML = ""

        while (c <= 10) {
            let item = document.createElement("option")
            item.innerText = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

// Executa a função ao apertar Enter no campo de texto
let num = document.getElementById('txtn')

num.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        tabuada()
    }
}
)