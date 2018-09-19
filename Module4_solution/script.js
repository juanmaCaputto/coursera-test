

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var nombre in names) {

    var firstLetter = (names[nombre]).charAt(0);
    firstLetter = firstLetter.toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[nombre]);
    } else {
      helloSpeaker.speak(names[nombre]);
    }
  }
})();