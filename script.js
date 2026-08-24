const i18n = {
  it: {
    nav_home: "Home",
    nav_collection: "Collezione",
    nav_custom: "Personalizzazione",
    nav_contact: "Contatti",

    hero_title: "Forme essenziali per interni contemporanei.",
    hero_text: "Oggetti scultorei dal carattere minimal, realizzati con precisione artigianale.",
    hero_cta_1: "Scopri Opera Prima",
    hero_cta_2: "Richiedi personalizzazione",

    quote_text: "“La materia incontra il silenzio delle forme.”",

    col_title: "Opera Prima",
    col_text: "La collezione inaugurale: tre vasi ispirati al movimento ondulatorio, pensati per dialogare tra loro o vivere singolarmente.",
    prod_desc: "Tre volumi con texture continua e proporzioni armoniche, per ambienti moderni e raffinati.",
    buy_btn: "Richiedi disponibilità",

    custom_title: "Personalizza il tuo oggetto",
    custom_text: "Dimensioni, colore, finitura o concept esclusivo: raccontaci la tua idea.",
    form_send: "Invia richiesta",

    contact_title: "Contatti",
    shipping: "Spedizioni internazionali • International shipping"
  },

  en: {
    nav_home: "Home",
    nav_collection: "Collection",
    nav_custom: "Customization",
    nav_contact: "Contact",

    hero_title: "Essential forms for contemporary interiors.",
    hero_text: "Sculptural minimal objects, crafted with artisanal precision.",
    hero_cta_1: "Discover Opera Prima",
    hero_cta_2: "Request customization",

    quote_text: "“Material meets the silence of form.”",

    col_title: "Opera Prima",
    col_text: "The inaugural collection: three vases inspired by wave motion, designed to work together or stand alone.",
    prod_desc: "Three volumes with continuous texture and harmonious proportions for refined modern interiors.",
    buy_btn: "Check availability",

    custom_title: "Customize your object",
    custom_text: "Size, color, finish, or an exclusive concept: tell us your vision.",
    form_send: "Send request",

    contact_title: "Contact",
    shipping: "International shipping • Spedizioni internazionali"
  }
};

let lang = "it";
const toggle = document.getElementById("langToggle");

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  toggle.textContent = lang === "it" ? "EN" : "IT";
  document.documentElement.lang = lang;
}

toggle.addEventListener("click", () => {
  lang = lang === "it" ? "en" : "it";
  applyLanguage();
});

// year
document.getElementById("year").textContent = new Date().getFullYear();

// reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// init
applyLanguage();
