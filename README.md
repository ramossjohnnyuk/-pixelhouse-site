# PixelHouse — Landing Page para Cloudflare Pages

Landing page estática em HTML, CSS e JavaScript. Não usa banco de dados, servidor ou framework e pode ser hospedada gratuitamente no Cloudflare Pages.

## Antes de publicar

1. Abra `index.html`.
2. Procure por `55SEUNUMERO` e substitua pelo WhatsApp com DDI + DDD + número, apenas dígitos. Exemplo: `5511999999999`.
3. Troque os links `#` do footer pelos links reais do Instagram e LinkedIn.
4. Os cases e números usados nos mockups são demonstrativos. Substitua por projetos e dados reais antes de apresentar como resultados da PixelHouse.

## Teste local

Você pode abrir `index.html` diretamente no navegador. Para testar como um servidor local, rode na pasta:

```bash
python3 -m http.server 8080
```

E acesse `http://localhost:8080`.

## Publicar no Cloudflare Pages via GitHub

1. Crie uma conta gratuita no GitHub.
2. Crie um repositório, por exemplo `pixelhouse-site`.
3. Envie `index.html`, `styles.css`, `script.js` e este README para o repositório.
4. Entre no painel da Cloudflare.
5. Vá em **Workers & Pages** e crie um novo projeto de **Pages**.
6. Conecte sua conta do GitHub e selecione o repositório.
7. Como este projeto é HTML estático puro, não há etapa de build. Configure o diretório de saída como a raiz do projeto quando solicitado.
8. Faça o deploy.
9. A Cloudflare fornecerá um endereço `*.pages.dev`.

## Domínio próprio depois

Quando comprar um domínio, adicione-o em **Custom domains** no projeto do Cloudflare Pages. O site não precisa ser reconstruído.

## Estrutura

- `index.html` — conteúdo e SEO básico
- `styles.css` — Design System, responsividade e componentes
- `script.js` — animações de entrada e micro parallax

