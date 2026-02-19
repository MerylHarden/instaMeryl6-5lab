// Add JavaScript below
ScrollReveal().reveal('.hero', {delay: 1000});
const sr = ScrollReveal();

sr.reveal(".photo1", {
  origin: "top",
  distance: "60px",
  duration: 900
});

sr.reveal(".photo2", {
  origin: "left",
  distance: "80px",
  duration: 1100
});

sr.reveal(".photo3", {
  origin: "right",
  distance: "80px",
  duration: 1000,
  scale: 0.9
});

sr.reveal(".photo4", {
  origin: "bottom",
  distance: "70px",
  duration: 1200,
  rotate: { x: 0, y: 15, z: 0 }
});

sr.reveal(".photo5", {
  origin: "bottom",
  distance: "40px",
  duration: 1400,
  opacity: 0,
  delay: 200
});