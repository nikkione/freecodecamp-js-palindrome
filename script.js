const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
if (!input.value) {
    alert("Please input a value");
    return;
}

const regex = /[^A-Z0-9]/ig;
const modifiedInput = input.value.replace(regex, "").toLowerCase();

result.textContent = modifiedInput === modifiedInput.split("").reverse().join("") ? 
`${input.value} is a palindrome`:
`${input.value} is not a palindrome`;
result.style.display = "block";
    
};

button.addEventListener("click",checkPalindrome);