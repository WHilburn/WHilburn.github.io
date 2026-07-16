/* Everden Player Guide — rendering logic. Content lives in the data/ folder. */
/* ── NAV ── */
function showSection(id, btn){
  document.querySelectorAll('.section-wrap').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('sec-'+id).classList.add('active');
  if(btn) btn.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ── MAP ── */
function openMapLightbox(){
  document.getElementById('map-lightbox').classList.add('active');
}
function closeMapLightbox(){
  document.getElementById('map-lightbox').classList.remove('active');
}
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeMapLightbox();
});

/* ── HERO ── */
function renderHero(){
  document.getElementById('hero-eyebrow').textContent = CONTENT.hero.eyebrow;
  document.getElementById('hero-title').textContent = CONTENT.hero.title;
  document.getElementById('hero-sub').innerHTML = CONTENT.hero.sub;
}

/* ── NATIONS ── */
function renderNations(){
  document.getElementById('nations-grid-label').textContent = CONTENT.nationsGridLabel;

  document.getElementById('nation-grid').innerHTML = CONTENT.nations.filter(n=>n.enabled!==false).map(n => `
    <div class="nation-card">
      <div class="nation-card-top">
        <div>
          <div class="nation-name">${n.name}</div>
          <div class="nation-subtitle">${n.subtitle}</div>
        </div>
        <div class="nation-badge">${n.badge}</div>
      </div>
      <p class="nation-desc">${n.desc[0]}</p>
      <div class="nation-values">
        ${n.values.map(v=>`<span class="tag">${v}</span>`).join('')}
      </div>
      <p class="nation-desc" style="margin:12px 0 0;">${n.desc[1]}</p>
      <div class="settlements">
        ${n.settlements.filter(s=>s.enabled!==false).map(s=>`
        <div class="settlement" onclick="this.classList.toggle('open')">
          <div class="settlement-header">
            <span class="settlement-name">${s.name}</span>
            <div class="settlement-tags">${s.tags.map(t=>`<span class="settlement-tag${t.capital?' capital':''}">${t.text}</span>`).join('')}</div>
            <span class="settlement-chevron">▾</span>
          </div>
          <div class="settlement-body">${s.body}</div>
        </div>`).join('')}
      </div>
      <div class="nation-leader" style="margin-top:14px;">${n.leaderLabel}<span>${n.leaderText}</span></div>
    </div>
  `).join('');

  document.getElementById('nation-notes').innerHTML = CONTENT.nationNotes.map(note => `
    <div class="section-label" style="margin-top:44px;">${note.label}</div>
    <div class="nation-card" style="max-width:640px;">
      <p class="nation-desc" style="margin:0;">${note.text}</p>
    </div>
  `).join('');
}

/* ── PANTHEON ── */
function renderPantheon(){
  document.getElementById('pantheon-intro').textContent = CONTENT.pantheon.intro;

  const visibleGroups = CONTENT.pantheon.groups
    .map(group => ({ ...group, gods: group.gods.filter(god=>god.enabled!==false) }))
    .filter(group => group.gods.length > 0);

  document.getElementById('pantheon-mount').innerHTML = visibleGroups.map((group, gi) => `
    <div class="section-label"${gi===0 ? ' style="margin-top:10;"' : ''}>${group.title}</div>
    <div class="god-grid">
      ${group.gods.map(god => `
      <div class="god-card" onclick="this.classList.toggle('open')">
        <div class="god-card-header">
          <div class="god-icon" style="background:${god.iconBg};">${god.icon}</div>
          <div class="god-names">
            <div class="god-name">${god.name}</div>
            <div class="god-epithet">${god.epithet}</div>
            <!-- ${god.original} -->
          </div>
          <span class="god-chevron">▾</span>
        </div>
        <div class="god-body">
          ${god.paragraphs.map(p=>`<p>${p}</p>`).join('')}
          <div class="worshipers">${god.worshipers.map(w=>`<span class="tag">${w}</span>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>
  `).join('') + `
    <div class="section-label" style="margin-top:44px;">${CONTENT.pantheon.patrons.label}</div>
    <p style="color:var(--muted);font-size:.93rem;margin-bottom:14px;line-height:1.7;">${CONTENT.pantheon.patrons.intro}</p>
    <div class="god-grid">
      ${CONTENT.pantheon.patrons.list.filter(p=>p.enabled!==false).map(p => `
      <div class="god-card" onclick="this.classList.toggle('open')">
        <div class="god-card-header">
          <div class="god-icon" style="background:${p.iconBg};">${p.icon}</div>
          <div class="god-names">
            <div class="god-name">${p.name}</div>
            <div class="god-epithet">${p.epithet}</div>
            <!-- ${p.original} -->
          </div>
          <span class="patron-type">${p.type}</span>
          <span class="god-chevron">▾</span>
        </div>
        <div class="god-body">
          ${p.paragraphs.map(par=>`<p>${par}</p>`).join('')}
          <div class="worshipers">${p.seekers.map(s=>`<span class="tag">${s}</span>`).join('')}</div>
        </div>
      </div>`).join('')}
    </div>
    <div class="section-label" style="margin-top:44px;">Other Powers</div>
    <div class="nation-card" style="max-width:640px;">
      <p class="nation-desc" style="margin:0;">${CONTENT.pantheon.otherPowersText}</p>
    </div>
  `;
}

/* ── CHARACTERS ── */
function renderCharacters(){
  document.getElementById('characters-label').textContent = CONTENT.characters.label;
  document.getElementById('characters-intro').innerHTML = CONTENT.characters.intro;

  document.getElementById('char-grid').innerHTML = CONTENT.characters.list.filter(c=>c.enabled!==false).map(c => `
    <div class="god-card" onclick="this.classList.toggle('open')">
      <div class="god-card-header">
        <div class="god-icon" style="background:${c.iconBg};">${c.icon}</div>
        <div class="god-names">
          <div class="god-name">${c.name}</div>
          <div class="god-epithet">${c.title}</div>
        </div>
        <span class="char-location">${c.location}</span>
        <span class="god-chevron">▾</span>
      </div>
      <div class="god-body">
        ${c.paragraphs.map(p=>`<p>${p}</p>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ── LANGUAGES ── */
function renderLanguages(){
  document.getElementById('languages-label').textContent = CONTENT.languagesLabel;
  document.getElementById('languages-intro').innerHTML = CONTENT.languages.intro;

  document.getElementById('lang-grid').innerHTML = CONTENT.languages.list.filter(l=>l.enabled!==false).map(l => `
    <div class="lang-card${l.extraClass ? ' '+l.extraClass : ''}"${l.style ? ` style="${l.style}"` : ''}>
      <div class="lang-name">${l.name}</div>
      <div class="lang-script">${l.script}</div>
      <p class="lang-desc">${l.desc}</p>
      ${l.restrict ? `<div class="lang-restrict">${l.restrict}</div>` : ''}
    </div>
  `).join('');
}

/* ── LORE & MYSTERIES ── */
function renderLore(){
  document.getElementById('lore-label').textContent = CONTENT.lore.label;
  document.getElementById('lore-intro').innerHTML = CONTENT.lore.intro;

  function loreCard(l, badgeClass){
    return `
      <div class="god-card" onclick="this.classList.toggle('open')">
        <div class="god-card-header">
          <div class="god-icon" style="background:${l.iconBg};">${l.icon}</div>
          <div class="god-names">
            <div class="god-name">${l.title}</div>
            <div class="god-epithet">${l.teaser}</div>
          </div>
          <span class="${badgeClass}">${l.status}</span>
          <span class="god-chevron">▾</span>
        </div>
        <div class="god-body">
          ${l.paragraphs.map(p=>`<p>${p}</p>`).join('')}
        </div>
      </div>`;
  }

  document.getElementById('lore-mount').innerHTML = `
    <div class="section-label" style="margin-top:10;">${CONTENT.lore.knownLore.label}</div>
    <p style="color:var(--muted);font-size:.93rem;margin-bottom:14px;line-height:1.7;">${CONTENT.lore.knownLore.intro}</p>
    <div class="god-grid">
      ${CONTENT.lore.knownLore.list.filter(l=>l.enabled!==false).map(l=>loreCard(l,'lore-fact')).join('')}
    </div>
    <div class="section-label" style="margin-top:44px;">${CONTENT.lore.mysteries.label}</div>
    <p style="color:var(--muted);font-size:.93rem;margin-bottom:14px;line-height:1.7;">${CONTENT.lore.mysteries.intro}</p>
    <div class="god-grid">
      ${CONTENT.lore.mysteries.list.filter(l=>l.enabled!==false).map(l=>loreCard(l,'lore-status')).join('')}
    </div>
  `;
}

/* ── RACES ── */
function showGrid(){
  document.getElementById('race-grid').style.display='grid';
  document.getElementById('other-races-section').style.display='';
  const d=document.getElementById('race-detail');
  d.classList.remove('active');
  d.innerHTML='';
  window.scrollTo({top:0,behavior:'smooth'});
}

function showDetail(id){
  const r=races.find(x=>x.id===id);
  document.getElementById('race-grid').style.display='none';
  document.getElementById('other-races-section').style.display='none';
  const detail=document.getElementById('race-detail');
  detail.classList.add('active');
  detail.innerHTML=`
    <button class="back" onclick="showGrid()">← Back to all races</button>
    <div class="detail-card">
      <div class="detail-header">
        <div>
          <div class="detail-title">${r.name}</div>
          <div class="detail-sub">${r.animal} · ${r.size} · ${r.speed} ft speed</div>
        </div>
        <div class="card-top-right">
          <div class="card-icons card-icons-lg">${(r.icons||[]).join(' ')}</div>
          <div class="pills"><div class="pill">${r.traits.length} Traits</div></div>
        </div>
      </div>
      <div class="lore">${r.lore}</div>
      <div class="section">
        <div class="section-label">Species Traits</div>
        <div class="traits">
          ${r.traits.map(t=>`<div class="full-trait"><strong>${t.n}.</strong> ${t.d}</div>`).join('')}
        </div>
      </div>
      <div class="section">
        <div class="section-label">Base Information</div>
        <div class="origin">Creature Type: Humanoid<br>Move Speed: ${r.speed} ft</div>
      </div>
    </div>
  `;
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderRaces(){
  const q=document.getElementById('search').value.toLowerCase();
  const filtered=races.filter(r=>r.enabled!==false).filter(r=>!q||r.name.toLowerCase().includes(q)||r.animal.toLowerCase().includes(q));
  const grid=document.getElementById('race-grid');
  if(!filtered.length){ grid.innerHTML='<div class="empty">No races found.</div>'; return; }
  grid.innerHTML=filtered.map(r=>`
    <div class="card" onclick="showDetail(${r.id})">
      <div class="card-top">
        <div><div class="card-name">${r.name}</div><div class="card-animal">${r.animal}</div></div>
        <div class="card-top-right">
          <div class="card-icons">${(r.icons||[]).join(' ')}</div>
          <div class="speed">${r.speed} ft</div>
        </div>
      </div>
      <div class="pills"><div class="pill">${r.size}</div><div class="pill">${r.traits.length} traits</div></div>
      <div class="preview">
        ${r.traits.slice(0,2).map(t=>`<div class="preview-trait"><strong>${t.n}.</strong> ${t.d.substring(0,90)}${t.d.length>90?'…':''}</div>`).join('')}
        <div class="more">+ ${r.traits.length-2} more traits</div>
      </div>
    </div>
  `).join('');
}

function renderOtherRaces(){
  document.getElementById('other-races-label').textContent = CONTENT.otherRaces.label;
  document.getElementById('other-races-intro').innerHTML = CONTENT.otherRaces.intro;

  document.getElementById('other-races-grid').innerHTML = CONTENT.otherRaces.list.filter(r=>r.enabled!==false).map(r => `
    <div class="god-card" onclick="this.classList.toggle('open')">
      <div class="god-card-header">
        <div class="god-icon" style="background:${r.iconBg};">${r.icon}</div>
        <div class="god-names">
          <div class="god-name">${r.name}</div>
          <div class="god-epithet">${r.subtitle}</div>
        </div>
        <span class="god-chevron">▾</span>
      </div>
      <div class="god-body">
        ${r.paragraphs.map(p=>`<p>${p}</p>`).join('')}
        <div class="worshipers">${r.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

/* ── TAB VISIBILITY ── */
// Hides the nav button + section for any tab set to false in CONTENT.tabs (see data/hero.js),
// and falls back to the first remaining enabled tab if the currently active one got hidden.
function applyTabVisibility(){
  const ids = Object.keys(CONTENT.tabs);
  ids.forEach(id => {
    const btn = document.getElementById('nav-'+id);
    if(btn) btn.style.display = CONTENT.tabs[id] === false ? 'none' : '';
  });
  const activeBtn = document.querySelector('.nav-btn.active');
  const activeHidden = !activeBtn || activeBtn.style.display === 'none';
  if(activeHidden){
    const fallbackId = ids.find(id => CONTENT.tabs[id] !== false);
    if(fallbackId) showSection(fallbackId, document.getElementById('nav-'+fallbackId));
  }
}

renderHero();
renderNations();
renderCharacters();
renderPantheon();
renderLanguages();
renderLore();
renderRaces();
renderOtherRaces();
applyTabVisibility();
