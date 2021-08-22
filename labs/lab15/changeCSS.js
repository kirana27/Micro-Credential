function allSty(){
  /*We are going to create a button to perform multiple tasks*/

  if (document.getElementsByTagName("link")[0].getAttribute("href")==="stylesheet.css") {
    document.getElementsByTagName("link")[0].setAttribute("href","stylesheet2.css");
  }
  else if (document.getElementsByTagName("link")[0].getAttribute("href")==="stylesheet2.css") {
    document.getElementsByTagName("link")[0].setAttribute("href","stylesheet3.css");
  }
  else if (document.getElementsByTagName("link")[0].getAttribute("href")==="stylesheet3.css") {
    document.getElementsByTagName("link")[0].setAttribute("href","stylesheet4.css");
  }
  else{
    document.getElementsByTagName("link")[0].setAttribute("href","stylesheet.css");
  }
}
