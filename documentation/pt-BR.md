<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · pt-BR · no clinical/professional/rights approval -->

# Critérios de Framingham para insuficiência cardíaca

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/criterios-de-framingham-ic)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Maior: dispneia paroxística noturna ou ortopneia

`dpn`

### Maior: turgência jugular

`turgencia`

### Maior: estertores pulmonares

`estertores`

### Maior: cardiomegalia na radiografia

`cardiomegalia`

### Maior: edema agudo de pulmão

`eap`

### Maior: terceira bulha (galope)

`b3`

### Maior: pressão venosa central \> 16 cmH₂O

`pvc`

### Maior: tempo de circulação ≥ 25 s

`tc`

### Maior: refluxo hepatojugular

`refluxo`

### Maior ou menor: perda ≥ 4,5 kg em 5 dias com o tratamento

`perda`

### Menor: edema bilateral de tornozelos

`edema`

### Menor: tosse noturna

`tosse`

### Menor: dispneia aos esforços habituais

`dispneia`

### Menor: hepatomegalia

`hepatomegalia`

### Menor: derrame pleural

`derrame`

### Menor: capacidade vital reduzida em 1/3 do máximo

`cv`

### Menor: taquicardia (FC ≥ 120 bpm)

`taqui`

## Edição do método

Framingham/Mc Kee 1971:2 maiores ou 1 maior+2 menores; perda depeso contada maior

## Fórmula documentada

Diagnóstico de insuficiência cardíaca com 2 critérios maiores ou 1 maior + 2 menores.

Os critérios menores só contam se não puderem ser atribuídos a outra condição (por exemplo, hipertensão pulmonar, DPOC, cirrose, ascite ou síndrome nefrótica). A perda de peso com o tratamento pode contar como critério maior ou menor; aqui é contada como maior.

## Limites e população

Os critérios maiores e menores devem estar presentes simultaneamente; causas alternativas dos sinais precisam ser consideradas. Esta interface usa a perda de pelo menos 4,5 kg em 5 dias durante tratamento como critério maior; não aplique esse peso a perda sem esse contexto. O conjunto histórico não estabelece todos os fenótipos atuais de insuficiência cardíaca nem substitui avaliação estrutural e funcional. O protocolo Framingham de 2006 contém itens adicionais e não deve ser apresentado como se cada um estivesse implementado nesta versão histórica.

## Referências

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
