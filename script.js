script.js
function checkAnswers() {
  const a1 = document.getElementById("q1").value.toLowerCase();
  const a2 = document.getElementById("q2").value.toLowerCase();
  const a3 = document.getElementById("q3").value.toLowerCase();

  if (a1 === "bupsu" && a2 === "trust" && a3 === "love") {
    window.location.href = "story.html";
  } else {
    document.getElementById("error").innerText = "Hmm… try again 💭";
  }
}
function nextStory() {
  const textEl = document.getElementById("storyText");

  textEl.classList.remove("show");

  setTimeout(() => {
    index++;
    if (index < story.length) {
      textEl.innerText = story[index];
      textEl.classList.add("show");
    } else {
      window.location.href = "letter.html";
    }
  }, 200);
}
document.getElementById("storyText").classList.add("show");
