// Middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
  ctx.valor = 'mid1';
  next();
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2';
  next();
}

const passo2 = ctx => {
  ctx.valor3 = 'mid3';
} 