var weather = prompt("Enter the weather ( sunny, rainy, cloudy , cold ):");
document.write("<body style='height=70vh'; ' background-image: url(bg-img.jpg);'    oerflow:hidden;>"+"</body>");

if (weather) {
     var weatherLower = weather.toLowerCase();
    if (weatherLower === 'sunny') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
        '<img src="sunny.jpg" class="card-img-top " alt="...">' +
        ' <div class="card-body ">' +
        '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
        ' </div>' +
        ' </div>');
        
        
    } else if (weatherLower === 'rainy') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
        '<img src="rainy.avif" class="card-img-top " alt="...">' +
        ' <div class="card-body ">' +
        '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
        ' </div>' +
        ' </div>');

        
    } else if (weatherLower === 'cloudy') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
        '<img src="cloudy.jpg" class="card-img-top " alt="...">' +
        ' <div class="card-body ">' +
        '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
        ' </div>' +
        ' </div>');
       
    }
    else if (weather == 'cold') {
        document.write('<div class="card w-50 m-auto " style="width: 18rem;">' +
            '<img src="cold.avif" class="card-img-top " alt="...">' +
            ' <div class="card-body ">' +
            '  <h1 class="card-text text-center">' + 'its ' + weather + ' today' + '</h1>' +
            ' </div>' +
            ' </div>');
    }
   
    else {
        document.write("<div class='card' style='width:400px; height:400px; margin:auto; margin-top:100px; box-shadow: aqua ; '>" +
          "<img src='error.webp' class='card-img-top' alt='...>" +
          " <div class='card-body'>" +
          "<p class='card-text'>" +
      
          "<h1 style='margin:auto; margin-top:30px font-size:40px; font-weight: bold;  color: rgb(195, 17, 17);text-align: center; '>" +
          " Weather Not Found " +
          "</h1>" +
          "</p>" +
          "</div>" +
          " </div>")

 
}


}