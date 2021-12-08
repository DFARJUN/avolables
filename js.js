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
      $('#result').append('<li class="list-group-item link-class"> '+value.location_name+' | <span class="text-muted">'+value.Zones__name+'</span></li>');
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
  });
 });