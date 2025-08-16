let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let tagline = document.querySelector(".tagline")

function scrollOnePageDown() {
    window.scrollBy({
      top: window.innerHeight,  // screen ki poori height ke barabar
      behavior: 'smooth'        // smooth (meethe) effect ke saath
    });
}

function customCursor(){
    main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out(1.7)",
    })
})

tagline.addEventListener("mouseenter", function(){
    cursor.innerHTML = "Grow"
    gsap.to(cursor,{
        scale: 2,
    })
})

tagline.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
    })
})
}

function designCard(){
    gsap.from(".page4 .desinger-box",{
    opacity:0,
    y: 40,
    duration: 1,
    scrollTrigger:{
        trigger: ".page4 .desinger-box",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})

gsap.to(".page4 .desinger-box-1",{
    y: -40,
    duration: 2,
    scrollTrigger:{
        trigger: ".page4 .desinger-box-1",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})

gsap.from(".page4 .desinger-box-2",{
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger:{
        trigger: ".page4 .desinger-box-2",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})

gsap.from(".page4 .desinger-box-3",{
    y: 30,
    duration: 2,
    scrollTrigger:{
        trigger: ".page4 .desinger-box-3",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})

gsap.from(".page4 .designer-text span",{
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: ".page4 .designer-text span",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})

gsap.from(".page4 .social-media-contaienr",{
    y: 40,
    duration: 2,
    scrollTrigger:{
        trigger: ".page4 .social-media-contaienr",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})

gsap.from(".page4 .anime-girl img",{
    y: 100,
    duration: 2,
    ease: "power1.out",
    scrollTrigger:{
        trigger: ".page4 .anime-girl img",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})


gsap.from(".page4 .anime-girl h1",{
    opacity: 0,
    y: 20,
    duration: 2,
    ease: "power1.out",
    scrollTrigger:{
        trigger: ".page4 .anime-girl h1",
        scroller: "body",
        start: "top 50%",
        end:"bottom 30%",
        scrub: 2,
    }
})

}



designCard();
customCursor();