// ============================================================
//  ASB JavaScript Academy — app.js
// ============================================================
'use strict';

// ── STATE ──
let state = { done:{}, xp:0, streak:0, last:'', currentId:0, view:'home' };
let clockTimer = null, countdownTimer = null, intervalTimer = null;
let debounceTimer = null;
let guessNumber = Math.ceil(Math.random()*100);
let todoList = [], notesList = [];

function loadState(){
  try {
    const s = localStorage.getItem('asbState');
    if(s) state = JSON.parse(s);
  } catch(e){}
}
function saveState(){
  try { localStorage.setItem('asbState', JSON.stringify(state)); } catch(e){}
}

// ── VIEWS ──
function showView(v){
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('view_'+v);
  if(el) el.classList.add('active');
  state.view = v;
  // bottom lesson nav
  document.getElementById('bottomNav').style.display = v==='lesson' ? 'flex' : 'none';
  // tab bar active state
  const tabs = document.querySelectorAll('#tabBar button');
  const tabMap = ['home','chapters','search','progress'];
  tabs.forEach((t,i) => {
    t.style.color = tabMap[i]===v ? '#007aff' : '#636366';
    t.style.fontWeight = tabMap[i]===v ? '700' : '400';
  });
  if(v==='home')     renderHome();
  if(v==='chapters') renderChapters();
  if(v==='search')   { const si=document.getElementById('searchInput'); if(si) si.value=''; renderSearch(''); }
  if(v==='progress') renderProgressView();
  window.scrollTo({top:0, behavior:'smooth'});
}

// ── RENDER HOME ──
function renderHome(){
  const total = CHAPTERS.length;
  const done  = Object.keys(state.done).length;
  const pct   = Math.round(done/total*100);
  document.getElementById('statDone').textContent  = done;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statPct').textContent   = pct+'%';
  document.getElementById('statXP').textContent    = state.xp || 0;
  document.getElementById('pbFill').style.width    = pct+'%';
  document.getElementById('pbLabel').textContent   = done+' / '+total+' অধ্যায় সম্পন্ন';
  document.getElementById('xpBadge').textContent   = (state.xp||0)+' XP';
  // streak
  const sb = document.getElementById('streakBadge');
  if(sb) sb.textContent = '🔥 '+state.streak+' Day Streak';
  // group cards
  const gc = document.getElementById('groupCards');
  if(!gc) return;
  gc.innerHTML = GROUPS.map(g => {
    const count = g.e - g.s;
    const doneCount = CHAPTERS.slice(g.s, g.e).filter(c => state.done[c.id]).length;
    return `<div class="group-card" style="border-top-color:${g.color}" onclick="jumpToGroup(${g.s})">
      <div class="gc-icon">${g.icon}</div>
      <div class="gc-label">${g.label}</div>
      <div class="gc-count">${doneCount}/${count} সম্পন্ন</div>
    </div>`;
  }).join('');
}

// ── RENDER CHAPTERS (drawer) ──
function renderDrawer(filter){
  const list = document.getElementById('drawerList');
  if(!list) return;
  let html = '';
  let lastGroup = -1;
  CHAPTERS.forEach((c, idx) => {
    // group label
    for(let i=0; i<GROUPS.length; i++){
      if(GROUPS[i].s === idx && (!filter || filter==='')) {
        html += `<div class="group-label">${GROUPS[i].label}</div>`;
        lastGroup = i;
        break;
      }
    }
    const isDone  = state.done[c.id] ? 'done' : '';
    const isAct   = state.currentId===c.id ? 'active' : '';
    const q       = filter ? filter.toLowerCase() : '';
    const hidden  = q && !c.title.toLowerCase().includes(q) ? 'hidden' : '';
    html += `<div class="ch-item ${isDone} ${isAct} ${hidden}" id="nav_${c.id}" onclick="openLesson(${c.id})">${c.title}</div>`;
  });
  list.innerHTML = html;
}

// ── RENDER CHAPTERS VIEW ──
function renderChapters(){
  const el = document.getElementById('chaptersList');
  if(!el) return;
  el.innerHTML = GROUPS.map(g => `
    <div class="section-title" style="color:${g.color}">${g.icon} ${g.label}</div>
    ${CHAPTERS.slice(g.s, g.e).map(c => `
      <div class="cp-item" onclick="openLesson(${c.id})">
        <span class="cp-icon">${state.done[c.id] ? '✅' : '⭕'}</span>
        <span class="cp-title">${c.title}</span>
      </div>`).join('')}
  `).join('');
}

// ── RENDER SEARCH ──
function renderSearch(q){
  const el = document.getElementById('searchResults');
  if(!el) return;
  const term = q.toLowerCase().trim();
  const results = term ? CHAPTERS.filter(c => c.title.toLowerCase().includes(term)) : [];
  if(!term){ el.innerHTML='<p style="color:#888;font-size:14px;text-align:center;margin-top:20px">কোনো Chapter খোঁজো...</p>'; return; }
  if(!results.length){ el.innerHTML='<p style="color:#888;font-size:14px;text-align:center;margin-top:20px">কোনো ফলাফল পাওয়া যায়নি।</p>'; return; }
  el.innerHTML = results.map(c => `
    <div class="result-item" onclick="openLesson(${c.id})">
      <div class="result-title">${c.title}</div>
      <div class="result-id">Chapter ${c.id+1}</div>
    </div>`).join('');
}

// ── RENDER PROGRESS VIEW ──
function renderProgressView(){
  const total = CHAPTERS.length;
  const done  = Object.keys(state.done).length;
  const pct   = Math.round(done/total*100);
  const el = document.getElementById('progressContent');
  if(!el) return;
  el.innerHTML = `
    <div class="xp-box">
      <div class="xp-num">🏆 ${state.xp||0} XP</div>
      <div class="xp-lbl">${done} / ${total} অধ্যায় সম্পন্ন (${pct}%)</div>
    </div>
    <div class="progress-bar-wrap">
      <div class="pb-label"><span>অগ্রগতি</span><span>${pct}%</span></div>
      <div class="pb"><div class="pb-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="section-title">সম্পন্ন অধ্যায় সমূহ</div>
    <div class="chapter-progress-list">
      ${CHAPTERS.filter(c=>state.done[c.id]).map(c=>`
        <div class="cp-item" onclick="openLesson(${c.id})">
          <span class="cp-icon">✅</span>
          <span class="cp-title">${c.title}</span>
        </div>`).join('') || '<p style="color:#888;font-size:14px;margin-top:8px">এখনো কোনো অধ্যায় সম্পন্ন হয়নি।</p>'}
    </div>
    <button onclick="resetProgress()" style="background:#ff3b30;margin-top:16px;width:100%">🗑 Progress Reset করো</button>`;
}

// ── OPEN LESSON ──
function openLesson(id){
  const ch = CHAPTERS.find(c => c.id === id);
  if(!ch) return;
  state.currentId = id;
  // inject HTML
  document.getElementById('lessonContent').innerHTML = ch.html;
  showView('lesson');
  window.scrollTo({top:0, behavior:'smooth'});
  // update nav highlight
  document.querySelectorAll('.ch-item').forEach(el => {
    el.classList.toggle('active', el.id==='nav_'+id);
  });
  // done button state
  document.getElementById('doneBtn').textContent = state.done[id] ? '✅' : '⬜';
  // re-attach dynamic events
  setTimeout(attachEvents, 80);
  closeDrawer();
  saveState();
}

function jumpToGroup(startId){
  openLesson(CHAPTERS[startId].id);
  showView('lesson');
}

// ── NAVIGATION ──
function prevLesson(){
  const idx = CHAPTERS.findIndex(c=>c.id===state.currentId);
  if(idx>0) openLesson(CHAPTERS[idx-1].id);
  else showToast('এটাই প্রথম অধ্যায়');
}
function nextLesson(){
  const idx = CHAPTERS.findIndex(c=>c.id===state.currentId);
  if(idx < CHAPTERS.length-1) openLesson(CHAPTERS[idx+1].id);
  else showToast('🎉 সব অধ্যায় শেষ!');
}

// ── MARK DONE ──
function markDone(){
  const id = state.currentId;
  if(state.done[id]){
    delete state.done[id];
    state.xp = Math.max(0,(state.xp||0)-10);
    document.getElementById('doneBtn').textContent = '⬜';
    showToast('⬜ সম্পন্ন চিহ্ন সরানো হয়েছে');
  } else {
    state.done[id] = true;
    state.xp = (state.xp||0)+10;
    document.getElementById('doneBtn').textContent = '✅';
    showXpPop('+10 XP 🎉');
    // streak check
    const today = new Date().toDateString();
    if(state.last !== today){
      state.streak = (state.streak||0)+1;
      state.last = today;
    }
  }
  // update drawer
  const el = document.getElementById('nav_'+id);
  if(el){ if(state.done[id]) el.classList.add('done'); else el.classList.remove('done'); }
  saveState();
  document.getElementById('xpBadge').textContent = (state.xp||0)+' XP';
}

// ── DRAWER ──
function toggleDrawer(){
  renderDrawer();
  document.getElementById('drawer').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}
function filterDrawer(q){
  renderDrawer(q);
}

// ── TOAST ──
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}
function showXpPop(msg){
  const p = document.getElementById('xpPop');
  p.textContent = msg; p.classList.add('show');
  setTimeout(()=>p.classList.remove('show'), 1600);
}

// ── RESET ──
function resetProgress(){
  if(!confirm('সব Progress মুছে ফেলবো?')) return;
  state.done={}; state.xp=0; state.streak=0;
  saveState(); showView('home');
  showToast('🗑 Progress Reset হয়েছে');
}

// ── DYNAMIC EVENT ATTACH ──
function attachEvents(){
  try{
    // eventBtn
    const eb=document.getElementById('eventBtn');
    if(eb){ eb.replaceWith(eb.cloneNode(true));
      document.getElementById('eventBtn').addEventListener('click',()=>{
        const o=document.getElementById('eventMessage');
        if(o) o.innerHTML='🎉 addEventListener সফলভাবে কাজ করেছে!';
      });
    }
    // keyboardInput
    const ki=document.getElementById('keyboardInput');
    if(ki) ki.addEventListener('input',function(){
      const o=document.getElementById('keyboardResult');
      if(o) o.innerHTML="⌨️ তুমি লিখলে: <b>"+this.value+"</b> | শেষ key: বাম দিকে দেখো";
    });
    if(ki) ki.addEventListener('keydown',function(ev){
      const o=document.getElementById('keyboardResult');
      if(o) o.innerHTML="⌨️ Key চাপলে: <b>'"+ev.key+"'</b>";
    });
    // mouseBox
    const mb=document.getElementById('mouseBox');
    if(mb){
      mb.addEventListener('mouseover',function(){
        this.style.background='#007aff'; this.style.color='white';
        const o=document.getElementById('mouseResult');
        if(o) o.innerHTML='🖱️ Mouse Hover করেছো!';
      });
      mb.addEventListener('mouseout',function(){
        this.style.background='#f0f0f5'; this.style.color='';
      });
      mb.addEventListener('click',function(){
        const o=document.getElementById('mouseResult');
        if(o) o.innerHTML='👆 Click হয়েছে!';
      });
    }
    // liveText
    const lt=document.getElementById('liveText');
    if(lt) lt.addEventListener('input',function(){
      const words = this.value.trim()===''?0:this.value.trim().split(/\s+/).length;
      const o=document.getElementById('charCount');
      if(o) o.innerHTML=`Character: ${this.value.length} | Word: ${words}`;
    });
    // wordText
    const wt=document.getElementById('wordText');
    if(wt) wt.addEventListener('input',function(){
      const words=this.value.trim()===''?0:this.value.trim().split(/\s+/).length;
      const o=document.getElementById('wordResult');
      if(o) o.innerHTML=`📝 শব্দ: ${words} | অক্ষর: ${this.value.length} | Sentence: ${this.value.split(/[।.!?]+/).filter(s=>s.trim()).length}`;
    });
    // guessInput enter
    const gi=document.getElementById('guessInput');
    if(gi) gi.addEventListener('keydown',ev=>{ if(ev.key==='Enter') makeGuess(); });
    // init color palette
    initColorPalette();
    // init typing test
    initTypingTest();
    // init todoList
    renderTodoList();
    renderNotesList();
    // init clock
    initClockDisplay();
  } catch(e){}
}

// ============================================================
//  CHAPTER FUNCTIONS
// ============================================================

// ── Chapter 1: Live Editor ──
function runExample(){
  const ed=document.getElementById('editor');
  const out=document.getElementById('output');
  if(ed && out) out.srcdoc=ed.value;
}

// ── Chapter 3: Console ──
function consoleExample(){
  const o=document.getElementById('consoleOutput');
  if(o) o.innerHTML='✅ console.log("Hello") → Console-এ দেখো (F12)<br>💡 Android-এ VConsole app ব্যবহার করো।';
  console.log("Hello"); console.log(100); console.log(true);
}

// ── Chapter 4: Variable Quiz ──
function quiz(el, result){
  const box = el.closest('.quiz-box');
  if(!box) return;
  box.querySelectorAll('.option').forEach(o=>{
    o.style.pointerEvents='none';
    o.classList.remove('correct','wrong');
  });
  el.classList.add(result==='correct'?'correct':'wrong');
  const qr = box.querySelector('.quiz-result');
  if(qr) qr.innerHTML = result==='correct'
    ? '✅ একদম সঠিক! চমৎকার!'
    : '❌ ভুল হয়েছে। আবার চেষ্টা করো।';
}

// ── Chapter 9: String ──
function stringExample(){
  const o=document.getElementById('stringOutput');
  const name="Ali"; const city="Dhaka";
  if(o) o.innerHTML=`নাম: ${name}<br>শহর: ${city}<br>Message: আমার নাম ${name}, আমি ${city}-তে থাকি।`;
}

// ── Chapter 20: Calculator ──
function addNumbers(){
  const a=parseFloat(document.getElementById('num1')?.value)||0;
  const b=parseFloat(document.getElementById('num2')?.value)||0;
  const o=document.getElementById('sumResult');
  if(o) o.innerHTML=`➕ ${a} + ${b} = <b>${a+b}</b>`;
}

// ── Chapter 22: Pass/Fail ──
function checkPass(){
  const marks=45;
  const o=document.getElementById('passOutput');
  if(o) o.innerHTML=marks>=33?'✅ অভিনন্দন! পাস করেছো ('+marks+'/100)':'❌ দুঃখিত, ফেল করেছো';
}

// ── Chapter 24: Age Check ──
function checkAge(){
  const age=parseInt(document.getElementById('ageInput')?.value)||0;
  const o=document.getElementById('ageResult');
  if(o) o.innerHTML=age>=18?'✅ তুমি প্রাপ্তবয়স্ক! সিনেমা দেখতে পারবে।':'🧒 তুমি অপ্রাপ্তবয়স্ক ('+age+' বছর)।';
}

// ── Chapter 28: for Loop ──
function runForLoop(){
  let out='';
  for(let i=1;i<=5;i++) out+=`<span style="margin-right:8px;background:#e8f0fe;padding:4px 10px;border-radius:8px">${i}</span>`;
  const o=document.getElementById('forOutput');
  if(o) o.innerHTML=out;
}

// ── Chapter 31: Practice Loop ──
function practiceLoop(){
  let out='';
  for(let i=1;i<=10;i++) out+=`<span style="margin:2px;display:inline-block;background:#e8f0fe;padding:4px 10px;border-radius:8px">${i}</span>`;
  const o=document.getElementById('practiceOutput');
  if(o) o.innerHTML=out;
}

// ── Chapter 32: sayHello ──
function sayHelloDemo(){
  const o=document.getElementById('helloResult');
  if(o) o.innerHTML='👋 হ্যালো বাংলাদেশ! Function সফলভাবে কাজ করেছে।';
}

// ── Chapter 34: Return/Add ──
function functionAdd(){
  const a=parseFloat(document.getElementById('fa')?.value)||0;
  const b=parseFloat(document.getElementById('fb')?.value)||0;
  function add(x,y){ return x+y; }
  const o=document.getElementById('functionResult');
  if(o) o.innerHTML=`function add(${a},${b}) = <b>${add(a,b)}</b>`;
}

// ── Chapter 39: Array ──
function showArray(){
  const fruits=['🥭 আম','🍌 কলা','🍎 আপেল','🍇 আঙুর','🍍 আনারস','🍉 তরমুজ'];
  const o=document.getElementById('arrayResult');
  if(o) o.innerHTML=fruits.map((f,i)=>`<div>${i} → ${f}</div>`).join('');
}

// ── Chapter 41: for...of ──
function showForOf(){
  const fruits=['🥭 আম','🍌 কলা','🍎 আপেল','🍇 আঙুর'];
  const o=document.getElementById('forOfOutput');
  if(o) o.innerHTML=fruits.map(f=>`<div>• ${f}</div>`).join('');
}

// ── Chapter 42: Object/Car ──
function showCar(){
  const car={brand:'Toyota',model:'Corolla',color:'⬜ White',year:2023,price:'২৫,০০,০০০ টাকা'};
  const o=document.getElementById('carResult');
  if(o) o.innerHTML=Object.entries(car).map(([k,v])=>`<b>${k}:</b> ${v}`).join('<br>');
}

// ── Chapter 46: DOM changeText ──
function changeText(){
  const el=document.getElementById('demoText');
  if(el){ el.innerHTML='🎉 JavaScript সফলভাবে HTML পরিবর্তন করেছে!'; el.style.color='#007aff'; }
}

// ── Chapter 48: showName ──
function showName(){
  const name=(document.getElementById('studentName')?.value||'').trim();
  const o=document.getElementById('nameResult');
  if(!o) return;
  if(!name){ o.innerHTML='❌ নাম খালি রাখলে হবে না!'; return; }
  o.innerHTML=`✅ স্বাগতম, <b>${name}</b>! 🎉`;
}

// ── Chapter 49: createElement ──
function createParagraph(){
  const area=document.getElementById('newParagraphArea');
  if(!area) return;
  const p=document.createElement('p');
  p.textContent='নতুন Paragraph '+new Date().toLocaleTimeString();
  p.style.cssText='padding:8px;background:#e8f4ff;border-radius:8px;margin:4px 0;font-size:14px';
  area.appendChild(p);
}

// ── Chapter 52: Math ──
function randomNumber(){
  const n=Math.floor(Math.random()*100)+1;
  const o=document.getElementById('randomOutput');
  if(o) o.innerHTML=`🎲 Random Number: <b>${n}</b> (Math.floor(Math.random()*100)+1)`;
}

// ── Chapter 53: String Methods ──
function countLength(){
  const v=document.getElementById('lengthInput')?.value||'';
  const o=document.getElementById('lengthResult');
  if(o) o.innerHTML=`📝 Character সংখ্যা: <b>${v.length}</b><br>UPPER: ${v.toUpperCase()}<br>lower: ${v.toLowerCase()}`;
}

// ── Chapter 54: split ──
function splitExample(){
  const fruits='🥭 আম,🍌 কলা,🍎 আপেল,🍇 আঙুর';
  const arr=fruits.split(',');
  const o=document.getElementById('splitResult');
  if(o) o.innerHTML=arr.map((f,i)=>`arr[${i}] = "${f}"`).join('<br>');
}

// ── Chapter 55: map ──
function mapExample(){
  const numbers=[10,20,30,40];
  const result=numbers.map(item=>item+10);
  const o=document.getElementById('mapResult');
  if(o) o.innerHTML=`Input:  [${numbers}]<br>Output: [${result}]`;
}

// ── Chapter 56: filter ──
function filterExample(){
  const ages=[10,15,18,20,35,40];
  const adults=ages.filter(a=>a>=18);
  const o=document.getElementById('filterResult');
  if(o) o.innerHTML=`সব বয়স: [${ages}]<br>প্রাপ্তবয়স্ক (≥18): [${adults}]`;
}

// ── Chapter 58: Date ──
function showDateTime(){
  const now=new Date();
  const o=document.getElementById('dateResult');
  if(o) o.innerHTML=`📅 তারিখ: ${now.toLocaleDateString('bn-BD')}<br>🕒 সময়: ${now.toLocaleTimeString('bn-BD')}<br>📆 বার: ${now.toLocaleDateString('bn-BD',{weekday:'long'})}<br>🗓️ মাস: ${now.toLocaleDateString('bn-BD',{month:'long'})}`;
}

// ── Chapter 59: JSON ──
function parseExample(){
  const text='{"name":"Ali","age":20,"country":"Bangladesh","course":"JavaScript"}';
  const obj=JSON.parse(text);
  const o=document.getElementById('parseResult');
  if(o) o.innerHTML=Object.entries(obj).map(([k,v])=>`<b>${k}:</b> ${v}`).join('<br>');
}

// ── Chapter 60: localStorage ──
function saveName(){
  const n=document.getElementById('saveNameInput')?.value||'';
  if(!n){ showToast('নাম লিখো'); return; }
  localStorage.setItem('savedName',n);
  const o=document.getElementById('saveResult');
  if(o) o.innerHTML=`✅ '${n}' localStorage-এ Save হয়েছে।`;
}
function loadName(){
  const n=localStorage.getItem('savedName')||'(কোনো Data নেই)';
  const o=document.getElementById('saveResult');
  if(o) o.innerHTML=`📦 Loaded: <b>${n}</b>`;
}

// ── Chapter 61: setTimeout ──
function timeoutDemo(){
  const o=document.getElementById('timeoutResult');
  if(o) o.innerHTML='⏳ ২ সেকেন্ড অপেক্ষা করো...';
  setTimeout(()=>{ if(o) o.innerHTML='✅ ২ সেকেন্ড পরে Code চালু হয়েছে! 🎉'; },2000);
}

// ── Chapter 62: setInterval ──
function intervalDemo(){
  if(intervalTimer){ stopInterval(); return; }
  const o=document.getElementById('intervalResult');
  intervalTimer=setInterval(()=>{
    if(o) o.innerHTML='⏰ '+new Date().toLocaleTimeString('bn-BD');
  },1000);
  const btn=document.querySelector('button[onclick="intervalDemo()"]');
  if(btn) btn.textContent='⏹ Stop';
}
function stopInterval(){
  if(intervalTimer){ clearInterval(intervalTimer); intervalTimer=null; }
  const btn=document.querySelector('button[onclick="intervalDemo()"]');
  if(btn) btn.textContent='▶ Start';
  showToast('Interval বন্ধ হয়েছে');
}

// ── Chapter 63: try-catch ──
function tryCatchDemo(){
  const o=document.getElementById('tryResult');
  try {
    let x = null; x.property; // TypeError
  } catch(err){
    if(o) o.innerHTML=`⚠️ Error ধরা পড়েছে!<br><b>Type:</b> ${err.name}<br><b>Message:</b> ${err.message}`;
  } finally {
    console.log('finally সবসময় চলে');
  }
}

// ── Chapter 64: Promise ──
function promiseSuccess(){
  const o=document.getElementById('promiseResult');
  if(o) o.innerHTML='⏳ Promise চলছে...';
  new Promise((res)=>setTimeout(()=>res('কাজ সফল! ✅'),1500))
    .then(r=>{ if(o) o.innerHTML=r; });
}
function promiseFail(){
  const o=document.getElementById('promiseResult');
  if(o) o.innerHTML='⏳ Promise চলছে...';
  new Promise((_,rej)=>setTimeout(()=>rej('কাজ ব্যর্থ হয়েছে ❌'),1500))
    .catch(e=>{ if(o) o.innerHTML=e; });
}

// ── Chapter 65: async/await ──
async function asyncDemo(){
  const o=document.getElementById('asyncResult');
  if(o) o.innerHTML='⏳ async চলছে...';
  try {
    const result = await new Promise(res=>setTimeout(()=>res('Data এসে গেছে! ✅'),1500));
    if(o) o.innerHTML=result;
  } catch(e){ if(o) o.innerHTML='❌ '+e; }
}

// ── Chapter 66: fetch ──
async function fetchUser(){
  const o=document.getElementById('fetchResult');
  if(o) o.innerHTML='⏳ Loading...';
  try {
    const res=await fetch('https://jsonplaceholder.typicode.com/users/1');
    const u=await res.json();
    if(o) o.innerHTML=`👤 <b>${u.name}</b><br>📧 ${u.email}<br>🌍 ${u.address.city}<br>🏢 ${u.company.name}`;
  } catch(e){ if(o) o.innerHTML='❌ Internet সংযোগ নেই। WiFi চালু করো।'; }
}

// ── Chapter 69: Spread ──
function spreadDemo(){
  const fruits=['🥭 আম','🍌 কলা'];
  const all=[...fruits,'🍎 আপেল','🍇 আঙুর'];
  const o=document.getElementById('spreadResult');
  if(o) o.innerHTML=`Original: [${fruits}]<br>Spread: [${all}]`;
}

// ── Chapter 70: Default Param ──
function defaultDemo(){
  function welcome(name='Guest'){ return `স্বাগতম, ${name}! 👋`; }
  const o=document.getElementById('defaultResult');
  if(o) o.innerHTML=welcome()+'<br>'+welcome('Ali');
}

// ── Chapter 71: Class ──
function classDemo(){
  class Student {
    constructor(name,age){ this.name=name; this.age=age; }
    introduce(){ return `আমি ${this.name}, বয়স ${this.age}`; }
  }
  const s=new Student('Ali',20);
  const o=document.getElementById('classResult');
  if(o) o.innerHTML=`✅ new Student() তৈরি হয়েছে!<br>${s.introduce()}`;
}

// ── Chapter 73: Regex/Email ──
function checkEmail(){
  const email=document.getElementById('emailInput')?.value.trim()||'';
  const ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const o=document.getElementById('emailResult');
  if(o) o.innerHTML=ok?'✅ Email format সঠিক!':'❌ সঠিক Email দাও। (যেমন: name@gmail.com)';
}

// ── Chapter 74: Error ──
function referenceDemo(){
  const o=document.getElementById('referenceResult');
  try { eval('console.log(xyzUndefined)'); }
  catch(err){ if(o) o.innerHTML=`⚠️ <b>${err.name}</b><br>${err.message}`; }
}

// ── Chapter 75: Closure ──
function closureDemo(){
  function outer(){ let c=0; return function(){ return ++c; }; }
  const counter=outer();
  const o=document.getElementById('closureResult');
  if(o) o.innerHTML=`counter() = ${counter()}<br>counter() = ${counter()}<br>counter() = ${counter()}<br>✅ Outer function শেষ হলেও count মনে আছে!`;
}

// ── Chapter 78: Optional Chaining ──
function optionalDemo(){
  const user={name:'Ali',address:null};
  const o=document.getElementById('optionalResult');
  if(o) o.innerHTML=`user.name: ${user.name}<br>user.address?.city: ${user.address?.city ?? '(null) → Nullish: Default City'}<br>✅ Error হয়নি!`;
}

// ── Chapter 79: Memory ──
function memoryDemo(){
  let a=10; let b=a; b=99;
  let obj1={name:'Ali'}; let obj2=obj1; obj2.name='Rahim';
  const o=document.getElementById('memoryResult');
  if(o) o.innerHTML=`📦 <b>Primitive (Stack):</b><br>a=${a}, b=${b} → আলাদা Copy<hr>📦 <b>Object (Heap):</b><br>obj1.name=${obj1.name}, obj2.name=${obj2.name} → একই Reference!`;
}

// ── Chapter 80: Event Loop ──
function engineDemo(){
  const o=document.getElementById('engineResult');
  let log=[];
  log.push('1️⃣ console.log("A") → Synchronous');
  log.push('2️⃣ setTimeout → Macro Task Queue');
  log.push('3️⃣ Promise → Micro Task Queue');
  log.push('');
  log.push('⚡ Execution Order:');
  log.push('→ A (Sync)');
  log.push('→ Promise (Micro Task)');
  log.push('→ C (Sync)');
  log.push('→ B (setTimeout - Macro Task)');
  if(o) o.innerHTML=log.join('<br>');
}

// ── Chapter 82: Recursion ──
function recursiveProject(){
  let out=[];
  function countdown(n){ if(n===0){ out.push('🚀 Go!'); return; } out.push(n); countdown(n-1); }
  countdown(5);
  const o=document.getElementById('recursiveResult');
  if(o) o.innerHTML=out.join(' → ');
}

// ── Chapter 83: To-Do App ──
function addTodo(){
  const input=document.getElementById('todoInput');
  if(!input||!input.value.trim()) return;
  todoList.push({id:Date.now(),text:input.value.trim(),done:false});
  input.value='';
  renderTodoList();
}
function toggleTodo(id){
  todoList=todoList.map(t=>t.id===id?{...t,done:!t.done}:t);
  renderTodoList();
}
function deleteTodo(id){
  todoList=todoList.filter(t=>t.id!==id);
  renderTodoList();
}
function renderTodoList(){
  const el=document.getElementById('todoList');
  if(!el) return;
  if(!todoList.length){ el.innerHTML='<p style="color:#888;font-size:13px;margin-top:8px">কোনো Task নেই। উপরে লিখে যোগ করো।</p>'; return; }
  el.innerHTML=todoList.map(t=>`
    <div style="display:flex;align-items:center;gap:8px;padding:10px;background:${t.done?'#f0f8f0':'#fff'};border-radius:12px;margin-top:8px;border:1px solid #e5e5ea">
      <span onclick="toggleTodo(${t.id})" style="font-size:18px;cursor:pointer">${t.done?'✅':'⭕'}</span>
      <span style="flex:1;font-size:14px;${t.done?'text-decoration:line-through;color:#888':''}">${t.text}</span>
      <span onclick="deleteTodo(${t.id})" style="color:#ff3b30;cursor:pointer;font-size:18px">🗑</span>
    </div>`).join('');
}

// ── Chapter 84: Calculator ──
function calc(op){
  const a=parseFloat(document.getElementById('c1')?.value)||0;
  const b=parseFloat(document.getElementById('c2')?.value)||0;
  let result;
  if(op==='/' && b===0){ const o=document.getElementById('calcResult'); if(o) o.innerHTML='❌ শূন্য দিয়ে ভাগ করা যায় না!'; return; }
  const ops={'+':(a,b)=>a+b,'-':(a,b)=>a-b,'*':(a,b)=>a*b,'/':(a,b)=>a/b};
  result=ops[op](a,b);
  const o=document.getElementById('calcResult');
  if(o) o.innerHTML=`${a} ${op} ${b} = <b>${parseFloat(result.toFixed(4))}</b>`;
}

// ── Chapter 85: Quiz App ──
function quizApp(el, correct){
  const box=el.closest('.quiz-box');
  if(!box) return;
  box.querySelectorAll('.option').forEach(o=>o.style.pointerEvents='none');
  el.style.background=correct?'#e6f9ec':'#fde8e8';
  el.style.borderColor=correct?'#34c759':'#ff3b30';
  const r=box.querySelector('#qaResult');
  if(r) r.innerHTML=correct?'🎉 সঠিক!':'❌ ভুল হয়েছে।';
}

// ── Chapter 86: Password Generator ──
function generatePassword(){
  const len=parseInt(document.getElementById('passLen')?.value)||12;
  const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let pwd='';
  for(let i=0;i<len;i++) pwd+=chars[Math.floor(Math.random()*chars.length)];
  const o=document.getElementById('passResult');
  if(o) o.innerHTML=`🔐 <b style="letter-spacing:1px;font-family:monospace">${pwd}</b>`;
}

// ── Chapter 87: Digital Clock ──
function initClockDisplay(){
  const d=document.getElementById('clockDisplay');
  if(!d) return;
  updateClockDisplay();
}
function updateClockDisplay(){
  const d=document.getElementById('clockDisplay');
  if(d) d.textContent=new Date().toLocaleTimeString('en-US',{hour12:false});
}
function startClock(){
  if(clockTimer){ clearInterval(clockTimer); clockTimer=null;
    const b=document.getElementById('clockBtn');
    if(b) b.textContent='▶ Clock চালু করো'; return;
  }
  clockTimer=setInterval(updateClockDisplay,1000);
  updateClockDisplay();
  const b=document.getElementById('clockBtn');
  if(b) b.textContent='⏹ Clock বন্ধ করো';
}

// ── Chapter 88: Random Quote ──
const QUOTES=[
  {text:"কোড লেখো, ভুল করো, শেখো — এটাই Programming।",author:"Unknown"},
  {text:"প্রতিদিন ১ লাইন কোড লিখো। এক বছরে ৩৬৫ লাইন।",author:"ASB Academy"},
  {text:"JavaScript শেখার সবচেয়ে ভালো সময় ছিল গতকাল। দ্বিতীয় ভালো সময় হলো আজ।",author:"Adapted"},
  {text:"Bug খোঁজা Programming-এর অর্ধেক কাজ।",author:"Donald Knuth"},
  {text:"Simple কোড লিখো। Future self তোমাকে ধন্যবাদ দেবে।",author:"Unknown"},
  {text:"Google করা skill। Copy-Paste করে শেখা আলাদা জিনিস।",author:"Dev Community"},
  {text:"যতক্ষণ না থামো ততক্ষণ তুমি ব্যর্থ নও।",author:"Unknown"},
];
function showQuote(){
  const q=QUOTES[Math.floor(Math.random()*QUOTES.length)];
  const o=document.getElementById('quoteResult');
  if(o) o.innerHTML=`"${q.text}"<br><br>— <b>${q.author}</b>`;
}

// ── Chapter 89: Form Validation ──
function validateForm(){
  const user=document.getElementById('username')?.value.trim()||'';
  const pass=document.getElementById('userpassword')?.value||'';
  const email=document.getElementById('useremail')?.value.trim()||'';
  const errors=[];
  if(user.length<4) errors.push('❌ Username ৪+ অক্ষর হতে হবে');
  if(pass.length<8) errors.push('❌ Password ৮+ অক্ষর হতে হবে');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('❌ সঠিক Email দাও');
  const o=document.getElementById('loginResult');
  if(o) o.innerHTML=errors.length?errors.join('<br>'):'✅ সব ঠিক আছে! Form Submit হবে।';
}

// ── Chapter 90: Window ──
function showWindowInfo(){
  const o=document.getElementById('windowInfo');
  if(o) o.innerHTML=`🖥️ Width: ${window.innerWidth}px<br>📏 Height: ${window.innerHeight}px<br>🌐 Language: ${navigator.language}<br>📱 Platform: ${navigator.platform||navigator.userAgentData?.platform||'Mobile'}`;
}

// ── Chapter 91: sessionStorage ──
function saveSession(){
  sessionStorage.setItem('course','ASB JavaScript Academy');
  const o=document.getElementById('sessionResult');
  if(o) o.innerHTML='✅ Session-এ Save হয়েছে। Tab বন্ধ করলে মুছে যাবে।';
}
function loadSession(){
  const c=sessionStorage.getItem('course')||'(খালি)';
  const o=document.getElementById('sessionResult');
  if(o) o.innerHTML=`📦 Session Data: <b>${c}</b>`;
}

// ── Chapter 93: Live Text ──
// (Handled in attachEvents via addEventListener)

// ── Chapter 94: Theme ──
function saveTheme(t){
  localStorage.setItem('theme',t);
  const o=document.getElementById('themeResult');
  if(o) o.innerHTML=`✅ '${t}' Theme Save হয়েছে।`;
}
function loadTheme(){
  const t=localStorage.getItem('theme')||'(কোনো Theme নেই)';
  const o=document.getElementById('themeResult');
  if(o) o.innerHTML=`📦 Saved Theme: <b>${t}</b>`;
}

// ── Chapter 95: Countdown ──
function countdown(){
  if(countdownTimer){ stopCountdown(); return; }
  let sec=parseInt(document.getElementById('countInput')?.value)||10;
  const o=document.getElementById('countdownResult');
  function tick(){
    if(!o) return;
    if(sec<0){ clearInterval(countdownTimer); countdownTimer=null; o.innerHTML='🚀 শেষ!'; return; }
    o.innerHTML=`<span style="font-size:36px">${sec}</span>`;
    sec--;
  }
  tick();
  countdownTimer=setInterval(tick,1000);
}
function stopCountdown(){
  if(countdownTimer){ clearInterval(countdownTimer); countdownTimer=null; }
  showToast('Countdown বন্ধ');
}

// ── Chapter 96: Random User ──
async function randomUser(){
  const o=document.getElementById('userResult');
  if(o) o.innerHTML='⏳ Loading...';
  try {
    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+Math.ceil(Math.random()*10));
    const u=await res.json();
    if(o) o.innerHTML=`👤 <b>${u.name}</b><br>📧 ${u.email}<br>📞 ${u.phone}<br>🌍 ${u.address.city}<br>🏢 ${u.company.name}`;
  } catch(e){ if(o) o.innerHTML='❌ Internet নেই। WiFi চালু করো।'; }
}

// ── Chapter 111: Debounce ──
function debounceSearch(val){
  clearTimeout(debounceTimer);
  const o=document.getElementById('debounceResult');
  if(o) o.innerHTML='⏳ টাইপ করছো...';
  debounceTimer=setTimeout(()=>{
    if(o) o.innerHTML=`🔍 Search: "<b>${val}</b>" — 300ms পরে চলেছে।`;
  },300);
}

// ── Chapter 113: Notes App ──
function addNote(){
  const title=document.getElementById('noteTitle')?.value.trim()||'';
  const body=document.getElementById('noteBody')?.value.trim()||'';
  if(!title){ showToast('শিরোনাম লিখো'); return; }
  notesList.push({id:Date.now(),title,body});
  const ti=document.getElementById('noteTitle');
  const bi=document.getElementById('noteBody');
  if(ti) ti.value=''; if(bi) bi.value='';
  renderNotesList();
}
function deleteNote(id){
  notesList=notesList.filter(n=>n.id!==id);
  renderNotesList();
}
function renderNotesList(){
  const el=document.getElementById('notesList');
  if(!el) return;
  if(!notesList.length){ el.innerHTML=''; return; }
  el.innerHTML=notesList.map(n=>`
    <div style="background:#fff;border-radius:12px;padding:12px;margin-top:8px;border-left:4px solid #007aff;box-shadow:0 1px 5px rgba(0,0,0,.07)">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <b style="font-size:14px">${n.title}</b>
        <span onclick="deleteNote(${n.id})" style="color:#ff3b30;cursor:pointer">🗑</span>
      </div>
      ${n.body?`<p style="font-size:13px;color:#555;margin-top:4px;line-height:1.5">${n.body}</p>`:''}
    </div>`).join('');
}

// ── Chapter 114: BMI ──
function calcBMI(){
  const w=parseFloat(document.getElementById('weight')?.value)||0;
  const h=parseFloat(document.getElementById('height')?.value)/100||0;
  if(!w||!h){ const o=document.getElementById('bmiResult'); if(o) o.innerHTML='❌ সংখ্যা দাও'; return; }
  const bmi=(w/(h*h)).toFixed(1);
  let status='';
  if(bmi<18.5) status='😟 Underweight';
  else if(bmi<25) status='✅ Normal';
  else if(bmi<30) status='⚠️ Overweight';
  else status='❌ Obese';
  const o=document.getElementById('bmiResult');
  if(o) o.innerHTML=`BMI: <b>${bmi}</b><br>অবস্থা: ${status}`;
}

// ── Chapter 115: Currency ──
const rates={USD:0.0091,EUR:0.0084,INR:0.76,GBP:0.0071};
function convertCurrency(to){
  const amount=parseFloat(document.getElementById('bdtAmount')?.value)||0;
  const result=(amount*rates[to]).toFixed(2);
  const o=document.getElementById('currencyResult');
  if(o) o.innerHTML=`৳ ${amount} BDT = <b>${result} ${to}</b><br><small style="color:#888">(Approximate rate)</small>`;
}

// ── Chapter 116: RPS ──
function playRPS(choice){
  const options=['rock','paper','scissors'];
  const emoji={'rock':'🪨','paper':'📄','scissors':'✂️'};
  const comp=options[Math.floor(Math.random()*3)];
  let result;
  if(choice===comp) result='🤝 Draw!';
  else if((choice==='rock'&&comp==='scissors')||(choice==='paper'&&comp==='rock')||(choice==='scissors'&&comp==='paper')) result='🎉 তুমি জিতেছো!';
  else result='😔 Computer জিতেছে!';
  const o=document.getElementById('rpsResult');
  if(o) o.innerHTML=`তুমি: ${emoji[choice]} vs Computer: ${emoji[comp]}<br><b>${result}</b>`;
}

// ── Chapter 117: Word Counter (via attachEvents) ──
function countWords(){
  const v=document.getElementById('wordText')?.value||'';
  const words=v.trim()===''?0:v.trim().split(/\s+/).length;
  const sentences=v.split(/[।.!?]+/).filter(s=>s.trim()).length;
  const o=document.getElementById('wordResult');
  if(o) o.innerHTML=`📊 শব্দ: <b>${words}</b> | অক্ষর: <b>${v.length}</b> | বাক্য: <b>${sentences}</b>`;
}

// ── Chapter 118: Color Picker ──
function initColorPalette(){
  const pal=document.getElementById('colorPalette');
  if(!pal) return;
  const colors=['#007aff','#34c759','#ff3b30','#ff9500','#af52de','#5ac8fa','#ff2d55','#5856d6','#1a1a2e','#ffd60a'];
  pal.innerHTML=colors.map(c=>`<div onclick="setColor('${c}')" style="height:40px;border-radius:8px;background:${c};cursor:pointer;transition:.2s"></div>`).join('');
}
function setColor(c){
  const box=document.getElementById('colorBox');
  if(box){ box.style.background=c; box.textContent=c; }
}
function randomColor(){
  const c='#'+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0');
  setColor(c);
}

// ── Chapter 119: Typing Test ──
const TYPING_TEXTS=[
  'JavaScript হলো সবচেয়ে জনপ্রিয় Programming Language।',
  'Variable হলো একটি Box যেখানে Data রাখা হয়।',
  'Function হলো এমন একটি Code Block যা বারবার ব্যবহার করা যায়।',
  'Array হলো অনেকগুলো Data একসাথে রাখার উপায়।',
];
let typingStart=null, typingTarget='', typingDone=false;
function initTypingTest(){
  const el=document.getElementById('typingTarget');
  if(!el) return;
  typingTarget=TYPING_TEXTS[Math.floor(Math.random()*TYPING_TEXTS.length)];
  typingStart=null; typingDone=false;
  el.textContent=typingTarget;
  const inp=document.getElementById('typingInput');
  if(inp) inp.value='';
  const o=document.getElementById('typingResult');
  if(o) o.innerHTML='⌨️ নিচে টাইপ শুরু করো...';
}
function startTypingTest(){
  if(!typingStart) typingStart=Date.now();
}
function checkTyping(){
  const inp=document.getElementById('typingInput');
  if(!inp||typingDone) return;
  if(!typingStart) typingStart=Date.now();
  const typed=inp.value;
  if(typed===typingTarget){
    typingDone=true;
    const elapsed=(Date.now()-typingStart)/1000;
    const wpm=Math.round((typingTarget.split(' ').length/elapsed)*60);
    const o=document.getElementById('typingResult');
    if(o) o.innerHTML=`✅ সঠিক!<br>⏱️ সময়: ${elapsed.toFixed(1)}s<br>⚡ Speed: ~${wpm} WPM`;
  }
}

// ── Chapter 120: Number Guessing ──
function makeGuess(){
  const g=parseInt(document.getElementById('guessInput')?.value)||0;
  const o=document.getElementById('guessResult');
  const h=document.getElementById('guessHint');
  if(!g||g<1||g>100){ if(o) o.innerHTML='❌ ১ থেকে ১০০-এর মধ্যে দাও'; return; }
  if(g===guessNumber){
    if(o) o.innerHTML=`🎉 একদম সঠিক! সংখ্যাটি ছিল <b>${guessNumber}</b>! নতুন খেলা শুরু করো।`;
    if(h) h.textContent='তুমি জিতেছো! 🏆';
  } else if(g<guessNumber){
    if(o) o.innerHTML=`📈 ${g} — আরো বড় সংখ্যা চেষ্টা করো`;
  } else {
    if(o) o.innerHTML=`📉 ${g} — আরো ছোট সংখ্যা চেষ্টা করো`;
  }
}
function newGame(){
  guessNumber=Math.ceil(Math.random()*100);
  const o=document.getElementById('guessResult');
  const h=document.getElementById('guessHint');
  const gi=document.getElementById('guessInput');
  if(o) o.innerHTML='';
  if(h) h.textContent='১ থেকে ১০০-এর মধ্যে একটি সংখ্যা ভাবছি...';
  if(gi) gi.value='';
}

// ── INIT ──
window.addEventListener('DOMContentLoaded', function(){
  loadState();
  renderHome();
  renderDrawer();
  // Start at last chapter if any
  if(state.currentId && state.view==='lesson'){
    openLesson(state.currentId);
  }
});
