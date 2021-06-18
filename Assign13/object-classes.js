'use-strict';

class Vehicle {
    constructor(make, model, year, weight) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }

    tripcounter() {
        return this.tripsSinceMaintenance += 1;
    }

    repair() {
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }
}


class Car extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isDriving = false;
    }

    driving() {
        return this.isDriving = true;
    }

    stop() {
        if(this.isDriving === true) {
            this.isDriving = false;
            this.tripcounter();
        }
        else {
            // 
        }

        return this.isDriving;
    }

    checkTrips() {
        if(this.tripsSinceMaintenance >= 100) {
            return this.needsMaintenance = true;
        }
    }
}

const x1 = new Car("BMW", "X1", "2017", 2100);
const golfR = new Car("VW", "Golf R", "2019", 1300);
const audiQ7 = new Car("Audi", "Q7", "2018", 1900);

// x1
x1.driving();
x1.stop();
x1.driving();
x1.stop();
x1.driving();
x1.stop();
console.log(`The car is: ${x1.make}, model: ${x1.model}, year: ${x1.year}, and Gross Weight is: ${x1.weight}`);
console.log(`Does the car needs maintenace: ${x1.needsMaintenance}`);
console.log(`Total trips since last maintenance: ${x1.tripsSinceMaintenance}`);

// golfR
golfR.driving();
golfR.stop();
golfR.driving();
golfR.stop();
console.log(`The car is: ${golfR.make}, model: ${golfR.model}, year: ${golfR.year}, and Gross Weight is: ${golfR.weight}`);
console.log(`Does the car needs maintenace: ${golfR.needsMaintenance}`);
console.log(`Total trips since last maintenance: ${golfR.tripsSinceMaintenance}`);

//Audi Q7
audiQ7.driving();
audiQ7.stop();
audiQ7.driving();
audiQ7.stop();
audiQ7.driving();
audiQ7.stop();
audiQ7.driving();
audiQ7.stop();
audiQ7.driving();
audiQ7.stop();
console.log(`The car is: ${audiQ7.make}, model: ${audiQ7.model}, year: ${audiQ7.year}, and Gross Weight is: ${audiQ7.weight}`);
console.log(`Does the car needs maintenace: ${audiQ7.needsMaintenance}`);
console.log(`Total trips since last maintenance: ${audiQ7.tripsSinceMaintenance}`);


// Extra
class Plane extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isFlying = false;
    }

    flying() {
        this.checkTrips();
        if(this.needsMaintenance !== true) {
            return this.isFlying = true;
        }
        else {
            console.log("Plane cannot take-off until maintenance is done!");
            return false;
        }
    }

    landing() {
        if(this.isFlying === true) {
            this.tripcounter();
            return this.isFlying = false;
        }
    }

    checkTrips() {
        if(this.tripsSinceMaintenance >= 100) {
            return this.needsMaintenance = true;
        }
    }
}

const plane1 = new Plane("Boeing", "737", "2020", 50000);
for(let trips = 0; trips <= 102; trips++) {
    plane1.flying();
    plane1.landing();
}
console.log(`The Plane is: ${plane1.make}, model: ${plane1.model}, year: ${plane1.year}, and Gross Weight is: ${plane1.weight}`);
console.log(`Does the Plane needs maintenace: ${plane1.needsMaintenance}`);
console.log(`Total trips since last maintenance: ${plane1.tripsSinceMaintenance}`);
// try flying after the 100th trip
console.log(plane1.flying()); //Output: Plane cannot take-off until maintenance is done!
                                //false