var slideIndex = [1, 1];
var slideId = ["events-div", "schedule-slides"];
showDivs(1, 0);
showDivs(1, 1);

//jQuery
$(".schedule-rows").click(function () {
    //gets index of row you clicked, then calls current div (this avoids hardcoding)
    var eventsIndex = $(".schedule-rows").index(this);
    currentDiv(eventsIndex + 1, 0);
});

//n is the index within each slide deck, no is the index that selects which slide deck
function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
}
function currentDiv(n, no) {
    showDivs(slideIndex[no] = n, no);
}
function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}