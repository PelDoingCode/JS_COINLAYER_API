###### Repository to add example to COINLAYER crypto-price API : [CoinLayer](https://coinlayer.com/) :zap:

#### How to get the price from CoinLayer in your web page using **JQUERY** and **AJAX** ? 

Four steps  :desktop_computer: : 

1. Sign to [CoinLayer](https://coinlayer.com/), choose your plan (take free plan to test 500 free calls) : and get your API key
2. Call [CoinLayer](https://coinlayer.com/) API using Ajax to retreive information you want in a JSON
3. Improve your Ajax call to fetch only the data you want in the JSON to optimise the API call and the speed
4. Use Javascript (ES6) to interact with the DOM using events

-----------------------------------------------------------------------------------------------------------------------------

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














-----------------------------------------------------------------------------------------------------------------------------

Come follow my Github account for more content :nerd_face: : :point_right: https://github.com/PelDoingCode :point_left: 	
