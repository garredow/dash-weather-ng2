System.register(['@angular/core', '../card/card.component', '../hourly/hourly.component', '../daily/daily.component', './index'], function(exports_1, context_1) {
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
    var core_1, card_component_1, hourly_component_1, daily_component_1, index_1;
    var WeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            },
            function (hourly_component_1_1) {
                hourly_component_1 = hourly_component_1_1;
            },
            function (daily_component_1_1) {
                daily_component_1 = daily_component_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            WeatherComponent = (function () {
                function WeatherComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.isDataAvailable = false;
                    this.location = 'Sunnyvale, CA';
                }
                WeatherComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    window.navigator.geolocation.getCurrentPosition(function (res) {
                        // console.log('getCurrentPosition: ', res);
                        _this.getData(res.coords);
                    }, function (err) {
                        console.warn('getCurrentPosition: ', err);
                        var coords = {
                            latitude: 39.986855,
                            longitude: -75.196442
                        };
                        _this.getData(coords);
                    });
                    // this._weatherService.getWeather_rx()
                    // 	.subscribe(d
                    // 		(customers) => {
                    // 			this.weatherData = customers;
                    // 			console.log(customers);
                    // 		},
                    // 		(err) => { console.log(err); }
                    // 	);
                    // rxjsthis.weatherData = this._weatherService.getWeather_rx()
                    // .catch(err => {
                    // 	console.log(err);
                    // 	return Observable.of(true);
                    // });
                };
                WeatherComponent.prototype.getData = function (coords) {
                    var _this = this;
                    this._weatherService.getWeather(coords)
                        .then(function (res) {
                        console.log('weather res: ', res);
                        res = res._body;
                        res.currently.temperature = Math.floor(res.currently.temperature);
                        _this.weatherData = res;
                        _this.todayMax = Math.floor(res.daily.data[0].temperatureMax);
                        _this.todayMin = Math.floor(res.daily.data[0].temperatureMin);
                        // Update the body's background image. TODO: Find a better way to do this.
                        document.querySelector('body').style.backgroundImage = "url('app/assets/backgrounds/" + res.currently.icon + ".jpg')";
                        _this.isDataAvailable = true;
                    })
                        .catch(function (err) { return console.log(err); });
                    this._weatherService.getLocation(coords)
                        .then(function (res) {
                        console.log('location: ', res);
                        var city;
                        var state;
                        res.results[0].address_components.forEach(function (item) {
                            if (item.types[0] == 'locality')
                                city = item.short_name;
                            else if (item.types[0] == 'administrative_area_level_3' && !city)
                                city = item.short_name;
                            else if (item.types[0] == 'administrative_area_level_1')
                                state = item.short_name;
                        });
                        _this.location = city + ", " + state;
                    })
                        .catch(function (err) { return console.log(err); });
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'app-weather',
                        templateUrl: 'weather.component.html',
                        directives: [card_component_1.CardComponent, hourly_component_1.HourlyComponent, daily_component_1.DailyComponent],
                        providers: [index_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [index_1.WeatherService])
                ], WeatherComponent);
                return WeatherComponent;
            }());
            exports_1("WeatherComponent", WeatherComponent);
        }
    }
});
//# sourceMappingURL=weather.component.js.map