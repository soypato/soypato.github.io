// curent age
function getCurrentAge(yearBirth){
    let today = new Date();
    let birth = new Date(yearBirth);
    
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
        return age;
    }
    
    let domYear = document.getElementById('domYear');
    let yearFunction = getCurrentAge('Fri Nov 29 2002 00:00:00 GMT-0300 (Argentina Standard Time)');
        
    if(domYear != undefined){
        domYear.innerHTML = yearFunction;
    }
// current year
let date = new Date();
let year = date.getFullYear();
    
let footerYear = document.getElementById('currentYear');
    
footerYear.innerHTML += year;


const images = document.querySelectorAll('#proyectos');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver(handleIntersect, options);
images.forEach(image => {
  observer.observe(image);
});

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      const image = entry.target;
      image.src = image.dataset.src;
      observer.unobserve(image);
    }
  });
}

