let person = prompt("Comprends-tu qu'il s'agit de pornographie raciste?", "Oui");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}