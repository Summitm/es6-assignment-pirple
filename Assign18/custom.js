const mapDiv = document.querySelector("#map");

let map;

function initMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {lat:latitude, lng:longitude};

    //initiate map with current location as the center
    map = new google.maps.Map(document.getElementById("map"), {center: currentPosition, zoom:10})

    // add a marker 
    const marker = new google.maps.Marker({
        position:currentPosition,
        map:map
    });
}

function error() {
    alert("Please enable Location permission to access!");
}

try{
    if(navigator.geolocation) {
        let loc = navigator.geolocation.getCurrentPosition(initMap, error);
    }
}
catch(e) {
    alert("Unable to display map as location permission is not granted!"+e)
}
    

// else{
//     console.log("Unable to display map as location permission is not granted!")
//     mapDiv.innerHTML = "<h1>Unable to display map as location permission is not granted!</h1>";
// }

// console.log(success());