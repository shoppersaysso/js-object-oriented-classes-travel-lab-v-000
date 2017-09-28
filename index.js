class Driver {
  constructor(name, dateObj) {
    this.name = name;
    this.dateObj = dateObj;
  }

  startDate() {
    var dateString = '';
    var dateObj = new Date();
    dateString += (newDate.getMonth() + 1) + "/";
    dateString += newDate.getDate() + "/";
    dateString += newDate.getFullYear();
    return dateString
  }

}


var dateString = "Today's date is: ";

var newDate = new Date();

// Get the month, day, and year.


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
