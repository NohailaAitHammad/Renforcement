// S-Challenge 1 — La liste des participants

let participants = ['noha', 'amin', 'ahmed', 'walid', 'mohamed', 'ali'];
console.log(participants)
console.log(participants[0])
console.log(participants[participants.length - 1])
console.log(participants.length)

participants.push('jad');
participants.push('iyad');
console.log(participants)
participants.shift()
console.log(participants)

//S-Challenge 2 — Le relevé de notes
let notes = [12, 8, 15, 6, 18, 9, 14];
let somme =0;

for(let note of notes){
    somme += note;
}

let moyenne = 1;
    moyenne= somme/notes.length
max = Math.max(notes);
min = Math.min(notes);

let count = 0;
for(let note of notes){
   if(note > 10)
       count++;

}

console.log("/== Bulletin de resultat formaté ==/\n")

for(let i = 0; i< notes.length; i++){
    console.log(`Etudiant  ${i+1} : \n`)
    console.log(`\tNote  ${notes[i]} \n`)
}
console.log(`La somme de tous les notes  ${somme} \n`)
console.log(`La note la plus haute  ${max} \n`)
console.log(`La note la plus basse  ${min} \n`)
console.log(`La moyenne generale  ${moyenne} \n`)
console.log(`Le nombre d'etudiants a la moyenne  ${count} \n`)

//S-Challenge 3 — La fiche d'identité

let person = {
    nom : "ait hammad",
    prenom : "nohaila",
    age :  21,
    ville : "El Jadida",
    email : "nohaila@gmail.com"
}
function  sePresente(person){
    console.log(`mon nom est ${person.nom}, mon prenom est ${person.prenom} , j'ai ${person.age}ans, j'habite a ${person.ville}, mon email est ${person.email}`)
}
sePresente(person);

person.ville = "casablanca"
console.log(person)
person.telephone = "0644444444"

for([key, value] of Object.entries(person)){
    console.log(`${key} => ${value}`);
}

//S-Challenge 4 — Le ticket de caisse

let articles  = [
    {
        nom : 'Lait',
        quantite : 2,
        prixUnitaire : 4
    },
    {
        nom : 'oil',
        quantite : 1,
        prixUnitaire : 15
    },

    {
        nom : 'Fromage',
        quantite : 10,
        prixUnitaire : 1
    },

    {
        nom : 'cafee',
        quantite : 2,
        prixUnitaire : 4
    },

    {
        nom : 'Biscuit',
        quantite : 4,
        prixUnitaire : 10
    },
]
let sommeTotal = 0
let totalArticle = 0
for(let article of articles){
     totalArticle =article.quantite * article.prixUnitaire
    sommeTotal += totalArticle;
    console.log(`${article.nom} x ${article.quantite} = ${totalArticle}\n`)
}

console.log(`Somme total : ${sommeTotal}`)
sommeTotal = sommeTotal *(1 + (20/100))
console.log(`Somme TTC : ${sommeTotal}`)

//S-Challenge 5 — Le trombinoscope

let etudiants =[
    {
        nom : "ait hammad",
        prenom : "nohaila",
        age :  10,
        ville : "El Jadida",
        moyenne : 15
    },
    {
        nom : "ait hammad",
        prenom : "Walid",
        age :  20,
        ville : "El Jadida",
        moyenne : 12
    },
    {
        nom : "ait hammad",
        prenom : "nohaila",
        age :  30,
        ville : "El Jadida",
        moyenne : 9
    },
    {
        nom : "ait hammad",
        prenom : "nohaila",
        age :  9,
        ville : "El Jadida",
        moyenne : 20
    },
    {
        nom : "ait hammad",
        prenom : "nohaila",
        age :  21,
        ville : "El Jadida",
        moyenne : 17
    },
    {
        nom : "ait hammad",
        prenom : "nohaila",
        age :  21,
        ville : "El Jadida",
        moyenne : 10
    }
]
for (let etudiant of etudiants){
    if(etudiant.moyenne >=  12 ){
        console.log(etudiant);
    }
}
let etudiantTrierParAge = etudiants.sort((a, b) => a.age - b.age)
console.log(etudiantTrierParAge)
let result = etudiants.find(etudiant => etudiant.nom === 'ait hammad')
if(result === undefined){
    console.log("Étudiant non trouvé")
}else {
    console.log(result)
}
