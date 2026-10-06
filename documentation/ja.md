<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · ja · no clinical/professional/rights approval -->

# 心不全のFramingham基準

[条件・出典・許諾](https://elucenia.org/ja/tools/criterios-de-framingham-ic)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 大基準：発作性夜間呼吸困難または起坐呼吸

`dpn`

### 大基準：頸静脈怒張

`turgencia`

### 大基準：肺ラ音

`estertores`

### 大基準：X線で心拡大

`cardiomegalia`

### 大基準：急性肺水腫

`eap`

### 大基準：第3心音（ギャロップ）

`b3`

### 大基準：中心静脈圧 \> 16 cmH₂O

`pvc`

### 大基準：循環時間 ≥ 25 s

`tc`

### 大基準：肝頸静脈逆流

`refluxo`

### 大基準または小基準：治療により5日で ≥ 4.5 kgの体重減少

`perda`

### 小基準：両側足関節浮腫

`edema`

### 小基準：夜間の咳

`tosse`

### 小基準：通常の労作で呼吸困難

`dispneia`

### 小基準：肝腫大

`hepatomegalia`

### 小基準：胸水

`derrame`

### 小基準：肺活量が最大値から1/3減少

`cv`

### 小基準：頻脈（心拍数 ≥ 120 bpm）

`taqui`

## 方法の版

Framingham/McKee 1971：大2または大1+小2；体重減少は大基準

## 記載された計算式

心不全診断： 大基準2項目または大基準1+小基準2.

小基準は他の病態（肺高血圧、COPD、肝硬変、腹水、ネフローゼ症候群など）で説明できない場合のみ加算します。治療による体重減少は大・小基準になり得ますが、ここでは大基準です。

## 限界・対象集団

大基準と小基準は同時に存在する必要があり、徴候の別の原因も考慮してください。この画面では、治療中の5日間で4.5 kg以上の体重減少を大基準として扱います。この状況以外の体重減少に同じ重みを適用しないでください。歴史的基準だけで現在の心不全のすべての表現型を確定することはできず、構造・機能評価の代わりにはなりません。2006年Framinghamプロトコルには追加項目があり、それらすべてがこの歴史的版に実装されているかのように示してはいけません。

## 参考文献

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

基準を満たさない（主要2項目または主要1項目＋副2項目が必要）


### 2

Framingham基準を満たす：心不全の臨床診断

ナトリウム利尿ペプチドと心エコーで確認してください。これらは駆出率も定義します。


### 3

Framingham基準を満たす：心不全の臨床診断

ナトリウム利尿ペプチドと心エコーで確認してください。これらは駆出率も定義します。


### 4

基準を満たさない（主要2項目または主要1項目＋副2項目が必要）

