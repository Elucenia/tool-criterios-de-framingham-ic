<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · it · no clinical/professional/rights approval -->

# Criteri di Framingham per l’insufficienza cardiaca

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/criterios-de-framingham-ic)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Maggiore: dispnea parossistica notturna od ortopnea

`dpn`

### Maggiore: turgore giugulare

`turgencia`

### Maggiore: rantoli polmonari

`estertores`

### Maggiore: cardiomegalia alla radiografia

`cardiomegalia`

### Maggiore: edema polmonare acuto

`eap`

### Maggiore: terzo tono cardiaco (galoppo)

`b3`

### Maggiore: pressione venosa centrale \> 16 cmH₂O

`pvc`

### Maggiore: tempo di circolazione ≥ 25 s

`tc`

### Maggiore: reflusso epato-giugulare

`refluxo`

### Maggiore o minore: perdita ≥ 4,5 kg in 5 giorni con il trattamento

`perda`

### Minore: edema bilaterale delle caviglie

`edema`

### Minore: tosse notturna

`tosse`

### Minore: dispnea durante gli sforzi abituali

`dispneia`

### Minore: epatomegalia

`hepatomegalia`

### Minore: versamento pleurico

`derrame`

### Minore: capacità vitale ridotta di 1/3 del massimo

`cv`

### Minore: tachicardia (frequenza cardiaca ≥ 120 bpm)

`taqui`

## Edizione del metodo

Framingham/McKee 1971: 2 maggiori o 1 maggiore+2 minori; perdita di peso come maggiore

## Formula documentata

Diagnosi di scompenso cardiaco con 2 criteri maggiori o 1 maggiore + 2 minori.

I minori contano solo se non attribuibili ad altra causa (ipertensione polmonare, BPCO, cirrosi, ascite, sindrome nefrosica). La perdita di peso con terapia può essere maggiore o minore; qui è maggiore.

## Limiti e popolazione

I criteri maggiori e minori devono essere presenti contemporaneamente; occorre considerare cause alternative dei segni. Questa interfaccia utilizza la perdita di almeno 4,5 kg in 5 giorni durante il trattamento come criterio maggiore; non attribuire questa ponderazione a una perdita di peso al di fuori di tale contesto. L’insieme storico non definisce tutti i fenotipi attuali di insufficienza cardiaca né sostituisce la valutazione strutturale e funzionale. Il protocollo Framingham del 2006 contiene elementi aggiuntivi e non deve essere presentato come se ciascuno fosse implementato in questa versione storica.

## Riferimenti

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
