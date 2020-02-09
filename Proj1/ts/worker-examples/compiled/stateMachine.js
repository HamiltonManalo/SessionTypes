var StateMachine;
(function (StateMachine) {
    var LightChanger = /** @class */ (function () {
        function LightChanger(location, communicatingWith) {
            var _this = this;
            this.ChangeTo = function (newColor) {
                if (_this._location === _this._communicatingWith) {
                    switch (_this._location) {
                        case Country.UK:
                            _this.ChangeUkLights();
                            break;
                        case Country.US:
                            _this.ChangeUsLights();
                            break;
                    }
                    return;
                }
                if (_this._location === Country.UK && _this._communicatingWith === Country.US) {
                    _this.ChangeUkToUs();
                    return;
                }
                else if (_this._location == Country.US && _this._communicatingWith === Country.UK) {
                    _this.ChangeUsToUk();
                    return;
                }
                throw new Error("Unexpected event! Oh my!");
            };
            this.ChangeUkLights = function () {
                if (_this._currentLightColor > (_this._lightSeries.length - 1))
                    _this._currentLightColor = 0;
                else
                    _this._currentLightColor++;
            };
            this.ChangeUsLights = function () {
                if (_this._currentLightColor > (_this._lightSeries.length - 1))
                    _this._currentLightColor = 0;
                else
                    _this._currentLightColor++;
            };
            this.ChangeUsToUk = function () {
                if (_this._currentLightColor > (_this._lightSeries.length - 1)) {
                    _this._currentLightColor = 0;
                }
                else
                    _this._currentLightColor++;
            };
            this.ChangeUkToUs = function () {
            };
            this._location = location;
            this._communicatingWith = communicatingWith;
            if (communicatingWith === Country.UK)
                this._lightSeries = [LightColor.Green, LightColor.Orange, LightColor.Red, LightColor.Orange];
            else if (communicatingWith === Country.US)
                this._lightSeries = [LightColor.Green, LightColor.Orange, LightColor.Red];
        }
        Object.defineProperty(LightChanger.prototype, "LightColor", {
            get: function () {
                return this._currentLightColor;
            },
            enumerable: true,
            configurable: true
        });
        return LightChanger;
    }());
    var LightColor;
    (function (LightColor) {
        LightColor[LightColor["Green"] = 0] = "Green";
        LightColor[LightColor["Orange"] = 1] = "Orange";
        LightColor[LightColor["Red"] = 2] = "Red";
    })(LightColor || (LightColor = {}));
    var Country;
    (function (Country) {
        Country[Country["UK"] = 0] = "UK";
        Country[Country["US"] = 1] = "US";
    })(Country || (Country = {}));
})(StateMachine || (StateMachine = {}));
