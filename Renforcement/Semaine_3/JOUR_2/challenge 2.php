<?php

class Cinema
{
    private array $salles = [];


    public function ajouterSalle(string $nom, int $nbPlaces): void
    {
        if (isset($this->salles[$nom])) {
            echo "  La salle \"$nom\" existe déjà.\n";
            return;
        }

        $this->salles[$nom] = [
            'nom'          => $nom,
            'placesTot'    => $nbPlaces,
            'reservations' => [],
        ];
        echo "  Salle \"$nom\" ajoutée – $nbPlaces places.\n";
    }

    public function reserver(string $nomSalle, string $nomClient, int $nbPlaces): bool
    {
        if (!isset($this->salles[$nomSalle])) {
            echo "  Salle \"$nomSalle\" inconnue.\n";
            return false;
        }

        if ($nbPlaces <= 0) {
            echo "️  Le nombre de places demandé doit être > 0.\n";
            return false;
        }

        $salle = &$this->salles[$nomSalle];

        $placesOccupées = array_sum($salle['reservations']);
        $placesLibres   = $salle['placesTot'] - $placesOccupées;

        if ($nbPlaces > $placesLibres) {
            echo "  Pas assez de places disponibles dans \"$nomSalle\" (il reste $placesLibres).\n";
            return false;
        }

        $salle['reservations'][$nomClient] = ($salle['reservations'][$nomClient] ?? 0) + $nbPlaces;
        echo "Réservation de $nbPlaces place(s) pour \"$nomClient\" dans \"$nomSalle\".\n";
        return true;
    }

    public function annulerReservation(string $nomSalle, string $nomClient): void
    {
        if (!isset($this->salles[$nomSalle])) {
            echo " Salle \"$nomSalle\" inconnue.\n";
            return;
        }

        $salle = &$this->salles[$nomSalle];
        if (!isset($salle['reservations'][$nomClient])) {
            echo "  Pas de réservation pour \"$nomClient\" dans \"$nomSalle\".\n";
            return;
        }

        unset($salle['reservations'][$nomClient]);
        echo "  Réservation de \"$nomClient\" annulée dans \"$nomSalle\".\n";
    }

    public function afficherOccupation(): void
    {
        echo "\n=== Occupation des salles ===\n";
        foreach ($this->salles as $s) {
            $occu = array_sum($s['reservations']);
            $pct  = $s['placesTot'] ? ($occu / $s['placesTot']) * 100 : 0;
            printf(
                "- %s : %d / %d places (%.1f%%)\n",
                $s['nom'],
                $occu,
                $s['placesTot'],
                $pct
            );
        }
        echo "\n";
    }


    public function getRevenusEstimes(float $prixBillet): float
    {
        $totalPlacesReserves = 0;
        foreach ($this->salles as $s) {
            $totalPlacesReserves += array_sum($s['reservations']);
        }
        return $totalPlacesReserves * $prixBillet;
    }
}

$cinema = new Cinema();

$cinema->ajouterSalle('Alpha', 30);
$cinema->ajouterSalle('Beta',  20);
$cinema->ajouterSalle('Gamma', 50);

$cinema->reserver('Alpha', 'Alice', 5);
$cinema->reserver('Alpha', 'Bob',   12);
$cinema->reserver('Beta',  'Cara',  3);
$cinema->reserver('Beta',  'David', 18);
$cinema->reserver('Beta',  'Eve',   10);
$cinema->reserver('Gamma', 'Frank', 25);
$cinema->reserver('Gamma', 'Grace', 30);
$cinema->reserver('Gamma', 'Heidi', 5);
$cinema->reserver('Delta', 'Ivan',  4);
$cinema->reserver('Alpha', 'Judy', -2);

$cinema->annulerReservation('Beta', 'Eve');
$cinema->annulerReservation('Beta', 'Xavier');

$cinema->afficherOccupation();

$revenu = $cinema->getRevenusEstimes(9.50);
printf("  Revenu estimé si toutes les places réservées étaient vendues : %.2f €\n", $revenu);
?>
