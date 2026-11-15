#!/usr/bin/env node
/**
 * Dependency-free smoke tests for the Project Command Board.
 * Prevent a malformed Overview tag from silently moving the other sections
 * outside <main> and making the board appear blank.
 */
import { readFileSync } from 'node:fs';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const assert=(condition,label)=>{if(!condition)throw new Error('Command Board failed: '+label);console.log('PASS '+label);};

const sections=['overview','tasks','team','timeline','docs','gates','chatbot'];
const page=html.slice(html.indexOf('<main>'),html.indexOf('</main>')+7);
assert(page.includes('<main>')&&page.endsWith('</main>'),'main content is present and closed');
assert(!/<\/[a-z][a-z\d-]*\s*\r?\n\s*</i.test(page),'no unfinished closing tags can swallow the next element');
assert(!html.includes('AI Dashboard</a>a>'),'AI Dashboard link is well-formed');
assert(html.includes('AI Dashboard</a></p>'),'Overview CTA is correctly closed');

const stack=[];
const tag=/<\/?(?:main|div|section)\b[^>]*>/gi;
let match,found=[];
while((match=tag.exec(page))){
  const txt=match[0],close=txt.startsWith('</');
  const name=txt.match(/^<\/?([a-z]+)/i)[1].toLowerCase();
  if(!close){
    const id=(txt.match(/\bid="([^"]+)"/)||[])[1];
    if(name==='section'&&sections.includes(id)){
      assert(stack.some(x=>x.name==='main'),'section '+id+' stays inside the main area');
      assert(!stack.some(x=>sections.includes(x.id)),'section '+id+' is not nested in a hidden navigation view');
      found.push(id);
    }
    stack.push({name,id});
  }else{
    const idx=stack.findLastIndex(x=>x.name===name);
    assert(idx>=0,'closing '+name+' matches an opening element');
    stack.splice(idx);
  }
}
assert(sections.every(x=>found.includes(x))&&found.length===sections.length,'all seven navigable sections exist once');
assert(stack.length===0,'main/div/section tags remain balanced');

const js=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].at(-1)?.[1];
assert(!!js,'board inline JavaScript exists');
new Function(js);
console.log('PASS dashboard JavaScript syntax');
assert(js.includes('show(\'overview\')'),'Overview initializes visibly');
assert(js.includes('setInterval(()=>{if(!document.hidden)loadShared()},20000)'),'automatic 20-second shared task refresh exists');
assert(js.includes("['📋','Parkday working rules'")||js.includes('Parkday working rules'),'documents point to current project resources');
assert(!js.slice(js.indexOf('function renderGates(){'),js.indexOf('\nrenderDepts();')).includes('data-gate-confirm'),'production gate panel is read-only');
const people=JSON.parse(js.match(/const PEOPLE=(\[[\s\S]*?\]);\s*const START_TASKS=/)[1]);
for(const model of ['Muse','Claude','ChatGPT','Grok'])
  assert(people.filter(p=>p.ai_agent===model).length===10,model+' offline roster matches ten seats');
console.log('Command Board checks completed.');
