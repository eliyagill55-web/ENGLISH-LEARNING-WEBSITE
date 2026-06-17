function checkAnswer() {

    let correct =
        document.getElementById("correct");

    let result =
        document.getElementById("result");

    if(correct.checked){

        result.innerHTML =
            "✅ Correct Answer! Great Job.";

        result.style.color =
            "#00ff88";

    }
    else{

        result.innerHTML =
            "❌ Wrong Answer. Try Again.";

        result.style.color =
            "red";
    }
}