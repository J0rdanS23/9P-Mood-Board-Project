var dead = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrx8dLUKbDb0ZBIQBzpbu6YdAuhWcse1hDz7FilcLLjyyOUTy", "https://ih1.redbubble.net/image.400625153.5900/flat,550x550,075,f.u8.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdY_GZbpkbhDdf_KrSJDUJbgFcor9BXM7LP_vR_5zhlkovIdln"];
var depressed = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQ1L7ycXoZq9qQH7klOg8QFb4YCRtq0q9xCZ55wF6N3w3R5Bg", "https://familydoctor.org/wp-content/uploads/2012/04/30641310_l-705x470.jpg", "https://grist.files.wordpress.com/2017/04/lonely-person-sunset.jpg?w=1024&h=576&crop=1"];
var happy = ["https://alcalde.texasexes.org/wp-content/uploads/2012/11/happy-face_veer_3x4_0.jpg", "https://sayingimages.com/wp-content/uploads/why-are-frogs-be-happy-meme.jpg", "https://turnedtwenty.com/wp-content/uploads/2016/11/Instant-happiness.jpg"];
var satisfied = ["https://cacm.acm.org/system/assets/0001/2413/071113_EmpowerNetwork_Happywoman1.large.jpg?1476779466&1373552696", "https://i.kym-cdn.com/entries/icons/original/000/006/077/so_good.png", "https://i.imgflip.com/hufvm.jpg"];

function mood(color, pics, pics2, pics3) {
    $("body").css('background-color', color);
    $("body").css('color', 'white');
    $("#images").append("<img src=" + pics + ">");
    $("#images").append("<img src=" + pics2 + ">");
    $("#images").append("<img src=" + pics3 + ">");

}

$("button").click(function() {
    $("#images").html("");
    var emotion = $("#input").val();
    if (emotion === "happy") {
        mood("green", happy[0], happy[1], happy[2]);
    } else if (emotion === "depressed") {
        mood("blue", depressed[0], depressed[1], depressed[2]);
    } else if (emotion === "satisfied") {
        mood("yellow", satisfied[0], satisfied[1], satisfied[2]);
    } else if (emotion === "dead") {
        mood("black", dead[0], dead[1], dead[2]);
    } else {
        alert("Please submit one of the options.");
    }
});