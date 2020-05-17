  # Spec API COINLAYER for Bitcoin price for example 

## An easy way to get cryptocurrency price on your webapp :alien: : 

###### :zap: Repository to add a relevant example to COINLAYER crypto-price API documentation : [CoinLayer](https://coinlayer.com/) :zap:

#### How to get the price from CoinLayer in your web page using **JQUERY** and **AJAX** ? :dragon_face:

* Four steps  :desktop_computer: : 

1. Sign to [CoinLayer](https://coinlayer.com/), choose your plan (take free plan to test 500 free calls) : and get your API key
2. Call [CoinLayer](https://coinlayer.com/) API using Ajax to retreive information you want in a JSON
3. Improve your Ajax call to fetch only the data you want in the JSON to optimise the API call and the speed
4. Use Javascript (ES6) to interact with the DOM using events

----------------------------------------------------------------------------------------------------------------------------
###### :warning: Use the code in app.js in the repository, and be carefull below I did the code to go from FIAT to crypto, in app.js it's the opposite


##  Simple API call to get the price of BTC :  
###### Here I use CoinLayer to get crypto price in USD, feel free to change the query to have them in another FIAT
The "endpoint" tag allow you to acces the last price update of CoinLayer.

* The fetch of your API call is in the _json.rates_.
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


##  Lets say now we have an online shop that accept _Bitcoin_, _Ethereum_ and _Litecoin_, we want to add the price in these crypto-currencies : 

###### Here is for me the easiest way to do it using ES6 : (copy paste the code in app.js not this one :warning:)

Here is the code from app.js file but explained, like that you can more easily adapt it.

* Create a variable to add your public key (the one in used doesn't work, use yours) to make your code more lisible :
```
let endpoint = 'live'
# replace here by your key from coinlayer (this one doesn't work of course :trollface:) 
let access_key = 'b93a2f2c2e7899342fc061d693de0dc5'
```


* Then use _querySelector_ or _getElementById_ to target where you want to add the price : 

```
const apiCall = (selector, options = {}) => {
  const divBTC = document.querySelectorAll(".btc-price");
  const divLTC = document.querySelectorAll(".ltc-price");
  const divETH = document.querySelectorAll(".eth-price");
```

* Here is a way to make price more lisible for human using the comma system, do not hesitate to change it : 

*Only useful for huge amount in crypto currency.....* <Enter>
 *To have a better display do not hesitate (especially for BTC) to talk in sats or whatever to have a better number and not something like 0.000123456 for example*
    
```
   function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
```

* Now that we have retreive all event where we want to display price, we want to call the price when we need it.

API call : 
```
  if(divBTC || divLTC || divETH) {
    $.ajax({
      url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,
      dataType: 'jsonp',
      success: function(json) {
```
* Then we need to get the live price of _BTC_, _ETH_ and _LTC_ from the JSON :

* Here for BITCOIN : 
```
          const btcPrice = json.rates.BTC;
```
* Then we need to add the price to the place we want and do the conversion from the FIAT currency of the website to Bitcoin : 
```
          divBTC.forEach((element) => {
            # little console.log to se what we get 
            # console.log(element.parentElement.querySelector(".price-parent").innerHTML);
            
            # here we access the parent of where we want to display the price which is the price in FIAT
            let fiat_amount = element.parentElement.querySelector(".price-parent").innerHTML;
            # console.log(fiat_amount);
            
            # then we convert the amount of the price in FIAT to BTC
            constant = fiat_amount/btcPrice;
            element.insertAdjacentHTML("beforeend", "Current value in BTC" + " " + numberWithCommas(constant));
          })
```

* The same for LTC :


          const ltcPrice = json.rates.LTC;
          divLTC.forEach((element) => {
            let constant = element.parentElement.querySelector(".price-parent").innerHTML;
            constant = constant/ltcPrice;
            element.insertAdjacentHTML("beforeend", "Current value in LTC" + " " + numberWithCommas(constant));
          }) ```


* The same for ETH :

```
          const ethPrice = json.rates.ETH;
          divETH.forEach((element) => {
            let constant = element.parentElement.querySelector(".price-parent").innerHTML;
            constant = constant/ethPrice;
            element.insertAdjacentHTML("beforeend", "Current value in ETH" + " " + numberWithCommas(constant));
          })
          # here is the way to make a test to have acces to all the JSON from CoinLayer
          # console.log(json.rates);
      }
```

## Now some HTML code to explain a bit more the code : 

#### Example of HTML code to display crypto price using the code above : 

* Reminder of how the code above works : 

We used ```document.querySelectorAll(".btc-price");``` to display the code beforend in class tag, and also ```parentElement.querySelector(".price-parent").innerHTML```to get the value 'The_price' which refers to the price of the product. 

```
<body>
    <div class="XXXXXXX">
        <abbr> Name_of_your_product: <i class="price-parent"> The_price </i></abbr>
        <div class="btc-price">
            <p> Value in Bitcoin </p>
        </div>
        
        <div class="eth-price">
            <p> Value in Ethereum </p>
        </div>
        
        <div class="ltc-price">
            <p> Value in Ethereum </p>
        </div>
    </div>
</body>
```

#### Here is an other example of how to display the price, if you want to display inline the API call : 
 ###### *Here is the part of the code that change :* 

* JS code : 

```
document.querySelector(".inline-price").innerHTML = "Your product worth" + " " + "$" + " " + constant;
```

* HTML code : 

```
<div class="inline-price">

</div>
```

----------------------------------------------------------------------------------------------------------------------------
#### Hope it was useful, thanks for the reading :octocat:	
Come follow my Github account for more content :nerd_face: : :point_right: https://github.com/glaiveVII :point_left: 

License: MIT :octocat:
