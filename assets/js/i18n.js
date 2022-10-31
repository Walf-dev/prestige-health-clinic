async function i18Loader() {
    const langs = ["en", "fr"];//remove "de" from array
    const jsons = await Promise.all(
      langs.map((l) => fetch("../../src/i18/" + l + ".json").then((r) => r.json())) //add ../../before src
    );
    const res = langs.reduce((acc, l, idx) => {
      acc[l] = { translation: jsons[idx] };
      return acc;
    }, {});
  
    await i18next
  
      .init({
        lng: localStorage.getItem("lan") || 'en',
        debug: true,
        resources: res,
        fallbackLng: "en-US",
        backend: {
          backendOptions: [{
            // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
            store: typeof window !== 'undefined' ? window.localStorage : null
          }, {
            loadPath: '/scr/i18/{{lng}}.json' // xhr load path for my own fallback
          }]
        }
      });
  
    function updateContent() {
      const elements = document.getElementsByClassName("i18nelement");
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const k = element.getAttribute("data-i18n");
        element.innerHTML = i18next.t(k);
      }
    }
  
    updateContent();
    i18next.on("languageChanged", () => {
      updateContent();
    });
  
    const langSelector = document.getElementById("langSelector");
    langSelector.removeAttribute("disabled");
    langSelector.addEventListener("change", (e) => {
      i18next.changeLanguage(e.target.value);
      localStorage.setItem("lan", e.target.value);
    });
  
  }
  
  i18Loader();