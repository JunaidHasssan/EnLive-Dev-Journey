let person = {
  firstName: "Junaid",
  lastName: "Hassan",
  greet: function () {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
};

person.greet();
