function Thermometer() {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMP = 10;
  this._maxTemp = 25;
  this._powerSave = true;
  this.LOW_ENERGY_USAGE_LIMIT = 18;
  this.HIGH_ENERGY_USAGE_LIMIT = 25
}

Thermometer.prototype.showTemp = function() {
   return this._temperature;
}

Thermometer.prototype.up = function(increase = 1) {
  if (this._temperature + increase > this._maxTemp) throw "Temperature can't go above " + this._maxTemp + "!";
  // this._temperature = this._temperature + increase;
  this._temperature += increase;
}

Thermometer.prototype.down = function(decrease = 1) {
  if (this._temperature - decrease < this.MIN_TEMP) throw "Temperature can't go below 10!";
  // this._temperature = this._temperature - decrease;
  this._temperature -= decrease;
}

Thermometer.prototype.powerSaveSwitch = function() {
  if (this._powerSave === true) {
    this._maxTemp = 32;
    this._powerSave = false;
  } else if (this._powerSave === false) {
    this._powerSave = true;
    this._maxTemp = 25;
  }
}

Thermometer.prototype.reset = function() {
  this._temperature = this.DEFAULT_TEMPERATURE;
}

Thermometer.prototype.usage = function() {
    if (this._temperature > this.LOW_ENERGY_USAGE_LIMIT && this._temperature < this.HIGH_ENERGY_USAGE_LIMIT){
      return "medium";
  } else if (this._temperature < this.LOW_ENERGY_USAGE_LIMIT) {
      return "low";
  } else if (this._temperature > this.HIGH_ENERGY_USAGE_LIMIT) {
      return "high";
  }
}
