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

// Слайдер доставки
var deliverySlide = document.querySelector(".service-slide__delivery");
var warrantySlide = document.querySelector(".service-slide__warranty");
var creditSlide = document.querySelector(".service-slide__credit");
var slideButtonDelivery = document.querySelector(".service-slide-list__button-active")
var slideButtonWarranty = document.querySelector(".service-slide-list__button-warranty");
var slideButtonCredit = document.querySelector(".service-slide-list__button-credit")
if (slideButtonDelivery) {
  var deliverySlide = document.querySelector(".service-slide__delivery");
  slideButtonDelivery.addEventListener("click", function(evt) {
    evt.preventDefault();
    slideButtonDelivery.classList.add("service-slide-list__button-active");
    deliverySlide.classList.add("modal-show");
    if (slideButtonWarranty.classList.contains("service-slide-list__button-active")) {
      slideButtonWarranty.classList.remove("service-slide-list__button-active");
    }
    if (slideButtonCredit.classList.contains("service-slide-list__button-active")) {
      slideButtonCredit.classList.remove("service-slide-list__button-active");
    }
    if (warrantySlide.classList.contains("modal-show")) {
      warrantySlide.classList.remove("modal-show");
    }
    if (creditSlide.classList.contains("modal-show")) {
      creditSlide.classList.remove("modal-show");
    }
  });
};
if (slideButtonWarranty) {
  var warrantySlide = document.querySelector(".service-slide__warranty");
  slideButtonWarranty.addEventListener("click", function(evt) {
    evt.preventDefault();
    slideButtonWarranty.classList.add("service-slide-list__button-active");
    warrantySlide.classList.add("modal-show");
    if (slideButtonDelivery.classList.contains("service-slide-list__button-active")) {
      slideButtonDelivery.classList.remove("service-slide-list__button-active");
    }
    if (slideButtonCredit.classList.contains("service-slide-list__button-active")) {
      slideButtonCredit.classList.remove("service-slide-list__button-active");
    }
    if (deliverySlide.classList.contains("modal-show")) {
      deliverySlide.classList.remove("modal-show");
    }
    if (creditSlide.classList.contains("modal-show")) {
      creditSlide.classList.remove("modal-show");
    }
  });
};

if (slideButtonCredit) {
  var creditSlide = document.querySelector(".service-slide__credit");
  slideButtonCredit.addEventListener("click", function(evt) {
    evt.preventDefault();
    slideButtonCredit.classList.add("service-slide-list__button-active");
    creditSlide.classList.add("modal-show");
    if (slideButtonDelivery.classList.contains("service-slide-list__button-active")) {
      slideButtonDelivery.classList.remove("service-slide-list__button-active");
    }
    if (slideButtonWarranty.classList.contains("service-slide-list__button-active")) {
      slideButtonWarranty.classList.remove("service-slide-list__button-active");
    }
    if (deliverySlide.classList.contains("modal-show")) {
      deliverySlide.classList.remove("modal-show");
    }
    if (warrantySlide.classList.contains("modal-show")) {
      warrantySlide.classList.remove("modal-show");
    }
  });
};
