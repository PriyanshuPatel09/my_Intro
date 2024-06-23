var t1 = gsap.timeline();

t1.from("#nav h3", {
    y: -50,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.4
})
t1.from("#main h1", {
    x: -450,
    opacity: 0,
    duration: 1.5,
    color: "rgba(178, 138, 28, 0.635)",
    stagger: .5,
})
t1.from("img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: .5,
})
