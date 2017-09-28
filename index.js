class Driver {
  constructor(name, dateObj) {
    this.name = name;
    this.dateObj = dateObj;
  }

  startDate(dateObj) {
    dateObj = new Date();
  }

}


// var dateString = '';
// var dateObj = new Date();
// dateString += (newDate.getMonth() + 1) + "/";
// dateString += newDate.getDate() + "/";
// dateString += newDate.getFullYear();
// return dateString;