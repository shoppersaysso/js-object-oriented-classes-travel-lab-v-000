class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(){
    const today = new Date();
    return (this.startDate - (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
  }
}


// var dateString = '';
// var dateObj = new Date();
// dateString += (newDate.getMonth() + 1) + "/";
// dateString += newDate.getDate() + "/";
// dateString += newDate.getFullYear();
// return dateString;
