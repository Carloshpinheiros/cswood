// Substitua pelo número real da empresa
const WHATSAPP_NUMBER = "+5531971063557"; // DDI + DDD + número, sem espaços
const WHATSAPP_MSG =
  "Olá! Gostaria de solicitar um orçamento para revitalização de madeira.";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".whatsapp-cta");
  const phoneNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!buttons.length || !phoneNumber) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const encodedMsg = encodeURIComponent(WHATSAPP_MSG);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
      window.open(url, "_blank");
    });
  });
});