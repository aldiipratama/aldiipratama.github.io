let nav = document.querySelector("nav");
let navLink = document.querySelector(".nav-link");

window.onscroll = function () {
  if (window.scrollY > 200) {
    nav.style.backgroundColor = "#695aa6";
    navLink.classList.add("scroll");
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

let copyright = document.getElementById("cpr");
let tahun = new Date().getFullYear();
copyright.innerHTML = `Copyright ${tahun} &copy; Aldi Pratama`;

const scriptURL = 'https://script.google.com/macros/s/AKfycbwMlSl1Rb_UaGcanY3YIabrkH19NqOi46JkzTSpseBnozcuhp36AYFfuMvzH8o9vpDP/exec'
  const form = document.forms['form-pesan']
  let loader = document.querySelector(".loader");
  let alert = document.querySelector(".alert");
  let warning = document.querySelector(".alert-warning");
  let btnKirim = document.querySelector(".kirim");

  form.addEventListener('submit', e => {
    loader.classList.remove("d-none");
    btnKirim.classList.add("d-none");
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        loader.classList.add("d-none");
        btnKirim.classList.remove("d-none");
        alert.classList.remove("d-none");
        form.reset();
      })
      .catch(error => {
        loader.classList.add("d-none");
        btnKirim.classList.remove("d-none");
        warning.classList.remove("d-none");
        form.reset();
      })
  })