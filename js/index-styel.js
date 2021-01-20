var slideImage = Array.from( document.querySelectorAll(".slider-container img"));
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var slidenNumberElement = document.getElementById("slider-number");
var slideCount = slideImage.length;
var currentSlide = 1;


var paginaionElement = document.createElement('ul');
paginaionElement.setAttribute("id" , "paginaion-ul");

for(var i = 1 ; i <= slideCount ; i++ ){
  var paginaionItem = document.createElement('li');
  paginaionItem.setAttribute("data-index" , i);
  paginaionItem.appendChild(document.createTextNode(i));
  paginaionElement.appendChild(paginaionItem);
}

document.getElementById("indicators").appendChild(paginaionElement);
var paginaionCreatedUl = document.getElementById("paginaion-ul")
var paginaionBullets = Array.from( document.querySelectorAll("#paginaion-ul li"));
for(var i = 0 ; i < paginaionBullets.length ; i++){

  paginaionBullets[i].onclick = function () {
    
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();
  }
}


function nextSlide () {
  if(nextButton.classList.contains('disabled')){
    return false;
  }
  else{
    currentSlide ++;
    theChecker();
  }
}

function prevSlide () {
  if(prevButton.classList.contains('disabled')){
    return false;
  }
  else{
    currentSlide --;
    theChecker();
  }
}
nextButton.onclick =nextSlide;
prevButton.onclick =prevSlide;
theChecker();

function theChecker () {
  slidenNumberElement.textContent = 'slide# ' + (currentSlide) + ' of ' + (slideCount) ;
  removeAllActive();
  slideImage[currentSlide - 1].classList.add("active");
  paginaionCreatedUl.children[currentSlide - 1].classList.add("active");

  if(currentSlide == 1){
    prevButton.classList.add("disabled")
  }
  else{
    prevButton.classList.remove("disabled")
  }

  if(currentSlide == slideCount){
    nextButton.classList.add("disabled")
  }
  else{
    nextButton.classList.remove("disabled")
  }

}

function removeAllActive () {

  slideImage.forEach(function (img) {
    img.classList.remove('active');
  });

  paginaionBullets.forEach(function (bullet) {
    bullet.classList.remove('active');
  });
}