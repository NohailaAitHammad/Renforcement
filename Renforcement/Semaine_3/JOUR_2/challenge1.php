<?php

class Distributeur
{

    private array $produits = [];


    private float $caisse = 0.0;


    public function __construct(array $listeProduits)
    {
        foreach ($listeProduits as $nom => $info) {
            $this->produits[$nom] = [
                'prix'  => (float)$info['prix'],
                'stock' => (int)$info['stock'],
            ];
        }
    }

    public function afficherProduits(): void
    {
        echo "Produits disponibles \n";
        foreach ($this->produits as $nom => $p) {
            $status = $p['stock'] > 0 ? "En stock ({$p['stock']})" : "Rupture";
            printf("- %s : %.2f € – %s\n", $nom, $p['prix'], $status);
        }
        echo "\n";
    }


    public function acheter(string $nomProduit, float $montantInsere): float
    {
        if (!array_key_exists($nomProduit, $this->produits)) {
            echo " Produit \"$nomProduit\" inconnu.\n";
            return $montantInsere;
        }

        $produit = &$this->produits[$nomProduit];
        if ($produit['stock'] <= 0) {
            echo "  \"$nomProduit\" en rupture de stock.\n";
            return $montantInsere;
        }

        if ($montantInsere < $produit['prix']) {
            printf(
                "  Argent insuffisant : prix=%.2f€, inséré=%.2f€.\n",
                $produit['prix'],
                $montantInsere
            );
            return $montantInsere;
        }

        $produit['stock']--;
        $this->caisse += $produit['prix'];

        $monnaie = $montantInsere - $produit['prix'];
        printf(
            "  \"%s\" vendu – monnaie rendue: %.2f€.\n",
            $nomProduit,
            $monnaie
        );
        return $monnaie;
    }

    public function remplir(string $nomProduit, int $quantite): void
    {
        if ($quantite <= 0) {
            echo "Quantité à ajouter doit être positive.\n";
            return;
        }

        if (!isset($this->produits[$nomProduit])) {

            $this->produits[$nomProduit] = ['prix' => 1.00, 'stock' => 0];
            echo "Produit \"$nomProduit\" créé (prix = 1.00€).\n";
        }

        $this->produits[$nomProduit]['stock'] += $quantite;
        echo "\"$nomProduit\" réapprovisionné: +$quantite (stock = {$this->produits[$nomProduit]['stock']}).\n";
    }


    public function getRecette(): float
    {
        return $this->caisse;
    }
}


$distributeur = new Distributeur([
    'Coca'   => ['prix' => 1.50, 'stock' => 5],
    'Fanta'  => ['prix' => 1.40, 'stock' => 3],
    'Eau'    => ['prix' => 0.90, 'stock' => 10],
    'Jus'    => ['prix' => 1.20, 'stock' => 2],
    'Thé'    => ['prix' => 1.00, 'stock' => 0],
]);

$distributeur->afficherProduits();

$distributeur->acheter('Coca', 2.00);

$distributeur->acheter('Fanta', 1.00);

$distributeur->acheter('Sprite', 1.50);

$distributeur->acheter('Thé', 1.20);

$distributeur->acheter('Eau', 1.00);

$distributeur->acheter('Jus', 2.00);

$distributeur->acheter('Jus', 2.00);
$distributeur->acheter('Coca', 5.00);

$distributeur->remplir('Thé', 4);

$distributeur->afficherProduits();

echo "💰  Recette totale du distributeur : " . number_format($distributeur->getRecette(), 2) . " €\n";
?>
