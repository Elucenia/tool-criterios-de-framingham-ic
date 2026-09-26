/* tool-criterios-de-framingham-ic · ELUCENIA · https://github.com/Elucenia/tool-criterios-de-framingham-ic
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"criterios-de-framingham-ic","title":"Critérios de Framingham para insuficiência cardíaca","fields":[["dpn","Maior: dispneia paroxística noturna ou ortopneia","chk",[]],["turgencia","Maior: turgência jugular","chk",[]],["estertores","Maior: estertores pulmonares","chk",[]],["cardiomegalia","Maior: cardiomegalia na radiografia","chk",[]],["eap","Maior: edema agudo de pulmão","chk",[]],["b3","Maior: terceira bulha (galope)","chk",[]],["pvc","Maior: pressão venosa central &gt; 16 cmH₂O","chk",[]],["tc","Maior: tempo de circulação ≥ 25 s","chk",[]],["refluxo","Maior: refluxo hepatojugular","chk",[]],["perda","Maior ou menor: perda ≥ 4,5 kg em 5 dias com o tratamento","chk",[]],["edema","Menor: edema bilateral de tornozelos","chk",[]],["tosse","Menor: tosse noturna","chk",[]],["dispneia","Menor: dispneia aos esforços habituais","chk",[]],["hepatomegalia","Menor: hepatomegalia","chk",[]],["derrame","Menor: derrame pleural","chk",[]],["cv","Menor: capacidade vital reduzida em 1/3 do máximo","chk",[]],["taqui","Menor: taquicardia (FC ≥ 120 bpm)","chk",[]]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var i=e.yes;
var t=function(a,e){var o=0;return e.forEach(function(e){i(a[e])&&o++}),o};
a.def("criterios-de-framingham-ic",function(a){var e=t(a,["dpn","turgencia","estertores","cardiomegalia","eap","b3","pvc","tc","refluxo","perda"]),o=t(a,["edema","tosse","dispneia","hepatomegalia","derrame","cv","taqui"]),r=e>=2||e>=1&&o>=2;return{main:[e+" + "+o,"maiores + menores"],label:"Critérios de Framingham",level:r?"high":e+o>0?"mid":"low",verdict:r?"Critérios preenchidos: diagnóstico clínico de insuficiência cardíaca":"Critérios não preenchidos (exigem 2 maiores ou 1 maior + 2 menores)",note:r?"Confirme com peptídeo natriurético e ecocardiograma, que também definem a fração de ejeção.":"",raw:{maiores:e,menores:o,dx:r}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
