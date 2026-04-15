# Backlog

## Adicionar imagens nos projetos featured

O campo `image` já está implementado — basta fornecer os arquivos e preencher o campo em `src/data/projects.ts`.

### O que capturar

**Sistema de Ativos — Embratur**
- Screenshot da tela principal ou listagem de ativos
- Se não tiver acesso: mockup no Figma/Excalidraw ou logo da Embratur num fundo escuro

**Portal de Chamados — Embratur**
- Screenshot da tela de abertura de chamado ou painel de status
- Mesma alternativa acima se sem acesso

**TurmasUnB**
- Screenshot da interface web (se houver instância rodando)
- Screenshot da página do GitHub do projeto
- Ou print do Swagger/docs da FastAPI

### Como usar

1. Colocar os arquivos em `public/projects/` (ex: `public/projects/embratur-ativos.webp`)
2. Adicionar o campo `image` no projeto em `src/data/projects.ts`:

```ts
{
  name: "Sistema de Ativos — Embratur",
  image: "/projects/embratur-ativos.webp",
  ...
}
```

### Dicas

- Tamanho ideal: 1200×630px (16:9)
- Formato: WebP (menor) ou PNG
- Borre dados sensíveis antes de capturar sistemas internos
- Ferramenta no Linux: `flameshot` (`sudo apt install flameshot`)
- Windows: `Win + Shift + S`
