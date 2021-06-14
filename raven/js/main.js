const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".body-section .container",
        start: "center bottom"
    }
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services-section",
        start: "center bottom"
    }
});

gsap.from('.header-container',1,{
    opacity:0
});
gsap.from('.anim-hero',1,{
    y:50,
    stagger:0.6,
    delay:0.5
});

tl.from('.body-text',1,{x:200, opacity:0});

tl2.from('.one',1,{x:200,opacity:0})
.from('.two',1,{x:200,opacity:0},'-=1')
.from('.three',1,{x:200,opacity:0},'-=1')
.from('.four',1,{x:200,opacity:0},'-=1')

