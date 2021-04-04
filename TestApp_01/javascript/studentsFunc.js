function Student (first,last,age){
  this.firstName= first;
  this.last= last;
  this.age= age;
  this.greeting = function(){
    return "Hi! My name is " + this.firstName + " and I'm " + this.age + "years old.";
  };
}

console.log(new Student("Frank","Johnson",45));
