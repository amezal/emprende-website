export default function smoothScroll(element, to, duration) {
  const start = element.scrollLeft;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = function() {
    currentTime += increment;
    const val = Math.easeOutQuart(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
}

// Easing Functions
// Source: https://gist.github.com/gre/1650294
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

Math.easeOutQuad = function (t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}

Math.easeOutQuart = function (t, b, c, d) {
  t /= d;
  t--;
  return -c * (t*t*t*t - 1) + b;
};