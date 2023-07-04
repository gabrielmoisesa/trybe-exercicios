import Title from "./Title";
import ModuleDetails from "./ModuleDetails";

const userInfo = {
    firstName: "Gabriel",
    lastName: "Alves",
    birthDate: "18/08/2004",
}

function calculateAge(birthDate: string): number {
    const currentDate = new Date();
    const [day, month, year] = birthDate.split('/').map(Number);
  
    const userBirthDate = new Date(year, month - 1, day);
    let age = currentDate.getFullYear() - userBirthDate.getFullYear();
  
    if (
      currentDate.getMonth() < userBirthDate.getMonth() ||
      (currentDate.getMonth() === userBirthDate.getMonth() &&
        currentDate.getDate() < userBirthDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }

function HelloWorld() {
    return (
       <div>
           <Title />
           <ModuleDetails />
           <p>
            A idade do {userInfo.firstName} é {calculateAge(userInfo.birthDate)} anos.
           </p>
       </div> 
    )
}

export default HelloWorld;