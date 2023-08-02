"use client"

// Importação do módulo "SessionProvider" do pacote 'next-auth/react'
import { SessionProvider } from 'next-auth/react';

// Definição do tipo de props que o componente NextAuthProvider recebe
type Props = {
    children?: React.ReactNode; // "children" é uma prop opcional que pode conter elementos React como filho
};

// Componente NextAuthProvider que serve como um wrapper para o SessionProvider
export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>
}
