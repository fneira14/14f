// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "hola ", time: 5 },
  { text: "123", time: 8 },
  { text: "", time: 12 },
  { text: "", time: 16 },
  { text: "", time: 20 },
  { text: "", time: 25 },
  { text: "", time: 30 },
  { text: "", time: 34 },
  { text: "", time: 38 },
  { text: "", time: 42 },
  { text: "", time: 46 },
  { text: "", time: 50 },
  { text: "", time: 54 },
  { text: "", time: 58 },
  { text: "", time: 62 },
  { text: "", time: 66 },
  { text: "", time: 70 },
  { text: "", time: 74 },
  { text: "", time: 78 },
  { text: "", time: 82 },
  { text: "", time: 86 },
  { text: "", time: 90 },
  { text: "", time: 94 },
  { text: "", time: 98 },
  { text: "", time: 102 },
  { text: "", time: 106 },
  { text: "", time: 110 },
  { text: "", time: 114 },
  { text: "", time: 118 },
  { text: "", time: 122 },
  { text: "", time: 126 },
  { text: "", time: 130 },
  { text: "", time: 134 },
  { text: "", time: 138 },
  { text: "", time: 142 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);