gsap.registerPlugin(ScrollTrigger);
const def_start = "top center";
const def_end = "bottom center";




function createSplitScreenAnimation(textCard, codeCard, text_y, code_y) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: textCard,
            start: def_start,
            end: def_end,
            scrub: true,

        },
    });

    tl.to(textCard, {yPercent: text_y}, 0)
        .to(codeCard, {yPercent: code_y}, 0);

    ScrollTrigger.create({
        trigger: textCard,
        start: def_start,
        endTrigger: textCard,
        end: def_end,
        pin: codeCard,
    });
}

// Sectiononkent letre kell hozni
createSplitScreenAnimation("#textcard1", "#codeCard1", -15, -50);
createSplitScreenAnimation("#textcard2", "#codeCard2", -15, -57);
createSplitScreenAnimation("#textcard3", "#codeCard3", -25, -41.85);
