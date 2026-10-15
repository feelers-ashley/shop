/* ---- the shelf: every sticker is a p5.js function, in the stickerbook's format ---- */

const STICKERS = [
  { name: 'reducedToClear', title: 'Reduced to Clear', code: `function reducedToClear(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#f7ee3a');
  rect(10, 50, 220, 140, 12);
  fill('#e8453c');
  rect(10, 50, 220, 52, 12, 12, 0, 0);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('#ffffff');
  textSize(34);
  text('REDUCED', 120, 77);
  fill('#1c1c1c');
  textSize(30);
  text('TO CLEAR', 120, 133);
  pop();
}` },
  { name: 'yellowSticker', title: 'Yellow Sticker', code: `function yellowSticker(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#f7ee3a');
  rect(20, 50, 200, 140, 8);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('#1c1c1c');
  textSize(22);
  text('WAS $2.50', 120, 82);
  stroke('#e8453c');
  strokeWeight(4);
  line(54, 82, 186, 82);
  noStroke();
  fill('#e8453c');
  textSize(52);
  text('$1.25', 120, 134);
  pop();
}` },
  { name: 'halfPrice', title: 'Half Price Burst', code: `function halfPrice(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#e8453c');
  for (let i = 0; i < 12; i++) {
    push();
    translate(120, 120);
    rotate(radians(i * 30));
    triangle(-34, -92, 34, -92, 0, -118);
    pop();
  }
  ellipse(120, 120, 190, 190);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('#ffffff');
  textSize(54);
  text('50%', 120, 100);
  textSize(34);
  text('OFF', 120, 148);
  pop();
}` },
  { name: 'threeForTwo', title: 'Three for Two', code: `function threeForTwo(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#e8453c');
  ellipse(120, 120, 200, 200);
  noFill();
  stroke('#ffffff');
  strokeWeight(4);
  ellipse(120, 120, 176, 176);
  noStroke();
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(48);
  text('3 for 2', 120, 112);
  textSize(18);
  text('MULTIBUY', 120, 156);
  pop();
}` },
  { name: 'doublePoints', title: 'Double Points', code: `function doublePoints(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#f5a524');
  rect(10, 60, 220, 120, 16);
  fill('#f7ee3a');
  ellipse(62, 120, 84, 84);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('#1c1c1c');
  textSize(40);
  text('2x', 62, 118);
  fill('#ffffff');
  textSize(25);
  text('DOUBLE', 158, 104);
  text('POINTS', 158, 138);
  pop();
}` },
  { name: 'newBurst', title: 'New Starburst', code: `function newBurst(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  translate(120, 120);
  fill('#f06ba8');
  push();
  for (let i = 0; i < 3; i++) {
    rotate(radians(30));
    rect(-78, -78, 156, 156);
  }
  pop();
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(60);
  text('NEW', 0, 0);
  pop();
}` },
  { name: 'barcode', title: 'Barcode Label', code: `function barcode(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  stroke('#d9d7d2');
  strokeWeight(3);
  fill('#ffffff');
  rect(20, 40, 200, 160, 6);
  noStroke();
  fill('#1c1c1c');
  for (let i = 0; i < 24; i++) {
    rect(38 + i * 7, 60, (i * 7) % 5 + 2, 90);
  }
  textFont('monospace');
  textAlign(CENTER, CENTER);
  textSize(15);
  text('5 012345 678903', 120, 172);
  pop();
}` },
  { name: 'priceTag', title: 'Price Tag', code: `function priceTag(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#f7ee3a');
  triangle(14, 120, 66, 60, 66, 180);
  rect(66, 60, 160, 120, 0, 12, 12, 0);
  fill('#ffffff');
  ellipse(54, 120, 16, 16);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('#1c1c1c');
  textSize(46);
  text('$1.99', 148, 112);
  textSize(16);
  text('EACH', 148, 150);
  pop();
}` },
  { name: 'bestBefore', title: 'Best Before Date', code: `function bestBefore(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  stroke('#d9d7d2');
  strokeWeight(3);
  fill('#ffffff');
  rect(20, 60, 200, 120, 6);
  noStroke();
  fill('#e8453c');
  rect(20, 60, 200, 14, 6, 6, 0, 0);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill('#1c1c1c');
  textSize(20);
  text('BEST BEFORE', 120, 98);
  textSize(44);
  text('12 NOV', 120, 140);
  pop();
}` },
  { name: 'useBy', title: 'Use By Date', code: `function useBy(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#e8453c');
  rect(20, 60, 200, 120, 8);
  fill('#ffffff');
  rect(32, 118, 176, 50, 4);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(34);
  text('USE BY', 120, 90);
  fill('#e8453c');
  textSize(30);
  text('20 OCT', 120, 144);
  pop();
}` },
  { name: 'fresh', title: 'Fresh Leaf Badge', code: `function fresh(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#5bb450');
  ellipse(120, 120, 200, 200);
  push();
  translate(120, 82);
  rotate(radians(-35));
  fill('#ffffff');
  ellipse(0, 0, 84, 36);
  stroke('#5bb450');
  strokeWeight(3);
  line(-34, 0, 34, 0);
  pop();
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(38);
  text('FRESH', 120, 152);
  pop();
}` },
  { name: 'vegan', title: 'Vegan Tick Badge', code: `function vegan(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#3f8f4a');
  rect(30, 30, 180, 180, 50);
  stroke('#ffffff');
  strokeWeight(12);
  line(76, 100, 104, 128);
  line(104, 128, 156, 72);
  noStroke();
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(32);
  text('VEGAN', 120, 170);
  pop();
}` },
  { name: 'frozen', title: 'Frozen Snowflake', code: `function frozen(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#4a9be0');
  ellipse(120, 120, 200, 200);
  stroke('#ffffff');
  strokeWeight(8);
  for (let i = 0; i < 3; i++) {
    push();
    translate(120, 100);
    rotate(radians(i * 60));
    line(-50, 0, 50, 0);
    pop();
  }
  noStroke();
  fill('#ffffff');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(30);
  text('FROZEN', 120, 172);
  pop();
}` },
  { name: 'organic', title: 'Organic Kraft Label', code: `function organic(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill('#c9a36b');
  rect(20, 50, 200, 140, 10);
  noFill();
  stroke('#5a3d1e');
  strokeWeight(3);
  rect(32, 62, 176, 116, 6);
  noStroke();
  fill('#2e6b34');
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(31);
  text('ORGANIC', 120, 112);
  textSize(16);
  text('100% NATURAL', 120, 150);
  pop();
}` }
];

/* ---- state ---- */

const $ = id => document.getElementById(id);
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const cartIcon = inner => `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h3l2.4 11.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>${inner}</svg>`;
const ICON_ADD = cartIcon('<path d="M12.5 8v4.5M10.25 10.25h4.5"/>');   // cart with a plus
const ICON_IN = cartIcon('<path d="M10 10.5l1.8 1.8L15 9"/>');          // cart with a tick
const price = s => s.code.split('\n').length;       // price is the number of lines of code
const money = n => n + (n === 1 ? ' line' : ' lines');
const find = name => STICKERS.find(s => s.name === name);
let query = '', cart = [];
const opened = new Set();                        // cart items whose code is showing
try { cart = JSON.parse(localStorage.getItem('stickersave-cart') || '[]').filter(find); } catch (e) { /* no storage: start empty */ }

/* ---- p5.js editor colours, the same as the stickerbook ---- */

const P5_FN = new Set('setup draw createCanvas background clear fill noFill stroke noStroke strokeWeight rect ellipse circle square triangle line quad arc point push pop translate rotate scale radians degrees text textSize textAlign textStyle textFont'.split(' '));
const P5_VAR = new Set('width height mouseX mouseY windowWidth windowHeight frameCount PI TWO_PI CENTER BOLD'.split(' '));
try {
  Object.keys(p5.prototype).forEach(k => {
    if (k[0] === '_') return;
    if (typeof p5.prototype[k] === 'function') P5_FN.add(k);
    else if (/^[A-Z][A-Z_0-9]*$/.test(k)) P5_VAR.add(k);
  });
} catch (e) { /* p5 not loaded: the short lists still apply */ }
const KEYWORD = new Set('function return if else for while new of in this'.split(' '));
const TOKEN = /(\/\/.*)|('[^']*'|"[^"]*"|`[^`]*`)|(\b\d+\.?\d*\b)|(\.\s*[A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)/g;

function hl(line) {
  let out = '', i = 0;
  line.replace(TOKEN, (m, com, str, num, prop, id, at) => {
    const cls = com ? 'c' : str ? 's' : num ? 'n' : prop ? 'p'
      : ['const', 'let', 'var'].includes(id) ? 'v' : KEYWORD.has(id) ? 'k' : ['true', 'false', 'null'].includes(id) || P5_VAR.has(id) ? 'a'
      : P5_FN.has(id) ? 'f' : 'v';
    out += esc(line.slice(i, at)) + `<span class="${cls}">${esc(m)}</span>`;
    i = at + m.length;
    return m;
  });
  return out + esc(line.slice(i));
}

/* ---- the aisles and the shelf ---- */

STICKERS.forEach(s => {
  const li = document.createElement('article');
  li.className = 'tile';
  li.dataset.name = s.name;
  li.innerHTML = `
    <div class="pic"><img alt="${esc(s.title)} sticker" width="240" height="240"></div>
    <h3>${esc(s.title)}</h3>
    <div class="buy-row"><b>${money(price(s))}</b><button class="add" aria-pressed="false"></button></div>`;
  li.querySelector('.add').onclick = () => toggle(s.name);
  $('grid').append(li);
});

function showShelf() {
  const q = query.trim().toLowerCase();
  let shown = 0;
  document.querySelectorAll('.tile').forEach(t => {
    const s = find(t.dataset.name);
    t.hidden = !!q && !(s.title + ' ' + s.name).toLowerCase().includes(q);
    if (!t.hidden) shown++;
  });
  $('none').hidden = shown > 0;
}
$('search').addEventListener('input', e => { query = e.target.value; showShelf(); });

/* ---- the cart ---- */

function toggle(name) {
  cart = cart.includes(name) ? cart.filter(n => n !== name) : [...cart, name];
  try { localStorage.setItem('stickersave-cart', JSON.stringify(cart)); } catch (e) { /* ignore */ }
  renderCart();
}

async function copy(text, button, label) {
  try { await navigator.clipboard.writeText(text); }
  catch (e) {                                     // older browsers: select a hidden textarea
    const t = document.createElement('textarea');
    t.value = text; document.body.append(t); t.select(); document.execCommand('copy'); t.remove();
  }
  button.textContent = 'Copied ✓';
  setTimeout(() => { button.textContent = label; }, 1500);
}

function renderCart() {
  const items = cart.map(find);
  $('count').textContent = items.length;
  $('clear').hidden = $('checkout').hidden = !items.length;
  document.querySelectorAll('.tile').forEach(t => {
    const on = cart.includes(t.dataset.name), b = t.querySelector('.add');
    b.innerHTML = on ? ICON_IN : ICON_ADD;
    b.title = b.ariaLabel = (on ? 'Remove ' : 'Add ') + find(t.dataset.name).title + (on ? ' from cart' : ' to cart');
    b.setAttribute('aria-pressed', on);
    t.classList.toggle('in', on);
  });

  $('items').innerHTML = items.length ? '' :
    '<p class="empty">Your cart is empty. Add a sticker and the p5.js code that draws it lands here, ready to copy.</p>';
  items.forEach(s => {
    const el = document.createElement('div');
    el.className = 'line';
    const open = opened.has(s.name);
    el.innerHTML = `<header><button class="tog" aria-expanded="${open}" aria-label="${open ? 'Hide' : 'Show'} code for ${esc(s.title)}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><b>${esc(s.title)}</b><span>${money(price(s))}</span><button class="copy">Copy</button><button class="x" aria-label="Remove ${esc(s.title)}">×</button></header>
      <pre${open ? '' : ' hidden'}>${s.code.split('\n').map(l => `<span class="ln">${hl(l)}</span>`).join('')}</pre>`;
    const flip = () => { opened.has(s.name) ? opened.delete(s.name) : opened.add(s.name); renderCart(); };
    el.querySelector('.tog').onclick = flip;
    el.querySelector('header b').onclick = flip;
    el.querySelector('.copy').onclick = e => copy(s.code, e.target, 'Copy');
    el.querySelector('.x').onclick = () => toggle(s.name);
    $('items').append(el);
  });
  $('total').textContent = money(items.reduce((sum, s) => sum + price(s), 0));
}
$('copyall').onclick = e => copy(cart.map(n => find(n).code).join('\n\n'), e.target, 'Copy All Code');
$('clear').onclick = () => { cart = []; try { localStorage.removeItem('stickersave-cart'); } catch (e) { /* ignore */ } renderCart(); };

/* ---- thumbnails: run each sticker's own code on an off-screen p5 canvas ---- */

if (typeof p5 === 'undefined') {                  // the pictures are drawn by p5, so say so if it didn't load
  $('none').textContent = "p5.js didn't load, so the stickers can't be drawn. Check your connection and reload.";
  $('none').hidden = false;
} else new p5(p => {
  p.setup = () => {
    p.noCanvas();
    STICKERS.forEach(s => {
      const g = p.createGraphics(240, 240);
      g.pixelDensity(2);
      new Function('p', `with (p) {\n${s.code}\nreturn ${s.name};\n}`)(g)(0, 0, 1);   // call it like a pasted sticker
      document.querySelector(`[data-name="${s.name}"] img`).src = g.elt.toDataURL();
      g.remove();
    });
  };
});

showShelf();
renderCart();
