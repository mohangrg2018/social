//ROOT
const root = document.querySelector(":root");

// SIDEBAR
const menuItems = document.querySelectorAll(".menu__item");
const notification = document.querySelector(".notification__menu");
const notificationCount = document.querySelector(".notification__count");

// MESSAGE
const menuMessage = document.querySelector(".menu__messages");
const messageNotification = document.querySelector(".messages__notification");
const messageCard = document.querySelector(".right__top");
const inputMessage = document.getElementById("search__message");
const message = document.querySelectorAll(".right__messages");

//THEME
const theme = document.querySelector(".menu__theme");
const themeCustomize = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".theme__fonts-card span");
const colorPalette = document.querySelectorAll(".theme__color-card span");
const bg1 = document.querySelector(".theme__background-light");
const bg2 = document.querySelector(".theme__background-dim");
const bg3 = document.querySelector(".theme__background-lightsOut");

//remove active class from menu
const removeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

//display notification card when notification menu item is clicked
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveItem();
    item.classList.add("active");
    if (item != notification) {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      notificationCount.style.display = "none";
    }
    console.log(item);
  });
});

///////////////////////////// MESSAGES //////////////////////

const searchMessage = (e) => {
  let val = e.target.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h3").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

inputMessage.addEventListener("keyup", searchMessage);

//highlight message card when messages menu item is clicked
menuMessage.addEventListener("click", () => {
  messageCard.style.boxShadow = "0 0 2rem var(--color-primary)";
  messageCard.style.transition = "all 0.3s ease";
  messageNotification.style.display = "none";
  setTimeout(() => {
    messageCard.style.boxShadow = "none";
  }, 2000);
});

// THEME CHANGER

const openModal = () => {
  themeCustomize.style.display = "grid";
};

const closeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeCustomize.style.display = "none";
  }
};

const sizeChange = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

theme.addEventListener("click", openModal);
themeCustomize.addEventListener("click", closeModal);

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizeChange();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "6px";
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "7px";
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "8px";
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "9px";
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "10px";
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

//remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
//change primary color

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

//Change background color

//theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
let white;

//changes background color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

//changes background color

bg1.addEventListener("click", () => {
  //add active class
  bg1.classList.add("active");
  //remove active class from the others
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  //remove customized changes from local storage
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  //add active class
  bg2.classList.add("active");
  //remove active class from the others
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBG();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  //add active class
  bg3.classList.add("active");
  //remove active class from the others
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBG();
});
