interface Point {
    x:number, 
    y:number
}

interface Vehicle{
    currentLocation:Point;
    travelTo(point:Point):void;

}

class Taxi implements Vehicle{
    //..
    currentLocation:Point;
    travelTo(point:Point):void{
        console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`)

    }
}

class Bus implements Vehicle{
    //..
    currentLocation:Point;
    travelTo(point:Point):void{
        console.log(`Otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.`)

    }

}

let taxi_1:Taxi= new Taxi();
//let taxi_1 = new Taxi();
taxi_1.travelTo({x:1, y:2})
taxi_1.currentLocation = {x:2, y:5}
console.log(taxi_1.currentLocation.x)
console.log(taxi_1.currentLocation.y)


let taxi_2 = new Taxi();
taxi_2.travelTo({x:9, y:4})
taxi_2.currentLocation = {x:3, y:6}

let bus_1=new Bus();
bus_1.travelTo({x:8, y:1})