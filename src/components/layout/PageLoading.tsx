// Exibido enquanto uma tela carregada sob demanda ainda está baixando
export default function PageLoading() {
  return (
    <p role="status" className="py-10 text-center text-sm text-muted-foreground">
      Carregando…
    </p>
  )
}