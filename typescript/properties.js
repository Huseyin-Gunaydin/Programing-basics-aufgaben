var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        var _a, _b;
        console.log("taksi X: " + ((_a = this._location) === null || _a === void 0 ? void 0 : _a.x) + " Y: " + ((_b = this._location) === null || _b === void 0 ? void 0 : _b.y) + "  den " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this.location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("kordinat bilgileri negatif olamaz");
            }
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
var correntLocation = taxi_1.location;
taxi_1.location = ({ x: 2, y: 5 });
