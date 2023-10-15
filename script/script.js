document.querySelector('header').style.backgroundColor = "transparent"

window.addEventListener('scroll', function(scrollEvent) {
    let scroll = this.scrollY;
    if (scroll > 20) {
        this.document.querySelector('header').style.backgroundColor = "#FFFFFF";
    } else {
        this.document.querySelector('header').style.backgroundColor = "transparent";
    }
});


let slider = document.getElementById('slider');
slider.addEventListener('change', sliderEvent);
function sliderEvent() {
    document.getElementById('maxpriceresult').innerText = slider.value;
}