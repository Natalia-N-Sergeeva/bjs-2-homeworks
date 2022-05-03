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
 
 Student.prototype.addMarks= function(mark1,mark2,mark3, ...anotherMarks){
  if(this.marks === undefined){ 
     this.marks=[mark1, mark2, mark3];
     for (i=0; i<anotherMarks.length; i++){
        this.marks.push(anotherMarks[i]);
      }
    }else {
      this.marks.push(mark1,mark2,mark3);
      for (i=0; i<anotherMarks.length; i++){
        this.marks.push(anotherMarks[i]);
      }
    }
  }

  Student.prototype.getAverage = function () {
  this.average = this.marks.reduce((acc, item, idx, arr) => {
  if (idx === arr.length-1){
    return (acc+item)/arr.length;
    } else {
      return acc + item;
    }
  })
}

Student.prototype.exclude  = function (reason) {
 this.excluded = reason;
   delete this.subject;
  delete this.marks;
  
}

   


    

student4.addMarks(1,2,3,4,5,6);
student4.getAverage();
 console.log(student4.marks);
 console.log(student4.average)

