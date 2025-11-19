// Atualização automática do ano

// A linha abaixo caputra a tag <span> e armazena o "conteúdo" na variável ano
let ano = document.getElementById("copyrightYear")

// A linha abaixo obtém o ano do servidor e armazena na variavel anoAtual
let anoAtual = new Date().getFullYear()

// A linha abaixo insere o conteúdo da variável anoAtual em ano (Variável relacionada a tag <span>)
ano.textContent = anoAtual

// Recolher Menu na Rolagem

//Capturar o evento de Rolagem diretamente no JS
window.addEventListener('scroll', function () {
    // A linha abaixo Captura a tag <imput type = "checkbox"> indentificada como 'check' e armazena na variável como menuCheck
    let menuCheck = this.document.getElementById('check')
    // Se a caixa imput check estiver marcada, desmarcar
    menuCheck.checked = false
})