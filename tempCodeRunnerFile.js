function Student(fullName,batchNo){ 
console.log("i have been logged")
this.Name=fullName,
this.No=batchNo

this.sayHi=function(){
    console.log("welcome")
}


}



//real world object
var sath=new Student("Sathish Kumar",34)
console.log(sath)