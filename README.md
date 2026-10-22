# Chess Live

Catálogo responsivo de streamers de xadrez, desenvolvido com React e TypeScript. A aplicação consome a API pública do Chess.com para apresentar canais, informar quais estão ao vivo e oferecer acesso direto à Twitch.

## Funcionalidades

- Catálogo responsivo com até seis cards por linha.
- Busca de streamers por nome.
- Ordenação por status da live ou nome.
- Indicador vermelho para streamers ao vivo.
- Atualização manual e automática a cada cinco minutos.
- Paginação com 12 streamers por página.
- Tratamento de carregamento, erro e lista vazia.
- Navegação acessível por mouse, toque e teclado.

## Executando o projeto

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run lint
npm run build
```

Os requisitos e o acompanhamento das fases estão disponíveis em [`.docs/PRD.md`](.docs/PRD.md) e [`.docs/tasks.md`](.docs/tasks.md).
