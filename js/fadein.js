const startTime = performance.now();
const fades = document.querySelectorAll('.circle-content,.fade')
const topScroll = document.querySelector('.top-scroll');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }
const observer = new IntersectionObserver((changes)=>{
  changes.forEach(change => {
  if(change.isIntersecting){
    change.target.classList.add('show');
  }
});
const topB = window.pageYOffset;
if (topB > 600) {
    topScroll.classList.add('show');
} else {
 topScroll.classList.remove('show');
}
}, options);
for(let i =0 ; i < fades.length; i++){
  observer.observe(fades[i]);
}
const endTime = performance.now();
console.log(endTime - startTime);