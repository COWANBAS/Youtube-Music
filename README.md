# YOUTUBE APENAS MUSIC

O user script faz com que o youtube music rode apenas as musicas sem rodar os videos ou mostrar a capa dos albums 

# COMO FUNCIONA?

* Função para substituir cor de fundo

Coloca as cores nativas do youtube no modo escuro sobre o video/album.

![image](https://github.com/user-attachments/assets/2e5fce3e-8626-4fec-baa7-475963cd8898)

*Função principal: removerVideoEAjustarCor
Tem como objetivo esconde vídeos e imagens do player, e coloca uma cor sólida no lugar, Definindo uma lista de seletores CSS de elementos relacionados a vídeo/imagem no YouTube Music.

![image](https://github.com/user-attachments/assets/37ed0bb2-d0d6-4208-b316-ecf2753da0f0)

Para cada seletor, encontra todos os elementos na página e esconde eles, troca o fundo do elemento pai para a cor definida (#030303), removendo qualquer imagem de fundo, esconde especificamente o elemento com id="song-media-window" se existir (usado em algumas interfaces do YouTube Music).

* Mutation Observer

![image](https://github.com/user-attachments/assets/c655fabe-aa08-49d6-b2d4-cf82fb6a5ec2)

O MutationObserver fica “vigiando” mudanças no DOM da página, empre que algo novo é adicionado (como o YouTube Music costuma atualizar o conteúdo sem recarregar a página inteira), ele chama novamente a função para esconder qualquer vídeo/imagem que aparecer.

*Execução Inicial

Garante que, assim que o script rodar pela primeira vez, ele já esconda os elementos antes de qualquer interação.

![image](https://github.com/user-attachments/assets/832da872-1364-4122-ba13-646cb038156c)

# RESUMO
O script esconde todos os vídeos e imagens do player no YouTube Music, trocando por uma cor preta sólida (#030303), funciona mesmo quando a interface do site muda dinamicamente não remove overlays ou animações, apenas os elementos visuais principais do vídeo Assim, o YouTube Music vira uma experiência só de áudio.
