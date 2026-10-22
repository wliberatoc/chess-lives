# PRD — Catálogo de Lives de Xadrez

## 1. Visão geral

Aplicação web responsiva que apresenta um catálogo de streamers de xadrez, permitindo identificar quem está ao vivo e acessar rapidamente sua transmissão na Twitch.

Os dados serão obtidos da API pública do Chess.com:

`GET https://api.chess.com/pub/streamers`

## 2. Objetivo

Facilitar a descoberta de lives de xadrez em uma interface simples, atualizada e adaptável a celulares, tablets e computadores.

## 3. Funcionamento

1. Ao abrir a página, a aplicação consulta a API do Chess.com.
2. Os streamers são exibidos em cards organizados em um grid responsivo.
3. Cada card informa nome, avatar e status da transmissão.
4. O usuário pode acessar a live pela Twitch ou atualizar a listagem manualmente.
5. A aplicação refaz a consulta automaticamente a cada 5 minutos.

## 4. Requisitos funcionais

- Exibir um cabeçalho centralizado com uma chamada como “Escolha sua live”.
- Disponibilizar o botão “Atualizar lista” para refazer a consulta à API.
- Exibir um card para cada streamer retornado, contendo:
  - nome de usuário (`username`);
  - avatar (`avatar`), com texto alternativo;
  - indicador verde quando `is_live` for `true` e vermelho quando for `false`;
  - link ou botão “Ir para a live”, usando `twitch_url`.
- Abrir links externos com segurança, preferencialmente em uma nova aba.
- Atualizar os dados automaticamente a cada 5 minutos.
- Paginar a listagem para limitar a quantidade de cards exibidos simultaneamente.
- Exibir estados de carregamento, lista vazia e erro de consulta.
- Exibir no rodapé: `© [ano atual] Willian Developer. Todos os direitos reservados.`

## 5. Layout e responsividade

A interface deve seguir a abordagem **mobile first**:

- celular: uma coluna;
- tablet: duas ou três colunas, conforme o espaço disponível;
- desktop: seis cards por linha;
- espaçamentos e largura devem impedir rolagem horizontal;
- cards devem manter aparência consistente, com avatar em destaque, título legível, indicador no canto superior direito e ação claramente identificável;
- a paginação deve aparecer abaixo do grid, com controles claros para avançar e voltar entre as páginas;
- os controles de paginação devem funcionar bem por toque e teclado, indicar a página atual e ficar desabilitados quando não houver página anterior ou seguinte;
- ao trocar de página, a interface deve levar o usuário ao início do catálogo;
- o rodapé será simples, sem borda.

O layout será construído com CSS simples, usando principalmente `display: grid` no catálogo e `display: flex` para alinhamentos internos.

## 6. Arquitetura e práticas adotadas

- React com TypeScript e Vite.
- Componentes funcionais e reutilizáveis, como `Header`, `StreamerGrid`, `StreamerCard` e `Footer`.
- `useState` para dados, carregamento e erros.
- `useEffect` para a busca inicial e o intervalo de atualização.
- Limpeza do `setInterval` no retorno do `useEffect`, evitando tarefas ativas após a desmontagem.
- Tipagem da resposta da API e das propriedades dos componentes.
- Separação entre apresentação, acesso aos dados e estilos.
- Uso de HTML semântico (`header`, `main`, `section`, `article` e `footer`).
- Acessibilidade básica: contraste adequado, foco visível, texto alternativo e botões com nomes claros.

## 7. Estados da interface

- **Carregando:** informar que a lista está sendo buscada e impedir atualizações repetidas.
- **Sucesso:** renderizar os streamers recebidos.
- **Lista vazia:** informar que nenhum streamer foi encontrado.
- **Erro:** mostrar uma mensagem amigável e permitir uma nova tentativa.
- **Atualização:** manter a interface estável enquanto os dados são renovados, sempre que possível.

## 8. Melhorias futuras
- Campo de busca para achar streamer 
- campo de ordenação com possibilidades de escolher os critérios para ela 
- Filtros para facilitar a descoberta de streamers, como exibir somente canais ao vivo.
- Favoritos para permitir que o usuário marque e encontre rapidamente seus streamers preferidos.

## 9. Critérios de aceite

- A lista é carregada a partir da API ao abrir a página.
- O botão de atualização realiza uma nova consulta.
- Uma nova consulta ocorre automaticamente a cada 5 minutos.
- Cada card apresenta corretamente nome, avatar, status e acesso à Twitch.
- O grid chega a seis colunas no desktop e se adapta a telas menores.
- A listagem é paginada e permite navegar entre os resultados sem comprometer a responsividade.
- Erros e ausência de resultados recebem mensagens compreensíveis.
- O rodapé apresenta o ano atual automaticamente e o nome Willian Developer.

