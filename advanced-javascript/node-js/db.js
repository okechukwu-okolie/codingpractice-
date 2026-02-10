//create a json file describing individuals in a school and their 
// details such as name, age, class, etc. use ficticious names for the entries.


 const students = [
    {
        name: "Samuel Okolie",
        age: 20,
        class: "SS1",
        gender: "Male",
        address: "No 1, Okorie Street, Lagos",
        phone: "08012345678",
        email: "samuelokolie@gmail.com",
       school: "Lagos State University",
    },     ]      
    
    export async function getStudents(){
        return students;
    }



