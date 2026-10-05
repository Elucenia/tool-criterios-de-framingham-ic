<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · de · no clinical/professional/rights approval -->

# Framingham-Kriterien für Herzinsuffizienz

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/criterios-de-framingham-ic)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Hauptkriterium: paroxysmale nächtliche Dyspnoe oder Orthopnoe

`dpn`

### Hauptkriterium: Halsvenenstauung

`turgencia`

### Hauptkriterium: pulmonale Rasselgeräusche

`estertores`

### Hauptkriterium: Kardiomegalie im Röntgenbild

`cardiomegalia`

### Hauptkriterium: akutes Lungenödem

`eap`

### Hauptkriterium: dritter Herzton (Galopprhythmus)

`b3`

### Hauptkriterium: zentraler Venendruck \> 16 cmH₂O

`pvc`

### Hauptkriterium: Kreislaufzeit ≥ 25 s

`tc`

### Hauptkriterium: hepatojugulärer Reflux

`refluxo`

### Haupt- oder Nebenkriterium: Gewichtsverlust ≥ 4,5 kg in 5 Tagen unter Behandlung

`perda`

### Nebenkriterium: beidseitige Knöchelödeme

`edema`

### Nebenkriterium: nächtlicher Husten

`tosse`

### Nebenkriterium: Dyspnoe bei gewöhnlicher Belastung

`dispneia`

### Nebenkriterium: Hepatomegalie

`hepatomegalia`

### Nebenkriterium: Pleuraerguss

`derrame`

### Nebenkriterium: Vitalkapazität um 1/3 des Maximums vermindert

`cv`

### Nebenkriterium: Tachykardie (Herzfrequenz ≥ 120 bpm)

`taqui`

## Fassung der Methode

Framingham/McKee 1971: 2 Haupt- oder 1 Haupt-+2 Nebenkriterien; Gewichtsverlust als Hauptkriterium

## Dokumentierte Formel

Herzinsuffizienzdiagnose mit 2 Hauptkriterien oder 1 Haupt- + 2 Nebenkriterien.

Nebenkriterien zählen nur ohne andere Erklärung (pulmonale Hypertonie, COPD, Zirrhose, Aszites, nephrotisches Syndrom). Gewichtsverlust unter Behandlung kann Haupt- oder Nebenkriterium sein; hier Hauptkriterium.

## Grenzen und Population

Die Haupt- und Nebenkriterien müssen gleichzeitig vorliegen; alternative Ursachen der Zeichen müssen berücksichtigt werden. Diese Oberfläche verwendet einen Gewichtsverlust von mindestens 4,5 kg in 5 Tagen während der Behandlung als Hauptkriterium; wenden Sie diese Gewichtung nicht auf Gewichtsverlust außerhalb dieses Zusammenhangs an. Der historische Kriterienkatalog erfasst nicht alle heutigen Herzinsuffizienz-Phänotypen und ersetzt keine strukturelle und funktionelle Beurteilung. Das Framingham-Protokoll von 2006 enthält zusätzliche Kriterien und darf nicht so dargestellt werden, als sei jedes davon in dieser historischen Version implementiert.

## Referenzen

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
