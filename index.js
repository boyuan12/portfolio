var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

fetch(`https://api.nasa.gov/planetary/apod?api_key=yzDv7B1Fy3caTaVaFMfKxafmqOdCVqg2VgMVmSqj&date=${today.toString()}`)
.then(response => response.json())
.then(data => {
    if (data["media_type"] === "image") {
        document.getElementById("apod-img").setAttribute("src", data["url"]);
    } else {
        document.getElementById("apod-img").setAttribute("src", "hi");
    }
})
