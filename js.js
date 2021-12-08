
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
          var newa = document.createElement("a");
          var locationname = quary[i].location_name+"("+quary[i].Zones__name+")";
          newa.innerHTML = locationname;
          newa.setAttribute("href",quary[i].id)
          document.getElementById("myDropdown").appendChild(newa)
        }
  };
