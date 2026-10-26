const length = +prompt("Длина вашего пароля:")
const num = confirm("Хотите добавить цифры?")
const Specsymbol = confirm("Хотите добавить СПЕЦсимволы")
const allowedSymbols = []
let finishPassword = ""

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols   = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

lowercase.forEach(element =>
{
    allowedSymbols.push(element)
});
uppercase.forEach(element => 
{
    allowedSymbols.push(element)
});

if (num) 
{
    numbers.forEach(element =>
    {
        allowedSymbols.push(element)
    });
}

if (Specsymbol) 
{
    symbols.forEach(element => 
    {
        allowedSymbols.push(element)
    });
}

for(let i = 0; length > i; i++)
{
    const randomInt = getRandomInt(0, allowedSymbols.length - 1)
    finishPassword += allowedSymbols[randomInt]
}
alert(`Ваш пароль: ${finishPassword}`)
