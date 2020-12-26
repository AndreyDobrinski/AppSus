export const util = {
    makeid,
    getRandomColor
}

function makeid() {
    var length = 6
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function getRandomColor(num) {
    // var colors = ['#476b7e', '#8cc1f5', '#c97595', '#cfc37c', '#68c2ab', '#77a6cc', '#7c93cf', '#d3817b']
    var colors = ['#cfc37c', '#da7b95', '#68c2ab', '#77a6cc']
    // var id = getRandomIntInclusive(0, 3)
    return colors[num]
}


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}