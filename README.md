# lgmateus.com

Portfolio pessoal de Mateus Lira — Desenvolvedor Fullstack.

**Stack:** Astro · TypeScript · CSS puro  
**Deploy:** Cloudflare Pages

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build estático em dist/
```

## Estrutura

```
src/
├── data/          # conteúdo (skills, experiência, projetos)
├── components/    # seções da página
├── layouts/       # Layout base com meta tags e CSS global
└── pages/         # index.astro monta tudo
public/            # assets estáticos (favicon, og.png)
```

Para atualizar conteúdo, edite apenas os arquivos em `src/data/`.
