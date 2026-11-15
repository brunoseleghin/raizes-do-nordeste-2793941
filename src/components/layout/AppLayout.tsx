import { Suspense } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { Heart, Receipt, User, UtensilsCrossed } from "lucide-react"
import PageLoading from "./PageLoading"

// Navegação principal: barra inferior no celular, links no topo a partir do tablet
const navItems = [
  { to: "/cardapio", label: "Cardápio", icon: UtensilsCrossed },
  { to: "/pedidos", label: "Pedidos", icon: Receipt },
  { to: "/fidelidade", label: "Xodó", icon: Heart },
  { to: "/privacidade", label: "Conta", icon: User },
]

export default function AppLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="font-semibold">
            Raízes do Nordeste
          </Link>
          <nav aria-label="Principal" className="hidden gap-6 md:flex">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "font-semibold" : "text-muted-foreground hover:text-foreground"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* pb-24 no celular para o conteúdo não ficar atrás da barra inferior */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4 pb-24 md:pb-8">
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </main>

      <nav aria-label="Principal" className="fixed inset-x-0 bottom-0 border-t bg-background md:hidden">
        <ul className="grid grid-cols-4">
          {navItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex h-16 flex-col items-center justify-center gap-1 text-xs ${
                    isActive ? "font-semibold text-foreground" : "text-muted-foreground"
                  }`
                }
              >
                <Icon className="size-5" aria-hidden="true" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}