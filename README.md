###### Repository to add example to COINLAYER crypto-price API : [CoinLayer](https://coinlayer.com/) :zap:

#### How to get the price from CoinLayer in your web page using **JQUERY** and **AJAX** ? 

Four steps  :desktop_computer: : 

1. Sign to [CoinLayer](https://coinlayer.com/), choose your plan (take free plan to test 500 free calls) : and get your API key
2. Call [CoinLayer](https://coinlayer.com/) API using Ajax to retreive information you want in a JSON
3. Improve your Ajax call to fetch only the data you want in the JSON to optimise the API call and the speed
4. Use Javascript (ES6) to interact with the DOM using events

----------------------------------------------------------------------------------------------------------------------------

### 2. Simple API call to get the price of BTC :  

The "endpoint" tag allow you to acces the last price update of CoinLayer.

The fetch of your API call is in the _json.rates_.
```
endpoint = 'live'
access_key = 'YOUR_ACCESS_KEY';

$.ajax({
    url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        alert(json.rates.BTC);  
    }
});
```

To make sure it works, check your console (and network) in the inspector to check the JSON you get and where the problem is from.

### 3. Lets say now we have an online shop that accept _Bitcoin_, _Ethereum_ and _Litecoin_, we want to add the price in these crypto-currencies : 

###### Here is, for me the easiest way to do it : 

let endpoint = 'live'
let access_key = 'b93a2f2c2e7899142fc061d693de0dc5'

const apiCall = (selector, options = {}) => {
  // const divRates = document.getElementById("rates");
  const divBTC = document.querySelectorAll(".btc-price");
  const divLTC = document.querySelectorAll(".ltc-price");
  const divETH = document.querySelectorAll(".eth-price");
  // const divLTC = document.getElementById("ltc-price");
  // const divETH = document.getElementById("eth-price");
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
            // console.log(element.parentElement.querySelector(".btc-parent").innerHTML);
            let constant = element.parentElement.querySelector(".btc-parent").innerHTML;
            // console.log(constant);
            constant = constant*btcPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })

          const ltcPrice = json.rates.LTC;
          divLTC.forEach((element) => {
            // console.log(element.parentElement.querySelector(".btc-parent").innerHTML);
            let constant = element.parentElement.querySelector(".ltc-parent").innerHTML;
            // console.log(constant);
            constant = constant*ltcPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })

          const ethPrice = json.rates.ETH;
          divETH.forEach((element) => {
            // console.log(element.parentElement.querySelector(".btc-parent").innerHTML);
            let constant = element.parentElement.querySelector(".eth-parent").innerHTML;
            // console.log(constant);
            constant = constant*ethPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })

          // const ltcPrice = json.rates.LTC;
          // divLTC.insertAdjacentHTML("beforeend", ltcPrice);

          // const ethPrice = json.rates.ETH;
          // divETH.insertAdjacentHTML("beforeend", ethPrice);
          // // // exchange rata data is stored in json.rates


          // // target currency is stored in json.target
          // alert(json.target);

          // // timestamp can be accessed in json.timestamp
          // alert(json.timestamp);
          // console.log(json.rates);

      }
    });
  }
};
















-----------------------------------------------------------------------------------------------------------------------------

Come follow my Github account for more content :nerd_face: : :point_right: https://github.com/PelDoingCode :point_left: 	
