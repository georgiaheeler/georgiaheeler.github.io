// Repsonsive hamburger menu
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
  x.className += ' responsive';
} else {
  x.className = 'navtoggle';
}
}
​
​
​
// Scroll to top button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement
​
function handleScroll() {
  // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
  // This can be changed - experiment
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
​
  if (document.querySelector('#knitcase') || document.querySelector('#quest')) {
    console.log('INSIDE knitcase or quest');
    if (rootElement.scrollTop > 500) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  } else {
    if ((rootElement.scrollTop / scrollTotal ) > 0.9) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  }
  //if ((rootElement.scrollTop / scrollTotal ) > 0.9) {
  if (rootElement.scrollTop > 500) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}
​
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
​
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)
