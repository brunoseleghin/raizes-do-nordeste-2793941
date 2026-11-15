import type { Store } from "@/types"

// Ids gerados uma vez (simulando o banco); não mudam entre recargas.
export const stores: Store[] = [
  {
    id: "ce9f3398-467c-4306-b98a-015e62a7690c",
    code: "REC01",
    name: "Recife · Boa Viagem",
    district: "Boa Viagem",
    city: "Recife",
    address: "Av. Conselheiro Aguiar, 1000",
    format: "full",
    opensAt: "06:00",
    closesAt: "22:00",
    distanceKm: 1.2,
    unavailableToday: ["8ad9d00c-b6c1-4837-8800-95053eaed54e"], // bolo de macaxeira
  },
  {
    id: "56722e0d-b61f-4b19-be2d-cc05a8607d29",
    code: "REC02",
    name: "Recife · Casa Amarela",
    district: "Casa Amarela",
    city: "Recife",
    address: "Estrada do Arraial, 2500",
    format: "reduced", // cozinha reduzida (RN01)
    opensAt: "06:00",
    closesAt: "20:00",
    distanceKm: 3.8,
    unavailableToday: [],
  },
  {
    id: "a1280161-530c-455d-9828-efbf0f22cc20",
    code: "REC03",
    name: "Recife · Derby",
    district: "Derby",
    city: "Recife",
    address: "Praça do Derby, 150",
    format: "full",
    opensAt: "06:00",
    closesAt: "14:00", // fecha cedo: útil para testar unidade fechada
    distanceKm: 5.1,
    unavailableToday: [],
  },
]