(function(){
  const G = window.GALLERY || {photos:[],videos:[]};
  const wrap = document.getElementById('sections');
  if (G.hero) document.querySelector('.hero').style.setProperty('--hero-img', `url(${G.hero})`);
  let flat = [];
  (window.SECTIONS||[]).forEach(sec => {
    const items = G.photos.filter(p => p.section === sec.id);
    if (!items.length) return;
    const el = document.createElement('section');
    el.className = 'section'; el.id = sec.id;
    el.innerHTML = `<h2><span class="script-sm">${sec.script}</span>${sec.title}</h2>` +
      (sec.intro ? `<p class="section-intro">${sec.intro}</p>` : '') +
      `<div class="grid"></div>`;
    const grid = el.querySelector('.grid');
    items.forEach(p => {
      const idx = flat.length; flat.push(p);
      const f = document.createElement('figure');
      const thumb = p.file.replace(/\.jpg$/, '-sm.jpg');
      f.innerHTML = `<img src="${thumb}" alt="${p.caption||'Baptism photo'}" loading="lazy" data-idx="${idx}"><figcaption>${p.caption||''}</figcaption>`;
      grid.appendChild(f);
    });
    wrap.appendChild(el);
  });
  const vg = document.getElementById('video-grid');
  (G.videos||[]).forEach(v => {
    const f = document.createElement('figure');
    f.innerHTML = `<video controls preload="metadata" ${v.poster?`poster="${v.poster}"`:''} src="${v.file}"></video><figcaption>${v.caption||''}</figcaption>`;
    vg.appendChild(f);
  });
  // Lightbox
  const lb = document.getElementById('lightbox'), img = document.getElementById('lb-img'),
        cap = document.getElementById('lb-cap'), dl = document.getElementById('lb-download');
  let cur = 0;
  function show(i){ cur = (i+flat.length)%flat.length; const p = flat[cur];
    img.src = p.file; img.alt = p.caption||''; cap.textContent = p.caption||''; dl.href = p.file; lb.hidden = false; }
  document.addEventListener('click', e => {
    const t = e.target.closest('img[data-idx]'); if (t) show(+t.dataset.idx);
    if (e.target.classList.contains('lb-close')) lb.hidden = true;
    if (e.target.classList.contains('lb-prev')) show(cur-1);
    if (e.target.classList.contains('lb-next')) show(cur+1);
  });
  document.addEventListener('keydown', e => { if (lb.hidden) return;
    if (e.key==='Escape') lb.hidden=true; if (e.key==='ArrowLeft') show(cur-1); if (e.key==='ArrowRight') show(cur+1); });
})();
