class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
 
  sayHello() {
    console.log("Hello, my name is "+ this.name);
  }
}
 
var sarah = new User("Sarah", "sarah@aol.com");
sarah.sayHello();