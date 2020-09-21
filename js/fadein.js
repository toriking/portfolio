const startTime = performance.now();
const fades = document.querySelectorAll('.circle-content,.fade')
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.20
  }
const observer = new IntersectionObserver((changes)=>{
  changes.forEach(change => {
  if(change.isIntersecting){
    change.target.classList.add('show');
  } else {
    change.target.classList.remove('show');
  }
});
}, options);
for(let i =0 ; i < fades.length; i++){
  observer.observe(fades[i]);
}
const endTime = performance.now();
console.log(endTime - startTime);