class Driver {
  constructor(name, dateObj) {
    this.name = name;
    this.dateObj = dateObj;
  }

  startDate() {
    var dateString = '';
    var newDate = new Date();
  }

}


var dateString = "Today's date is: ";

var newDate = new Date();

// Get the month, day, and year.
dateString += (newDate.getMonth() + 1) + "/";
dateString += newDate.getDate() + "/";
dateString += newDate.getFullYear();

document.write(dateString);

// Output: Today's date is: <date>



// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
