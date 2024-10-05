document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("welcomeShown")) {
    alert("Selamat datang di Warung Mina Mamah Nada!");
    sessionStorage.setItem("welcomeShown", "true");
  }

  
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = item.querySelector("a").getAttribute("href");
    });
  });

 
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});
