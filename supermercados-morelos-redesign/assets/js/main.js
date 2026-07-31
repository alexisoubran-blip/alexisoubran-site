const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const toast = qs('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// Mobile navigation
const menuToggle = qs('#menuToggle');
const primaryNav = qs('#primaryNav');
menuToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
qsa('#primaryNav a').forEach(link => link.addEventListener('click', () => {
  primaryNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Hero carousel
const slides = qsa('.hero-slide');
const dots = qsa('[data-dot]');
let slideIndex = 0;
let slideTimer;
function setSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === slideIndex));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex));
}
function resetSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => setSlide(slideIndex + 1), 6500);
}
qs('.slider-arrow.next').addEventListener('click', () => { setSlide(slideIndex + 1); resetSlideTimer(); });
qs('.slider-arrow.prev').addEventListener('click', () => { setSlide(slideIndex - 1); resetSlideTimer(); });
dots.forEach(dot => dot.addEventListener('click', () => { setSlide(Number(dot.dataset.dot)); resetSlideTimer(); }));
resetSlideTimer();

// Search departments and recipes
const searchForm = qs('#siteSearch');
const searchInput = qs('#searchInput');
const searchCategory = qs('#searchCategory');
const searchable = qsa('[data-search]');
const searchFeedback = qs('#searchFeedback');
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const term = searchInput.value.trim().toLowerCase();
  const category = searchCategory.value;
  let matches = 0;

  searchable.forEach(item => {
    const textMatch = !term || item.dataset.search.toLowerCase().includes(term);
    const categoryMatch = category === 'all' || item.dataset.category === category;
    const visible = textMatch && categoryMatch;
    item.hidden = !visible;
    if (visible) matches += 1;
  });

  qs('#departments').scrollIntoView({ behavior: 'smooth', block: 'start' });
  searchFeedback.hidden = matches > 0;
  searchFeedback.textContent = currentLanguage === 'es'
    ? 'No encontramos coincidencias. Prueba con “carne”, “tacos”, “recetas” o “panadería”.'
    : 'No matches found. Try “meat”, “tacos”, “recipes” or “bakery”.';
  showToast(matches
    ? (currentLanguage === 'es' ? `${matches} resultados encontrados` : `${matches} results found`)
    : (currentLanguage === 'es' ? 'Sin resultados' : 'No results'));
});
searchInput.addEventListener('input', () => {
  if (!searchInput.value.trim()) {
    searchable.forEach(item => item.hidden = false);
    searchFeedback.hidden = true;
  }
});

// Location filters
qsa('[data-city]', qs('.city-filter')).forEach(button => {
  button.addEventListener('click', () => {
    qsa('[data-city]', qs('.city-filter')).forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const city = button.dataset.city;
    qsa('.store-card').forEach(card => card.hidden = city !== 'all' && card.dataset.city !== city);
  });
});

// Geolocation helper
qs('#geoButton').addEventListener('click', () => {
  const status = qs('#geoStatus');
  if (!navigator.geolocation) {
    status.textContent = currentLanguage === 'es' ? 'Tu navegador no permite ubicación.' : 'Location is not supported by your browser.';
    return;
  }
  status.textContent = currentLanguage === 'es' ? 'Buscando tu ubicación…' : 'Finding your location…';
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      status.textContent = currentLanguage === 'es' ? 'Ubicación encontrada. Abriendo tiendas cercanas…' : 'Location found. Opening nearby stores…';
      window.open(`https://www.google.com/maps/search/Supermercados+Morelos/@${latitude},${longitude},12z`, '_blank', 'noopener');
    },
    () => { status.textContent = currentLanguage === 'es' ? 'No fue posible obtener tu ubicación.' : 'We could not access your location.'; }
  );
});

// Newsletter demo
qs('#newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = qs('#emailInput').value.trim();
  qs('#newsletterMessage').textContent = currentLanguage === 'es'
    ? `Gracias. ${email} quedó registrado para el demo.`
    : `Thank you. ${email} was registered for this demo.`;
  event.target.reset();
});

// Radio demo interaction
qs('#radioButton').addEventListener('click', event => {
  const button = event.currentTarget;
  const playing = button.classList.toggle('playing');
  button.setAttribute('aria-pressed', String(playing));
  qs('#radioStatus').textContent = playing ? '❚❚' : '▶';
  showToast(playing
    ? (currentLanguage === 'es' ? 'Radio Morelos: demo de reproducción' : 'Radio Morelos: playback demo')
    : (currentLanguage === 'es' ? 'Radio pausada' : 'Radio paused'));
});

const translations = {
  es: {
    radio: 'Radio Morelos', hoursLabel: 'Horario:', apply: 'Trabaja con nosotros', allCategories: 'Todas', meat: 'Carnicería', pantry: 'Abarrotes', recipes: 'Recetas', searchPlaceholder: 'Busca productos, recetas y sucursales…', offers: 'Ofertas', locations: 'Sucursales', browse: 'Explorar departamentos', home: 'Inicio', specials: 'Especiales', departments: 'Departamentos', community: 'Comunidad', heroEyebrow1: 'Fresco. Cercano. Muy nuestro.', heroTitle1: 'La tradición que conoces, en una experiencia más fresca.', heroText1: 'Carnicería, productos latinos, panadería y sabores preparados todos los días.', viewSpecials: 'Ver especiales', findStore: 'Encontrar mi tienda', selectItems: 'en productos seleccionados', heroEyebrow2: 'Carnicería Morelos', heroTitle2: 'Cortes frescos para convertir cualquier comida en reunión.', heroText2: 'Pregunta por nuestros marinados, cortes especiales y recomendaciones del carnicero.', exploreMeat: 'Explorar carnicería', seeRecipes: 'Ver recetas', weekendReady: 'Listo para el fin de semana', allIngredients: 'Encuentra todos los ingredientes', heroEyebrow3: 'Taquería Morelos', heroTitle3: 'El antojo correcto, preparado al momento.', heroText3: 'Tacos, burritos, tortas y más, con ingredientes frescos y el sazón de siempre.', viewMenu: 'Ver menú', nearbyTaqueria: 'Taquería más cercana', madeDaily: 'Hecho todos los días', freshFlavor: 'Fresco, rápido y con sabor', freshDaily: 'Frescura diaria', qualityGuaranteed: 'Calidad que puedes ver', localStores: 'Tiendas locales', okcTulsa: 'Oklahoma City y Tulsa', preparedFood: 'Comida preparada', madeEveryDay: 'Hecha todos los días', communityFirst: 'Nuestra comunidad', familyTradition: 'Familia, cultura y tradición', everythingYouNeed: 'Todo lo que necesitas', shopByDepartment: 'Compra por departamento', seeAllSpecials: 'Ver todos los especiales →', meatMarket: 'Carnicería', meatDesc: 'Cortes frescos, marinados y atención personalizada.', latinPantry: 'Abarrotes latinos', pantryDesc: 'Las marcas y sabores que no faltan en casa.', taqueriaDesc: 'Tacos, burritos, tortas y platillos al momento.', bakery: 'Panadería', bakeryDesc: 'Pan dulce, bolillos y aromas que saben a hogar.', produce: 'Frutas y verduras', produceDesc: 'Color, frescura y selección para todos los días.', eventsCommunity: 'Eventos y comunidad', eventsDesc: 'Activaciones, celebraciones y momentos compartidos.', saveMore: 'Ahorra más, disfruta más', featuredPromos: 'Promociones destacadas', chooseStore: 'Elegir mi sucursal →', fortnightly: 'Especiales de la quincena', fillCart: 'Llena el carrito sin vaciar la cartera.', weeklySavings: 'Ahorros en productos seleccionados y básicos para tu hogar.', viewOffers: 'Ver ofertas', grillReady: 'Sazón listo para el asador.', marinatedDesc: 'Más sabor, menos preparación. Elige tu corte favorito.', getInspired: 'Inspírate', todayCraving: 'El antojo de hoy ya está servido.', taqueriaPromoDesc: 'Platillos preparados con ingredientes frescos y recetas que se sienten cercanas.', findTaqueria: 'Encontrar taquería', cookWithUs: 'Cocina con Morelos', recipesForHome: 'Recetas para llevar el sabor a casa', receiveRecipes: 'Recibir recetas →', easy: 'Fácil', perfectCarneAsada: 'Carne asada perfecta, paso a paso', carneRecipeDesc: 'Una guía sencilla para elegir, marinar y cocinar un corte lleno de sabor.', seeRecipe: 'Ver receta →', medium: 'Intermedio', seafoodPozole: 'Pozole de mariscos con sabor de casa', pozoleDesc: 'Una versión fresca y reconfortante para compartir en familia.', yourKitchen: 'Tu cocina, tus raíces', findIngredients: 'Encuentra todos los ingredientes en una sola visita.', recipeCtaDesc: 'Productos frescos, marcas latinas y recomendaciones para que cada receta salga mejor.', visitStore: 'Visitar una tienda', moreThanStore: 'Más que un supermercado', communityTitle: 'Un lugar donde la tradición sigue reuniendo a la comunidad.', communityText: 'Celebramos el trabajo, la cultura y las historias de las familias latinas en Oklahoma.', facebookCommunity: 'comunidad en Facebook', storesRegion: 'tiendas en la región', majorCities: 'ciudades principales', testimonial: 'Cuando extraño los sabores de México, vengo a Morelos. Siempre encuentro lo que necesito para cocinar como en casa.', closeToYou: 'Cerca de ti', findMorelos: 'Encuentra tu Supermercado Morelos', locationIntro: 'Selecciona tu ciudad para ver horarios, teléfono y cómo llegar.', all: 'Todas', directions: 'Cómo llegar →', yourNearestStore: 'Tu tienda más cercana', allowLocation: 'Usa tu ubicación para encontrar la ruta más rápida.', useLocation: 'Usar mi ubicación', stayConnected: 'Mantente cerca', newsletterTitle: 'Recibe especiales, recetas y eventos.', subscribe: 'Suscribirme', footerTagline: 'Tradición, frescura y productos latinos para las familias de Oklahoma.', shop: 'Comprar', help: 'Ayuda', contact: 'Contacto', storeHours: 'Horarios', newsletter: 'Newsletter', privacy: 'Privacidad', company: 'Compañía', about: 'Nosotros', careers: 'Bolsa de trabajo', prototypeNote: 'Prototipo de rediseño · Experiencia bilingüe'
  },
  en: {
    radio: 'Radio Morelos', hoursLabel: 'Store hours:', apply: 'Apply here', allCategories: 'All', meat: 'Meat market', pantry: 'Grocery', recipes: 'Recipes', searchPlaceholder: 'Search products, recipes and locations…', offers: 'Offers', locations: 'Locations', browse: 'Browse departments', home: 'Home', specials: 'Specials', departments: 'Departments', community: 'Community', heroEyebrow1: 'Fresh. Local. Truly ours.', heroTitle1: 'The tradition you know, in a fresher experience.', heroText1: 'Fresh meat, Latin products, bakery and prepared flavors every day.', viewSpecials: 'View specials', findStore: 'Find my store', selectItems: 'on selected items', heroEyebrow2: 'Morelos Meat Market', heroTitle2: 'Fresh cuts that turn any meal into a gathering.', heroText2: 'Ask about marinades, special cuts and recommendations from our butchers.', exploreMeat: 'Explore meat market', seeRecipes: 'See recipes', weekendReady: 'Weekend ready', allIngredients: 'Find every ingredient', heroEyebrow3: 'Morelos Taquería', heroTitle3: 'The right craving, made to order.', heroText3: 'Tacos, burritos, tortas and more, made with fresh ingredients and familiar flavor.', viewMenu: 'View menu', nearbyTaqueria: 'Nearest taquería', madeDaily: 'Made every day', freshFlavor: 'Fresh, fast and flavorful', freshDaily: 'Fresh every day', qualityGuaranteed: 'Quality you can see', localStores: 'Local stores', okcTulsa: 'Oklahoma City and Tulsa', preparedFood: 'Prepared food', madeEveryDay: 'Made fresh daily', communityFirst: 'Our community', familyTradition: 'Family, culture and tradition', everythingYouNeed: 'Everything you need', shopByDepartment: 'Shop by department', seeAllSpecials: 'See all specials →', meatMarket: 'Meat market', meatDesc: 'Fresh cuts, marinades and personal service.', latinPantry: 'Latin grocery', pantryDesc: 'The brands and flavors every home needs.', taqueriaDesc: 'Tacos, burritos, tortas and meals made to order.', bakery: 'Bakery', bakeryDesc: 'Sweet bread, bolillos and the smell of home.', produce: 'Fruits and vegetables', produceDesc: 'Color, freshness and selection for every day.', eventsCommunity: 'Events and community', eventsDesc: 'Activations, celebrations and shared moments.', saveMore: 'Save more, enjoy more', featuredPromos: 'Featured promotions', chooseStore: 'Choose my store →', fortnightly: 'Biweekly specials', fillCart: 'Fill your cart without emptying your wallet.', weeklySavings: 'Savings on selected products and household essentials.', viewOffers: 'View offers', grillReady: 'Flavor ready for the grill.', marinatedDesc: 'More flavor, less prep. Choose your favorite cut.', getInspired: 'Get inspired', todayCraving: 'Today’s craving is already served.', taqueriaPromoDesc: 'Food prepared with fresh ingredients and recipes that feel close to home.', findTaqueria: 'Find a taquería', cookWithUs: 'Cook with Morelos', recipesForHome: 'Recipes that bring flavor home', receiveRecipes: 'Get recipes →', easy: 'Easy', perfectCarneAsada: 'Perfect carne asada, step by step', carneRecipeDesc: 'A simple guide to choosing, marinating and grilling a flavorful cut.', seeRecipe: 'See recipe →', medium: 'Intermediate', seafoodPozole: 'Seafood pozole with home-style flavor', pozoleDesc: 'A fresh and comforting version made for sharing.', yourKitchen: 'Your kitchen, your roots', findIngredients: 'Find every ingredient in one visit.', recipeCtaDesc: 'Fresh products, Latin brands and recommendations that make every recipe better.', visitStore: 'Visit a store', moreThanStore: 'More than a supermarket', communityTitle: 'A place where tradition keeps bringing the community together.', communityText: 'We celebrate the work, culture and stories of Latino families in Oklahoma.', facebookCommunity: 'Facebook community', storesRegion: 'stores in the region', majorCities: 'major cities', testimonial: 'When I miss the flavors of Mexico, I come to Morelos. I always find what I need to cook food that tastes like home.', closeToYou: 'Close to you', findMorelos: 'Find your Supermercado Morelos', locationIntro: 'Choose your city to see hours, phone and directions.', all: 'All', directions: 'Get directions →', yourNearestStore: 'Your nearest store', allowLocation: 'Use your location to find the fastest route.', useLocation: 'Use my location', stayConnected: 'Stay connected', newsletterTitle: 'Get specials, recipes and events.', subscribe: 'Subscribe', footerTagline: 'Tradition, freshness and Latin products for Oklahoma families.', shop: 'Shop', help: 'Help', contact: 'Contact', storeHours: 'Store hours', newsletter: 'Newsletter', privacy: 'Privacy', company: 'Company', about: 'About us', careers: 'Careers', prototypeNote: 'Redesign prototype · Bilingual experience'
  }
};

let currentLanguage = 'es';
const languageSwitch = qs('#languageSwitch');
function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  qsa('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  qsa('[data-i18n-placeholder]').forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[lang][key]) node.placeholder = translations[lang][key];
  });
  languageSwitch.textContent = lang === 'es' ? 'EN' : 'ES';
}
languageSwitch.addEventListener('click', () => applyLanguage(currentLanguage === 'es' ? 'en' : 'es'));
applyLanguage('es');
