// ==UserScript==
// @name          Youtube Music Only
// @description   Faz com que o YouTube Music seja apenas músicas.
// @namespace     CowanMUSIC
// @license       CowBas
// @version       1.0
// @author        Cowanbas
// @match         *://*/*
// @match         *://music.youtube.com/*
// @run-at        document-start
// ==/UserScript==

(function () {
  'use strict';

  // Cor do player
  const Cor = '#030303';

  // Remove apenas o vídeo, substituindo por uma cor sólida. NÃO remove overlays nem animações.
  function removerVideoEAjustarCor() {
    // Remove elementos de video e imagem do player.
    const selectors = [
      'video',
      'ytd-player',
      '#movie_player',
      '.html5-video-player',
      'ytmusic-player-bar video',
      '.ytp-cued-thumbnail-overlay-image',
      '.ytp-chrome-bottom',
      '.video-stream',
      '.ytp-iv-video-content',
      'ytmusic-player #song-image',
      'ytmusic-player img#img',
      '.background.ytmusic-player-page',
      '.image.ytmusic-player-bar'
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.display = 'none';
        if (el.parentElement) {
          el.parentElement.style.background = Cor;
          el.parentElement.style.backgroundImage = 'none';
          el.parentElement.style.backgroundColor = Cor;
        }
      });
    });

    // Remove o elemento de video.
    const songMedia = document.getElementById('song-media-window');
    if (songMedia) {
      songMedia.style.display = 'none';
    }
  }

  // Certificar-se de que o vídeo não está aparecendo
  const observer = new MutationObserver(removerVideoEAjustarCor);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  removerVideoEAjustarCor();
})();
