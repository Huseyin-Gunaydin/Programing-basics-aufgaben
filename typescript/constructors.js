var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
var taxi_2 = new Taxi({ x: 2, y: 5 }, "blau");
var taxi_3 = new Taxi();
