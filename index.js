var price = document.querySelector('.price');

function getPrice() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var curPrice = data.bpi.USD.rate;
            price.innerHTML = curPrice;
        }
    }

    xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send();
}

function updatePrice() {
    setInterval(function () {
        getPrice();
    }, 10000);
};


getPrice();
updatePrice();