import type { Product } from "@/types"

// Cardápio único da rede; o que aparece em cada unidade é filtrado depois
// (cozinha reduzida, falta de estoque e período sazonal).
// Ids gerados uma vez (simulando o banco); não mudam entre recargas.
export const products: Product[] = [
  // ---------- Café da manhã
  {
    id: "7dd8e947-2870-469c-83c6-1b5a6d2e639d",
    name: "Tapioca de carne de sol",
    description: "Carne de sol desfiada com queijo coalho.",
    price: 1890,
    dayPart: "breakfast",
    requiresFullKitchen: false,
    variants: {
      title: "Massa",
      options: [
        { id: "51a96529-08cd-42ee-a940-632ffb201643", name: "Tradicional", extraPrice: 0 },
        { id: "d7455a77-7704-4e30-b9aa-61e6781c6a55", name: "Com coco", extraPrice: 200 },
      ],
    },
    addons: {
      max: 2,
      options: [
        { id: "adc2697e-d1a9-44e8-97e3-4f586db220b1", name: "Queijo coalho extra", extraPrice: 400 },
        { id: "a0aa404c-b978-437a-a6f3-503fe9ba69cd", name: "Manteiga de garrafa", extraPrice: 250 },
      ],
    },
  },
  {
    id: "d7d604aa-2980-4df2-8574-4f8ff8833a0c",
    name: "Cuscuz recheado",
    description: "Cuscuz de milho com ovo e queijo.",
    price: 1650,
    dayPart: "breakfast",
    requiresFullKitchen: false,
    addons: {
      max: 2,
      options: [
        { id: "376cec17-3a78-416d-8062-7422d8cc6cab", name: "Charque", extraPrice: 500 },
        { id: "802419d9-8f2a-47eb-98c8-5c06be0455bd", name: "Calabresa", extraPrice: 400 },
      ],
    },
  },
  {
    id: "8ad9d00c-b6c1-4837-8800-95053eaed54e",
    name: "Bolo de macaxeira",
    description: "Fatia do bolo da casa.",
    price: 900,
    dayPart: "breakfast",
    requiresFullKitchen: false,
  },
  {
    id: "de8aa22a-0732-4504-9e6d-ac9962b045f1",
    name: "Café coado",
    description: "Café passado na hora, 200 ml.",
    price: 600,
    dayPart: "breakfast",
    requiresFullKitchen: false,
  },

  // ---------- Almoço rápido (pratos que exigem cozinha completa)
  {
    id: "2e7a5a34-a4ca-4bc0-81b1-fd137f4712e0",
    name: "Baião de dois",
    description: "Arroz, feijão verde, queijo coalho e nata.",
    price: 3290,
    dayPart: "lunch",
    requiresFullKitchen: true,
  },
  {
    id: "b1e4ebd1-ab94-49c0-9a70-b2fef1a078ad",
    name: "Carne de sol com macaxeira",
    description: "Carne de sol na chapa com macaxeira.",
    price: 3890,
    dayPart: "lunch",
    requiresFullKitchen: true,
    variants: {
      title: "Acompanhamento",
      options: [
        { id: "b184e942-26d7-455c-8a4a-5f0d95a5462a", name: "Macaxeira cozida", extraPrice: 0 },
        { id: "35078357-9574-421c-bf41-2bb715e952a5", name: "Macaxeira frita", extraPrice: 300 },
      ],
    },
  },
  {
    id: "a6d43d79-642e-433f-8947-54938c5f179b",
    name: "Escondidinho de charque",
    description: "Purê de macaxeira gratinado com charque.",
    price: 2890,
    dayPart: "lunch",
    requiresFullKitchen: false, // vem pronto e só é aquecido
  },

  // ---------- Lanche da tarde
  {
    id: "1e8e09c1-d75e-4139-a89e-df9cd28d39b9",
    name: "Sanduíche de queijo coalho",
    description: "Pão francês na chapa com queijo coalho e mel de engenho.",
    price: 1450,
    dayPart: "snack",
    requiresFullKitchen: false,
  },
  {
    id: "4ba5eabd-1885-4747-91ef-236b49bb2db0",
    name: "Bolo de rolo",
    description: "Fatia com recheio de goiabada.",
    price: 1100,
    dayPart: "snack",
    requiresFullKitchen: false,
  },
  {
    id: "8f292edd-0131-405f-81e6-fc0e9e0b1c54",
    name: "Canjica",
    description: "Creme de milho com canela.",
    price: 1200,
    dayPart: "snack",
    requiresFullKitchen: false,
    seasonal: { label: "Junino", start: "06-01", end: "07-31" },
  },
  {
    id: "d144afc4-fdc9-442a-b222-43a5f1f529a8",
    name: "Pamonha",
    description: "Pamonha doce cozida na palha.",
    price: 1000,
    dayPart: "snack",
    requiresFullKitchen: false,
    seasonal: { label: "Junino", start: "06-01", end: "07-31" },
  },
  {
    id: "4188b8e4-422e-4a44-ad3a-c915a0578be2",
    name: "Bolo de rolo de castanha",
    description: "Edição de fim de ano, com castanha de caju.",
    price: 1490,
    dayPart: "snack",
    requiresFullKitchen: false,
    seasonal: { label: "Fim de ano", start: "11-01", end: "12-31" },
  },

  // ---------- Bebidas
  {
    id: "f98e3883-74d8-40c7-a9d0-71c7af846914",
    name: "Suco de cajá",
    description: "Natural, 400 ml.",
    price: 950,
    dayPart: "drinks",
    requiresFullKitchen: false,
  },
  {
    id: "0d8c5929-8985-464a-9942-b16fd55a3e2b",
    name: "Suco de graviola",
    description: "Natural, 400 ml.",
    price: 950,
    dayPart: "drinks",
    requiresFullKitchen: false,
  },
  {
    id: "38ea77d1-1020-4737-99e5-c9cf2404951b",
    name: "Café com leite",
    description: "300 ml.",
    price: 750,
    dayPart: "drinks",
    requiresFullKitchen: false,
  },
]