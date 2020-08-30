function logItem(item) {
  console.log(item);
}

module.exports.name = "Berend";

const person = {
  name: "Maarten",
  thingToLog: function () {
    logItem(this.name);
  },
};

person.thingToLog();

logItem(this.name);

class Person {
  constructor(name) {
    this.name = name;
  }

  logSomething() {
    logItem(this.name);
  }
}

const person1 = new Person("Kasper");

person1.logSomething();
