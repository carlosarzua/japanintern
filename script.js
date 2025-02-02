// Function to toggle the visibility of the answer box
function toggleAnswer(questionId) {
    var answerBox = document.getElementById(questionId);
    if (answerBox.style.display === "none" || answerBox.style.display === "") {
        answerBox.style.display = "block";
    } else {
        answerBox.style.display = "none";
    }
}
