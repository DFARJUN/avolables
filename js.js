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
      $('#result').append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="100" class="img-thumbnail" />'+value.location_name+' | <span class="text-muted">'+value.Zones__name+'</span></li>');
     }
    });   
   });
  });
  
  $('#result').on('click', 'li', function() {
      location_nametxt = $(this).text().split('|')[0]
      Zones__nametxt = $(this).text().split('|')[1]
   var click_text = $(this).text().split('|');
   $('#search').val($.trim(click_text[0]));
   $("#result").html('');
   $("#locationName").html(location_nametxt);
   $("#zoneName").html(Zones__nametxt);
   $("#locationdiv").css("display", "block");
   document.getElementById("tentacles").value = 1;
  });
 });

 function printit(){
   var lablesnum = document.getElementById("tentacles").value
   window.location="/avolables/printpage?location="+location_nametxt+"&zone="+Zones__nametxt+"&lables="+lablesnum;
 }

 


