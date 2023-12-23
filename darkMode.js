var canvas = document.getElementById("wordcloud");
var ctx = canvas.getContext("2d");

var words = ["Palabra 1", "Palabra 2", "Palabra 3", "Palabra 4", "Palabra 5"];
var sizes = [100, 75, 50, 25, 10];

// Dibuja cada palabra en la nube.
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  var size = sizes[i];

  // Dibuja el texto de la palabra.
  ctx.fillStyle = "#000000";
  ctx.font = "16px sans-serif";
  ctx.fillText(word, Math.random() * canvas.width, Math.random() * canvas.height);

  // Dibuja el borde de la palabra.
  ctx.fillStyle = "#ffffff";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

