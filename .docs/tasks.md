# Tasks — Catálogo de Lives de Xadrez

Este documento organiza a implementação descrita no [PRD](./PRD.md). Cada fase deve ser validada antes de ser marcada como concluída.

## Regras de acompanhamento

- Use `[ ]` para item pendente e `[x]` para item concluído.
- Marque uma fase como concluída somente quando suas tarefas e validações estiverem aprovadas.
- Para aprovar o layout, solicitar ao responsável um print da aplicação nas versões mobile e desktop.
- Evitar automações complexas de navegador; priorizar inspeção do código, `lint`, `build` e validação visual por prints.

## Fase 1 — Estrutura e dados ✅ Concluída

- [x] Criar os tipos TypeScript para a resposta da API e para o streamer.
- [x] Implementar a consulta a `https://api.chess.com/pub/streamers`.
- [x] Controlar os estados de dados, carregamento e erro com `useState`.
- [x] Executar a busca inicial com `useEffect`.

### Validação da fase

- [x] Confirmar que os dados retornados são exibidos ou registrados corretamente durante o desenvolvimento.
- [x] Confirmar o tratamento de carregamento, resposta vazia e falha da API.
- [x] Executar o lint e o build sem erros.
- [x] Marcar a Fase 1 como concluída após todas as validações.

## Fase 2 — Componentes e layout ✅ Concluída

- [x] Criar ou ajustar `Header`, `StreamerGrid`, `StreamerCard` e `Footer`.
- [x] Montar cada card com nome, avatar, indicador de status e link para a Twitch.
- [x] Criar o grid com abordagem mobile first: uma coluna no celular, duas ou três no tablet e seis no desktop.
- [x] Aplicar HTML semântico, textos alternativos, foco visível e contraste adequado.
- [x] Exibir no rodapé o ano atual e os direitos reservados a Willian Developer.

### Validação da fase

- [x] Confirmar visualmente alinhamento, espaçamento, legibilidade e ausência de rolagem horizontal.
- [x] Solicitar prints das versões mobile e desktop para aprovação do layout.
- [x] Confirmar que o indicador fica vermelho para online e não aparece para offline.
- [x] Confirmar que o link abre a Twitch correta em uma nova aba com segurança.
- [x] Executar o lint e o build sem erros.
- [x] Marcar a Fase 2 como concluída após a aprovação dos prints e das validações.

## Fase 3 — Atualização e paginação ✅ Concluída

- [x] Implementar o botão “Atualizar lista” e evitar cliques repetidos durante o carregamento.
- [x] Atualizar automaticamente os dados a cada 5 minutos.
- [x] Limpar o intervalo no retorno do `useEffect`.
- [x] Implementar a paginação abaixo do grid.
- [x] Indicar a página atual e desabilitar os controles sem destino.
- [x] Ao trocar de página, levar o usuário ao início do catálogo.

### Validação da fase

- [x] Confirmar que a atualização manual refaz a consulta.
- [x] Confirmar que a atualização automática ocorre sem duplicar intervalos.
- [x] Confirmar que a paginação preserva todos os itens e funciona por mouse, toque e teclado.
- [x] Confirmar que os controles respondem corretamente na primeira e na última página.
- [x] Executar o lint e o build sem erros.
- [x] Marcar a Fase 3 como concluída após todas as validações.

## Fase 4 — Revisão final

- [ ] Revisar mensagens de carregamento, erro e lista vazia.
- [ ] Remover código antigo ou não utilizado que não faça parte do catálogo.
- [ ] Conferir o projeto em larguras mobile e desktop por meio dos prints fornecidos.
- [ ] Revisar o conteúdo em relação aos requisitos e critérios de aceite do PRD.

### Validação da fase

- [ ] Executar lint e build finais sem erros.
- [ ] Confirmar que todos os critérios de aceite do PRD foram atendidos.
- [ ] Registrar eventuais pendências de filtros e favoritos como melhorias futuras.
- [ ] Marcar a Fase 4 e o projeto como concluídos somente após a aprovação final.

