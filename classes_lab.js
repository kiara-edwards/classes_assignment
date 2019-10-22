
// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. 
// Create 2 instances of a `Person`. Print one of their first names.


// b. Write a method in `Person` called `fullName` that will return a formatted string of an 
// instance's full name. Call this method on both the instances you created in part a.


class Person{
    constructor(firstName, lastName, middleName){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    };
};
let jake = new Person("Jake", "Edwards", "Andy");
let andrea = new Person("Andrea", "McDonald", "Donrita");
console.log(jake.firstName);

class Jake extends Person{
};
console.log(jake.firstName + " " + jake.lastName);


// ## Question 2

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.


// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7



class Books{
    constructor(title, author, rating){
        this.title = title
        this.author = author
        this.rating = rating
    };
    isGood(){
        let rating;
        if(this.rating >= 7){
            return true
        }else {
            return false
        };
    };
};
let iceHeart = new Books("To Kill A Mocking Bird", "CC", 9);
console.log(iceHeart.isGood());


// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to 
// `true`, set its mood property to `playful`, and log "Ruff!"

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` 
// to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a method called `toString` that returns a description of the dog:


class Dog{
    constructor(name, breed, mood, hungry){
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry;
    }
    playFetch(){
        if (this.hungry) {
            this.hungry = false;
            console.log(this.name, ` : Woof!!`);
          } else {
            console.log(this.name, ` doesn't look hungry`)
          }
    }
    feed(){
        if (this.hungry) {
            this.hungry = false;
            console.log(this.name, ` : Woof!!`);
          } else {
            console.log(this.name, ` doesn't look hungry`)
          }
    }
    toString() {
        let feeding = 'not hungry';
        if (this.hungry){
          feeding = 'hungry';
        }
        return (`${this.name} is a ${this.mood} and ${feeding} ${this.breed}`);
      }
};

let dog1 = new Dog('Smoky', 'Beagle', 'Playful', false);
let dog2 = new Dog("Midnight", "Black Golden Retriever", "playful", true);
let dog3 = new Dog("Storm", "Blue Nose Pit Bull", "Relax", false);
console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(``);



// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. 
// Give them all values equal to the freezing point of water.

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    Kelvin: 273
};
console.log(`The water's freezing temperature :`, freezingPoint);



// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
class Celsius{
    constructor(celsius){
        this.celsius = celsius
    }
    getFahrenheitTemp(){
        return 1.2 * this.celsius + 32
    }
    getKelvinTemp(){
        return this.celsius + 273
    }
    isBelowFreezing(){
      return   (this.celsius > freezingPoint.celsius)
    }
};

let outsideTempt = new Celsius(10);
console.log("Outside temperature : ", outsideTempt.celsius, "C");
console.log("Outside temperature : ", outsideTempt.getFahrenheitTemp(), "F");
console.log("Outside temperature : ", outsideTempt.getKelvinTemp(), "K");


// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).

let temp1 = new Celsius(-20);
let temp2 = new Celsius(32);
let temp3 = new Celsius(-2);

console.log(temp1.celsius, `is bellow the freezing temperature`, temp1.isBelowFreezing());
console.log(temp2.celsius, `is bellow the freezing temperature`, temp2.isBelowFreezing());
console.log(temp3.celsius, `is bellow the freezing temperature`, temp3.isBelowFreezing());




// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`

// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.

// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."

class Movie{
    constructor(name, year, genre, cast, description){
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.cast = cast;
        this.description = description;
    };
    blurb(){
        return this.name+' came out in '+this.year+'. \nIt\'s a '+this.genre+' movie starring '+this.cast[0]+ '  '+this.description
    };
};

let myMovie = new Movie("Brideshead Revisited", 2008, "Britsh Drama", 
 ["Matthew Goode as Charles Ryder,Ben Whishaw as Lord Sebastian Flyte, Hayley Atwell as Lady Julia Flyte, ect." ],
"Befriended by aristocrat Sebastian Flyte (Ben Whishaw), Oxford student Charles Ryder (Matthew Goode) finds that the power and privilege experienced by the family is seductive. On a visit to Brideshead, the ancestral home, he falls in love with his friend's sister, Julia (Hayley Atwell). However, as Charles' ties to Sebastian and family deepen, he finds himself at odds with their strong Roman Catholicism.",);

console.log(myMovie.blurb())




// ## Question 6

// Write a class Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)


class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(vec){
        let vect = new Vector;
        vect.x = this.x + vect.x;
        vect.y = this.y + vect.y
        return vect;
    }
    minus(vec){
        let vect = new Vector;
        vect.x = this.x - vect.x;
        vect.y = this.y - vect.y;
        return vect;
      }
      getLength() {
        return Math.hypot(this.x, this.y);
      }
}


let vec1 = new Vector(1, 2);
let vec2 = new Vector(2, 3);
console.log("The sum of ", vec1, " and ", vec2, " is ", vec1.plus(vec2));
console.log("The difference of ", vec1, " and ", vec2, " is ", vec1.minus(vec2));

let v3 = new Vector(3, 4)
console.log('The length of ',v3, ' is ', v3.getLength());





