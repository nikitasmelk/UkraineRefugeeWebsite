var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/get/helpukrainelist.com/PageVisits");
xhr.responseType = "json";
xhr.onload = function() {
  document.getElementById("visits").innerHTML = `${this.response.value} visits`;
}
xhr.send();