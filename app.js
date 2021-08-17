window.addEventListener("DOMContentLoaded", (event) => {
  var button = document.querySelector(".btn");
  var model = document.getElementById("modalView");
  var closeBtn = document.querySelector(".close");

  model.classList.add("hide");
  button.addEventListener("click", function () {
    if (model.classList.contains("hide")) {
      model.classList.remove("hide");
    } else {
      model.classList.add("hide");
    }
  });

  closeBtn.addEventListener("click", function () {
    model.classList.add("hide");
  });
});
