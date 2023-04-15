let stars = document.querySelector("#stars"),
    moon = document.querySelector("#moon"),
    nouvil = document.querySelector(".nouvil"),
    mountains3 = document.querySelector("#mountains3"),
    mountains4 = document.querySelector("#mountains4"),
    river = document.querySelector("#river"),
    boot = document.querySelector("#boot");



window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value *4 + "px";
    mountains3.style.top = value *2+ "px";
    mountains4.style.top = value *1.5 + "px";
    river.style.top = value + "px";
    boot.style.top = value + "px";
    boot.style.left = value * 3 + "px";
    nouvil.style.fontSize = value + "px";
    if (scrollY >= 67) {
        nouvil.style.fontSize = `${67}px`;
        nouvil.style.position = "fixed";
        if (scrollY >= 478) {
            nouvil.style.display = "none";
        } else {
            nouvil.style.display = "block";
        }

        if (scrollY >= 127) {
            document.querySelector(".main").style.background = 'linear-gradient(#376281,#100015)';
        } else {
            document.querySelector(".main").style.background = 'linear-gradient(#200016,#10001f )';
            
        }
    }

}



