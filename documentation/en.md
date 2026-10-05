<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · en · no clinical/professional/rights approval -->

# Framingham heart failure criteria

[conditions, sources and permissions](https://elucenia.org/en/tools/criterios-de-framingham-ic)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Major: paroxysmal nocturnal dyspnea or orthopnea

`dpn`

### Major: jugular venous distension

`turgencia`

### Major: pulmonary crackles

`estertores`

### Major: cardiomegaly on chest radiograph

`cardiomegalia`

### Major: acute pulmonary edema

`eap`

### Major: third heart sound (gallop)

`b3`

### Major: central venous pressure \> 16 cmH₂O

`pvc`

### Major: circulation time ≥ 25 s

`tc`

### Major: hepatojugular reflux

`refluxo`

### Major or minor: weight loss ≥ 4.5 kg in 5 days with treatment

`perda`

### Minor: bilateral ankle edema

`edema`

### Minor: nocturnal cough

`tosse`

### Minor: dyspnea on ordinary exertion

`dispneia`

### Minor: hepatomegaly

`hepatomegalia`

### Minor: pleural effusion

`derrame`

### Minor: vital capacity reduced by 1/3 of maximum

`cv`

### Minor: tachycardia (heart rate ≥ 120 bpm)

`taqui`

## Method edition

Framingham/McKee 1971: 2 major or 1 major+2 minor; weight loss counted as major

## Documented formula

Heart failure diagnosis with 2 major criteria or 1 major + 2 minor.

Minor criteria count only if not attributable to another condition (e.g. pulmonary hypertension, COPD, cirrhosis, ascites or nephrotic syndrome). Weight loss with treatment may count as major or minor; here it counts as major.

## Limits and population

The major and minor criteria must be present simultaneously; alternative causes of the signs must be considered. This interface treats a loss of at least 4.5 kg in 5 days during treatment as a major criterion; do not assign this scoring weight to weight loss outside that context. The historical set does not establish every current heart-failure phenotype or replace structural and functional assessment. The 2006 Framingham protocol contains additional items and must not be presented as though each of them were implemented in this historical version.

## References

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
