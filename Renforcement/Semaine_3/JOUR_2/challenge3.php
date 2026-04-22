<?php


class Bibliotheque
{
    private array $livres = [];


    private array $emprunts = [];

    public function ajouterLivre(string $titre, string $auteur): void
    {
        $key = strtolower($titre);
        if (isset($this->livres[$key])) {
            echo "  Le livre \"$titre\" existe déjà.\n";
            return;
        }
        $this->livres[$key] = [
            'titre'      => $titre,
            'auteur'    => $auteur,
            'disponible'=> true,
        ];
        echo "  Livre ajouté : \"$titre\" de $auteur.\n";
    }
    public function emprunter(string $titre, string $emprunteur): void
    {
        $key = strtolower($titre);
        if (!isset($this->livres[$key])) {
            echo "  Livre \"$titre\" inconnu.\n";
            return;
        }

        if (!$this->livres[$key]['disponible']) {
            echo "  \"$titre\" n’est pas disponible (déjà emprunté).\n";
            return;
        }

        $aujourdHui = new DateTimeImmutable('now');
        $datePrevue = $aujourdHui->modify('+14 days');

        $this->emprunts[] = [
            'titre'              => $titre,
            'emprunteur'         => $emprunteur,
            'dateEmprunt'        => $aujourdHui,
            'dateRetourPrevue'   => $datePrevue,
            'dateRetourEffectif' => null,
            'amende'             => 0.0,
        ];

        $this->livres[$key]['disponible'] = false;
        echo   "$titre\" emprunté par $emprunteur. Retour prévu le " .
            $datePrevue->format('d/m/Y') . ".\n";
    }


    public function retourner(string $titre): void
    {
        $key = strtolower($titre);
        if (!isset($this->livres[$key])) {
            echo "  Livre \"$titre\" inconnu.\n";
            return;
        }

        foreach ($this->emprunts as &$e) {
            if (strtolower($e['titre']) === $key && $e['dateRetourEffectif'] === null) {
                $aujourdHui = new DateTimeImmutable('now');
                $e['dateRetourEffectif'] = $aujourdHui;

                $diff = $aujourdHui->diff($e['dateRetourPrevue']);
                $joursRetard = (int)$diff->format('%r%a');

                if ($joursRetard > 0) {
                    $e['amende'] = $joursRetard * 0.50;
                    echo " Retour en retard de $joursRetard jour(s) → amende de " .
                        number_format($e['amende'], 2) . " €.\n";
                } else {
                    echo " Retour à temps (ou en avance).\n";
                }

                $this->livres[$key]['disponible'] = true;
                echo "📖  \"$titre\" de nouveau disponible.\n";
                return;
            }
        }

        echo "  Aucun emprunt en cours trouvé pour \"$titre\".\n";
    }


    public function getAmendes(string $emprunteur): float
    {
        $total = 0.0;
        foreach ($this->emprunts as $e) {
            if (strtolower($e['emprunteur']) === strtolower($emprunteur)) {
                $total += $e['amende'];
            }
        }
        return $total;
    }


    public function getStatistiques(): void
    {
        $dispo   = 0;
        $emprunt = 0;
        foreach ($this->livres as $l) {
            $l['disponible'] ? $dispo++ : $emprunt++;
        }

        $totalAmendes = 0.0;
        $retardsParEmprunteur = [];

        foreach ($this->emprunts as $e) {
            $totalAmendes += $e['amende'];

            if ($e['amende'] > 0) {
                $jours = intdiv((int)($e['amende'] * 100), 50);
                $nom = $e['emprunteur'];
                $retardsParEmprunteur[$nom] = ($retardsParEmprunteur[$nom] ?? 0) + $jours;
            }
        }

        $plusEnRetard = null;
        $maxRetard    = 0;
        foreach ($retardsParEmprunteur as $nom => $jours) {
            if ($jours > $maxRetard) {
                $maxRetard    = $jours;
                $plusEnRetard = $nom;
            }
        }

        echo "\n=== Statistiques de la bibliothèque ===\n";
        echo "  Livres disponibles   : $dispo\n";
        echo "  Livres empruntés     : $emprunt\n";
        echo "  Amendes totales     : " . number_format($totalAmendes, 2) . " €\n";

        if ($plusEnRetard !== null) {
            echo "  Emprunteur le plus en retard : $plusEnRetard (total $maxRetard jour(s) de retard)\n";
        } else {
            echo "  Aucun retard enregistré.\n";
        }
        echo "=========================================\n\n";
    }
}

$biblio = new Bibliotheque();

$biblio->ajouterLivre('Le Petit Prince', 'Antoine de Saint-Exupéry');
$biblio->ajouterLivre('1984', 'George Orwell');
$biblio->ajouterLivre('Le Seigneur des Anneaux', 'J. R. R. Tolkien');
$biblio->ajouterLivre('L’Étranger', 'Albert Camus');

$biblio->emprunter('Le Petit Prince', 'Alice');
$biblio->emprunter('1984', 'Bob');
$biblio->emprunter('Le Seigneur des Anneaux', 'Alice');

sleep(1);
$biblio->retourner('Le Petit Prince');

$ref = new ReflectionClass($biblio);
$propEmprunts = $ref->getProperty('emprunts');
$propEmprunts->setAccessible(true);
$emprunts = $propEmprunts->getValue($biblio);
foreach ($emprunts as &$e) {
    if ($e['titre'] === '1984') {
        $dateEmprunt = (new DateTimeImmutable('now'))->modify('-19 days');
        $datePrevue  = $dateEmprunt->modify('+14 days');
        $e['dateEmprunt']      = $dateEmprunt;
        $e['dateRetourPrevue'] = $datePrevue;
    }
}
$propEmprunts->setValue($biblio, $emprunts);

$biblio->retourner('1984');

echo "🔎  Amendes d’\"Eve\" : " . number_format($biblio->getAmendes('Eve'), 2) . " €\n";

echo "🔎  Amendes d’Alice : " . number_format($biblio->getAmendes('Alice'), 2) . " €\n";

$biblio->getStatistiques();
?>
