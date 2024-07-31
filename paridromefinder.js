const finderBtn = document.getElementById("finder");
const outPutPal = document.getElementById("listPar");
const reseting = document.getElementById("reset");
const output = document.querySelector(".listpar");
function isPalindrome(word) {
  let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  let length = cleanedWord.length;

  for (let i = 0; i < length / 2; i++) {
    if (cleanedWord[i] !== cleanedWord[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findPalindromes(sentence, minLength, maxLength) {
  let words = sentence.split(/\W+/);

  return words.filter((word) => {
    let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let wordLength = cleanedWord.length;
    let minCondition = minLength ? wordLength >= minLength : true;
    let maxCondition = maxLength ? wordLength <= maxLength : true;
    return isPalindrome(cleanedWord) && minCondition && maxCondition;
  });
}

finderBtn.addEventListener("click", function () {
  let str = document.getElementById("palindrome").value;
  let minLength = 10;
  let maxLength = 10;
  const minm = document.getElementById("min").value
    ? parseInt(document.getElementById("min").value, minLength)
    : null;
  const maxm = document.getElementById("max").value
    ? parseInt(document.getElementById("max").value, maxLength)
    : null;

  let palindromes = findPalindromes(str, minm, maxm);

  let resultDiv = document.getElementById("message");
  let count = 0;
  for (let i = 0; i < palindromes.length; i++) {
    if (i !== 0) {
      let li = document.createElement("li");
      li.innerHTML = "";
      li.textContent = palindromes[i];
      output.appendChild(li);
      if (i % 2 !== 0) {
        li.style.color = "#0b505b";
      }

      count = count + 1;
    }
  }
  if (count === 0) {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = `please inter the phrase on the input box👎`;
  } else {
    resultDiv.innerHTML = ` ${count} The total of Palindrome(s) found.`;
    resultDiv.style.color = "#0b505b";
  }
});

reseting.addEventListener("click", function () {
  location.reload();
});
