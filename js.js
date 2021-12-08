
document.onload = function addlocations() {
  console.log("stage1")

    function readTextFile(file, callback) {
      console.log("stage2")

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
      console.log("stage3")
        var data = JSON.parse(text);
        console.log(data);
        quary = data;
        myLoop(quary)
    });
  
  function myLoop(x) { 
    console.log("stage4")

        var element = document.getElementById("demo");

        var i, y, xLen;
        xLen = Object.keys(quary).length;
        for (i = 0; i < xLen; i++) {
          console.log("stage5")
          console.log(quary[i].location_name+"("+quary[i].Zones__name+")")

          var newa = document.createElement("a");
          var locationname = quary[i].location_name+"("+quary[i].Zones__name+")";
          newa.innerHTML = locationname;
          newa.setAttribute("href",quary[i].id)
          document.getElementById("myDropdown").appendChild(newa)
        }
  };
