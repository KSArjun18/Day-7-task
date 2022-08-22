var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
var data =JSON.parse(request.response);
console.log(data);
var result=data.reduce((acc,curr)=>{
     return acc+curr.population;
})
console.log(result);

}
