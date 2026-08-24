const i18n = {
  it: {
    nav_home: "Home",
    nav_collection: "Collezione",
    nav_custom: "Personalizzazione",
    nav_contact: "Contatti",
    hero_title: "Oggetti d’arredo minimal, stampati in 3D con cura artigianale.",
    hero_text: "Design essenziale, anima materica, presenza scultorea.",
    hero_cta_1: "Scopri Opera Prima",
    hero_cta_2: "Richiedi personalizzazione",
    col_title: "Opera Prima",
    col_text: "La nostra prima collezione: tre vasi ispirati al movimento ondulatorio.",
    prod_desc: "Tre vasi dal profilo ondulato, estetica minimal e presenza scultorea.",
    custom_title: "Personalizza il tuo oggetto",
    custom_text: "Richiedi dimensioni, colore, finitura o un nuovo concept.",
    form_send: "Invia richiesta",
    contact_title: "Contatti",
    shipping: "Spedizioni internazionali • International shipping"
  },
  en: {
    nav_home: "Home",
    nav_collection: "Collection",
    nav_custom: "Customization",
    nav_contact: "Contact",
    hero_title: "Minimal home objects, 3D printed with artisanal care.",
    hero_text: "Essential design, tactile soul, sculptural presence.",
    hero_cta_1: "Discover Opera Prima",
    hero_cta_2: "Request customization",
    col_title: "Opera Prima",
    col_text: "Our first collection: three vases inspired by wave motion.",
    prod_desc: "Three wave-profile vases with a minimal aesthetic and sculptural character.",
    custom_title: "Customize your object",
    custom_text: "Request size, color, finish, or a new concept.",
    form_send: "Send request",
    contact_title: "Contact",
    shipping: "International shipping • Spedizioni internazionali"
  }
};

let lang = "it";
const toggle = document.getElementById("langToggle");
toggle.addEventListener("click", () => {
  lang = lang === "it" ? "en" : "it";
  toggle.textContent = lang === "it" ? "EN" : "IT";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    el.textContent = i18n[lang][k];
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
