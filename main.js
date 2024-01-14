document.getElementById("btn").addEventListener("click", function () {
    setInterval(function () {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    },1000);
    var randomColors = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColors;
});
