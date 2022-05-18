function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
  let student3 = new Student ("Татьяна", "f", "20");
  let student4 = new Student ("Антон", "m", "45");
  let student5 = new Student ("Наталья", "f", "41");

  console.log(student4.name);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


student4.setSubject("math");
console.log(student4.subject);


Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
     this.marks=[mark];
    } else {
      this.marks.push(mark);
    }
}
 

Student.prototype.addMarks= function(...anotherMarks){
  this.marks=[];
  this.marks.push(...anotherMarks);
 }


Student.prototype.getAverage = function () {
  let average = this.marks.reduce((acc, item, idx, arr) => {
  if (idx === arr.length-1){
    return (acc+item)/arr.length;
    } else {
      return acc + item;
    }
  })
  return average;
}

Student.prototype.exclude  = function (reason) {
 this.excluded = reason;
   delete this.subject;
  delete this.marks;
  
}

   


    


