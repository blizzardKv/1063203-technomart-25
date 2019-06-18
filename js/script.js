// Интерактивная карта по клику

var mapLink = document.querySelector(".contacts-and-map__image");

if (mapLink) {
  var mapPopup = document.querySelector(".popup-map");
  var mapClose = mapPopup.querySelector(".form-close-button");

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
}

// Корзина
var cart = document.querySelector(".cart");

if (cart) {
  var buyButton = document.querySelectorAll(".catalog-goods-list__buy-button");
  var buyClose = cart.querySelector(".form-close-button");
  var buyContinue = cart.querySelector(".cart__button-continue");

  buyButton.forEach(function(item) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();
      cart.classList.add("modal-show");
    });
  });

  buyClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    cart.classList.remove("modal-show");
  });

  buyContinue.addEventListener("click", function(evt) {
    evt.preventDefault();
    cart.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      if (cart.classList.contains("modal-show")) {
        cart.classList.remove("modal-show");
      }
    }
  });
}
// Напишите нам
var writeUs = document.querySelector(".write-us");
var writeUsButton = document.querySelector(".contacts-and-map__find-me-button");

if (writeUsButton) {
  var writeUs = document.querySelector(".write-us");
  var writeUsClose = writeUs.querySelector(".form-close-button");

  writeUsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.add("modal-show");
  });

  writeUsClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUs.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      if (writeUs.classList.contains("modal-show")) {
        writeUs.classList.remove("modal-show");
      }
    }
  });
}

// // Слайдер в промо
// var switch1 = document.querySelector(".swither-1");
// var switch2 = document.querySelector(".swither-2");
// var slide1 = document.querySelector(".slider-slideshow__slide:nth-child(1)");
// var slide2 = document.querySelector(".slider-slideshow__slide:nth-child(2)");
// if (switch1) {
//   var switch1 = document.querySelector(".toggle-1");
//   switch1.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     switch1.classList.add("toggle-active");
//     slide1.classList.add("modal-show");
//     slide2.classList.add("modal-not-show");
//   })
//   var switch2 = document.querySelector(".toggle-2");
//   switch2.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     switch2.classList.add("toggle-active");
//     slide1.classList.add("modal-not-show");
//     slide2.classList.add("modal-show");
//   })
// }
