gsap.registerPlugin(ScrollTrigger);
const default_start = "top center"
const default_end = "bottom center"



function createSplitScreenAnimation(textCard, codeCard, text_y, code_y, startsat, endsat) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: textCard,
            start: startsat,
            end: endsat,
            scrub: true,
            markers: true
        },
    });

    tl.to(textCard, {yPercent: text_y}, 0)
        .to(codeCard, {yPercent: code_y}, 0);

    ScrollTrigger.create({
        trigger: textCard,
        start: startsat,
        endTrigger: textCard,
        end: endsat,
        pin: codeCard,
        markers: true
    });
}

// Sectiononkent letre kell hozni
createSplitScreenAnimation("#textcard1", "#codeCard1", -15, -35, default_start, default_end);
createSplitScreenAnimation("#textcard2", "#codeCard2", -15, -55, default_start, default_end);
createSplitScreenAnimation("#textcard3", "#codeCard3", -15, -40, default_start, default_end);