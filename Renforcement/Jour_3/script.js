//R-Challenge 2 — L'analyse des ventes

let ventes = [
    {
        mois : "1",
        chiffre_affaire : 120,
        nb_clients : 10,
        ville : "casablanca"
    },
    {
        mois : "2",
        chiffre_affaire : 120,
        nb_clients : 100000,
        ville : "EL JADIDA"
    },
    {
        mois : "3",
        chiffre_affaire : 12011,
        nb_clients : 10500,
        ville : "AGADIR"
    },
    {
        mois : "4",
        chiffre_affaire : 12000,
        nb_clients : 10300,
        ville : "TAZA"
    },
    {
        mois : "5",
        chiffre_affaire : 120,
        nb_clients : 10200,
        ville : "RABAT"
    },
    {
        mois : "6",
        chiffre_affaire : 120,
        nb_clients : 100,
        ville : "casablanca"
    },
    {
        mois : "7",
        chiffre_affaire : 13320,
        nb_clients : 1050,
        ville : "casablanca"
    },
    {
        mois : "8",
        chiffre_affaire : 1520,
        nb_clients : 10,
        ville : "casablanca"
    },
    {
        mois : "9",
        chiffre_affaire : 50000,
        nb_clients : 4000,
        ville : "casablanca"
    },
    {
        mois : "10",
        chiffre_affaire : 1200,
        nb_clients : 3000,
        ville : "RABAT"
    },
    {
        mois : "11",
        chiffre_affaire : 90000,
        nb_clients : 20,
        ville : "RABAT"
    },
    {
        mois : "12",
        chiffre_affaire : 700,
        nb_clients : 70,
        ville : "casablanca"
    },
]

result  = ventes.reduce((a, b)=> ({chiffre_affaire: a.chiffre_affaire  + b.chiffre_affaire}))

console.log(result)

chiffreDaffiareMoyene = result.chiffre_affaire / 12;
console.log(chiffreDaffiareMoyene)


meilleurMois =  ventes.sort((a, b)=> a.chiffre_affaire - b.chiffre_affaire)[ventes.length - 1]
console.log(meilleurMois.mois)

moisMoinDeClient=  ventes.sort((a, b)=> a.nb_clients - b.nb_clients)[0]
console.log(moisMoinDeClient.mois)
