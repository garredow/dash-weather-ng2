System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DailyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DailyComponent = (function () {
                function DailyComponent() {
                }
                DailyComponent.prototype.ngOnInit = function () {
                    this.data.time *= 1000;
                    this.data.temperatureMin = Math.floor(this.data.temperatureMin);
                    this.data.temperatureMax = Math.floor(this.data.temperatureMax);
                    this.iconUrl = "app/assets/icons/" + this.data.icon + ".png";
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DailyComponent.prototype, "data", void 0);
                DailyComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'daily-row',
                        templateUrl: 'daily.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DailyComponent);
                return DailyComponent;
            }());
            exports_1("DailyComponent", DailyComponent);
        }
    }
});
//# sourceMappingURL=daily.component.js.map