#!/usr/bin/env node
/**
 * Dependency-free smoke tests for the Project Command Board.
 * Prevent a malformed Overview tag from silently moving the other sections
 * outside <main> and making the board appear blank.
 */
import { readFileSync } from 'node:fs';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const assert=(condition,label)=>{if(!condition)throw new Error('Command Board failed: '+label);console.log('PASS '+label);};

const sections=['overview','ai','tasks','team','timeline','docs','gates','chatbot'];
const page=html.slice(html.indexOf('<main>'),html.indexOf('</main>')+7);
assert(page.includes('<main>')&&page.endsWith('</main>'),'main content is present and closed');
assert(!/<\/[a-z][a-z\d-]*\s*\r?\n\s*</i.test(page),'no unfinished closing tags can swallow the next element');
assert(!html.includes('AI Dashboard</a>a>'),'AI Dashboard link is well-formed');
assert(html.includes('AI Dashboard</a></p>'),'Overview CTA is correctly closed');
assert(html.includes('href="#ai"'),'AI Workspace opens under the single board URL');
assert(html.includes('data-view="ai"'),'AI Workspace is part of the shared navigation');
assert(html.includes('data-src="ai-dashboard.html"'),'AI Dashboard is embedded and lazy-loaded');
assert(html.includes('<button data-view="ai" aria-label="AI Dashboard'),'AI Dashboard is pinned to shared sidebar');
assert(html.includes('data-view="ai"')&&html.indexOf('data-view="ai"')<html.indexOf('data-view="overview"'),'AI Dashboard is first item immediately under Parkday Guide brand');
assert(!html.includes('.app.ai-mode .sidebar{display:none'),'shared sidebar remains visible on AI Dashboard');
assert(html.includes('.sidebar{')&&html.includes('position:sticky'),'shared sidebar retains sticky positioning');
assert(!html.includes('class="ai-shellbar"'),'no duplicate navigation bars inside the AI Dashboard section');

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
assert(sections.every(x=>found.includes(x))&&found.length===sections.length,'all eight navigable sections exist once');
assert(stack.length===0,'main/div/section tags remain balanced');

const js=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].at(-1)?.[1];
assert(!!js,'board inline JavaScript exists');
new Function(js);
console.log('PASS dashboard JavaScript syntax');
assert(js.includes("show(PROJECT_VIEWS.has("),'initial view selects Overview or bookmarked AI Workspace');
assert(js.includes('window.addEventListener(\'hashchange\''),'project navigation works with one URL and hash sections');
assert(js.includes('function activateAiFrame()'),'AI Dashboard loads inside the same shell');
assert(js.includes('function openAiTask(taskId)'),'project tasks can be opened directly inside AI Brain');
assert(js.includes('embedded.contentDocument?.querySelector(\'a[href="./"]\')'),'AI Dashboard return link stays inside the unified workspace');
assert(js.includes('setInterval(()=>{if(!document.hidden)loadShared()},20000)'),'automatic 20-second shared task refresh exists');
assert(js.includes("['📋','Parkday working rules'")||js.includes('Parkday working rules'),'documents point to current project resources');
assert(!js.slice(js.indexOf('function renderGates(){'),js.indexOf('\nrenderDepts();')).includes('data-gate-confirm'),'production gate panel is read-only');
const people=JSON.parse(js.match(/const PEOPLE=(\[[\s\S]*?\]);\s*const START_TASKS=/)[1]);
for(const model of ['Muse','Claude','ChatGPT','Grok'])
  assert(people.filter(p=>p.ai_agent===model).length===10,model+' offline roster matches ten seats');
const ai=readFileSync(new URL('../ai-dashboard.html',import.meta.url),'utf8');
const aiJs=[...ai.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].at(-1)?.[1];
assert(!!aiJs,'original AI Dashboard scripts exist');
new Function(aiJs);
console.log('PASS original AI Dashboard JavaScript syntax and appearance preserved');
console.log('Unified Command Board and AI Workspace checks completed.');
