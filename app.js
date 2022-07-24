const btn = document.querySelector(".container .btn .btn_acao");
let title = document.querySelector(".container .id-advice .title-adv");
const text = document.querySelector(".container .content .advice-text");

btn.addEventListener("click", function () {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
      title.innerHTML = "Advice #" + response.data.slip.id;
      text.innerHTML = "''" + response.data.slip.advice + "''";
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log("Código de Jhony Lemos");
    });
});
