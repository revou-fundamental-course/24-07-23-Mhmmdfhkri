// slide show

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

showSlide(currentSlide);


// submit 

document.getElementById("myForm").addEventListener("submit", function (event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var interest = document.getElementById("interest").value;

  if (name === "" || email === "" || interest === "") {
    alert("Semua bidang harus diisi.");
    event.preventDefault();
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("Alamat email harus menggunakan domain @gmail.com");
    event.preventDefault();
    return;
  }

  alert("Formulir berhasil dikirim!");
});