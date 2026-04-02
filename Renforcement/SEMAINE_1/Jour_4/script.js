//R-Challenge 7 — Le système de réservation de restaurant

let reservation = {
    id : 1,
    nom: "reserv 1",
    nom_client : "client 1",
    nombre_personne : 3,
    date : "date",
    heure : "heure",
    status : [
        "confirmee",
        "en attente",
        "annulee"
    ],
    telephone : "123456789"
}
let reservations = []
function checkMaxReservation(reservations, restaurant_max){
    if(reservations.length > restaurant_max){
        return false
    }
    return  true;
}
function ajouterReservation(restaurant_max, data, reservations){
    let reservation = {
        id : Math.floor(Math.random() * 100),
        nom: data.nom,
        nom_client : data.nom_client,
        nombre_personne : data.nombre_personne,
        date : new Date(data.date),
        heure : (new Date()).setHours(data.heure),
        status : 'confirmee',
        telephone : data.telephone
    }
   if(!checkMaxReservation(reservations, restaurant_max))
       reservation.status = "en attente"

    reservations.push(reservation)

    return reservations
}
function annulerReservation(reservations, id, restaurant_max){
    let reservation = reservations.find(reservation => reservation.id === id)
    let reservationIndex = reservations.findIndex(reservation => reservation.id === id)
    if(!reservation){
        return "Aucune reservation existe"
    }
    reservation.status = "annulee"
    if(checkMaxReservation()){
        let dif = restaurant_max - reservations.length
        let reservationsEnAttente = (reservations.filter(reservation => reservation.status === "en attente")).sort((a, b) => {
            if(a.date === b.date){
                return a.heure - b.heure;
            }
            return a.date - b.date
        } )
        for(let i=0; i<dif; i++){
            reservationsEnAttente[i].status = "confirmee";
        }

    }
}

function  listeReservationsParDate(reservations, date){
    return ([...reservations].filter(reservation => reservation.date ===date)).sort((a, b) => {
        return a.heure - b.heure;
    } )
}

function calculeTauxOccupations(date, reservations){
   let reservationsDeLaDate = listeReservationsParDate(date);
    TauxOccupationsParHeure = {}

    reservationsDeLaDate.forEach(res => {
        let heure = res.heure;
        if(!TauxOccupationsParHeure[heure])
            TauxOccupationsParHeure[heure] = {
            taux : 0
            };
        somme += res.nombre_personne
        TauxOccupationsParHeure[heure].taux +=  somme / 30
    })

    return TauxOccupationsParHeure
}

datas = {
    nom: "reservation 1",
    nom_client : "Ali",
    nombre_personnes : 5,
    date : "2026-03-26",
    heure : "12:00",
    telephone : "0600000001"
}
ajouterReservation(30,datas,reservations)

annulerReservation(reservations, 14, 30)
listeReservationsParDate(reservations, "12/10/2020")



//R-Challenge 8 — Le panier e-commerce intelligent
let panier  = [
    {
       produit :  {id:1, nom: "Tomate", prix:100,  stock_disponible : 100},
       quantite :  1
    },{
        produit: {id:2, nom: "Potato", prix:120,  stock_disponible : 50},
        quantite : 2
    }
]

function produitIsExiste(panier, idArticle){
    return panier.find(art => art.produit.id === idArticle)
}

function ajouterProduit(article, quantite){
    let prodExist = produitIsExiste(panier, article.id)
    if(prodExist) {
        if (prodExist.produit.stock_disponible < quantite){
            console.log("Stock insuffisant")
            return false;
        }
        prodExist.quantite += quantite
        return panier
    }else {
        if (article.produit.stock_disponible < quantite){
            console.log("Stock insuffisant")
            return false;
        }
        panier.push({
            "produit" : article,
            "quantite" : quantite
        })
    }
    return panier
}

function modifierQuantite(article, newQuantite){
    let prodExist = produitIsExiste(panier, article.id)

    if(!prodExist){
      console.log("Article introuvable")
      return false;
    }
    if (prodExist.produit.stock_disponible < newQuantite){
        console.log("Stock insuffisant")
        return false;
    }

    prodExist.quantite = newQuantite;
    return panier;
}

function supprimerArticle(article){
    let indexArticleSupp = panier.findIndex(article => article.produit.id === prodExist.produit.id);

    if(indexArticleSupp === -1){
        console.log("Article introuvable");
        return false;
    }

    panier.splice(indexArticleSupp, 1);

    return panier;
}

function sousTotalArticle(panier){
    let arraySousTotal = []
   panier.forEach(article => {
        let sousTotalArticle = {
            "id": article.produit.id ,
           "sousTotal": article.produit.prix * article.quantite
        }
        arraySousTotal.push(sousTotalArticle);
   })

    return  arraySousTotal;
}

function calculTotal(panier){
    return sousTotalArticle(panier).reduce((acc, article) => acc + article.sousTotal, 0);
}

function  nombreTotalArticles(panier){
    return panier.reduce((total, article) => total + article.quantite, 0);
}


