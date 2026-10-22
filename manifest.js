// Curated manifest for Iván Arellano Rubio's baptism gallery.
// Deduped (best frame only, 60+ similars passed over), enhanced copies.
// Sections: ready | mission | family | celebration
window.GALLERY = {
  hero: "assets/photos/04-hero-ivan-walking.jpg",
  photos: [
    { file: "assets/photos/02-mom-and-ivan.jpg",         caption: "Iván with his mom, on the way to the mission", section: "ready" },
    { file: "assets/photos/04-hero-ivan-walking.jpg",    caption: "Iván in his white charro suit and sombrero", section: "ready" },
    { file: "assets/photos/08-guadalupe-embroidery.jpg", caption: "The Virgin of Guadalupe embroidered on his jacket", section: "ready" },
    { file: "assets/photos/09-mission-grounds.jpg",      caption: "The grounds of Mission San Juan Bautista", section: "mission" },
    { file: "assets/photos/06-font-blessing.jpg",        caption: "The baptism at the font", section: "mission" },
    { file: "assets/photos/07-font-wide.jpg",            caption: "Held over the font by his godmother", section: "mission" },
    { file: "assets/photos/03-family-mission-arch.jpg",  caption: "The family under the garden arch at the mission", section: "family" },
    { file: "assets/photos/11-welcome-sign.jpg",         caption: "Mi Bautizo — the welcome sign at the celebration", section: "celebration" },
    { file: "assets/photos/10-favor-card.jpg",           caption: "Thank you for celebrating with us", section: "celebration" },
    { file: "assets/photos/12-party-table.jpg",          caption: "The celebration tables, white florals and gold chairs", section: "celebration" },
    { file: "assets/photos/16-slideshow-screen.jpg",     caption: "Iván's baby photos on the big screen above the dance floor", section: "celebration" },
    { file: "assets/photos/15-costumes-evening.jpg",     caption: "The farm animals came out — Iván with the cow and the pig", section: "celebration" },
    { file: "assets/photos/13-dance-evening.jpg",        caption: "Dancing under the string lights", section: "celebration" }
  ],
  videos: [
    { file: "assets/videos/font-pouring.mp4",       poster: "assets/photos/06-font-blessing.jpg",        caption: "The baptism at the font, the water poured over Iván (0:22)" },
    { file: "assets/videos/mission-tour.mp4",       poster: "assets/photos/poster-mission-tour.jpg",     caption: "The mission grounds after the ceremony (1:09)" },
    { file: "assets/videos/mission-museum.mp4",     poster: "assets/photos/poster-mission-museum.jpg",   caption: "Inside the mission museum (0:10)" },
    { file: "assets/videos/party-afternoon.mp4",    poster: "assets/photos/poster-party-afternoon.jpg",  caption: "The celebration in the afternoon (0:14)" },
    { file: "assets/videos/evening-string-lights.mp4", poster: "assets/photos/poster-evening-string-lights.jpg", caption: "Evening under the string lights, Iván in the middle of it all (0:51)" },
    { file: "assets/videos/dance-floor.mp4",        poster: "assets/photos/poster-dance-floor.jpg",      caption: "The dance floor at night (1:24)" }
  ]
};
window.SECTIONS = [
  { id: "ready",       script: "Preparándose", title: "Getting Ready",       intro: "Iván in his white charro suit, embroidered with the Virgin of Guadalupe, and his sombrero." },
  { id: "mission",     script: "El Bautizo",   title: "The Mission",         intro: "The baptism ceremony at Mission San Juan Bautista, San Juan Bautista, California." },
  { id: "family",      script: "La Familia",   title: "Family & Godparents", intro: "With family at the mission. His godmother holds him at the font." },
  { id: "celebration", script: "La Fiesta",    title: "The Celebration",     intro: "The party that followed, at a ranch venue in San Juan Bautista. Navy, ivory, and gold." }
];
