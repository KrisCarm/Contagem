function calcular() {
    var n1 = window.document.getElementById('tx1')
    var n2 = window.document.getElementById('tx2')
    var n3 = window.document.getElementById('tx3')
    var res = window.document.getElementById('res')
    

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
    window.alert('Erro de dados');
} else  {
    res.innerHTML ='Contando... <br>'
    let i = Number(n1.value)
    let f = Number(n2.value)
    let p = Number(n3.value)

    if (i < f) {
    for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F62E}`;
    }
} else {
    for(let c = i; c >=f; c -= p) {
        res.innerHTML += `${c} \u{1F62E}`;

    }
}
    
}
}