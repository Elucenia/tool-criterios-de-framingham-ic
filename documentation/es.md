<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · es · no clinical/professional/rights approval -->

# Criterios de Framingham para insuficiencia cardíaca

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/criterios-de-framingham-ic)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Mayor: disnea paroxística nocturna u ortopnea

`dpn`

### Mayor: ingurgitación yugular

`turgencia`

### Mayor: estertores pulmonares

`estertores`

### Mayor: cardiomegalia en la radiografía

`cardiomegalia`

### Mayor: edema agudo de pulmón

`eap`

### Mayor: tercer ruido cardíaco (galope)

`b3`

### Mayor: presión venosa central \> 16 cmH₂O

`pvc`

### Mayor: tiempo de circulación ≥ 25 s

`tc`

### Mayor: reflujo hepatoyugular

`refluxo`

### Mayor o menor: pérdida ≥ 4,5 kg en 5 días con tratamiento

`perda`

### Menor: edema bilateral de tobillos

`edema`

### Menor: tos nocturna

`tosse`

### Menor: disnea con esfuerzos habituales

`dispneia`

### Menor: hepatomegalia

`hepatomegalia`

### Menor: derrame pleural

`derrame`

### Menor: capacidad vital reducida en 1/3 del máximo

`cv`

### Menor: taquicardia (frecuencia cardíaca ≥ 120 bpm)

`taqui`

## Edición del método

Framingham/McKee 1971: 2 mayores o 1 mayor+2 menores; pérdida de peso contada como mayor

## Fórmula documentada

Diagnóstico de insuficiencia cardíaca con 2 criterios mayores o 1 mayor + 2 menores.

Los menores solo cuentan si no se atribuyen a otra condición (hipertensión pulmonar, EPOC, cirrosis, ascitis o síndrome nefrótico). La pérdida de peso con tratamiento puede ser mayor o menor; aquí es mayor.

## Límites y población

Los criterios mayores y menores deben estar presentes simultáneamente; deben considerarse causas alternativas de los signos. Esta interfaz utiliza la pérdida de al menos 4,5 kg en 5 días durante el tratamiento como criterio mayor; no atribuya esta ponderación a una pérdida sin ese contexto. El conjunto histórico no establece todos los fenotipos actuales de insuficiencia cardíaca ni sustituye la evaluación estructural y funcional. El protocolo Framingham de 2006 contiene elementos adicionales y no debe presentarse como si cada uno estuviera implementado en esta versión histórica.

## Referencias

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
