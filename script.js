// Botões de WhatsApp e Email
document.getElementById("whatsappBtn").addEventListener("click", () => {
  window.open("https://wa.me/5545998181217", "_blank");
});
document.getElementById("whatsappBtnHero").addEventListener("click", () => {
  window.open("https://wa.me/5545998181217", "_blank");
});
document.getElementById("contactWhatsapp").addEventListener("click", () => {
  window.open("https://wa.me/5545998181217", "_blank");
});

document.getElementById("emailBtn").addEventListener("click", () => {
  window.location.href = "mailto:reymondlima8@gmail.com";
});
document.getElementById("contactEmail").addEventListener("click", () => {
  window.location.href = "mailto:reymondlima8@gmail.com";
});

// Scroll suave
document.getElementById("scrollSolutions").addEventListener("click", () => {
  document.getElementById("solutions").scrollIntoView({ behavior: "smooth" });
});
