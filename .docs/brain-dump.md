vamos criar uma página como uma espécie de catálogo grid de lives da twich, para isso iremos utilizar a api https://api.chess.com/pub/streamers

exemplo de resposta:
{
  "streamers": [
    {
      "username": "BlunderMan",
      "avatar": "https://images.chesscomfiles.com/uploads/v1/user/324248631.32c3f4c8.50x50o.6fdea64f25a7.png",
      "twitch_url": "https://twitch.tv/blundermanyt",
      "url": "https://www.chess.com/member/BlunderMan",
      "is_live": true,
      "is_community_streamer": false,
      "platforms": [
        {
          "type": "twitch",
          "stream_url": "https://twitch.tv/blundermanyt",
          "channel_url": "https://twitch.tv/blundermanyt",
          "is_live": true,
          "is_main_live_platform": true
        },
        {
          "type": "youtube",
          "stream_url": "https://www.youtube.com/watch?v=2HZiAERau6M",
          "channel_url": "https://youtube.com/@blunder_man",
          "is_live": true,
          "is_main_live_platform": false
        }
      ]
    },
    {
      "username": "ItsMrSkyChess",
      "avatar": "https://images.chesscomfiles.com/uploads/v1/user/401982837.b3ef4966.50x50o.af8d0a090442.jpg",
      "twitch_url": "https://twitch.tv/itsmrskychess",
      "url": "https://www.chess.com/member/ItsMrSkyChess",
      "is_live": true,
      "is_community_streamer": false,
      "platforms": [
        {
          "type": "twitch",
          "stream_url": "https://twitch.tv/itsmrskychess",
          "channel_url": "https://twitch.tv/itsmrskychess",
          "is_live": true,
          "is_main_live_platform": true
        }
      ]
    }
  ]
}

crie um header centralizado com uma frase tipo: escolha sua live 
deve conter um botao de atualizar lista pra refazer a busca

crie um footer padrão sem borda apenas falando todos os direitos reservados a Willian Developer e o copyright com o ano atual

crie um grid com 6 cards para desktop e vá mantendo a responsividade a medida que a tela diminuir
lembre-se de usar o conceito de mobile first 

cada carde será composto por:
- titulo: username
- imagem: avatar
- uma bolinha verde no canto superior direito para is_live=true e vermelho para is_live=false
- botão de "ir para a live"(ou algum texto nesse sentido) com a url do twitch_url

o projeto será feito com react e typescrip usando hoocks simples como useEffect e useState 
css simples com display flex e grid

a cada 5 minutos deve atualizar a lista automaticamente 
