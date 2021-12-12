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
    var liText = '', liList = $('#result li'), listForRemove = [];

$(liList).each(function () {
    
  var text = $(this).text();

  if (liText.indexOf('|'+ text + '|') == -1)
    liText += '|'+ text + '|';
  else
    listForRemove.push($(this));
    
});
    
$(listForRemove).each(function () { $(this).remove(); });

   });
  });
  
  $('#result').on('click', 'li', function() {
        $('#result').html('');
        $('#locationdivul').html('');
        $('#state').val('');
        $('#locationdivul').append('<h2>'+$(this).text().split('|')[0]+'</h2>')
        var searchField = $(this).text().split('|')[0]
        var expression = new RegExp(searchField, "i");
        $("#locationdiv").css("display", "block");
        $.getJSON('locations.json', function(data) {
         $.each(data, function(key, value){
          if (value.Zones__name.search(expression) != -1)
          {
           $('#locationdivul').append('<li class="list-group-item link-class"><input type="checkbox" id="cb'+value.id+'" checked>'+value.location_name+'</li>');
          }
         });   
        }); 
  });
 });

 function printit(){
  var result = [].map.call(document.getElementById("locationdivul").getElementsByTagName("input"), function(o) {
    if(o.checked){
      var thisid = o.id.replace('cb', '');
      return thisid;
    }
});

console.log(result);
window.location="/avolables/printpage?locations="+result;
 }


