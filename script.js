const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkInputExist = () =>{
  return input.value ? true : alert("Please input a value");
};

const modifyInput = () => {
  const regex = /[^A-Z0-9]/ig;
  return input.value.replace(regex, "").toLowerCase();
}

const isPaLindrome = (input) => {
  if ((input.length == 1) || (input === input.split("").reverse().join(""))) {
  return true;
  }
  return false;
}


const checkPalindrome = (e) => {
  e.preventDefault();
  if (checkInputExist()) {
  const modifiedInput = modifyInput();
  console.log("modifiedInput:" + modifiedInput);
 result.textContent = isPaLindrome(modifiedInput) ? `${input.value} is a palindrome`: `${input.value} is not a palindrome`;
 };
};

button.addEventListener("click",checkPalindrome);