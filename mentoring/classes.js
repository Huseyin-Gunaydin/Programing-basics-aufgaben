class Employee {
    constructor(firstName, lastName, id) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
    }
    getFullname() {
      return this.firstName + " " + this.lastName;
    }
  }
  class Manager extends Employee {
    team = [];
    constructor(firstName, lastName, id) {
      super(firstName, lastName, id);
    }
    addTeamMember(employee) {
      this.team.push(employee);
    }
    //   getFullname() {
    //     return "Manager " + super.getFullname();
    //   }
  }
  
  const ralf = new Employee("Ralf", "Siewert", 1);
  const marcel = new Employee("Marcel", "Jaworski", 2);
  const ella = new Manager("Ella", "Rotari", 3);
  ella.addTeamMember(ralf);
  
  console.log(ralf.getFullname());
  console.log(marcel.getFullname());
  console.log(ella.getFullname());
  console.log(ella.team);
  ella.addTeamMember(marcel);
  console.log(ella.team);
  
  if (ella instanceof Employee) {
    console.log("Ella ist Employee");
  } else {
    console.log("Ella ist kein Employee");
  }
  
  if (ella instanceof Manager) {
    console.log("Ella ist Manager");
  } else {
    console.log("Ella ist kein Manager");
  }
  
  const employees = [
    new Employee("Ralf", "Siewert", 1),
    new Manager("Ella", "Rotari", 2),
    new Employee("Marcel", "Jaworski", 3),
  ];
  
  employees.forEach((employee) => {
    if (employee instanceof Manager) {
      console.log("Achtung! Ich bin wichtig!", employee.getFullname());
    } else {
      console.log(employee.getFullname());
    }
  });