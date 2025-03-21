import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']), //chamado lá no package dev:test - lá que se define o MODE, aqui é só a tipagem com ZOD - as outras variaveis são no .env
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'), //é feito assim pois as variáveis de ambiente não tem tipo boolean, ela é string, então temos que fazer esswe tratamento priumeiro para transformar 'true' em true;
})

export const env = envSchema.parse(import.meta.env)
