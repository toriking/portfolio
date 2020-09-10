const triggeri = document.getElementsByClassName("bable-item");
const triggers = Array.from(triggeri);
triggers.forEach(function(target) {
    target.addEventListener('click', () => {
        target.style.display = 'none';
        audio = new Audio;
        audio.src = "static/images/bubble-burst.mp3";
        audio.play();
        setTimeout(()=>{
            target.style.display = 'block';
            },5000);
            },false);
            });