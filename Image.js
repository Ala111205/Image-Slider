const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");

let currentIndex=0;

function showslide(index){
    slides.forEach(slide=>slide.classList.remove("active"))
    slides[index].classList.add("active");

    document.body.style.backgroundImage=`url('${slides[index].src}')`
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

function nextslide(){
    currentIndex=(currentIndex+1)%slides.length;
    showslide(currentIndex);
}

function prevslide(){
    currentIndex=(currentIndex-1+slides.length)%slides.length;
    showslide(currentIndex);
}

nextBtn.addEventListener("click", nextslide);
prevBtn.addEventListener("click", prevslide);

setInterval(nextslide,3000);

showslide(currentIndex);