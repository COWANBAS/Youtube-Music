# YOUTUBE APENAS MUSIC

O user script faz com que o youtube music rode apenas as musicas sem rodar os videos ou mostrar a capa dos albums 

# COMO FUNCIONA?

* Função para substituir cor de fundo

Coloca as cores nativas do youtube no modo escuro sobre o video/album.

![image](https://github.com/user-attachments/assets/2e5fce3e-8626-4fec-baa7-475963cd8898)

*Função principal: removerVideoEAjustarCor
Tem como objetivo esconde vídeos e imagens do player, e coloca uma cor sólida no lugar, Definindo uma lista de seletores CSS de elementos relacionados a vídeo/imagem no YouTube Music.

![image](https://github.com/user-attachments/assets/9bbf64a2-2f5f-4442-8a8d-22adb41ae0ed)

Para cada seletor, encontra todos os elementos na página e esconde eles, troca o fundo do elemento pai para a cor definida (#030303), removendo qualquer imagem de fundo, esconde especificamente o elemento com id="song-media-window" se existir (usado em algumas interfaces do YouTube Music).

