// Exervice 1
let fruits = ["pomme", "banane", "orange"];
console.log(fruits[1]);

// Exercice 2
let colours = ["rouge", "vert"];
colours.push("violet");
console.log(colours.length);
// Exercice 3
let person = {
    nom : "Alice",
    age : 25,
    ville : 'Paris'
}
console.log(person.nom);

//Exercice 4
let animaux = ["chat", "lapin", "tortuel"]
for(let i= 0; i<animaux.length; i++){
    console.log(animaux[i]);
}
for(let i of animaux){
    console.log(i)
}

// Exercice 5

let cources = [
    {
        nom : "Article 1",
        prix : 120
    },
    {
        nom : "Article 2",
        prix : 200
    },
    {
        nom: "Article 3",
        prix: 400
    }
]
let prixTotal = 0;

for(let course of  cources){
    prixTotal += course.prix
}
console.log(prixTotal)

