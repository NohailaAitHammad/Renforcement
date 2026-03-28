//R-Challenge 1 — Le gestionnaire de playlist
let chansons = [
    {
        titre : "chanson 1",
        artiste : "artiste 1",
        duree : 90,
        genre : "Rock"
    },
    {
        titre : "chanson 2",
        artiste : "artiste 2",
        duree : 90,
        genre : "Classic"
    },
    {
        titre : "chanson 3",
        artiste : "artiste 3",
        duree : 90,
        genre : "Rock"
    },
    {
        titre : "chanson 4",
        artiste : "artiste 4",
        duree : 90,
        genre : "Rock"
    },
    {
        titre : "chanson 5",
        artiste : "artiste 5",
        duree : 90,
        genre : "Rock"
    },
    {
        titre : "chanson 6",
        artiste : "artiste 6",
        duree : 90,
        genre : "Rock"
    },
    {
        titre : "chanson 7",
        artiste : "artiste 7",
        duree : 90,
        genre : "jaz"
    },
    {
        titre : "chanson 8",
        artiste : "artiste 8",
        duree : 90,
        genre : "Ray"
    },
    {
        titre : "chanson 9",
        artiste : "artiste 9",
        duree : 90,
        genre : "jaz"
    },
    {
        titre : "chanson 10",
        artiste : "artiste 10",
        duree : 90,
        genre : "jaz"
    },
]

for(let chanson of chansons ){
    console.log(chanson.titre);
}

let resultTables = chansons.filter(chanson => chanson.genre === "Rock");
console.log(resultTables);
function convertirAuMinutesAndSeconds(time){
    let minutes  =Math.floor(time / 60)
    let seconds =time -  minutes * 60
    return `${minutes}:${seconds}`
}
//let chansonsEnMinutesSecondes = JSON.parse(JSON.stringify(chansons))
//let chansonsEnMinutesSecondes = [...chansons]

//console.log(chansons)
//console.log(chansonsEnMinutesSecondes)

//for(let chanss of chansonsEnMinutesSecondes){
//    chanss.duree =  convertirAuMinutesAndSeconds(chanss.duree);
//}
//console.log(chansonsEnMinutesSecondes)

//console.log(chansons)
result = chansons.reduce((a, b) => ({duree: a.duree + b.duree}))

console.log(convertirAuMinutesAndSeconds(result.duree));


large = chansons[0];
for(let i=1; i<chansons.length; i++){
    if(chansons[i].duree > large.duree){
        large.duree = chansons[i].duree
    }
}
console.log(large);

if(chansons.find(chanson => chanson.duree > 600 )){
    console.log("false");
}else {
    console.log("true");
}


if(chansons.find(chanson => chanson.genre > "Rock" )){
    console.log("true");
}else {
    console.log("false");
}

sortChansons = chansons.sort((a, b) => a.duree - b.duree )
console.log(sortChansons)

venetsFilter = ventes.filter(vente => vente.chiffre_affaire > 50000)

console.log(venetsFilter)

ventesParChiffreDaffaireDesc = ventes.sort((a, b) => b.chiffre_affaire - a.chiffre_affaire )

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


meilleurMois =  [...ventes].sort((a, b)=> a.chiffre_affaire - b.chiffre_affaire)[ventes.length - 1]
console.log(meilleurMois.mois)

moisMoinDeClient=  [...ventes].sort((a, b)=> a.nb_clients - b.nb_clients)[0]
console.log(moisMoinDeClient.mois)

let resume = {}

ventes.forEach(v => {
    let ville  = v.ville;
    if(!resume[ville]){
        resume[ville] = {
            CA : 0,
            Client : 0
        }
    }
    resume[ville].CA += v.chiffre_affaire;
    resume[ville].Client = v.nb_clients
});

console.log(resume)

//R-Challenge 3 — Le système de notation
let recettes = [
    {
        pseudo : "RECETTE 1",
        note : 4,
        commentaire : "commentairecommentairecommentairecommentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 2",
        note : 1,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 3",
        note : 3,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 1",
        note : 4,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 2",
        note : 1,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 3",
        note : 3,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 1",
        note : 4,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 2",
        note : 1,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 3",
        note : 3,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 1",
        note : 4,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 2",
        note : 1,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 3",
        note : 3,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 1",
        note : 4,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 2",
        note : 1,
        commentaire : "commentaire",
        date : Date.now()
    },
    {
        pseudo : "RECETTE 3",
        note : 3,
        commentaire : "commentaire",
        date : Date.now()
    },
]

somme = recettes.reduce((a, b)=> ({note: a.note + b.note}))
moyenne  = (somme.note/ recettes.length).toFixed(1);


avitPosiitf = recettes.filter(recette => recette.note >= 4);

avitNegatif =  recettes.filter(recette => recette.note <= 2);

avisTrierParDate = [...recettes].sort((a, b) => b.date - a.date)
avisTrierParCommentaire = [...recettes].sort((a, b) => b.commentaire.length - a.commentaire.length)[0]

let countParNote = {}
recettes.forEach(recette => {
    const note = recette.note;
    if (!countParNote[note]) {
        countParNote[note] = 0;
    }
    countParNote[note]++;
});
console.log(countParNote)
let neutres = recettes.filter(recette => recette.note === 3);

console.log(`${moyenne}/5 basé sur ${recettes.length} avis - ${avitPosiitf.length} Positifs, ${avitNegatif.length} negatifs, ${neutres.length} neutres`)