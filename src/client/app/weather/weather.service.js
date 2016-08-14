System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '../keys'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, keys_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (keys_1_1) {
                keys_1 = keys_1_1;
            }],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(_http, _jsonp, _keys) {
                    this._http = _http;
                    this._jsonp = _jsonp;
                    this._keys = _keys;
                }
                WeatherService.prototype.getWeather = function (coords) {
                    var url = "https://api.forecast.io/forecast/" + this._keys.forecastIO + "/" + coords.latitude + "," + coords.longitude + "?callback=JSONP_CALLBACK";
                    return this._jsonp.get(url)
                        .map(function (res) { return res; })
                        .toPromise()
                        .catch(function (err) {
                        Promise.reject(err);
                    });
                };
                WeatherService.prototype.getLocation = function (coords) {
                    return this._http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + coords.latitude + "," + coords.longitude + "&key=" + this._keys.google)
                        .map(function (res) { return res.json(); })
                        .toPromise()
                        .catch(function (err) {
                        Promise.reject(err);
                    });
                };
                WeatherService.prototype.gotData = function (res) {
                    console.log('gotData: ', res);
                };
                // getWeather_rx() {
                // 	return this._http.get(URL_WEATHER)
                // 		.map((response: Response) => response.json())
                // 		.catch(this._handleError);
                // }
                WeatherService.prototype._handleError = function (err) {
                    console.log(err);
                    return Rx_1.Observable.throw(err);
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp, keys_1.Keys])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});
//# sourceMappingURL=weather.service.js.map