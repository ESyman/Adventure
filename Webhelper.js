var buttonElement = document.getElementById("button1");

window.onload = start;

function story(text) {
    var currentStoryElement = document.getElementById("currentStory");
    currentStoryElement.innerHTML = text;
}

function setOptions(options) {
    var dropdown = document.getElementById("choices");
    while (dropdown.options.length) {
        dropdown.remove(0);
    }
    for (var i = 0; i < options.length; i++) {
        var option = new Option(options[i], options[i]);
        dropdown.options.add(option);
    }
}

function delayText(text, delay) {
    var currentStoryElement = document.getElementById("currentStory");
    var index = 0;
    story("");
    var callback = function (text) {

        story(currentStoryElement.innerHTML  + text[index]+ "<br />"+ "<br />");
        index += 1;
        if (index >text.length-1){
            clearInterval(timer);
        }
    }
    var timer = setInterval(function () {
        callback(text);
    }, delay);
}
