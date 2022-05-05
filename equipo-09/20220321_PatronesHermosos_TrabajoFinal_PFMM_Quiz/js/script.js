let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;


let questions = quiz.sort(function(){
    return 0.5 - Math.random();
});

let totalQuestion = questions.lenght;

$ (function(){
        // timer code starts from here

        let totalTime = 200; // 200 seconds for timer
        let min = 0;
        let sec = 0;
        let counter = 0;

        let timer = setInterval(function(){
            counter++;
            min = Math.floor((totalTime - counter) / 60); //calculating time
            sec = totalTime - (min * 60) - counter;

            $(".timerBox span") .text(min + ":" + sec);

            if(counter == totalTime) {
                alert("El tiempo se ha agotado. Selecciona OK para mostrar resultado");
                result();
                clearInterval (timer);
            }
        }, 1000); // timer set for 1 seconds interval
    // timer code ends here

    // print Question
    printQuestion(index);
});

// Function to print question starts
 function printQuestion(i) {
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}
// Function to print question ends

// Function to check answer starts

function checkAnswer (option) {
attempt++;

let optionClicked = $(option).data("opt");

// console.log(questions[index]);

if(optionClicked == questions[index].answer){
    $(option).addClass("right");
    score++;
}
else{
    $(option).addClass("wrong");
    wrong++;
}

$(".scoreBox span").text(score);

$(".optionBox span").attr("onclick","");
}

// Function to check answer ends


// Function for the next question starts

function showNext(){

if(index >= (questions.lenght - 1) ){
    showResult(0);
    return;
}

index++;

$(".optionBox span").removeClass();

$(".optionBox span").attr("onclick","checkAnswer(this)");

printQuestion(index);
}

// Function for the next question ends

// Function for result starts

function showResult(j){
    if(
        j == 1 &&
        index < questions.lenght - 1 &&
        !confirm(
            "El Quiz no ha concluido todavía. Selecciona OK para saltar Quiz y obtener tu resultado final."
            )
    ) {
        return; 
    }
    result();
}

// Function for result ends

// Result function starts
function result (){
    $("#questionScreen").hide();
    $("#resultScreen").show();
    
    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);

}

// Result function ends