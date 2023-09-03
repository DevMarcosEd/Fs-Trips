// Importando o NextAuthProvider de um módulo chamado "@/providers/auth"
import { NextAuthProvider } from "@/providers/auth";

// Importando um arquivo de estilo global chamado "globals.css"
import "./globals.css";

// Importando a fonte "Poppins" do pacote "next/font/google"
import { Poppins } from "next/font/google";

// Importando os componentes Header e Footer do diretório "@/components"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Configurando a fonte Poppins com algumas opções
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

// Definindo metadados do aplicativo
export const metadata = {
  title: "Fsw Trips",
  description: "Sistema de Reserva de Viagens!",
};

// Definindo um componente chamado RootLayout que recebe um filho (children)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Começa a renderização do HTML com idioma "en" (inglês)
    <html lang="en">
      <body className={poppins.className}>
        {/* 
          Inicia o contexto de autenticação com o NextAuthProvider, 
        */}
        <NextAuthProvider>
          {/* Renderiza o componente Header */}
          <Header />

          {/* Renderiza o conteúdo do filho (children) */}
          {children}

          {/* Renderiza o componente Footer */}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}

