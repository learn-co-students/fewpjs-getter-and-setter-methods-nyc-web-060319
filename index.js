// Add your Circle class here
// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2

// Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
// Define setter methods for diameter, circumference, and area 
// which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly

class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        this.radius * 2
    }

    set diameter(newDiameter) {
        
        this.radius = newDiameter/2
    }

    get circumference() {
        Math.PI * this.radius 
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference/Math.PI)/2
    }

    get area(){
        this.radius**2 * Math.PI
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}