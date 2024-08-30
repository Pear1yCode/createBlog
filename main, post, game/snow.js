for (let i = 0; i < 250; i++) {
  const snow = document.createElement("div");
  snow.className = "snow";
  snow.style.opacity = Math.random();

  const startX = Math.random() * 93; // 눈 범위 width
  const endX = startX + (Math.random() * 20 - 10);
  const scale = Math.max(Math.random(), 0.5);

  const keyframe = [
    { transform: `translate(${startX}vw, 0) scale(${scale})` },
    { transform: `translate(${endX}vw, 225vh) scale(${scale})` }, // 눈 범위 height
  ];
  const option = {
    duration: 15000,
    easing: "linear",
    iterations: Infinity,
    delay: -Math.random() * 20 * 1000,
  };
  snow.animate(keyframe, option);

  document.body.appendChild(snow);
}