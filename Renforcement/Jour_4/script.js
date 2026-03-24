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