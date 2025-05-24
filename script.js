const textarea = document.getElementById("textarea");

const characters = document.querySelector(".characters .count");
const words = document.querySelector(".words .count");
const sentences = document.querySelector(".sentences .count");

textarea.addEventListener("input", function () {
  const text = textarea.value.trim();

  // عدد الأحرف
  characters.textContent = textarea.value.length;

  // عدد الكلمات
  const wordsArray = text.split(/\s+/).filter(Boolean);
  words.textContent = wordsArray.length;

  // عدد الجمل
  const sentencesArray = text.split(/[.!?]+/).filter(function (sentence) {
    return sentence.trim().length > 0;
  });
  sentences.textContent = sentencesArray.length;
});


    