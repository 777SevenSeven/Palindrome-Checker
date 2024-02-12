const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
    let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedStr = formattedStr.split("").reverse().join("");
    const paragraph = document.createElement("p");

    if (formattedStr === reversedStr) {
        paragraph.innerText = `${str} is a palindrome`;
    } else {
        paragraph.innerText = `${str} is not a palindrome`;
    }

    result.innerHTML = ""; // Limpará o conteúdo anterior
    result.appendChild(paragraph);
}

function checkBtn(event) {
    event.preventDefault();
    const str = textInput.value.trim(); // irá remover espaços em branco extras

    if (!str) {
        alert("Please input a value");
        return; // Sairá da função se o valor estiver vazio
    }

    isPalindrome(str);

    // Atualizará o texto do input após 3 segundos
    setTimeout(() => {
        textInput.value = "";
    }, 3000);
}

checkButton.addEventListener("click", checkBtn);
