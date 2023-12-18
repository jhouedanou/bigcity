mwj3llm.css;
const typekitId = "mwj3llm";

// Si aucun kit défini, ne pas charger le script
if (!typekitId) {
  return;
}

// Créer le script Typekit
const script = document.createElement("script");
script.src = `https://use.typekit.net/${typekitId}.js`;
script.async = true;

// Injecter le script dans le <head>
document.head.appendChild(script);

// Initialiser le kit
script.onload = () => {
  try {
    window.Typekit.load({
      async: true,
    });
  } catch (error) {}
};
