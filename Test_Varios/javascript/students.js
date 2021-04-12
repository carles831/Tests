var student1 ={
  firstName: "John",
  lastName:"Parker",
  age: 21,
  greeting: function(){
    return "Hi! My name is " + this.firstName;
  }
};
var student2 ={
  firstName: "Pepe",
  lastName:"Palotes",
  age: 24,
  greeting: function(){
    return "Hello! I'm " + this.firstName;
  }
};
var student3 ={
  firstName: "Carolina",
  lastName:"Gali",
  age: 25,
  greeting: function(){
    return "Hola! Soc un poni i em dic " + this.firstName;
  }
};

var students = [];
students.push(student1);
students.push(student2);
students.push(student3);

//console.log(student1.greeting());

for(var i =0; i<students.length;i++ ){
  console.log(students[i].greeting());
}
