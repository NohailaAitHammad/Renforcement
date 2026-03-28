//R-Challenge 4 — Le carnet d'adresses professionnel

const contacts = [
    {
        "nom": "Nohaila",
        "entreprise": "TechCo",
        "email": "nohaila@example.com",
        "telephone": "0600111222",
        "ville": "Casablanca",
        "adresse": {
            "rue": "Rue A",
            "code_postal": "20000",
            "ville": "Casablanca",
            "pays": "Maroc"
        }
    },
    {
        "nom": "Youssef",
        "entreprise": "GreenCo",
        "email": "youssef@example.com",
        "telephone": "0600333444",
        "ville": "Rabat",
        "adresse": {
            "rue": "Rue B",
            "code_postal": "10000",
            "ville": "Rabat",
            "pays": "Maroc"
        }
    },
    {
        "nom": "Sara",
        "entreprise": "InnoTech",
        "email": "sara@example.com",
        "telephone": "0600555666",
        "ville": "Marrakech",
        "adresse": {
            "rue": "Rue C",
            "code_postal": "40000",
            "ville": "Marrakech",
            "pays": "Maroc"
        }
    },
    {
        "nom": "Karim",
        "entreprise": "FinPro",
        "email": "karim@example.com",
        "telephone": "0600777888",
        "ville": "Fès",
        "adresse": {
            "rue": "Rue D",
            "code_postal": "30000",
            "ville": "Fès",
            "pays": "Maroc"
        }
    },
    {
        "nom": "Lina",
        "entreprise": "SmartBiz",
        "email": "lina@example.com",
        "telephone": "0600999000",
        "ville": "Tangier",
        "adresse": {
            "rue": "Rue E",
            "code_postal": "90000",
            "ville": "Tangier",
            "pays": "Maroc"
        }
    },
    {
        "nom": "Hassan",
        "entreprise": "DataCo",
        "email": "hassan@example.com",
        "telephone": "0600111223",
        "ville": "Agadir",
        "adresse": {
            "rue": "Rue F",
            "code_postal": "80000",
            "ville": "Agadir",
            "pays": "Maroc"
        }
    }
]

contacts.forEach(contact => {
    console.log(`${contact.nom} --- ${contact.ville}\n`)
})

const  groupByVille = {}

contacts.forEach(contact => {
    const city = contact.ville;
    if(!groupByVille[city]){
        groupByVille[city] =  [];
    }
    groupByVille[city].push(contact.nom);
});

console.log(groupByVille);

contactsOfEntreprise = contacts.filter(contact => contact.entreprise === "TechCo")

contactDemenage = contacts.find(contact => contact.nom = "Nohaila")

contactDemenage.adresse = {
    rue: 'Rue B',
    code_postal: '200',
    ville: 'Rabat',
    pays: 'Maroc'
}
console.log(contactDemenage);

contacts.forEach(contact => {
    contact.dernierContact =  Date.now() + Math.random() * 1000000
})

console.log(contacts);

let cs = contacts.filter(contact => contact.dernierContact < 2592000)

console.log(cs)

//R-Challenge 5 — La gestion de stock d'un restaurant

let ingredients = [
    { nom: "Tomate", quantite: 10, unite: "kg", prix_unitaire: 3, seuil_alerte: 2, categorie: "legume" },
    { nom: "Oignon", quantite: 8, unite: "kg", prix_unitaire: 2, seuil_alerte: 2, categorie: "legume" },
    { nom: "Carotte", quantite: 6, unite: "kg", prix_unitaire: 1.5, seuil_alerte: 1, categorie: "legume" },

    { nom: "Poulet", quantite: 5, unite: "kg", prix_unitaire: 50, seuil_alerte: 2, categorie: "viande" },
    { nom: "Boeuf", quantite: 4, unite: "kg", prix_unitaire: 80, seuil_alerte: 1, categorie: "viande" },
    { nom: "Agneau", quantite: 3, unite: "kg", prix_unitaire: 90, seuil_alerte: 1, categorie: "viande" },

    { nom: "Sel", quantite: 2, unite: "kg", prix_unitaire: 1, seuil_alerte: 0.5, categorie: "epice" },
    { nom: "Poivre", quantite: 1, unite: "kg", prix_unitaire: 10, seuil_alerte: 0.2, categorie: "epice" },
    { nom: "Paprika", quantite: 1.5, unite: "kg", prix_unitaire: 12, seuil_alerte: 0.3, categorie: "epice" },

    { nom: "Eau", quantite: 50, unite: "litres", prix_unitaire: 1, seuil_alerte: 10, categorie: "boisson" },
    { nom: "Jus", quantite: 30, unite: "litres", prix_unitaire: 5, seuil_alerte: 5, categorie: "boisson" },
    { nom: "Soda", quantite: 40, unite: "litres", prix_unitaire: 4, seuil_alerte: 8, categorie: "boisson" }
];

ingredients.forEach(ingredient => {
    console.log(`${ingredient.nom} -  ${ingredient.seuil_alerte} - ${ingredient.quantite} - ${ingredient.prix_unitaire}/${ingredient.unite} - ${ingredient.categorie}`)
})


let somme =  ingredients.reduce((sum, ingredient) => sum + (ingredient.prix_unitaire * ingredient.quantite), 0)
console.log(somme)

let ingredientByCategory = {};
let stock = 0;

ingredients.forEach(ingredient => {
    let category = ingredient.categorie;

    if(!ingredientByCategory[category]){
        ingredientByCategory[category] = 0
    }
    ingredientByCategory[category] += ingredient.quantite
})
console.log(ingredientByCategory)

function ajouterIngrediantsToListes(Ingredient, commande)
{
    let errorCount =0
    commande.forEach(cmd => {
        let item = Ingredient.find(ing => ing.nom === cmd.nom );
        if(item  && item.quantite > cmd.quantite){
            item.quantite-=  cmd.quantite
        }else if(item.quantite < cmd.quantite){
            console.log("Stock insuffisant");
            errorCount++;
        }else {
            console.log("Ingrediant  Introuvable");
            errorCount++
        }
        if(errorCount > 0)
            console.log("Commande Impossible")
        console.log("Commande Valide");
    })
}
let commandes = [
    {
        nom: "Poivre", quantite: 1
    },
    {
        nom: "Poivre", quantite: 1,
    },{
        nom: "Agneau", quantite: 3,
    },
]
ajouterIngrediantsToListes(ingredients, commandes)

let listeCaurse = []

ingredients.forEach( ing => {
    if(ing.quantite < ing.seuil_alerte){
        let but =(ing.seuil_alerte * 2) - ing.quantite
        let item = {
            nom : ing.nom,
            quantite : but
        }
        listeCaurse.push(item);
    }
})

console.log(listeCaurse);

//R-Challenge 6 — Le classement sportif

let equipes = [
    { nom: "Team A", points: 25, buts_pour: 30, buts_contre: 15, matchs_joues: 10 },
    { nom: "Team B", points: 18, buts_pour: 20, buts_contre: 18, matchs_joues: 10 },
    { nom: "Team C", points: 30, buts_pour: 35, buts_contre: 10, matchs_joues: 10 },
    { nom: "Team D", points: 12, buts_pour: 15, buts_contre: 25, matchs_joues: 10 },
    { nom: "Team E", points: 22, buts_pour: 28, buts_contre: 20, matchs_joues: 10 },
    { nom: "Team F", points: 10, buts_pour: 12, buts_contre: 30, matchs_joues: 10 },
    { nom: "Team G", points: 27, buts_pour: 33, buts_contre: 14, matchs_joues: 10 },
    { nom: "Team H", points: 15, buts_pour: 18, buts_contre: 22, matchs_joues: 10 }
];

let difDeChaqueEquipeArray = []
equipes.forEach(equipe => {
    let difDeButs = equipe.buts_pour - equipe.buts_contre;
    let difDeChaqueEquipeItem = {
        nom : equipe.nom,
        diffBut : difDeButs
    }
    equipe.dif = difDeButs;
    difDeChaqueEquipeArray.push(difDeChaqueEquipeItem);

})

console.log(difDeChaqueEquipeArray);

let classement = [...equipes].sort((a, b)=>{
    if(a.points === b.points){
        return b.dif - a.dif;
    }else
        return b.points - a.points
} )

console.log(classement);

classement.forEach(clas =>{
    clas.rang = `${clas.nom} -  ${clas.points} (dif : ${clas.dif > 0? '+':'-'}${clas.dif})`
})

console.log(classement);


//5
//6