function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function checkPrime() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    const number = parseInt(numberInput);
  
    if (isNaN(number)) {
      resultElement.textContent = 'Por favor, insira um número válido.';
    } else {
      const isNumberPrime = isPrime(number);
      if (isNumberPrime) {
        resultElement.textContent = `${number} é um número primo.`;
      } else {
        resultElement.textContent = `${number} não é um número primo.`;
      }
    }
  }
  