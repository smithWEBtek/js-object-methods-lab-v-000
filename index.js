class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!";
  }
  passBill(){
    return "You can do that!";
  }
  doCharity() {
    return "I like to help people.";
  }
  conductPressInterview() {
    return "I am proud to be an American.";
  }
  sayHi() {
    return "Hi, my name is " + this.name +". I am from "+ this.homeState + ". I represent the "+ this.politicalParty +"s, and was in office "+ this.yearsInOffice +".";
   }
  sayName() {
    return "Hi, my name is " + this.name;
  }
}

var gw = new President("George Washington", "Federalist", "1776-1804", "Washington");
var al = new President("Abraham Lincoln", "Democrat", "1861-1865", "Hodgenville, KY");
var rn = new President("Richard Nixon", "Republican", "1969-1974", "Yorba Linda, CA");
var jc = new President("Jimmy Carter", "Democrat", "1977-1981", "Plains, GA");
