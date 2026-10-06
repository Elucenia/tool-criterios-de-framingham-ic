<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · fr · no clinical/professional/rights approval -->

# Critères de Framingham d’insuffisance cardiaque

[conditions, sources et autorisations](https://elucenia.org/fr/outils/criterios-de-framingham-ic)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Majeur : dyspnée paroxystique nocturne ou orthopnée

`dpn`

### Majeur : turgescence jugulaire

`turgencia`

### Majeur : crépitants pulmonaires

`estertores`

### Majeur : cardiomégalie à la radiographie

`cardiomegalia`

### Majeur : œdème aigu du poumon

`eap`

### Majeur : troisième bruit cardiaque (galop)

`b3`

### Majeur : pression veineuse centrale \> 16 cmH₂O

`pvc`

### Majeur : temps de circulation ≥ 25 s

`tc`

### Majeur : reflux hépatojugulaire

`refluxo`

### Majeur ou mineur : perte ≥ 4,5 kg en 5 jours sous traitement

`perda`

### Mineur : œdème bilatéral des chevilles

`edema`

### Mineur : toux nocturne

`tosse`

### Mineur : dyspnée lors des efforts habituels

`dispneia`

### Mineur : hépatomégalie

`hepatomegalia`

### Mineur : épanchement pleural

`derrame`

### Mineur : capacité vitale réduite de 1/3 du maximum

`cv`

### Mineur : tachycardie (fréquence cardiaque ≥ 120 bpm)

`taqui`

## Édition de la méthode

Framingham/McKee 1971 : 2 majeurs ou 1 majeur+2 mineurs ; perte de poids comptée comme majeure

## Formule documentée

Diagnostic d’insuffisance cardiaque avec 2 critères majeurs ou 1 majeur + 2 mineurs.

Les critères mineurs comptent uniquement sans autre cause (hypertension pulmonaire, BPCO, cirrhose, ascite, syndrome néphrotique). La perte de poids sous traitement peut être majeure ou mineure ; ici elle est majeure.

## Limites et population

Les critères majeurs et mineurs doivent être présents simultanément ; les autres causes possibles des signes doivent être prises en compte. Cette interface utilise la perte d’au moins 4,5 kg en 5 jours pendant le traitement comme critère majeur ; n’attribuez pas cette pondération à une perte de poids hors de ce contexte. L’ensemble historique n’établit pas tous les phénotypes actuels d’insuffisance cardiaque et ne remplace pas l’évaluation structurelle et fonctionnelle. Le protocole Framingham de 2006 contient des éléments supplémentaires et ne doit pas être présenté comme si chacun était implémenté dans cette version historique.

## Références

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Critères non remplis (nécessitent 2 critères majeurs ou 1 majeur + 2 mineurs)


### 2

Critères remplis : diagnostic clinique d’insuffisance cardiaque

Confirmer avec le peptide natriurétique et l’échocardiogramme, qui définissent également la fraction d’éjection.


### 3

Critères remplis : diagnostic clinique d’insuffisance cardiaque

Confirmer avec le peptide natriurétique et l’échocardiogramme, qui définissent également la fraction d’éjection.


### 4

Critères non remplis (nécessitent 2 critères majeurs ou 1 majeur + 2 mineurs)

