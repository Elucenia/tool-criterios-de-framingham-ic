<!-- ELUCENIA technical documentation · criterios-de-framingham-ic · zh · no clinical/professional/rights approval -->

# Framingham 心力衰竭标准

[条件、来源与许可](https://elucenia.org/zh/tools/criterios-de-framingham-ic)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 主要标准：阵发性夜间呼吸困难或端坐呼吸

`dpn`

### 主要标准：颈静脉怒张

`turgencia`

### 主要标准：肺部啰音

`estertores`

### 主要标准：X 线显示心脏扩大

`cardiomegalia`

### 主要标准：急性肺水肿

`eap`

### 主要标准：第三心音（奔马律）

`b3`

### 主要标准：中心静脉压 \> 16 cmH₂O

`pvc`

### 主要标准：循环时间 ≥ 25 s

`tc`

### 主要标准：肝颈静脉回流征

`refluxo`

### 主要或次要标准：治疗后 5 天内体重下降 ≥ 4.5 kg

`perda`

### 次要标准：双侧踝部水肿

`edema`

### 次要标准：夜间咳嗽

`tosse`

### 次要标准：常规活动时呼吸困难

`dispneia`

### 次要标准：肝肿大

`hepatomegalia`

### 次要标准：胸腔积液

`derrame`

### 次要标准：肺活量较最大值下降 1/3

`cv`

### 次要标准：心动过速（心率 ≥ 120 bpm）

`taqui`

## 方法版本

Framingham/McKee 1971：2大或1大+2小；体重下降按大标准计

## 已记录的公式

心力衰竭诊断需 2项大标准或1项大标准+2项小标准.

小标准仅在不能归因于其他病况（如肺动脉高压、COPD、肝硬化、腹水或肾病综合征）时计入。治疗后体重下降可作大或小标准，本处按大标准计。

## 限制与适用人群

主要和次要标准必须同时存在，并须考虑这些体征的其他原因。此界面将治疗期间5天内至少减轻4.5 kg作为主要标准；不应将此权重用于缺乏该背景的体重下降。这组历史标准不能确定现代心力衰竭的所有表型，也不能代替结构和功能评估。2006年Framingham方案包含额外项目，不能声称这些项目均已在本历史版本中实现。

## 参考文献

- [McKee PA et al. The natural history of congestive heart failure: the Framingham study. N Engl J Med, 1971.](https://doi.org/10.1056/NEJM197112232852601)

- [McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J, 2021.](https://doi.org/10.1093/eurheartj/ehab368)

- [Framingham official event protocol,Version2,2006-08-24](https://biolincc.nhlbi.nih.gov/media/studies/framcohort/Protocols/Criteria%20for%20Events%20-%20Sequence%20of%20Events%20File%20SOE.pdf)

- [ARIC heart-failure abstraction protocol](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/document.cgi?phd=4516&study_id=phs000280.v3.p1)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
