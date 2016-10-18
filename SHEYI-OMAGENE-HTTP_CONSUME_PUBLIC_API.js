function testConnection(arg1) {
    httpGetAsync("https://api.trello.com/1/client.js?key=" + arg1, testConnectionDone);
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
        if (xmlHttp.readyState == 4 && xmlHttp.status != 200)
            callback("Error Pulling from: " + theUrl);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function testConnectionDone(arg1) {
    //span1.innerHTML = arg1;
    console.log(arg1);
    
    // Extracting details and information
    console.log("-----------------------------------------------------------------");
     console.log(arg1.split("};")[0].split("{")[2].split(",")[0]);
     console.log(arg1.split("};")[0].split("{")[2].split(",")[1]);
     console.log(arg1.split("};")[0].split("{")[2].split(",")[2]);
     console.log(arg1.split("};")[0].split("{")[2].split(",")[3]);
     console.log(arg1.split("};")[0].split("{")[2].split(",")[4]);
     var key = arg1.split("};")[0].split("{")[2].split(",")[5]
     console.log(key);
     console.log("-----------------------------------------------------------------");
     console.log("Pull for key: " + key + " was successful");
}

var key = "d626a10744b5bc9af85931bf06750c5b"
testConnection(key);   