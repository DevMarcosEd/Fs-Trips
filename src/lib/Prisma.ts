// Configuração para o uso do Prisma (Para conseguir se conectar com o Prisma) - (Só inicializar uma client de Prisma por seção)

// Importa o PrismaClient do pacote '@prisma/client'
import { PrismaClient } from '@prisma/client';

// Cria um objeto globalForPrisma que será usado para armazenar a instância do PrismaClient
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Exporta a instância do PrismaClient como 'prisma'
// Caso já exista uma instância global de prisma (globalForPrisma.prisma),
// será utilizada essa instância; caso contrário, será criada uma nova instância.
export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'], // Habilita o log apenas para as queries (opções disponíveis: 'query', 'info', 'warn', 'error')
    });

// Se o ambiente não for de produção, o seguinte acesso a globalForPrisma.prisma é feito
// O objetivo provavelmente é garantir que a instância exista e não criar uma nova em ambientes de desenvolvimento.
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma;
