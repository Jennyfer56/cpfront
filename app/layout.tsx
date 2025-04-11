import { ReactNode } from 'react'; // Importando tipo ReactNode
import './globals.css'; // Importando estilos globais

// Layout global da aplicação
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        {/* Cabeçalho da aplicação */}
        <header style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
          <h1>Catálogo de Pandas de Pelúcia</h1>
        </header>

        {/* Corpo principal da página (conteúdo das páginas) */}
        <main>{children}</main>

        {/* Rodapé */}
        <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
          <p>© 2025 Panda Pelúcia. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  )
}
