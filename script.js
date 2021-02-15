


document.getElementById('btn-click').addEventListener('click', () => {
    document.getElementById('audio-click').play()
})


var body = gsap.timeline({repeat: -1});
body.to("#body", 1, {rotate: 12, transformOrigin: "center", ease: "Elastic.easeOut(1, .75)"});
body.to("#body", 2, {delay: -1, y: -12, ease: "Elastic.easeOut(1, .15)"});
body.to("#body", 2, {delay: -1, y: 0, rotate: -12, x: -20, transformOrigin: "center", ease: "Elastic.easeOut(1, .30)"});
body.to("#body", 1, {delay: -1, rotate: 12, x: 0, y: -30, transformOrigin: "center", ease: Power3.easeOut});
body.to("#body", 1, {delay: -.5, rotate: 0, x: 0, y: 0, transformOrigin: "center", ease: "Elastic.easeOut(1, .30)"});

var legs = gsap.timeline({repeat: -1});
legs.to("#leg-r", 1, {rotate: 15, transformOrigin: "top", ease: "Elastic.easeOut(1, .50)"});
legs.to("#leg-l", 1, {rotate: -15, transformOrigin: "top", ease: "Elastic.easeOut(1, .50)"});
legs.to("#leg-l", .5, {rotate: -35, y: -20, transformOrigin: "top", ease: Power3.easeOut});
legs.to("#leg-r", .5, {delay: -.5, rotate: -25, y: -20, transformOrigin: "top", ease: Power3.easeOut});
legs.to("#leg-l, #leg-r", .5, {rotate: 0, y: 0, transformOrigin: "top", ease: "Elastic.easeOut(1, .90)"});
legs.to({}, .5, {});

var face = gsap.timeline({repeat: -1});
face.to("#face", .15, {y: -4, ease: Power1.easeInOut});
face.to("#face", .15, {y: 4, ease: Power1.easeInOut});
face.to("#face", .15, {y: -3, ease: Power1.easeInOut});
face.to("#face", .15, {y: 3, ease: Power1.easeInOut});
face.to("#face", .15, {y: -1, ease: Power1.easeInOut});
face.to("#face", .15, {y: 1, ease: Power1.easeInOut});
face.to("#face", .15, {y: 0, ease: Power1.easeInOut});
face.to("#face", .15, {y: -4, ease: Power1.easeInOut});
face.to("#face", .15, {y: 4, ease: Power1.easeInOut});
face.to("#face", .15, {y: -3, ease: Power1.easeInOut});
face.to("#face", .15, {y: 3, ease: Power1.easeInOut});
face.to("#face", .15, {y: -1, ease: Power1.easeInOut});
face.to("#face", .15, {y: 1, ease: Power1.easeInOut});
face.to("#face", .5, {y: -18, x: 3, ease: Power1.easeInOut});
face.to("#face", .5, {y: 0, x: 0, ease: Bounce.easeOut});
face.to({}, .55, {});

var laugh = gsap.timeline({repeat: -1});
laugh.to("#mouth, #teeth, #tongue", .15, {y: -2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: -2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: -1, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 1, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 0, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: -2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: -2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 2, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: -1, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 1, ease: Power3.easeInOut});
laugh.to("#mouth, #teeth, #tongue", .15, {y: 0, ease: Power3.easeInOut});
laugh.to({}, 1.4,{});

var mouth = gsap.timeline({repeat: -1});
mouth.to({}, 1, {});
mouth.to("#mouth", .25, {scale: .85, transformOrigin: "left", ease: Power3.easeInOut});
mouth.to("#tongue", .5, {delay: -.25, scale: .85, transformOrigin: "left", ease: Power3.easeInOut});
mouth.to("#mouth", 1, {delay: 1, scale: 1, ease: "Elastic.easeOut(1, .35)"});
mouth.to("#tongue", 1, {delay: -1, scale: 1, transformOrigin: "left", ease: "Elastic.easeOut(1, .35)"});

gsap.set("#ketchup-sauce", {scale: 0, opacity: 0});

$("#ketchup").click(function(){
    face.restart();
    face.pause();
    mouth.restart();
    mouth.pause();
    laugh.restart();
    laugh.pause();
    body.restart();
    body.pause();
    legs.restart();
    legs.pause();

    gsap.to("#body", .25, {y: 120, ease: Bounce.easeOut});

    gsap.to("#body-base", .15, {morphSVG: {
            shape: "#dead-body-base",
            ease: Power3.easeIn
        }});
    gsap.to("#body-shadow", .15, {morphSVG: {
            shape: "#dead-body-shadow",
            ease: Power3.easeIn
        }});
    gsap.to("#body-light-2", .15, {morphSVG: {
            shape: "#dead-body-light",
            ease: Power3.easeIn
        }});
    gsap.to("#body-light-3", .15, {morphSVG: {
            shape: "#dead-body-light-2",
            ease: Power3.easeIn
        }});
    gsap.to("#body-light-4", .15, {morphSVG: {
            shape: "#dead-body-light-3",
            ease: Power3.easeIn
        }});
    gsap.to("#label-wrapper-l", .15, {morphSVG: {
            shape: "#dead-label-wrapper-l",
            ease: Power3.easeIn
        }});
    gsap.to("#label-wrapper-r", .15, {morphSVG: {
            shape: "#dead-label-wrapper-r",
            ease: Power3.easeIn
        }});
    gsap.to("#k-label", .15, {morphSVG: {
            shape: "#k-label-dead",
            ease: Power3.easeIn
        }});
    gsap.to("#e-label", .15, {morphSVG: {
            shape: "#e-label-dead",
            ease: Power3.easeIn
        }});
    gsap.to("#t-label", .15, {morphSVG: {
            shape: "#t-label-dead",
            ease: Power3.easeIn
        }});
    gsap.to("#c-label", .15, {morphSVG: {
            shape: "#c-label-dead",
            ease: Power3.easeIn
        }});
    gsap.to("#h-label", .15, {morphSVG: {
            shape: "#h-label-dead",
            ease: Power3.easeIn
        }});
    gsap.to("#u-label", .15, {morphSVG: {
            shape: "#u-label-dead",
            ease: Power3.easeIn
        }});
    gsap.to("#p-label", .15, {morphSVG: {
            shape: "#p-label-dead",
            ease: Power3.easeIn
        }});

    gsap.to("#eye-l", .15, {morphSVG: {
            shape: "#dead-eye-l",
            ease: Power3.easeIn
        }});
    gsap.to("#eye-r", .15, {morphSVG: {
            shape: "#dead-eye-r",
            ease: Power3.easeIn
        }});

    gsap.to("#dead-slobber-l, #dead-slobber-r", 0, {y: 120});
    gsap.to("#dead-slobber-l, #dead-slobber-r", .5, {delay: .25, scale: 1, opacity: 1, transformOrigin: "center", ease: Power1.easeOut});
    gsap.to("#teeth, #legs", 0, {opacity: 0});
    gsap.to(".mouth", 1, {morphSVG: {
            shape: "#dead-mouth",
            ease: Power3.easeIn
        }});
    gsap.to(".tongue", .15, {morphSVG: {
            shape: "#dead-tongue",
            ease: Power3.easeIn
        }});

    gsap.to("#ketchup-sauce", .3, {opacity: 1, scale: 1, y: 30, transformOrigin: "bottom"});
    gsap.to("#ketchup-sauce", .3, {delay: .5, opacity: 0, transformOrigin: "bottom"});

    gsap.to("#transition", 1, {opacity: 1, y: 250, ease: Elastic.easeOut});
    gsap.to("#transition", 1, {delay: 0.5, y: 1500, ease: Power3.easeInOut});

    $(this).css({"pointer-events": "none"});

    setTimeout(function(){
        gsap.to("#transition", 1, {opacity: 0});
        gsap.to("#transition", 0, {delay: 1, y: 0});

        gsap.to("#body", 0, {y: 0, ease: Bounce.easeOut});

        gsap.to("#body-base", 0, {morphSVG: {
                shape: "#body-base"
            }});
        gsap.to("#body-shadow", 0, {morphSVG: {
                shape: "#body-shadow"
            }});
        gsap.to("#body-light-2", 0, {morphSVG: {
                shape: "#body-light-2"
            }});
        gsap.to("#body-light-3", 0, {morphSVG: {
                shape: "#body-light-3"
            }});
        gsap.to("#body-light-4", 0, {morphSVG: {
                shape: "#body-light-4"
            }});
        gsap.to("#label-wrapper-l", 0, {morphSVG: {
                shape: "#label-wrapper-l"
            }});
        gsap.to("#label-wrapper-r", 0, {morphSVG: {
                shape: "#label-wrapper-r"
            }});
        gsap.to("#k-label", 0, {morphSVG: {
                shape: "#k-label"
            }});
        gsap.to("#e-label", 0, {morphSVG: {
                shape: "#e-label"
            }});
        gsap.to("#t-label", 0, {morphSVG: {
                shape: "#t-label"
            }});
        gsap.to("#c-label", 0, {morphSVG: {
                shape: "#c-label",
                ease: Power3.easeIn
            }});
        gsap.to("#h-label", 0, {morphSVG: {
                shape: "#h-label",
                ease: Power3.easeIn
            }});
        gsap.to("#u-label", 0, {morphSVG: {
                shape: "#u-label",
                ease: Power3.easeIn
            }});
        gsap.to("#p-label", 0, {morphSVG: {
                shape: "#p-label",
                ease: Power3.easeIn
            }});

        gsap.to("#eye-l", 0, {morphSVG: {
                shape: "#eye-l",
                ease: Power3.easeIn
            }});
        gsap.to("#eye-r", 0, {morphSVG: {
                shape: "#eye-r",
                ease: Power3.easeIn
            }});

        gsap.to("#dead-slobber-l, #dead-slobber-r", 0, {scale: 0, opacity: 0});
        gsap.to("#teeth, #legs", 0, {opacity: 1});
        gsap.to(".mouth", 0, {morphSVG: {
                shape: ".mouth"
            }});
        gsap.to(".tongue", 0, {morphSVG: {
                shape: ".tongue"
            }});
        face.play();
        mouth.play();
        laugh.play();
        body.play();
        legs.play();
        }, 3000);

    setTimeout(function(){
        $("#ketchup").css({"pointer-events": "all"});
    }, 4000);
});