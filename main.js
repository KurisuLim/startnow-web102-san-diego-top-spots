$(document).ready(function() {
// write your code here

$.getJSON({
    url:'./data.json',
    success : function(data) {
        //var name = data[0].name;
       // var description = data[0].description;
       // var location = data[0].location;
       // console.log(name);


      
        var dataArray = "";
        //var button =  $('button').value;

        $.each(data,function(index, item){
            dataArray += '<tr><td>'+ item.name + '</td>' + '<td>'+ item.description + '</td>' +
            '<td><a href=\"https://www.google.com/maps?q="' + item.location +
            '\"><button>Open in Google Maps</button></a> </td></tr>';

        
        });
        
        $('tbody').append(dataArray);

    }
    


})

});
