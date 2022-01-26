

var temp = 60;
		
$(document).ready(function () {
    $('#btnGetWeather').click(function () {
        var resultElement = $('#resultDiv');
    
        var requestData = $('#txtCity').val() + ',' + $('#txtCountry').val();
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + requestData + '&units=imperial&APPID=API KEY HERE',
            method: 'get',
            data: { q: requestData },
            dataType: 'json',
            success: function (response) {
                if (response.message != null) {
                    resultElement.html(response.message);
                }
                else {
                    resultElement.html('Weather: ' + response.weather[0].main + '<br/>'
                        + 'Description: ' + response.weather[0].description
                        + '<br/>' + 'Temperature: ' + response.main.temp + '°F');
                    temp = response.main.temp;
                    changeBack();
                }
            },
            error: function (err) {
                alert(err);
            }
        });
    });
});

function changeBack(){
if(temp<50){
    document.getElementById("body1").style.backgroundColor = 'Aqua';
}
else if(temp>70){
    document.getElementById("body1").style.backgroundColor = 'Yellow';
}
else{
    document.getElementById("body1").style.backgroundColor = 'MediumSeaGreen';
}

}
