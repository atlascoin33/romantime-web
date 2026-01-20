// app/menu/page.tsx
type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const sections: MenuSection[] = [
  {
    title: "Cervezas",
    items: [
      { name: "Caña pequeña", description: "Small caña", price: "1,80 €" },
      { name: "Caña mediana", description: "Medium caña", price: "2,00 €" },
      {
        name: "Caña 1906 pequeña",
        description: "Small caña 1906",
        price: "2,10 €",
      },
      {
        name: "Caña 1906 mediana",
        description: "Medium caña 1906",
        price: "2,30 €",
      },
      { name: "Jarra", description: "Large beer", price: "3,40 €" },
      {
        name: "Estrella Galicia",
        description: "Estrella Galicia beer",
        price: "2,30 €",
      },
      {
        name: "Cerveza 0.0",
        description: "Low alcohol beer",
        price: "2,50 €",
      },
      {
        name: "Cerveza botellín",
        description: "Florete, Alhambra verde, Heineken, Rosa Blanca",
        price: "2,80 €",
      },
      { name: "Coronita", description: "Coronita beer", price: "2,90 €" },
    ],
  },
  {
    title: "Bebidas",
    items: [
      { name: "Cola normal", description: "Coke", price: "2,30 €" },
      { name: "Cola zero", description: "Coke zero", price: "2,30 €" },
      { name: "Cola zero zero", description: "Coke zero zero", price: "2,30 €" },
      { name: "Fanta naranja", description: "Fanta orange", price: "2,30 €" },
      { name: "Fanta limón", description: "Fanta lemon", price: "2,30 €" },
      { name: "Nestea", description: "Nestea", price: "2,30 €" },
      { name: "Sprite", description: "Sprite", price: "2,30 €" },
      { name: "Aquarium naranja", description: "Aquarium orange", price: "2,40 €" },
      { name: "Aquarium limón", description: "Aquarium lemon", price: "2,40 €" },
      { name: "Tónica", description: "Tonic", price: "2,20 €" },
      { name: "Laccao", description: "Laccao", price: "2,20 €" },
      { name: "Bitter Kas", description: "Bitter Kas", price: "2,50 €" },
      { name: "Red Bull", description: "Red Bull", price: "2,90 €" },
      { name: "Zumo natural", description: "Natural juice", price: "2,50 €" },
      {
        name: "Zumo botellín",
        description: "Piña / melocotón / naranja",
        price: "2,20 €",
      },
      { name: "Agua", description: "Water", price: "2,00 €" },
      { name: "Agua con gas", description: "Sparkling water", price: "2,20 €" },
      {
        name: "Tinto de verano",
        description: "Summer red wine",
        price: "4,20 €",
      },
      { name: "Sangría 1L", description: "Sangria wine", price: "16,00 €" },
    ],
  },
  {
    title: "Café",
    items: [
      { name: "Solo", description: "Espresso", price: "1,40 €" },
      { name: "Cortado", description: "Cut coffee", price: "1,60 €" },
      { name: "Con leche", description: "Coffee with milk", price: "1,70 €" },
      {
        name: "Con soja / avena",
        description: "Coffee with soy / oats",
        price: "1,80 €",
      },
      { name: "Americano", description: "Americano", price: "1,70 €" },
      { name: "Cappuccino", description: "Cappuccino", price: "2,20 €" },
      { name: "Latte", description: "Latte", price: "2,20 €" },
      { name: "Carajillo", description: "Carajillo", price: "2,35 €" },
    ],
  },
  {
    title: "Infusiones",
    items: [
      { name: "Té verde", description: "Green tea", price: "1,70 €" },
      { name: "Té rojo", description: "Red tea", price: "1,70 €" },
      { name: "Té negro", description: "Black tea", price: "1,70 €" },
      { name: "Poleo menta", description: "Mint", price: "1,70 €" },
      { name: "Manzanilla", description: "Chamomile", price: "1,70 €" },
      { name: "Frutas del bosque", description: "Forest fruit", price: "1,70 €" },
      { name: "Tila", description: "Linden tea", price: "1,70 €" },
      { name: "Té jazmín", description: "Jasmine tea", price: "1,90 €" },
    ],
  },
  {
    title: "Licores de copa",
    items: [
      { name: "Barceló", price: "4,10 €" },
      { name: "Bacardi", price: "3,90 €" },
      { name: "Bombay", price: "4,10 €" },
      { name: "Beefeater", price: "4,10 €" },
      { name: "Seagram", price: "4,10 €" },
      { name: "Puerto de Indias", price: "3,90 €" },
      { name: "Johnnie Walker", price: "4,10 €" },
      { name: "J&B", price: "4,20 €" },
      { name: "Ballantine's", price: "4,20 €" },
      { name: "Jägermeister", price: "5,00 €" },
      { name: "Jack Daniel's", price: "4,50 €" },
      { name: "Terry", price: "3,90 €" },
      { name: "Anís del Mono", price: "3,90 €" },
      { name: "Vodka Absolut", price: "4,10 €" },
      { name: "Eristoff", price: "3,90 €" },
      { name: "Baileys", price: "3,90 €" },
      { name: "Amazona", price: "3,90 €" },
      { name: "Martini", price: "4,10 €" },
    ],
  },
  {
    title: "Vinos tintos",
    items: [
      { name: "Copa de vino", price: "2,90 €" },
      { name: "De la casa", price: "11,80 €" },
      { name: "Faustino VII", price: "15,95 €" },
      { name: "Añares", price: "15,95 €" },
      { name: "Marqués de Cáceres", price: "16,95 €" },
      { name: "Cune", price: "16,95 €" },
      { name: "El Coto", price: "15,95 €" },
    ],
  },
  {
    title: "Vinos blancos",
    items: [
      { name: "Copa de vino", price: "2,90 €" },
      { name: "De la casa", price: "11,80 €" },
      { name: "Viña Sol", price: "15,95 €" },
      { name: "Pescador", price: "15,95 €" },
      { name: "Monopole", price: "15,95 €" },
      { name: "El Coto", price: "15,95 €" },
      { name: "Diamante", price: "15,95 €" },
    ],
  },
  {
    title: "Vinos rosados",
    items: [
      { name: "Copa de vino", price: "2,90 €" },
      { name: "De la casa", price: "11,80 €" },
      { name: "Mateus Rosé", price: "14,95 €" },
      { name: "Lancers", price: "14,95 €" },
      { name: "Lambrusco", price: "15,95 €" },
      { name: "Marqués de Cáceres", price: "15,95 €" },
    ],
  },
  {
    title: "Ron",
    items: [
      { name: "Barceló", price: "6,95 €" },
      { name: "Bacardi", price: "6,95 €" },
    ],
  },
  {
    title: "Whisky",
    items: [
      { name: "Johnnie Walker", price: "7,50 €" },
      { name: "J&B", price: "7,50 €" },
      { name: "Ballantine's", price: "7,50 €" },
      { name: "Jägermeister", price: "8,50 €" },
      { name: "Jack Daniel's", price: "7,50 €" },
      { name: "Chivas", price: "7,95 €" },
    ],
  },
  {
    title: "Coñac",
    items: [
      { name: "Terry", price: "6,95 €" },
      { name: "Anís del Mono", price: "6,50 €" },
    ],
  },
  {
    title: "Vodka",
    items: [
      { name: "Absolut", price: "6,95 €" },
      { name: "Eristoff", price: "6,95 €" },
    ],
  },
  {
    title: "Desayunos",
    items: [
      {
        name: "Tostadas con tomate",
        description: "Toast with tomato",
        price: "1,30 €",
      },
      {
        name: "Tostadas con mantequilla",
        description: "Toast with butter",
        price: "1,40 €",
      },
      {
        name: "Tostadas con serrano",
        description: "Toast with ham",
        price: "1,60 €",
      },
      {
        name: "Tostadas con queso curado",
        description: "Toast with cured cheese",
        price: "1,50 €",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-16">
      <header className="mb-8 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          Carta
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Menú Romantime
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300">
          Carta de bebidas, desayunos y vinos de Romantime. Los precios pueden
          variar según temporada.
        </p>
      </header>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
              {section.title}
            </h2>
            <div className="divide-y divide-neutral-900/80 border-y border-neutral-900/80">
              {section.items.map((item) => (
                <article
                  key={item.name}
                  className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div>
                    <h3 className="text-sm font-medium text-neutral-100">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-neutral-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <p className="text-sm font-medium text-neutral-100 sm:text-right">
                    {item.price}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
