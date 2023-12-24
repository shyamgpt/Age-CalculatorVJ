const btnEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");

const resultEl = document.getElementById("result");



function calculateAge(){
const birthdayValue = birthdayEl.value;

if(birthdayValue === ""){
    alert("Please enter your birthday");
}else {
    const age = getAge(birthdayValue);
    // console.log(age);
    resultEl.innerText =`Your age is ${age} ${age > 1 ? "years" : "year"} old`;
}
}

function getAge(birthdayValue){
    const currentDate = new Date();
    // console.log(currentDate);
    // console.log(currentDate.getFullYear());

    const birthdayDate = new Date(birthdayValue);
    // console.log(currentDate.getFullYear());

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(
        month < 0 || month === 0 && currentDate.getDate() 
        < birthdayDate.getMonth()
    ){

        age--;
    }
    return age;

}

btnEl.addEventListener("click", calculateAge);