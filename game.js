//STATUS: we are able to make the buttons blink on every reload, but audio is not playing accordingly, just once for the case "wrong"

//step 1
// $("h1").css("color","black");

//step 2
var buttonColours=["red","blue","green","yellow"]
var gamePattern=[];
var userClickedPattern=[];



$(".btn").click(function(){
    // console.log("hello")
    // console.log($(this).attr("id"));
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern)

    var audio = new Audio("sounds/"+userChosenColour+".mp3");
    audio.play();
})

function nextSequence(){
    var num = Math.floor(Math.random()*4);
    var randomColourChosen = buttonColours[num]

    console.log(randomColourChosen);

    gamePattern.push(randomColourChosen)

    //step 3
    //flash a random button
    $("#"+randomColourChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    //play a sound
    //Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/"+randomColourChosen+".mp3");
    audio.play();

    //step 4: 

}

// console.log(gamePattern);

// NOT WORKING ---> $("#randomColourChosen").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// NOT WORKING ---> $("*").keypress(setTimeout(nextSequence(),1000))

// TRIAL ----> $("h1").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// TRIAL ----> $(document).keypress(function (event) {
//     alert('You pressed a key');
// });




//https://stackoverflow.com/questions/3239598/how-can-i-get-the-id-of-an-element-using-jquery