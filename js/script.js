// Интерактивная карта по клику

var maplink = document.querySelector(".contacts-and-map__image");

if (maplink) {
  var mappopup = document.querySelector(".popup-map");
  var mapclose = mappopup.querySelector(".form-close-button");

  maplink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
  });

  mapclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mappopup.classList.contains("modal-show")) {
        mappopup.classList.remove("modal-show");
      }
    }
  });
}

// Корзина в каталоге
var buyButton = document.querySelectorAll(".catalog-goods-list__buy-button");
var cart = document.querySelector(".cart");
var buyClose = cart.querySelector(".form-close-button");
var buyContinue = cart.querySelector(".cart__button-continue")

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

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cart.classList.contains("modal-show")) {
      cart.classList.remove("modal-show");
    }
  }
});

// Красная корзина
var cartButton = document.querySelector(".site-navigation-list__item:nth-child(2)");
var bookmarksButton = document.querySelector(".catalog-goods-list__bookmarks-button");
if (bookmarksButton) {
  var bookmarksButton = document.querySelector(".catalog-goods-list__bookmarks-button");
  bookmarksButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartButton.classList.add("cart-active");
  })
}

// Слайдер в промо
var switch1 = document.querySelector(".swither-1");
var switch2 = document.querySelector(".swither-2");
var slide1 = document.querySelector(".slider-slideshow__slide:nth-child(1)");
var slide2 = document.querySelector(".slider-slideshow__slide:nth-child(2)");
if (switch1) {
  var switch1 = document.querySelector(".toggle-1");
  switch1.addEventListener("click", function(evt) {
    evt.preventDefault();
    switch1.classList.add("toggle-active");
    slide1.classList.add("modal-show");
    slide2.classList.add("modal-not-show");
  })
  var switch2 = document.querySelector(".toggle-2");
  switch2.addEventListener("click", function(evt) {
    evt.preventDefault();
    switch2.classList.add("toggle-active");
    slide1.classList.add("modal-not-show");
    slide2.classList.add("modal-show");
  })
}
