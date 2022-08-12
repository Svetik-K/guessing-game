class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
        return this;
    }

    guess() {
        this.result = this.minValue + Math.ceil((this.maxValue - this.minValue) / 2);
        return this.result;
    }

    lower() {
        this.maxValue = this.result;
    }

    greater() {
        this.minValue = this.result;
    }
}


module.exports = GuessingGame;
