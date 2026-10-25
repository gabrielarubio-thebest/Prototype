const IMG=Object.fromEntries(['americana', 'aros', 'bacon', 'butcher', 'chbbq', 'chmaple', 'fiesta', 'fritas', 'honey', 'lablu', 'lio',  'maple', 'mini'].map(k=>[k,'img/'+k+'.png']));
const K=n=>'$'+String(n).replace('.',',')+'K',F=n=>'$'+Math.round(n*1000).toLocaleString('es-CO');
const BG=[
['lablu','La Blu','Carne angus, mermelada de tocineta, queso mozzarella, cebolla crispy y mayonesa de queso azul.','Burger Master 2025','r'],
['maple','Maple Bacon','Carne angus, queso cheddar, tocineta, cebolla crispy y mayonesa de miel de maple.','Burger Master 2024','r'],
['honey','Honey Deluxe','Carne angus, queso cheddar, mayonesa deluxe con trozos de tocineta, aros de cebolla y miel picante.','','r'],
['fiesta','Fiesta','Carne angus, mezcla de quesos, tocineta, salsa BBQ y vegetales frescos.','Burger Master 2022','r'],
['bacon','Bacon Supreme','Carne angus, queso cheddar, mermelada de tocineta y cebolla crispy.','','r'],
['americana','Americana Salvaje','Doble carne angus, doble queso cheddar y tocineta en trozos.','','r'],
['lio','La Lío','Carne angus, aros de cebolla, tocineta en trozos, mayonesa de chimichurri y queso mozzarella.','','r'],
['chmaple','Chicken Maple','Sándwich con pechuga de pollo apanada, queso cheddar, tocineta, cebolla crispy y mayonesa de miel de maple.','','p'],
['chbbq','Chicken BBQ','Sándwich con pechuga de pollo apanada, queso cheddar, tocineta, salsa BBQ y vegetales frescos.','','p']];
const SD=[['fritas','Papas Fritas','Crocantes papas a la francesa, con nuestro condimento de la casa.',8],
['mini','Papas Mini Butcher','Papas con queso cheddar fundido, tocineta y cebollín.',15.5],
['butcher','Papas Butcher','Papas con queso cheddar fundido, tocineta y cebollín.',27.5],
['aros','Aros de Cebolla x9','Deliciosos aros de cebolla apanados.',9.5]];
const DR=[['Coca Cola',7.5],['Coca Cola Zero',7.5],['Sprite',7.5],['Premio',7.5],['Kola Román',7.5],['Quattro',7.5],['Agua',7.5],['Agua con Gas',7.5],['Té de Limón',7.5],['Té de Durazno',7.5],['Cerveza',8]];
const $=id=>document.getElementById(id);
let tab='b',flt='all';
function tabs(){$('tabs').innerHTML=[['b','Hamburguesas'],['s','Acompañamientos'],['d','Bebidas']].map(t=>`<button class="chip ${tab==t[0]?'on':''}" onclick="tab='${t[0]}';render()">${t[1]}</button>`).join('')}
function render(){tabs();let h='';
if(tab=='b'){h=`<h2>Hamburguesas de <b>Autor</b></h2><p class="sub">Toca un plato para ver el detalle y elegir tamaño.</p><div class="tabs" style="padding:0 0 10px">${[['all','Todas'],['r','Res'],['p','Pollo'],['bm','Burger Master']].map(f=>`<button class="chip ${flt==f[0]?'on':''}" onclick="flt='${f[0]}';render()">${f[1]}</button>`).join('')}</div>`;
BG.filter(b=>flt=='all'||b[4]==flt||(flt=='bm'&&b[3])).forEach(b=>{const dbl=b[0]=='americana';h+=`<article class="it" onclick="openB('${b[0]}')"><img src="${IMG[b[0]]}" alt="${b[1]}"><div class="tx">${b[3]?`<small>${b[3]}</small>`:''}<h3>${b[1]}</h3><p>${b[2]}</p></div><div class="pr">${dbl?`Doble carne<b>${K(38)}</b>`:`Sencilla <b>${K(27.5)}</b>Doble carne <b>${K(36.5)}</b>`}</div></article>`})}
if(tab=='s'){h='<h2>Acompañamientos</h2><p class="sub">Completa tu hamburguesa.</p>';SD.forEach(s=>h+=`<article class="it" onclick="openS('${s[0]}')"><img src="${IMG[s[0]]}" alt="${s[1]}"><div class="tx"><h3>${s[1]}</h3><p>${s[2]}</p></div><div class="pr"><b>${K(s[3])}</b></div></article>`)}
if(tab=='d'){h='<h2>Bebidas <span style="color:var(--pm);font-size:14px">$7,5K</span></h2><p class="sub">Cerveza $8K.</p>';DR.forEach(d=>h+=`<div class="dr"><span>${d[0]}</span><i>${K(d[1])}</i></div>`);}
$('main').innerHTML=h}
function sheet(h){$('sh').innerHTML=h;$('sheet').classList.add('show')}function closeSheet(){$('sheet').classList.remove('show')}
function openB(id){const b=BG.find(x=>x[0]==id);const V=id=='americana'?[['Doble carne',38]]:[['Sencilla · 1 carne',27.5],['Doble carne · 2 carnes',36.5]];
sheet(`<div class="ph"><img src="${IMG[id]}" alt="${b[1]}"></div>${b[3]?`<small style="color:#ff6b5e;font-weight:700">${b[3]}</small>`:''}<h2>${b[1]}</h2><p>${b[2]}</p>${V.map(v=>`<div class="opt" style="cursor:default"><span>${v[0]}</span><span>${K(v[1])}</span></div>`).join('')}<button class="btn g" onclick="closeSheet()">Cerrar</button>`)}
function openS(id){const s=SD.find(x=>x[0]==id);sheet(`<div class="ph"><img src="${IMG[id]}" alt="${s[1]}"></div><h2>${s[1]}</h2><p>${s[2]}</p><div class="opt" style="cursor:default"><span>Precio</span><span>${K(s[3])}</span></div><button class="btn g" onclick="closeSheet()">Cerrar</button>`)}
render();
