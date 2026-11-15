// Preços em centavos (ex.: 1890 = R$ 18,90) para evitar erro de arredondamento.

export type StoreFormat = "full" | "reduced"
export type DayPart = "breakfast" | "lunch" | "snack" | "drinks"

export interface Store {
  id: string
  code: string               // código da loja para uso humano, ex.: "REC01" (usado na URL do totem)
  name: string
  district: string
  city: string
  address: string
  format: StoreFormat        // cozinha completa ou reduzida
  opensAt: string            // "06:00"
  closesAt: string           // "22:00"
  distanceKm: number
  unavailableToday: string[] // ids de produtos em falta hoje nesta unidade
}

export interface Option {
  id: string
  name: string
  extraPrice: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  dayPart: DayPart                                         // momento do dia no cardápio
  requiresFullKitchen: boolean                             // não aparece em unidade de cozinha reduzida
  seasonal?: { label: string; start: string; end: string } // período sazonal, datas "MM-DD"
  variants?: { title: string; options: Option[] }          // escolha obrigatória (ex.: tipo de massa)
  addons?: { max: number; options: Option[] }              // adicionais opcionais
}