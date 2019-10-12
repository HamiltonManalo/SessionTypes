namespace StateMachine {
    
    class LightChanger {
        private _location: Country
        private _communicatingWith: Country
        private _currentLightColor: number
        private _lastLightColor: LightColor
        private _lightSeries: LightColor[]
        get LightColor() {
            return this._currentLightColor
        }
        constructor(location: Country, communicatingWith: Country) {
            this._location = location
            this._communicatingWith = communicatingWith
            if(communicatingWith === Country.UK)
                this._lightSeries = [LightColor.Green, LightColor.Orange, LightColor.Red, LightColor.Orange]
            else if(communicatingWith === Country.US)
            this._lightSeries = [LightColor.Green, LightColor.Orange, LightColor.Red]
        }
        public ChangeTo = (newColor: LightColor) => {
            if(this._location === this._communicatingWith) {
                switch(this._location) {
                    case Country.UK: 
                        this.ChangeUkLights(); 
                        break; 
                    case Country.US: 
                        this.ChangeUsLights(); 
                        break;
                }
                return
            }

            if(this._location === Country.UK && this._communicatingWith === Country.US) {
                this.ChangeUkToUs()
                return
            } else if(this._location == Country.US && this._communicatingWith === Country.UK ) {
                this.ChangeUsToUk()
                return
            }
            throw new Error("Unexpected event! Oh my!")
        }
        private ChangeUkLights = () => {
            if(this._currentLightColor > (this._lightSeries.length - 1)) 
                this._currentLightColor = 0; 
            else 
                this._currentLightColor++;  
        }

        private ChangeUsLights = () => { 
            if(this._currentLightColor > (this._lightSeries.length - 1)) 
                this._currentLightColor = 0; 
            else 
                this._currentLightColor++;  
        }

        private ChangeUsToUk = () => {
            if(this._currentLightColor > (this._lightSeries.length - 1)) {
                this._currentLightColor = 0
            } else 
                this._currentLightColor++

        }

        private ChangeUkToUs = () => {
        }
    }    
    enum LightColor {
        Green = 0,
        Orange = 1,
        Red = 2
    }
    enum Country {
        UK = 0,
        US = 1
    }
}