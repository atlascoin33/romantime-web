// app/menu/page.tsx
import Image from "next/image";
import TabsMenu, {
  MenuItem,
  TabConfig,
} from "../components/TabsMenu";

const bebidas: MenuItem[] = [
  // --- Cervezas ---
  { name: "Caña pequeña", description: "Small caña", price: "1,80 €", section: "Cervezas" },
  { name: "Caña mediana", description: "Medium caña", price: "2,00 €", section: "Cervezas" },
  { name: "Caña 1906 pequeña", description: "Small caña 1906", price: "2,10 €", section: "Cervezas" },
  { name: "Caña 1906 mediana", description: "Medium caña 1906", price: "2,30 €", section: "Cervezas" },
  { name: "Jarra", description: "Large beer", price: "3,40 €", section: "Cervezas" },
  { name: "Estrella Galicia", description: "Estrella Galicia beer", price: "2,30 €", section: "Cervezas" },
  { name: "Cerveza 0.0", description: "Low alcohol beer", price: "2,50 €", section: "Cervezas" },
  {
    name: "Cerveza botellín",
    description: "Florete, Alhambra verde, Heineken, Rosa Blanca",
    price: "2,80 €",
    section: "Cervezas",
  },
  { name: "Coronita", description: "Coronita beer", price: "2,90 €", section: "Cervezas" },

  // --- Bebidas ---
  { name: "Cola normal", description: "Coke", price: "2,30 €", section: "Bebidas" },
  { name: "Cola zero", description: "Coke zero", price: "2,30 €", section: "Bebidas" },
  { name: "Cola zero zero", description: "Coke zero zero", price: "2,30 €", section: "Bebidas" },
  { name: "Fanta naranja", description: "Fanta orange", price: "2,30 €", section: "Bebidas" },
  { name: "Fanta limón", description: "Fanta lemon", price: "2,30 €", section: "Bebidas" },
  { name: "Nestea", description: "Nestea", price: "2,30 €", section: "Bebidas" },
  { name: "Sprite", description: "Sprite", price: "2,30 €", section: "Bebidas" },
  { name: "Aquarium naranja", description: "Aquarium orange", price: "2,40 €", section: "Bebidas" },
  { name: "Aquarium limón", description: "Aquarium lemon", price: "2,40 €", section: "Bebidas" },
  { name: "Tónica", description: "Tonic", price: "2,20 €", section: "Bebidas" },
  { name: "Laccao", description: "Laccao", price: "2,20 €", section: "Bebidas" },
  { name: "Bitter Kas", description: "Bitter Kas", price: "2,50 €", section: "Bebidas" },
  { name: "Red Bull", description: "Red Bull", price: "2,90 €", section: "Bebidas" },
  { name: "Zumo natural", description: "Natural juice", price: "2,50 €", section: "Bebidas" },
  {
    name: "Zumo botellín",
    description: "Piña / melocotón / naranja",
    price: "2,20 €",
    section: "Bebidas",
  },
  { name: "Agua", description: "Water", price: "2,00 €", section: "Bebidas" },
  { name: "Agua con gas", description: "Sparkling water", price: "2,20 €", section: "Bebidas" },

  // --- Café ---
  { name: "Solo", description: "Espresso", price: "1,40 €", section: "Café" },
  { name: "Cortado", description: "Cut coffee", price: "1,60 €", section: "Café" },
  { name: "Con leche", description: "Coffee with milk", price: "1,70 €", section: "Café" },
  {
    name: "Con soja / avena",
    description: "Coffee with soy / oats",
    price: "1,80 €",
    section: "Café",
  },
  { name: "Americano", description: "Americano", price: "1,70 €", section: "Café" },
  { name: "Cappuccino", description: "Cappuccino", price: "2,20 €", section: "Café" },
  { name: "Latte", description: "Latte", price: "2,20 €", section: "Café" },
  { name: "Carajillo", description: "Carajillo", price: "2,35 €", section: "Café" },

  // --- Infusiones ---
  { name: "Té verde", description: "Green tea", price: "1,70 €", section: "Infusiones" },
  { name: "Té rojo", description: "Red tea", price: "1,70 €", section: "Infusiones" },
  { name: "Té negro", description: "Black tea", price: "1,70 €", section: "Infusiones" },
  { name: "Poleo menta", description: "Mint", price: "1,70 €", section: "Infusiones" },
  { name: "Manzanilla", description: "Chamomile", price: "1,70 €", section: "Infusiones" },
  { name: "Frutas del bosque", description: "Forest fruit", price: "1,70 €", section: "Infusiones" },
  { name: "Tila", description: "Linden tea", price: "1,70 €", section: "Infusiones" },
  { name: "Té jazmín", description: "Jasmine tea", price: "1,90 €", section: "Infusiones" },
];

const comidas: MenuItem[] = [
  // --- Para picar ---
  { name: "Judía de soja", description: "Edamame / soja", price: "2,95 €", section: "Para picar" },
  { name: "Rollitos fritos", description: "Fried rolls", price: "4,50 €", section: "Para picar" },
  { name: "Pan fritas", price: "3,95 €", section: "Para picar" },
  { name: "Empanadillas fritas", description: "Fried dumplings (pork)", price: "4,50 €", section: "Para picar" },
  { name: "Empanadillas al vapor", description: "Dumplings (chicken)", price: "4,70 €", section: "Para picar" },
  { name: "Pollo frito", description: "Fried chicken", price: "3,50 €", section: "Para picar" },
  { name: "Boniato frito", description: "Fried sweet potato", price: "4,50 €", section: "Para picar" },
  { name: "Gamba frita", description: "Fried shrimp", price: "4,50 €", section: "Para picar" },
  { name: "Pato frito", description: "Fried duck", price: "8,95 €", section: "Para picar" },
  { name: "Pincho de pollo", description: "Chicken skewer", price: "4,20 €", section: "Para picar" },
  { name: "Alitas fritas", description: "Fried wings", price: "4,50 €", section: "Para picar" },
  { name: "Nuggets de pollo", description: "Chicken nuggets", price: "4,00 €", section: "Para picar" },
  { name: "Pollo a la plancha", description: "Grilled chicken", price: "4,50 €", section: "Para picar" },
  { name: "Lomo a la plancha", description: "Grilled pork", price: "4,20 €", section: "Para picar" },
  { name: "Calamar a la romana", description: "Fried calamari", price: "6,50 €", section: "Para picar" },

  // --- Platos ---
  { name: "Arroz tres delicias", description: "Three fresh fried rice", price: "4,50 €", section: "Platos" },
  { name: "Arroz con ternera", description: "Beef fried rice", price: "6,50 €", section: "Platos" },
  { name: "Arroz con pollo", description: "Chicken fried rice", price: "5,50 €", section: "Platos" },
  { name: "Arroz con gamba", description: "Shrimp fried rice", price: "6,50 €", section: "Platos" },
  { name: "Tallarines con ternera", description: "Noodles with veal", price: "7,95 €", section: "Platos" },
  { name: "Tallarines con pollo", description: "Noodles with chicken", price: "7,20 €", section: "Platos" },
  { name: "Tallarines con gamba", description: "Noodles with shrimp", price: "7,95 €", section: "Platos" },
  { name: "Fideos de ternera", description: "Noodles with veal", price: "6,95 €", section: "Platos" },
  { name: "Fideos de pollo", description: "Noodles with chicken", price: "7,20 €", section: "Platos" },
  { name: "Fideos de marisco", description: "Noodles with seafood", price: "7,95 €", section: "Platos" },
  { name: "Lomo plancha con patatas", description: "Grilled pork with potatoes", price: "6,95 €", section: "Platos" },
  { name: "Pollo frito con patatas", description: "Fried chicken with potatoes", price: "6,95 €", section: "Platos" },
  { name: "Alitas fritas con patatas", description: "Fried wings with potatoes", price: "6,95 €", section: "Platos" },
  { name: "Carne deshebrada con pimientos", description: "Shredded meat with peppers", price: "6,50 €", section: "Platos" },
  { name: "Ternera salteada con salsa extra", description: "Veal sautéed with extra sauce", price: "7,95 €", section: "Platos" },
  {
    name: "Pollo crujiente con salsa agridulce",
    description: "Crispy chicken with sweet and sour sauce",
    price: "7,00 €",
    section: "Platos",
  },
  {
    name: "Pollo salteado con almendras",
    description: "Fried chicken with almonds",
    price: "7,00 €",
    section: "Platos",
  },
  { name: "Chipirones fritos", description: "Fried baby squid", price: "10,00 €", section: "Platos" },

  // --- Bocadillos ---
  { name: "Jamón serrano", description: "Serrano ham", price: "4,50 €", section: "Bocadillos" },
  { name: "Queso curado", description: "Cured cheese", price: "4,20 €", section: "Bocadillos" },
  { name: "Sobrasada", description: "Sobrasada", price: "4,50 €", section: "Bocadillos" },
  { name: "Chorizo", description: "Sausage", price: "4,20 €", section: "Bocadillos" },
  { name: "Atún", description: "Tuna", price: "4,20 €", section: "Bocadillos" },
  {
    name: "Mixto jamón y queso",
    description: "Mixed ham and cheese",
    price: "5,50 €",
    section: "Bocadillos",
  },
  {
    name: "Pepito de lomo",
    description: "Lomo, bacon, cheese",
    price: "5,50 €",
    section: "Bocadillos",
  },
  { name: "Pollo frito", description: "Fried chicken", price: "5,50 €", section: "Bocadillos" },
  { name: "Tortilla de patatas", description: "Spanish omelette", price: "4,50 €", section: "Bocadillos" },

  // --- Pa amb oli ---
  { name: "Jamón serrano", description: "Serrano ham", price: "5,50 €", section: "Pa amb oli" },
  {
    name: "Serrano y queso",
    description: "Serrano ham and cheese",
    price: "5,50 €",
    section: "Pa amb oli",
  },
  { name: "Lomo", description: "Pork chops", price: "9,50 €", section: "Pa amb oli" },
  {
    name: "Lomo con queso",
    description: "Pork chops with cheese",
    price: "12,50 €",
    section: "Pa amb oli",
  },
];

const tabs: TabConfig[] = [
  { id: "bebidas", label: "Bebidas", items: bebidas },
  { id: "comidas", label: "Comidas", items: comidas },
];

export default function MenuPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fondo con el logo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/logo-invertido.png"
          alt="Logo Bar Romantime"
          width={600}
          height={600}
          className="opacity-40 blur-[1px]"
        />
      </div>

      {/* Contenido del menú */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-14 pb-24">
        <header className="mb-8 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Carta
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Menú Romantime
          </h1>
          <p className="max-w-2xl text-sm text-neutral-300">
            Explora la carta de Romantime dividida en bebidas y comidas. Usa las
            pestañas para cambiar de sección y navega por los productos en bloques
            cómodos.
          </p>
        </header>

        <TabsMenu tabs={tabs} />
      </div>
    </div>
  );
}

