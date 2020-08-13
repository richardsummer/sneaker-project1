window.onload = function =() {
document.getElementById('buyBtn').onclick = function changeContent() {
   var myBtn = document.getElementById('buyBtn')
   myBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
   myBtn.style.color = "white";
   myBtn.innerHTML = "white 2px solid";
   myBtn.innerHTML = "Added To Cart";

   var cart = document.getElementById('cart')
   cart.innerHTML = 0 + 1;
}
}
