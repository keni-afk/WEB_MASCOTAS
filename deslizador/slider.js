const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
    slider.style.transition ="none";
    slider.insertAdjacentElement('beforeend',sliderSectionFirst);
    slider.style.marginLeft ="-100%";
    }, 500); 
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft ="0";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
    slider.style.transition ="none";
    slider.insertAdjacentElement('afterbegin',sliderSectionLast);
    slider.style.marginLeft ="-100%";
    }, 500); 
}

//btnRight.addEventListener('click' , function(){
 //   Next();
//});

//btnLeft.addEventListener('click' , function(){
  //  Prev();
//});

setInterval(function(){
    Next();
}, 3000);

const container = document.querySelectorAll(".container .card")

        container.forEach(el => {
            el.addEventListener("mousemove",(e)=> {
                let xAxis = (window.innerWidth/2-e.pageX)/15
                let yAxis = (window.innerHeight/2-e.pageY)/15
                el.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
            })
        })
        //in
        container.forEach(el => {
            el.addEventListener('mouseenter',(e)=>{
                el.style.transition =`all 0.5s ease`
                el.style.animation =`animacion 1.5s forwards`
                el.querySelector(".title").style.transform ="translateZ(150px)"
            })
        })
        //out
        container.forEach(el => {
            el.addEventListener('mouseleave',(e)=>{
                el.style.transition =`all 1.5s ease`
                el.style.animation =`none`
                el.style.transform =`rotateY(0deg) rotateX(0deg)`
                el.querySelector(".title").style.transform ="translateZ(0px)"
            })
        })

        function musicaTends(){
            var $musica= 10;
            
            if ($musica>5) {
                            $musica= "«««Rauw Alejandro»»»   "+ "    ===>Todo de Ti<===";
            }
            else{
                            $musica= "No tenemos tendencias nuevas de momento";
            }
        document.getElementById("convert").innerHTML =$musica;
}     