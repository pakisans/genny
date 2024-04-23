export default function manifest() {
  return {
    name: "GENNY",
    short_name: "GENNY",
    description: "Kompletno rešenje za vaš prostor",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
