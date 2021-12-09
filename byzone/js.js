var location_nametxt
var Zones__nametxt

$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function(){
   $('#result').html('');
   $('#state').val('');
   var searchField = $('#search').val();
   var expression = new RegExp(searchField, "i");
   $.getJSON('locations.json', function(data) {
    $.each(data, function(key, value){
     if (value.location_name.search(expression) != -1 || value.Zones__name.search(expression) != -1)
     {
      $('#result').append('<li class="list-group-item link-class">'+value.Zones__name+'</li>');
     }
    });   
   });
  });
  
  $('#result').on('click', 'li', function() {
    console.log("test")
        $('#locationdivul').html('');
        $('#state').val('');
        var searchField = $(this).text().split('|')[0]
        console.log(searchField);
        var expression = new RegExp(searchField, "i");
        $.getJSON('locations.json', function(data) {
         $.each(data, function(key, value){
          if (value.Zones__name.search(expression) != -1)
          {
           $('#locationdivul').append('<li class="list-group-item link-class">'+value.Zones__name+'</li>');
          }
         });   
        });      
  });
 });

 function printit(){
   var lablesnum = document.getElementById("tentacles").value
   window.location="/avolables/printpage?location="+location_nametxt+"&zone="+Zones__nametxt+"&lables="+lablesnum;
 }

 


