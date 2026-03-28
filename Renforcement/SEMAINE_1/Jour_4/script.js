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
    {id:1, nom: "Tomate", prix:100,  stock_disponible : 100},
    {id:2, nom: "Potato", prix:120,  stock_disponible : 50},
    {id:3, nom: "onion", prix:120,  stock_disponible : 50},
]

function produitIsExiste(panier, article){
    if(panier.find(art => art.id === article.id) === null){
        return false
    }
    return true
}

function ajouterProduit(idArticle, quantite){
    if(produitIsExiste(articles, idArticle) ) {
        let article = articles.find(art => art.id === idArticle)
        if (article.stock_disponible < quantite){
            console.log("Stock insuffisant")
            return false;
        }
        article.stock_disponible -= quantite
        return articles
    }else {
        let article = articles.find(art => art.id === idArticle)
        articles.push(article)
    }
    return articles
}
