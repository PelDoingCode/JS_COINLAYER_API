###### Repository to add a relevant example to COINLAYER crypto-price API documentation : [CoinLayer](https://coinlayer.com/) :zap:

#### How to get the price from CoinLayer in your web page using **JQUERY** and **AJAX** ? :dragon_face:

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

###### Here is, for me the easiest way to do it using ES6 : (copy paste the code in app.js not this one :warning:)

Here is the code from app.js file but explained, like that you can more easily adapt it.

Create a variable to add your public key (the one in used doesn't work, use yours) to make your code more lisible :
```
let endpoint = 'live'
let access_key = 'b93a2f2c2e7899142fc061d693de0dc5'
```


Then use _querySelector_ or _getElementById_ to target where you want to add the price : 

```
const apiCall = (selector, options = {}) => {
  const divBTC = document.querySelectorAll(".btc-price");
  const divLTC = document.querySelectorAll(".ltc-price");
  const divETH = document.querySelectorAll(".eth-price");
```

Here is a way to make price more lisible for human using the comma system, do not hesitate to change it : 
```
   function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
```

Now that we have retreive all event where we want to display price, we want to call the price when we need it :

API call : 
```
  if(divBTC || divLTC || divETH) {
    $.ajax({
      url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,
      dataType: 'jsonp',
      success: function(json) {
```
Then we need to get the live price of _BTC_, _ETH_ and _LTC_ from the JSON :
```
          const btcPrice = json.rates.BTC;
          divBTC.forEach((element) => {
            # console.log(element.parentElement.querySelector(".btc-parent").innerHTML);
            let constant = element.parentElement.querySelector(".btc-parent").innerHTML;
            # console.log(constant);
            constant = constant*btcPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })
```

The same for LTC :


          const ltcPrice = json.rates.LTC;
          divLTC.forEach((element) => {
            # console.log(element.parentElement.querySelector(".btc-parent").innerHTML);
            let constant = element.parentElement.querySelector(".ltc-parent").innerHTML;
            # console.log(constant);
            constant = constant*ltcPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          }) ```


The same for ETH :

```
          const ethPrice = json.rates.ETH;
          divETH.forEach((element) => {
            # console.log(element.parentElement.querySelector(".btc-parent").innerHTML);
            let constant = element.parentElement.querySelector(".eth-parent").innerHTML;
            # console.log(constant);
            constant = constant*ethPrice;
            element.insertAdjacentHTML("beforeend", "Current value : $" + " " + numberWithCommas(Math.floor(constant)));
          })
          # here is the way to make a test
          # console.log(json.rates);
      }
    });
  }
};
```
















-----------------------------------------------------------------------------------------------------------------------------

Come follow my Github account for more content :nerd_face: : :point_right: https://github.com/PelDoingCode :point_left: 	
