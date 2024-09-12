onload = () => {
    document.body.classList.remove("container");
  };

  document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('audio/Cancion.mp3');

    // Intenta reproducir el audio automáticamente
    function tryPlayAudio() {
        audio.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    }

    // Intenta reproducir el audio al cargar la página
    tryPlayAudio();

    // Crear y configurar el botón
    var playButton = document.createElement('button');
    playButton.style.position = 'fixed';
    playButton.style.bottom = '10px';
    playButton.style.right = '10px';
    playButton.style.width = '40px';
    playButton.style.height = '40px';
    playButton.style.backgroundColor = 'transparent';
    playButton.style.border = 'none';
    playButton.style.cursor = 'pointer';
    playButton.innerHTML = '';

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(playButton);

    // Reproduce el audio cuando se hace clic en el botón
    playButton.addEventListener('click', function () {
        audio.play();
    });

    // Manejar el evento de clic para intentar reproducir el audio
    document.body.addEventListener('click', function() {
        tryPlayAudio();
    });
});
