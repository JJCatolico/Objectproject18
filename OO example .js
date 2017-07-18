var Person = class Person {
  constructor(name){
   this.name = name  
  }
}

var Doctor = class Doctor extends Person {
  constructor(name, specialty){
    super(name)
    this.specialty = specialty
  }
}

var Patient = class Patient extends Person{
  constructor(name, illness){
   super(name) 
   this.illness = illness
  }
  
}

var Hospital = class Hospital {
  constructor(){
    this.doctors = []
    this.patients = []
  }
  
  addDoctor(doctor){
    this.doctors.push(doctor)
    return this.doctors
    
  }
  
  findDoctor(index){
  return this.doctors[index]
    
  }
  
}



