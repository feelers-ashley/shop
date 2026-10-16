/* ---- the shelf: every sticker is a p5.js function, in the stickerbook's format ---- */

const STICKERS = [
  {
    name: "reducedToClear",
    title: "Reduced to Clear",
    code: `function reducedToClear(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "yellowSticker",
    title: "Yellow Sticker",
    code: `function yellowSticker(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "halfPrice",
    title: "Half Price Burst",
    code: `function halfPrice(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "threeForTwo",
    title: "Three for Two",
    code: `function threeForTwo(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "doublePoints",
    title: "Double Points",
    code: `function doublePoints(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "newBurst",
    title: "New Starburst",
    code: `function newBurst(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "barcode",
    title: "Barcode Label",
    code: `function barcode(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "priceTag",
    title: "Price Tag",
    code: `function priceTag(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "bestBefore",
    title: "Best Before Date",
    code: `function bestBefore(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "useBy",
    title: "Use By Date",
    code: `function useBy(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "fresh",
    title: "Fresh Leaf Badge",
    code: `function fresh(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "vegan",
    title: "Vegan Tick Badge",
    code: `function vegan(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "frozen",
    title: "Frozen Snowflake",
    code: `function frozen(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "organic",
    title: "Organic Kraft Label",
    code: `function organic(x, y, s = 0.3) {
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
}`,
  },
  {
    name: "shortcan",
    title: "Short Can",
    code: `function shortcan(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s * 1.08);
  translate(2, -44);
  noStroke();
  fill('#999');
  ellipse(110, 188, 185, 57);
  fill('#aaa');
  ellipse(110, 186, 185, 57);
  fill('#999');
  ellipse(109, 185, 168, 47);
  fill('#e8453c');
  ellipse(109, 183, 168, 47);
  rect(25, 122, 168, 62);
  fill('#cc3c35');
  ellipse(109, 134, 168, 47);
  fill('#aaa');
  ellipse(110, 124, 185, 57);
  push();
  fill('#bbb');
  ellipse(110, 121, 165, 42);
  fill('#ccc');
  ellipse(110, 124, 165, 42);
  pop();
  pop();
}`,
  },
  {
    name: "fish",
    title: "Fish",
    code: `function fish(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s * 2.53);
  translate(-63, -130);
  noStroke();
  fill('#c4cc35');
  ellipse(103, 177, 64, 30);
  push();
  translate(137, 177);
  rotate(radians(270));
  triangle(0, -13, -16, 13, 13, 13);
  pop();
  pop();
}`,
  },
  {
    name: "tallcan",
    title: "Tall Can",
    code: `function tallcan(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s * 0.8);
  translate(40, -58);
  noStroke();
  fill('#999');
  ellipse(110, 308, 170, 52);
  fill('#aaa');
  ellipse(110, 306, 170, 52);
  fill('#999');
  ellipse(110, 305, 168, 40);
  fill('#f7f4e1');
  ellipse(110, 303, 168, 52);
  rect(26, 200, 168, 100);
  fill('#e8453c');
  ellipse(110, 201, 168, 52);
  rect(26, 102, 168, 100);
  fill('#cc3c35');
  ellipse(110, 110, 168, 38);
  fill('#aaa');
  ellipse(110, 104, 170, 40);
  fill('#bbb');
  ellipse(110, 102, 160, 33);
  fill('#ccc');
  ellipse(110, 104, 160, 33);
  fill('#bfa06b');
  ellipse(110, 227, 50, 50);
  pop();
}`,
  },
  {
    name: "tomato",
    title: "Tomato",
    code: `function tomato(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s * 1.71);
  translate(-47, -43);
  noStroke();
  fill('#cc3c35');
  ellipse(102, 124, 85, 82);
  ellipse(126, 128, 87, 80);
  fill('#e8453c');
  ellipse(102, 121, 85, 82);
  ellipse(124, 124, 87, 80);
  fill('#f9d4c5');
  ellipse(138, 110, 38, 22);
  ellipse(125, 114, 38, 20);
  push();
  translate(113, 60);
  fill('#5bb450');
  triangle(0, 0, 0, 40, 20, 40);
  pop();
  push();
  translate(138, 72);
  rotate(radians(38));
  fill('#5bb450');
  triangle(30, -24, -6, 20, 7, 20);
  pop();
  push();
  translate(98, 92);
  rotate(radians(278));
  fill('#5bb450');
  triangle(30, -24, -6, 20, 7, 20);
  pop();
  push();
  translate(148, 92);
  rotate(radians(90));
  fill('#6a8e65');
  triangle(0, -20, -7, 24, 12, 34);
  fill('#5bb450');
  triangle(0, -20, -7, 24, 7, 34);
  pop();
  push();
  translate(88, 90);
  rotate(radians(282));
  fill('#6a8e65');
  triangle(0, -20, -8, 14, 7, 34);
  fill('#5bb450');
  triangle(0, -20, -7, 24, 7, 34);
  pop();
  push();
  translate(148, 104);
  rotate(radians(110));
  fill('#6a8e65');
  triangle(0, -10, -4, 24, 10, 34);
  fill('#5bb450');
  triangle(0, -10, -4, 24, 7, 34);
  pop();
  push();
  translate(138, 94);
  rotate(radians(90));
  fill('#6a8e65');
  triangle(30, -14, -2, 28, 12, 24);
  fill('#5bb450');
  triangle(30, -14, -6, 24, 10, 24);
  pop();
  push();
  translate(88, 105);
  rotate(radians(252));
  fill('#6a8e65');
  triangle(0, -10, -8, 23, 7, 34);
  fill('#5bb450');
  triangle(0, -10, -7, 25, 7, 34);
  pop();
  pop();
}`,
  },
  {
    name: "discount10",
    title: "10% Off",
    code: `function discount10(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s);
  translate(-3, 32);
  noStroke();
  fill('#e8453c');
  rect(21, 36, 205, 104);

  fill('#000');
  textSize(98);
  textStyle(BOLD);
  text('10', 30, 125);
  textSize(38);
  textStyle(BOLD);
  text('OFF', 142, 124);
  textSize(48);
  textStyle(BOLD);
  text('%', 142, 91);

  fill('#f7e23a');
  textSize(98);
  textStyle(BOLD);
  text('10', 28, 123);
  textSize(38);
  textStyle(BOLD);
  text('OFF', 140, 123);
  textSize(48);
  textStyle(BOLD);
  text('%', 140, 90);
  pop();
}`,
  },
  {
    name: "nutritionFacts",
    title: "Nutrition Facts",
    code: `function nutritionFacts(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s * 0.89);
  translate(5, 45);
  stroke('#1c1c1c');
  strokeWeight(3);
  fill('#ffffff');
  rect(20, 40, 220, 100);
  noStroke();
  fill('#1c1c1c');
  textStyle(BOLD);
  textSize(25);
  text('Nutrition Facts', 28, 65);
  text('150', 180, 95);
  textSize(20);
  text('Calories', 28, 95);
  fill('#1c1c1c');
  rect(28, 100, 203, 10);
  rect(28, 115, 203, 1);
  rect(28, 120, 203, 1);
  rect(28, 125, 203, 4);
  stroke('#1c1c1c');
  strokeWeight(2);
  line(28, 70, 230, 70);
  pop();
}`,
  },
  {
    name: "corn",
    title: "Corn",
    code: `function corn(x, y, s = 0.3) {
  push();
  translate(x, y);
  scale(s * 1.18);
  translate(-27, -25);
  noStroke();
  push();
  fill('#5bb450');
  translate(133, 150);
  rotate(radians(164));
  ellipse(0, 0, 80, 127);
  pop();
  push();
  translate(122, 117);
  rotate(radians(344));
  fill('#f5a524');
  ellipse(3, 1, 55, 154);
  pop();
  push();
  translate(122, 117);
  rotate(radians(344));
  fill('#f7e23a');
  ellipse(0, 0, 55, 154);
  pop();
  push();
  fill('#5ca353');
  ellipse(150, 144, 18, 107);
  push();
  translate(117, 157);
  rotate(radians(322));
  ellipse(2, 0, 22, 106);
  pop();
  fill('#5bb450');
  ellipse(152, 144, 18, 107);
  push();
  translate(117, 157);
  rotate(radians(322));
  ellipse(0, 0, 22, 106);
  pop();
  push();
  fill('#f5a524');
  ellipse(99, 63, 7, 10);
  ellipse(98, 76, 8, 6);
  pop();
  pop();
  pop();
}`,
  },
];

/* ---- state ---- */

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const cartIcon = (inner) =>
  `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h3l2.4 11.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>${inner}</svg>`;
const ICON_ADD = cartIcon('<path d="M12.5 8v4.5M10.25 10.25h4.5"/>'); // cart with a plus
const ICON_IN = cartIcon('<path d="M10 10.5l1.8 1.8L15 9"/>'); // cart with a tick
const price = (s) => s.code.split("\n").length; // price is the number of lines of code
const money = (n) => n + (n === 1 ? " line" : " lines");
const find = (name) => STICKERS.find((s) => s.name === name);
let query = "",
  cart = [];
const opened = new Set(); // cart items whose code is showing
try {
  cart = JSON.parse(localStorage.getItem("stickersave-cart") || "[]");
} catch (e) {
  /* no storage: start empty */
}

/* ---- p5.js editor colours, the same as the stickerbook ---- */

const P5_FN = new Set(
  "setup draw createCanvas background clear fill noFill stroke noStroke strokeWeight rect ellipse circle square triangle line quad arc point push pop translate rotate scale radians degrees text textSize textAlign textStyle textFont".split(
    " "
  )
);
const P5_VAR = new Set(
  "width height mouseX mouseY windowWidth windowHeight frameCount PI TWO_PI CENTER BOLD".split(
    " "
  )
);
try {
  Object.keys(p5.prototype).forEach((k) => {
    if (k[0] === "_") return;
    if (typeof p5.prototype[k] === "function") P5_FN.add(k);
    else if (/^[A-Z][A-Z_0-9]*$/.test(k)) P5_VAR.add(k);
  });
} catch (e) {
  /* p5 not loaded: the short lists still apply */
}
const KEYWORD = new Set(
  "function return if else for while new of in this".split(" ")
);
const TOKEN =
  /(\/\/.*)|('[^']*'|"[^"]*"|`[^`]*`)|(\b\d+\.?\d*\b)|(\.\s*[A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)/g;

function hl(line) {
  let out = "",
    i = 0;
  line.replace(TOKEN, (m, com, str, num, prop, id, at) => {
    const cls = com
      ? "c"
      : str
      ? "s"
      : num
      ? "n"
      : prop
      ? "p"
      : ["const", "let", "var"].includes(id)
      ? "v"
      : KEYWORD.has(id)
      ? "k"
      : ["true", "false", "null"].includes(id) || P5_VAR.has(id)
      ? "a"
      : P5_FN.has(id)
      ? "f"
      : "v";
    out += esc(line.slice(i, at)) + `<span class="${cls}">${esc(m)}</span>`;
    i = at + m.length;
    return m;
  });
  return out + esc(line.slice(i));
}

/* ---- the aisles and the shelf ---- */

function addTile(s) {
  const li = document.createElement("article");
  li.className = "tile";
  li.dataset.name = s.name;
  li.innerHTML = `
    <div class="pic"><img alt="${esc(
      s.title
    )} sticker" width="240" height="240"></div>
    <h3>${esc(s.title)}</h3>
    <div class="buy-row"><b>${money(
      price(s)
    )}</b><button class="add" aria-pressed="false"></button></div>`;
  li.querySelector(".add").onclick = () => toggle(s.name);
  $("grid").append(li);
}
STICKERS.forEach(addTile);

function showShelf() {
  const q = query.trim().toLowerCase();
  let shown = 0;
  document.querySelectorAll(".tile").forEach((t) => {
    const s = find(t.dataset.name);
    t.hidden = !!q && !(s.title + " " + s.name).toLowerCase().includes(q);
    if (!t.hidden) shown++;
  });
  $("none").hidden = shown > 0;
}
$("search").addEventListener("input", (e) => {
  query = e.target.value;
  showShelf();
});

/* ---- the cart ---- */

function toggle(name) {
  cart = cart.includes(name) ? cart.filter((n) => n !== name) : [...cart, name];
  try {
    localStorage.setItem("stickersave-cart", JSON.stringify(cart));
  } catch (e) {
    /* ignore */
  }
  renderCart();
}

async function copy(text, button, label) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    // older browsers: select a hidden textarea
    const t = document.createElement("textarea");
    t.value = text;
    document.body.append(t);
    t.select();
    document.execCommand("copy");
    t.remove();
  }
  button.textContent = "Copied ✓";
  setTimeout(() => {
    button.textContent = label;
  }, 1500);
}

function renderCart() {
  const items = cart.map(find).filter(Boolean); // shared stickers may still be loading
  $("count").textContent = items.length;
  $("clear").hidden = $("checkout").hidden = !items.length;
  document.querySelectorAll(".tile").forEach((t) => {
    const on = cart.includes(t.dataset.name),
      b = t.querySelector(".add");
    b.innerHTML = on ? ICON_IN : ICON_ADD;
    b.title = b.ariaLabel =
      (on ? "Remove " : "Add ") +
      find(t.dataset.name).title +
      (on ? " from cart" : " to cart");
    b.setAttribute("aria-pressed", on);
    t.classList.toggle("in", on);
  });

  $("items").innerHTML = items.length
    ? ""
    : '<p class="empty">Your cart is empty. Add a sticker and the p5.js code that draws it lands here, ready to copy.</p>';
  items.forEach((s) => {
    const el = document.createElement("div");
    el.className = "line";
    const open = opened.has(s.name);
    el.innerHTML = `<header><button class="tog" aria-expanded="${open}" aria-label="${
      open ? "Hide" : "Show"
    } code for ${esc(
      s.title
    )}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><b>${esc(
      s.title
    )}</b><span>${money(
      price(s)
    )}</span><button class="copy">Copy</button><button class="x" aria-label="Remove ${esc(
      s.title
    )}">×</button></header>
      <pre${open ? "" : " hidden"}>${s.code
      .split("\n")
      .map((l) => `<span class="ln">${hl(l)}</span>`)
      .join("")}</pre>`;
    const flip = () => {
      opened.has(s.name) ? opened.delete(s.name) : opened.add(s.name);
      renderCart();
    };
    el.querySelector(".tog").onclick = flip;
    el.querySelector("header b").onclick = flip;
    el.querySelector(".copy").onclick = (e) => copy(s.code, e.target, "Copy");
    el.querySelector(".x").onclick = () => toggle(s.name);
    $("items").append(el);
  });
  $("total").textContent = money(items.reduce((sum, s) => sum + price(s), 0));
}
$("copyall").onclick = (e) =>
  copy(
    cart
      .map(find)
      .filter(Boolean)
      .map((s) => s.code)
      .join("\n\n"),
    e.target,
    "Copy All Code"
  );
$("clear").onclick = () => {
  cart = [];
  try {
    localStorage.removeItem("stickersave-cart");
  } catch (e) {
    /* ignore */
  }
  renderCart();
};

/* ---- thumbnails: run each sticker's own code on an off-screen p5 canvas ---- */

let P = null; // the off-screen p5 instance that draws every thumbnail

function thumb(code, name) {
  // a sticker's own code, drawn like a pasted sticker
  const g = P.createGraphics(240, 240);
  try {
    g.pixelDensity(2);
    new Function("p", `with (p) {\n${code}\nreturn ${name};\n}`)(g)(0, 0, 1);
    return g.elt.toDataURL();
  } finally {
    g.remove();
  }
}

function drawTile(s) {
  const img = document.querySelector(`[data-name="${s.name}"] img`);
  try {
    img.src = thumb(s.code, s.name);
  } catch (e) {
    img.alt = "This sticker couldn't be drawn.";
  }
}

const whenP5 = []; // work waiting for p5 to be ready
if (typeof p5 === "undefined") {
  // the pictures are drawn by p5, so say so if it didn't load
  $("none").textContent =
    "p5.js didn't load, so the stickers can't be drawn. Check your connection and reload.";
  $("none").hidden = false;
} else
  new p5((p) => {
    p.setup = () => {
      p.noCanvas();
      P = p;
      STICKERS.forEach(drawTile);
      whenP5.forEach((f) => f());
    };
  });

showShelf();
renderCart();

/* ---- shared stickers: anyone can add one, everyone sees it ----
   They live in a Firestore collection (see SETUP.md). Because strangers write that
   collection, every sticker is checked here before it is drawn, whoever sent it. */

const SAFE = new Set(
  (
    "function x y s " +
    "push pop translate rotate scale shearX shearY fill noFill stroke noStroke strokeWeight strokeCap strokeJoin " +
    "rect ellipse circle square triangle line quad arc point bezier curve beginShape endShape vertex curveVertex bezierVertex " +
    "rectMode ellipseMode text textSize textAlign textStyle radians degrees sin cos abs sqrt min max color " +
    "PI TWO_PI HALF_PI QUARTER_PI CENTER LEFT RIGHT TOP BOTTOM BASELINE BOLD NORMAL ITALIC BOLDITALIC " +
    "CORNER CORNERS RADIUS CLOSE ROUND SQUARE PROJECT MITER BEVEL OPEN CHORD PIE"
  ).split(" ")
);
const SMALL = new Set("a an and for in of on or the to".split(" "));

function tidyTitle(t) {
  // Title Case, as the other stickers are
  return t
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((w, i) =>
      i && SMALL.has(w.toLowerCase())
        ? w.toLowerCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}

function checkTitle(t) {
  t = tidyTitle(t);
  if (!t) return "Give it a title.";
  if (t.length > 30 || !/^[A-Za-z0-9%&'!\- ]+$/.test(t))
    return "Use letters, numbers and spaces only, up to 30 characters.";
  if (t.split(/[ -]/).length > 3)
    return "Keep the title to 3 words or fewer (a hyphen counts as 2).";
  return "";
}

function checkCode(code) {
  // returns { name } or { error }
  code = code.trim();
  if (!code) return { error: "Paste the code for your sticker." };
  if (code.length > 6000 || code.split("\n").length > 150)
    return { error: "That is too long. Keep it under 150 lines." };
  const head = code.match(
    /^function\s+([a-z][A-Za-z0-9]{1,29})\s*\(\s*x\s*,\s*y\s*,\s*s\s*=\s*\d*\.?\d+\s*\)\s*\{/
  );
  if (!head || !code.endsWith("}"))
    return {
      error:
        "It should be one function that starts like function name(x, y, s = 0.3) {",
    };
  const name = head[1];
  if (SAFE.has(name) || P5_FN.has(name) || P5_VAR.has(name))
    return { error: `"${name}" is already a p5.js word. Rename the function.` };
  if (find(name))
    return {
      error: `A sticker called ${name} is already in the shop. Rename the function.`,
    };
  let body = code.slice(head[0].length, -1);
  body = body.replace(/\/\/.*$/gm, "").replace(/'[^'\\\n]*'|"[^"\\\n]*"/g, "0"); // a string is just a value
  if (/['"`\\]|\/\*|[{}\[\]<>=!&|?:@#$^~]/.test(body))
    return {
      error:
        "Only plain drawing calls are allowed: no loops, variables or extra code.",
    };
  const bare = body.replace(/\d+\.?\d*|\.\d+/g, "0");
  if (bare.includes("."))
    return {
      error:
        "Only plain drawing calls are allowed: no loops, variables or extra code.",
    };
  const bad = (bare.match(/[A-Za-z_$][\w$]*/g) || []).find(
    (id) => !SAFE.has(id)
  );
  if (bad)
    return {
      error: `"${bad}" isn't allowed here. Use p5.js drawing calls like rect, ellipse, fill and text.`,
    };
  return { name };
}

let db = null,
  fb = null;
const shared = { ready: false, why: "" };

function takeShared(d) {
  // a sticker from the database, if it passes the same checks
  const c = checkCode(String(d.code || ""));
  if (c.error || c.name !== d.name || checkTitle(String(d.title || ""))) return;
  const s = {
    name: d.name,
    title: tidyTitle(d.title),
    code: String(d.code).trim(),
    shared: true,
  };
  STICKERS.push(s);
  addTile(s);
  const draw = () => {
    drawTile(s);
    showShelf();
    renderCart();
  };
  P ? draw() : whenP5.push(draw);
}

async function startShared() {
  if (!window.FIREBASE_CONFIG || !window.FIREBASE_CONFIG.projectId) {
    shared.why =
      "Sharing isn't switched on yet. The shop's owner needs to add a Firebase config (see SETUP.md).";
    return;
  }
  try {
    const V = "https://www.gstatic.com/firebasejs/10.12.2/";
    const [app, store] = await Promise.all([
      import(V + "firebase-app.js"),
      import(V + "firebase-firestore.js"),
    ]);
    db = store.getFirestore(app.initializeApp(window.FIREBASE_CONFIG));
    fb = store;
    shared.ready = true;
    fb.onSnapshot(
      fb.query(fb.collection(db, "stickers"), fb.orderBy("created")),
      (snap) => {
        snap.docChanges().forEach((ch) => {
          if (ch.type === "added" && !find(ch.doc.id))
            takeShared(ch.doc.data());
        });
        showShelf();
        renderCart();
      },
      (e) => {
        shared.ready = false;
        shared.why = "Couldn't reach the shared shelf. Try again later.";
      }
    );
  } catch (e) {
    shared.why = "Couldn't reach the shared shelf. Try again later.";
  }
}

/* the Add a Sticker form */

const dlg = $("add-dialog"),
  codeBox = $("new-code"),
  titleBox = $("new-title"),
  say = $("new-msg");
let previewTimer = 0;

function note(text, bad) {
  say.textContent = text;
  say.className = bad ? "msg bad" : "msg";
}

function refreshPreview() {
  const code = codeBox.value,
    img = $("new-pic");
  img.removeAttribute("src");
  $("new-publish").disabled = true;
  if (!code.trim()) return note("");
  const c = checkCode(code);
  if (c.error) return note(c.error, true);
  if (!P) return note("Drawing is not ready yet. Wait a moment.", true);
  try {
    img.src = thumb(code, c.name);
  } catch (e) {
    return note("That code didn't run: " + e.message, true);
  }
  const t = checkTitle(titleBox.value);
  if (titleBox.value.trim() && t) return note(t, true);
  note(
    shared.ready
      ? titleBox.value.trim()
        ? ""
        : "Looks good. Now give it a title."
      : shared.why,
    !shared.ready
  );
  $("new-publish").disabled = !shared.ready || !!t;
}
[codeBox, titleBox].forEach((el) =>
  el.addEventListener("input", () => {
    clearTimeout(previewTimer);
    previewTimer = setTimeout(refreshPreview, 250);
  })
);
$("add-open").onclick = () => {
  dlg.showModal();
  refreshPreview();
};
$("new-cancel").onclick = () => dlg.close();

$("new-form").onsubmit = async (e) => {
  e.preventDefault();
  const c = checkCode(codeBox.value),
    t = checkTitle(titleBox.value);
  if (c.error || t || !shared.ready) return refreshPreview();
  $("new-publish").disabled = true;
  note("Adding it to the shelf…");
  try {
    await fb.setDoc(fb.doc(db, "stickers", c.name), {
      name: c.name,
      title: tidyTitle(titleBox.value),
      code: codeBox.value.trim(),
      created: fb.serverTimestamp(),
    });
    const mine = c.name;
    codeBox.value = titleBox.value = "";
    dlg.close();
    setTimeout(() => {
      const tile = document.querySelector(`[data-name="${mine}"]`);
      if (tile) {
        tile.scrollIntoView({ block: "center" });
        tile.classList.add("fresh");
      }
    }, 400);
  } catch (err) {
    note(
      "Couldn't add it. That name may be taken, or the shelf is not accepting stickers right now.",
      true
    );
    $("new-publish").disabled = false;
  }
};

startShared();
