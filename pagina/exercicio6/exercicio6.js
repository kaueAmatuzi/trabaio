//Aqui é a funçpão para validar a senha
function validatePassword() {
    // Aqui obtém a senha digitada pelo usuario
    var password = document.getElementById("password").value;
    // Aqui obtem a referência ao elemento onde a mensagem será exibida
    var message = document.getElementById("message");
  
    // Verifica se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
      // Se a senha for muito curta, exibe uma mensagem de erro
      message.textContent = "Tem que ter pelo menos 8 caracteres seu desviado!";
      return; // Encerra a função aqui
    }
  
    // Verifica se a senha contém letras maiúsculas
    if (!/[A-Z]/.test(password)) {
      // Se não houver letras maiúsculas, exibe uma mensagem de erro
      message.textContent = "Sua anta, tem que ter pelo menos uma letra maiúscula!";
      return; // Encerra a função aqui
    }
  
    // Verifica se a senha contém letras minúsculas
    if (!/[a-z]/.test(password)) {
      // Se não houver letras minúsculas, exibe uma mensagem de erro
      message.textContent = "O lerdão, tem que ter uma letra minúscula";
      return; // Encerra a função aqui
    }
  
    // Verifica se a senha contém números
    if (!/\d/.test(password)) {
      // Se não houver números, exibe uma mensagem de erro
      message.textContent = "O abençoado tem que ter pelo menos um número!";
      return; // Encerra a função aqui
    }
  
    // Verifica se a senha contém caracteres especiais
    if (!/[^A-Za-z0-9]/.test(password)) {
      // Se não houver caracteres especiais, exibe uma mensagem de erro
      message.textContent = "Tem que desenhar pra você ? Tem que ter pelo menos um caractere especial como: &!%@$%!#";
      return; // Encerra a função aqui
    }
  
    // Se a senha passar por todas as verificações, exibe uma mensagem de senha válida
    message.textContent = "FINALMENTE EM ZÉ MANÉ!! QUER UM ABRAÇO AGORA ? QUER UM PIX ? DIFICULDADE PRA FAZER UMA SENHA! QUASE VOMITEI AQUI!";
  }
  