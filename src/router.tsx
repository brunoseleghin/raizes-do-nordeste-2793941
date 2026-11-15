import { lazy, Suspense, type ReactNode } from "react"
import { createBrowserRouter } from "react-router-dom"
import AppLayout from "@/components/layout/AppLayout"
import PageLoading from "@/components/layout/PageLoading"

// Cada tela é carregada sob demanda para o primeiro acesso ser leve (RNF03)
const StoreSelectPage = lazy(() => import("@/pages/StoreSelectPage"))
const MenuPage = lazy(() => import("@/pages/MenuPage"))
const ProductPage = lazy(() => import("@/pages/ProductPage"))
const CartPage = lazy(() => import("@/pages/CartPage"))
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"))
const PaymentPage = lazy(() => import("@/pages/PaymentPage"))
const OrderStatusPage = lazy(() => import("@/pages/OrderStatusPage"))
const OrdersPage = lazy(() => import("@/pages/OrdersPage"))
const LoyaltyPage = lazy(() => import("@/pages/LoyaltyPage"))
const SignUpPage = lazy(() => import("@/pages/SignUpPage"))
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"))
const KioskPage = lazy(() => import("@/pages/KioskPage"))
const KitchenPage = lazy(() => import("@/pages/KitchenPage"))
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"))

// Totem e cozinha não usam o layout do app, então precisam do próprio Suspense
const standalone = (page: ReactNode) => <Suspense fallback={<PageLoading />}>{page}</Suspense>

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <StoreSelectPage /> },
      { path: "cardapio", element: <MenuPage /> },
      { path: "produto/:id", element: <ProductPage /> },
      { path: "carrinho", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "pagamento/:orderId", element: <PaymentPage /> },
      { path: "pedido/:id", element: <OrderStatusPage /> },
      { path: "pedidos", element: <OrdersPage /> },
      { path: "fidelidade", element: <LoyaltyPage /> },
      { path: "cadastro", element: <SignUpPage /> },
      { path: "privacidade", element: <PrivacyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  { path: "/totem", element: standalone(<KioskPage />) },
  { path: "/cozinha", element: standalone(<KitchenPage />) },
])