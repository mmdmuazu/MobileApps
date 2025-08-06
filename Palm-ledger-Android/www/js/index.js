let dataBase = {};
const get = (e) => document.querySelector(`input[name='${e}']`)

const name = get("customer_name");
const product = get('product_name');
const quantity = get("quantity");
const price = get("price");
const paid = true ? get("paid").checked : false;


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    const loader = document.getElementById('loader');
    loader.style.display = "none";
    console.log("paid" + paid)

}

