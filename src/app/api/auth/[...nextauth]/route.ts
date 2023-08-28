// Importação dos módulos e dependências necessárias
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

// Importação da instância do Prisma
import { prisma } from "@/lib/prisma";

// Configuração das opções de autenticação para o NextAuth.js
export const authOptions: AuthOptions = {
    // Definição do adaptador Prisma para armazenar as sessões de autenticação
    adapter: PrismaAdapter(prisma) as Adapter,
    // Configuração dos provedores de autenticação, neste caso, somente o Google
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!, // ID do cliente Google obtido do ambiente
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Segredo do cliente Google obtido do ambiente
        }),
    ]
};

// Criação do gerenciador de autenticação usando as opções configuradas
const handler = NextAuth(authOptions);

// Exportação do gerenciador de autenticação para o Next.js tratar as requisições GET e POST
export { handler as GET, handler as POST };
