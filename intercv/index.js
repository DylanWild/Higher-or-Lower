/////////////Variables////////////////////

let ed1 = document.getElementById("ed1");
let ed2 = document.getElementById("ed2");
let ed3 = document.getElementById("ed3");
let ed4 = document.getElementById("ed4");
let emp1 = document.getElementById("emp1");

let emp2 = document.getElementById("emis");
let emp3 = document.getElementById("appren");
let emp4 = document.getElementById("mojo");
let emp5 = document.getElementById("chef");
let emp6 = document.getElementById("mcd");
let emp7 = document.getElementById("crew");

let hob1 = document.getElementById("hob1");
let hob2 = document.getElementById("hob2");
let hob3 = document.getElementById("hob3");
let hob4 = document.getElementById("hob4");


////////////////////Navigation Buttons////////////

////////////////////Education button//////////////

document.getElementById("edu").addEventListener("click", function () {

  let ed0 = document.getElementById("ed0")
  ed0.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });
 
  ed1.id = "aEd1"
  ed2.id = "aEd2"
  ed2.innerHTML = "2:1 in Electrical & Electronic Engineering"
  ed3.id = "aEd3"
  ed3.innerHTML = "D*D*D in Electrical Electronic Engineering"
  ed4.id = "aEd4"
  ed4.innerHTML = "14 A*-C GCSEs"
})

/////////////////Employment Button////////////////

document.getElementById("employ").addEventListener("click", function () {

  let emp0 = document.getElementById("emp0")
  emp0.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });

  emp1.id = "aEmp1"
  emp2.id = "aEmp2"
  emp2.innerHTML = "EMIS Health"
  emp3.id = "aEmp3"
  emp3.innerHTML = "Apprentice Developer"
  emp4.id = "aEmp4"
  emp4.innerHTML = "Mojo Bar"
  emp5.id = "aEmp5"
  emp5.innerHTML = "Chef"
  emp6.id = "aEmp6"
  emp6.innerHTML = "McDonalds"
  emp7.id = "aEmp6"
  emp7.innerHTML = "Crew Member"
})

///////////////Interests button//////////////////

document.getElementById("interest").addEventListener("click", function () {

  let hob0 = document.getElementById("hob0")
  hob0.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });

  hob1.id = "aHob1"
  hob2.id = "aHob2"
  hob2.innerHTML = "Watching Bury FC"
  hob3.id = "aHob3"
  hob3.innerHTML = "Reading"
  hob4.id = "aHob4"
  hob4.innerHTML = "Cooking"
})

///////////////Contact button/////////////////
document.getElementById("cont").addEventListener("click", function () {

  let con0 = document.getElementById("con0")
  con0.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });
})

////////////////Home Buttons/////////////

///////////////Education home button//////////////

document.getElementById("bttLeft").addEventListener("click", function () {
  ed1.id = "ed1"
  ed2.id = "ed2"
  ed3.id = "ed3"
  ed4.id = "ed4"

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

///////////////Employment home button//////////////
document.getElementById("bttRight").addEventListener("click", function () {


  emp1.id = "emp1"
  emp2.id = "emis"
  emp3.id = "appren"
  emp4.id = "mojo"
  emp5.id = "chef"
  emp6.id = "mcd"
  emp7.id = "crew"

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

///////////////Interests home button//////////////
document.getElementById("bttLeftOne").addEventListener("click", function () {

  hob1.id = "hob1"
  hob2.id = "hob2"
  hob3.id = "hob3"
  hob4.id = "hob4"
 
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

///////////////Contact home button//////////////
document.getElementById("bttRightOne").addEventListener("click", function () {

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
