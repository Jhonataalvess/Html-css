function menuburger() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}

function MudouTamanho() {
    if (window.innerWidth >= 581) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}