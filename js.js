/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

document.onload = function addlocations() {

    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    
    //usage:
    readTextFile("locations.json", function(text){
        var data = JSON.parse(text);
        console.log(data);
        quary = data;
        myLoop(quary)
    });
  
  function myLoop(x) { 

        var element = document.getElementById("demo");

        var i, y, xLen;
        xLen = Object.keys(quary).length;
        for (i = 0; i < xLen; i++) {
          var div = document.createElement("div");
           
            var tag0 = document.createElement("h2");
            var fullname = Math.round(quary[i].avg_picking_per_hour);
            var text0 = document.createTextNode(fullname);
        }
  };
