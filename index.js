let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function currentSlide(index) {
     slideIndex = index - 1;
     showSlides();
}
function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}
function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
  
   if(timeoutId) {
      clearTimeout(timeoutId);
   }
  timeoutId = setTimeout(showSlides,5000); // Change image every 5 seconds
}


///// add cart ////

const min = document.querySelector('#min');
const plus = document.querySelector('#plus');
let amount = document.querySelector('#amount');
let addBtn = document.querySelector('#addBtn');
let basketModal = document.querySelector('#basketmodal');
let images = document.querySelector('#bigImage');
let number = 0; 

let changeAmount = () => {

  plus.addEventListener("click", function(){
    number++;
    amount.innerHTML = number;
    
  });

  min.addEventListener("click", function(){
      number--;
      if(number < 0){
        return number++;
      }
      amount.innerHTML = number;
      
  });
}
changeAmount();


/// add basket ///
let spanElAmount = document.createElement('span');
spanElAmount.style.display = "none";
let basketAmount = document.getElementById('user').appendChild(spanElAmount);
addBtn.addEventListener("click", () => {

  if(number > 0){
    basketModal.innerHTML = `
    <div class="basketmodal">
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header p-4 fw-bolder">
            Cart
          </div>
          <div id="modalBody" class="mt-3">
            <div class="row p-2 gap-2">
              <div class="col-2">
                  <img style="width: 50px; margin:0px; border-radius: 3px;" src="${images.src}" alt="${images.alt}">
              </div>
              <div class="col-8">
                <p style="font-size: 12px; margin:0px;">Fall Limited Edition Sneakers</p>
                <p style="font-size: 12px; margin-top: 5px;">$125.00 x ${number}  <span class="fw-bolder">$${number * 125}.00</span></p>
              </div>
              <div class="col-1 p-0" style="cursor:pointer;">
                <img id="delete" src="./images/icon-delete.svg">
              </div>
              <div class="col-12">
               <button class="btn w-100">Checkout</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>`;
    
    /// basket top head display amount
    spanElAmount.style.display = "block";
    basketAmount.innerHTML = number;
    addBtn.disabled = true;
  }
  deleteItems();
})

let deleteItems = () => {

  let deleteItem = document.querySelector('#delete');
  let modalBody = document.querySelector('#modalBody');
  let addClass = document.createElement('p');
  let addTobasketmodal = document.getElementById('basketmodal').appendChild(addClass);
  if(number == 0){

    return false;
    
  }else{
    deleteItem.addEventListener("click", function(){
     
      modalBody.classList.add('d-none'); 
      spanElAmount.classList.add('d-none');
      addTobasketmodal.innerHTML = `<div class="modal-dialog">
                                       <div class="modal-content">
                                           <div id="modalBody" class="modal-body">
                                               <p class="text-center text-secondary fw-bolder">Your cart is empty.</p>
                                           </div>
                                       </div>
                                    </div>`;
                                 
   });
  }
  
}

/// basket empty ///

let hideEl = document.querySelector('#basket');
  hideEl.addEventListener("click", function () {
    basketModal.className = basketModal.className === "d-none" ? "d-block" : "d-none";
});

//// burger menu ///
function myFunction() {
  let burgerMenu = document.getElementById("navbar");
  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
  } else {
    burgerMenu.style.display = "block";
    burgerMenu.style.width = "90%";
    burgerMenu.style.height = "200px";
    burgerMenu.style.backgroundColor = "white";
    burgerMenu.style.position = "absolute";
    burgerMenu.style.top = "80px";
    burgerMenu.style.padding = "1rem";
    
  }
}