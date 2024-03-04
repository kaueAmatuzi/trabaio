// Função para contar o número de palavras
function contarPalavras() {
    // Obtém o texto inserido pelo usuário
    var texto = document.getElementById('inputText').value;
  
    // Remove espaços em branco extras do início e do fim do texto e divide em palavras
    var palavras = texto.trim().split(/\s+/);
  
    // Inicializa o número de palavras
    var numeroPalavras = palavras.length;
  
    // Verifica se o texto está vazio
    if (palavras.length === 1 && palavras[0] === '') {
      numeroPalavras = 0; // Se o texto estiver vazio, define o número de palavras como 0
    }
  
    // Exibe o número de palavras na página
    document.getElementById('wordCount').textContent = 'Número de palavras: ' + numeroPalavras;
  }
  