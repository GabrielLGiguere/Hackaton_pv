 alert('testestest.')
console.log("Chrome extension go");

//let paragraphs = document.getElementsByTagName('html')[0];
var html = document.getElementsByTagName('html')[0];
var text = html.innerHTML
var str = text
const pedo = ["teen", "student","petite","innocent"]
const agression = ["hole", "slapped","chocked","agressive"]
const stereotypes = ["bbc", "ebony", "tranny", "lesbian"]
var detect = str.includes(pedo)
var detect2 = str.includes(agression)
var detect3 = str.includes(stereotypes)
//var detect = str.includes("bbc")
if (detect=true) {
  alert('pedofilia')
}
if (detect2=true){
  alert('agression')
}
if (detect3=true){
  alert('stereotypes')
}
//for(elt of paragraphs)  {
//  elt.style['background-color'] = '#FF00FF';
//  }
console.log(detect);
