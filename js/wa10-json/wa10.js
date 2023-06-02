// 1.
var employees = [{"name": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise": true},
{"name": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise": true},
{"name": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise": false}];

getEmployees();


function getEmployees(){


    //for (let i = 0; i < employees.length; i++) {
        
        console.log(employees)
    //}

}

// 2.
getCompany();

async function getCompany(){

    const response = await fetch("/js/wa10-json/company.json");
    const company = await response.json();

    if(response){

        console.log(company);

    }

   else{

    console.log("fetch failed");
    alert("fetch failed");
   }


}
// 3.
const newEmployee = {"name": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise": false};

employees.push(newEmployee);

getEmployees();

// 4.
let sum = 0;

for (let i = 0; i < employees.length; i++){

    sum += employees[i].salary;
}

console.log("sum of salaries =" + sum);

// 5.
for (let i = 0; i < employees.length; i++){

    if (employees[i].raise){

        employees[i].salary += employees[i].salary * 0.1;
        employees[i].raise = false;
    }
}

getEmployees();

// 6.

for (let i = 0; i < employees.length; i++){

    if ((employees[i].name == "Anna") || (employees[i].name == "Sam")){

        employees[i].wfh = true;
    }

    else{

        employees[i].wfh = false;
    }
}

getEmployees();

