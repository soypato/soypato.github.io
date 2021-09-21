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
    
    domYear.innerHTML = yearFunction;
    
// current year
let date = new Date();
let year = date.getFullYear();
    
let footerYear = document.getElementById('currentYear');
    
footerYear.innerHTML = year;

