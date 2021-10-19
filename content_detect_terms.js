 alert('testestest.')
console.log("Chrome extension go");

//let paragraphs = document.getElementsByTagName('html')[0];
var html = document.getElementsByTagName('html')[0];
var text = html.innerHTML
var str = text
var detect = str.includes("teen")
var detect = str.includes("bbc")
if (detect=true) {
  alert('yark')
}
//for(elt of paragraphs)  {
//  elt.style['background-color'] = '#FF00FF';
//  }
console.log(detect);
