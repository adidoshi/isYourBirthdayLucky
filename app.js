const birthDate = document.querySelector("#birthDate");
const luckyNumber = document.querySelector("#luckyNum");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector(".result");

const privacyNotice = document.querySelector(".privacyNote")
const close = document.querySelector("#close");

close.addEventListener('click', () => {
    privacyNotice.style.display = "none";
})

checkBtn.addEventListener("click", checkClickHandler);

function checkClickHandler(event) {
    event.preventDefault();
    let newString = birthDate.value.split("-").join("");
    let sum = 0;
    for (digit of newString) {
        sum += +digit;
    }
    const luckyNumJS = +luckyNumber.value;
    if (sum % luckyNumJS === 0) {
        result.innerHTML = `Hurray!! You are a lucky person!
          <img src = "luckygif.gif">
          `;
    } else {
        result.innerHTML = `Oops!! Your birthday is not lucky!
          <img id="size" src = "unlucky.gif">
          `;
    }
}