const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    //console.log("Dit is de gehele persoon:", [person]);

    //console.log("Dit is naam:", [person.name]);

    //console.log("geboortejaar van", person.name, "is",2021-person.age);

    //console.log(person.name , "is een", person.profession);

    if (person.age >= 50)
        console.log(person.name, "u bent ouder dan 50 jaar")
    else console.log(person.name, "u bent nog geen 50 jaar")

}
