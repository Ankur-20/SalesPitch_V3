window.addEventListener('scroll', function() {
    var header = document.querySelector('.fl-header');
    if (window.scrollY > 0) {
        header.classList.add('fl-scroll');
    } else {
        header.classList.remove('fl-scroll');
    }
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)




window.addEventListener('scroll', function() {
    var leftColumn = document.querySelector('.practice-column-left');
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        leftColumn.style.position = 'sticky';
        leftColumn.style.top = '100px';
    } else {
        leftColumn.style.position = 'static';
        leftColumn.style.top = 'initial';
    }
})


function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        var imgElement = elem.querySelector("img");

        if (imgElement) {
            elem.addEventListener("mouseenter", function () {
                gsap.to(imgElement, {
                    opacity: 1,
                    scale: 1
                });
            });

            elem.addEventListener("mouseleave", function () {
                gsap.to(imgElement, {
                    opacity: 0,
                    scale: 0
                });
            });

            elem.addEventListener("mousemove", function (dets) {
                gsap.to(imgElement, {
                    x: dets.x - elem.getBoundingClientRect().x - imgElement.width / 2,
                    y: dets.y - elem.getBoundingClientRect().y - imgElement.height / 2 - 50
                });
            });
        } else {
            console.warn('No img element found in:', elem);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    page2Animation();
});



var tl = gsap.timeline({scrollTrigger:{
    trigger:"#book",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to(".fl-center",{
   height: "100vh",
},'a')
.to(".fl-top",{
    top: "-50%",
 },'a')
 .to(".fl-bottom",{
    bottom: "-50%",
 },'a')
.to(".fl-top-h1",{
    top: "60%"
 },'a')
 .to(".fl-bottom-h1",{
    bottom: "-30%"
 },'a')
.to(".content",{
   delay: -0.2,
   marginTop: "0%"
})