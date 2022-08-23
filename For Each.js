var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
var countryData =JSON.parse(this.response);
countryData.forEach((element) => {
  console.log(element.name,element.capital,element.flag);
  
})};