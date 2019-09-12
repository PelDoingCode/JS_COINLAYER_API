// ENJOY

let endpoint = 'live'
let access_key = 'YOUR_API_KEY'

const apiCall = (selector, options = {}) => {
  const divBTC = document.querySelectorAll(".btc-price");
  const divLTC = document.querySelectorAll(".ltc-price");
  const divETH = document.querySelectorAll(".eth-price");

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  if(divBTC || divLTC || divETH) {
    $.ajax({
      url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,
      dataType: 'jsonp',
      success: function(json) {

          const btcPrice = json.rates.BTC;
          divBTC.forEach((element) => {
            let constant = element.parentElement.querySelector(".btc-parent").innerHTML;
            constant = constant*btcPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })

          const ltcPrice = json.rates.LTC;
          divLTC.forEach((element) => {
            let constant = element.parentElement.querySelector(".ltc-parent").innerHTML;
            constant = constant*ltcPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })

          const ethPrice = json.rates.ETH;
          divETH.forEach((element) => {
            let constant = element.parentElement.querySelector(".eth-parent").innerHTML;
            constant = constant*ethPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })
      }
    });
  }
};
