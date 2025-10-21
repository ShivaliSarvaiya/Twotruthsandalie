function trivia1() {

let trivia1Answer=document.getElementById("trivia1-answer");
    let skiingSelected = document.getElementById("skiing").checked;
    let glassesSelected = document.getElementById("glasses").checked;
    let siblingsSelected = document.getElementById("siblings").checked;

    if (glassesSelected) {
        trivia1Answer.innerHTML =  "you are wrong. This is true.";
    }
    else if (siblingsSelected) {
        trivia1Answer.innerHTML =  "you are wrong. This is true.";
    } else if (skiingSelected) {
        trivia1Answer.innerHTML="You are correct!! That is the Lie!";
    }
}