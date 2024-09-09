// Cache DOM elements
const idBox = document.querySelector("#onlineId");
const password = document.querySelector("#password");
const loginButton = document.querySelector(".loginBtn");
const leftPart = document.querySelector(".left");
const rightImgAni = document.querySelector(".right");
const logoImg = document.querySelector(".logoImg");

document.querySelectorAll(".form_input").forEach((formInput) => {
  const input = formInput.querySelector("input");

  input.addEventListener("focus", () => {
    formInput.classList.add("active");
  });

  if (input.value) {
    formInput.classList.add("active");
  }

  input.addEventListener("blur", () => {
    if (!input.value) {
      formInput.classList.remove("active");
    }
  });
});

function updateButtonState() {
  if (idBox.value.length > 0 && password.value.length > 0) {
    loginButton.classList.add("activeBtn");
    loginButton.addEventListener("click", (e)=>{
        e.preventDefault();
      loginButton.innerHTML = "wait..."
      setTimeout(()=>{
        loginButton.innerHTML = "Login"
      },3000)
  
    })
   
  } else {
    loginButton.classList.remove("activeBtn");
    loginButton.addEventListener("click", (e)=>{
      e.preventDefault();
      loginButton.innerHTML = "Login"
    })
  }
}

function initialize() {
  // Delay animations
  setTimeout(() => {
    rightImgAni.classList.add("smallImg");
    leftPart.classList.add("leftPartShow");
    logoImg.classList.add("logoInitial");
  }, 2000);

  idBox.addEventListener("input", updateButtonState);
  password.addEventListener("input", updateButtonState);

  updateButtonState();
}

initialize();
