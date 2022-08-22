function palindrome() {
  let word = prompt("Enter a word: ").toLowerCase();
  sonuc =
    word == word.split("").reverse().join("")
      ? `${word} is palindrome`
      : `${word} is not palindrome`;
  return sonuc;
}

palindrome();

console.log(sonuc);
