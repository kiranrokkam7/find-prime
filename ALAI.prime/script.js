function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function checkPrime() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number)) {
        resultElement.textContent = "Please enter a valid number.";
        resultElement.className = "error";
        return;
    }

    if (isPrime(number)) {
        resultElement.textContent = `${number} is a prime number.`;
        resultElement.className = "success";
    } else {
        resultElement.textContent = `${number} is not a prime number.`;
        resultElement.className = "error";
    }
}

function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('themeButton');

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        themeButton.textContent = "Switch to Light Theme";
    } else {
        themeButton.textContent = "Switch to Dark Theme";
    }
}
