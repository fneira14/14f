// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola amorcito ", time: 5 },
  { text: "hoy es 14 de febrero y nuevamente estamos juntos", time: 8 },
  { text: "pero han pasado muchas cosas desde hace un año...", time: 12 },
  { text: "empezamos a pololear oficialmente", time: 16 },
  { text: "amandonos con una intensidad de locos desde el primer momento", time: 20 },
  { text: "estabamos en la misma parada, buscando pega, siempre apoyándonos", time: 25 },
  { text: "yo inocentemente no advertí lo que podía pasar, a diferencia tuya", time: 30 },
  { text: "hasta que te llego una oferta laboral soñada, pero en Temuco...", time: 34 },
  { text: "me generó muchas cosas pensar que nos podiamos alejar", time: 38 },
  { text: "pero nunca dudé de nuestro amor", time: 42 },
  { text: "sin pensarlo dos veces decidí seguirte", time: 46 },
  { text: "no fue nada fácil al principio, no tenía nada seguro, sólo las ganas", time: 50 },
  { text: "me vine a Temuco contigo sin tener trabajo aún, arriesgando mucho", time: 54 },
  { text: "pero querer es poder, y sólo quería estar contigo y vivir juntos", time: 58 },
  { text: "por que me había dado cuenta que eres una mujer especial, única", time: 62 },
  { text: "y me di cuenta también de lo feliz que soy contigo", time: 66 },
  { text: "en tiempo récord encontré trabajo, y en el área que me gusta", time: 70 },
  { text: "rápidamente se acabó la incertidumbre y la presión que sentía...", time: 74 },
  { text: "y empecé a disfrutar de la vida con la persona que más amo", time: 78 },
  { text: "desde entonces hemos seguido construyendo nuestro camino", time: 82 },
  { text: "en una nueva ciudad, con nuestros primeros trabajos y viviendo solos por primera vez", time: 86 },
  { text: "dando lo mejor de nosotros, superando las dificultades juntos", time: 90 },
  { text: "pero todo ha valido la pena, por que me llena el alma estar contigo", time: 94 },
  { text: "ahora se nos viene una nueva aventura...nos vamos de nuevo", time: 98 },
  { text: "estoy muy feliz, por que estamos creciendo y cumpliendo nuestras metas", time: 102 },
  { text: "y sobre todo por que estamos juntos y nos amamos mucho", time: 106 },
  { text: "por ti me iría a vivir hasta la luna, y haría mil locuras más", time: 110 },
  { text: "sin ningún tipo de duda", time: 114 },
  { text: "eres el amor de mi vida", time: 118 },
  { text: "TE AMO", time: 122 },
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
