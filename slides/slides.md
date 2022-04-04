---
# try also 'default' to start simple
theme: seriph
background: https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80&blur=30
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# <carbon-code /> JavaScript

Tečaj za začetnike.


<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/bartolomej/webdev-tldr" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
---

# Kaj je JavaScript ?

> Ime JavaScript ponavadi okrajšamo z "**JS**".

- **Programski jezik** - tako kot HTML, CSS je tudi JS jezik, s katerim podajamo racunalniku razlicne ukaze
- **Racunski jezik** - za razliko od HTML in CSS, lahko v JavaScriptu racunamo ter resujemo poljubne probleme
- **Popularen med programerji** - ker lahko z njim razvijamo raznovrstne programe in aplikacije

<br>

<img width="500" src="/popular-languages.png" />

<br>

Za bolj podroben in tehnicen kliknite [tukaj](https://javascript.info/intro).


---


# Kje pisemo JavaScript ?

Podobno kot **CSS** bomo tudi **JS** kodo pisali v posebno html znacko `<script>`. 

> Začne se izvajati na prvi vrstici, ter izvaja vsako vrstico **po vrsti** do zadnje. 

```html
<html>
<head>
  <title>Prva JavaScript stran</title>
  <style>
    /* TUKAJ PISEMO CSS */
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
<!-- TUKAJ PISEMO HTML -->
<h1>Naslov</h1>

<script>
  // TUKAJ PISEMO JAVASCRIPT
  alert("Hello World!");
</script>
</body>
</html>
```


---


# Podatkovni tipi

Ce smo se v HTML-ju ukvarjali predvsem z vizualno postavitvijo (layout), pri CSS-ju z vizualnim izgledom (style), se bomo pri JavaScript ukvarjali predvsem z **podatki**.

> Pravzaprav so podatki prav vse, kar vidite na računalniškem zaslonu: slike, video, tekst, glasba, stevia, ...

JavaScript nam omogoča uporabo ter manipulacijo nekaj preprostih podatkov oz. **podatkovnih tipov**, kot so **stevia**, **znaki** in **logic vrednosti**.

```javascript
1231 // to je celo stevilo
312.123 // to je decimalno stevilo

"a" // to je znak
"Dober dan" // to je znakovni niz

true // to je logicna vrednost RESNICE
false // to je logicna vrednost NERESNICE (LAŽ)
```


---


# Spremenljivke

Podatkovni tipi, ki smo jih spoznali niso prev uporabni, če jih ne moremo **shraniti**. 

Spremenljivke nam omogočajo, da te podatke začasno shranimo v posebno "škatlico", kateri damo tudi poljubno ime. 
Tem škatlicam rečemo v računalništvu tudi _pomnilniška lokacija_.  

<img style="margin: 20px auto" width="600" src="https://miro.medium.com/max/1400/1*Px7h03Ih7B5QZu4KQpSEoQ.png">


```javascript
// JavaScript spremenljivke pisemo v formatu:
// let <ime-spremenljivke> = <vrednost-spremenljivke>;

let imeStevilskeSpremenljivke = 12;
let imeZnakovneSpremenljivke = "Hello";
```

---


# Pogojni stavki

Kako bi določeno vrstico kode izvedli **pod pogojem** ?

Spodnja koda izpise stavek "Danes je toplo vreme", ce je zunaj <u>**vec kot 20**</u> stopinj Celzija. V nasprotnem primeru, ko je zunaj <u>**manj ali enako kot 20**</u> stopinj Celzija, bo izpisalo "Danes je mrzlo"

```javascript
let temperatura = 12;

if (temperatura > 20) {
  alert("Danes je toplo"); 
}
```

Dodamo lahko tudi vec pogojev:

```javascript
let ime = "Janez";

if (ime === "Nina") {
  alert("Nina je moja sosolka");
} else if (ime === "Peter") {
  alert("Peter je tudi moj sosolec");
} else {
  alert("Ta oseba ni moj sosolec ali sosolka.")
}
```


---

# Zanke

Poleg _pogojnega izvajanja_ določenih vrstic, bomo velikokrat želeli tudi _ponoviti izvajanje_ določenih vrstic. To bomo dosegli s pomočjo [**zank**](https://www.w3schools.com/js/js_loop_while.asp).

Poznamo več vrst zank, kot so `for`, `while` in `do while` zanke, ki se med seboj malenkostno razlikujejo v uporabi. 

Za nas bo dovolj znanje `while` zanke, primer take zanke je v spodnji kodi.
```js
let steviloPonovitev = 3;
let stevec = 0;
while (stevec < steviloPonovitev) {
  console.log("stevec: " + stevec);
  stevec = stevec + 1;
}
```
Zgornji program bi lahko napisali tudi z uporabo `for` zanke. Primer je viden spodaj.
```js
let steviloPonovitev = 3;
for (let stevec = 0; stevec < steviloPonovitev; stevec++) { // namesto stevec = stevec + 1 lahko pisemo tudi stevec++
  console.log("stevec: " + stevec);
}
```

Izpis zgornjih programov:
```
stevec: 0
stevec: 1
stevec: 2
```


---


# Interakcija s HTML

Ko smo programirali strani z uporabo HTML jezika, smo ugotovili, da samo z uporabo HTML-ja ne moremo razviti _dinamične strani_. Z uporabo CSS-ja ali JavaScript-a, pa lahko dosežemo točno to.

Tukaj si bomo pogledali, kako lahko iscemo HTML elemente z JavaScript-om. Uporabne funkcije za iskanje so:
- `getElemenentById(id)` - poisce tocno dolocen element z podanim ID-jem
- `getElementsByClassName(razred)` - poisce en ali vec elementov z podanim razredom 
- `querySelector(cssSelektor)`  - poisce prvi element, ki ustreza podanemu [css selektorju](https://www.w3schools.com/cssref/css_selectors.asp)
- `querySelectorAll(cssSelektor)` - poisce vse elemente, ki ustrezajo podanemu [css selektorju](https://www.w3schools.com/cssref/css_selectors.asp)

Poglejmo si nekaj primerov uporabe:
```html
<h1 id="unikat">Naslov 1</h1>
<h1 class="razred">Naslov 2</h1>
<script>
  document.getElementById("unikat"); // vrne prvi h1 element
  document.getElementsByClassName("razred") // vrne drugi h1 element
  document.querySelector("h1") // vrne prvi h1 element
  document.querySelectorAll("h1") // vrne seznam vseh h1 elementov na strani
</script>
```

---

# Dogodki

Dogodki so nam (programerjem) zanimive akcije, ki se zgodijo v brskalniku. Dogodek lahko sproži uporabnik (npr. klik na html element) ali pa nekatere funkcionalnosti brskalnika, ki se izvajajo v ozadju (npr. brskalnik ni vec povezan v internet, stran se je naložila, ...).


Ce bomo hoteli, da se del nase kode (npr. funkcija) izvede tocno takrat, ko se zgodi nek dogodek, bomo morali ta dogodek _prestrezti_. To lahko naredimo na nekaj nacinov.

Nekaj najbolj znanih in uporabnik dogodkov, katere lahko prestrežemo iz html elementov so:
- [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) - pritisk miske (oz. dotik s prstom na mobilnih napravah)
- [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) - uporabnik je sel z misko cez nas element
- [`scroll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event) - uporabnik je "scrollal" z misko po nasem elementu
- [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) - uporabnik je pritisnil tipko

Celoten seznam najdete tukaj: https://developer.mozilla.org/en-US/docs/Web/Events#event_listing

---

1. **Dodamo poslušalca na atribut elementa z uporabo HTML-ja**
```html
<button onclick="poslusaj">Klikni me!</button>
<script>
  function poslusaj(e) {
    console.log("Dogodek (pritisk tipke) se je zgodil!")
  }
</script>
```
2. **Dodamo poslušalca na element z uporabo JS**
```html
<button id="mojaTipka">Klikni me!</button>
<script>
  let tipka = document.getElementById("mojaTipka");
  
  // spodnji dve vrstici kode sta isti
  // uporabite lahko katerega koli izmed spodnjih dveh načinov
  tipka.addEventListener("click", poslusaj);
  tipka.onclick = poslusaj;
  
  function poslusaj(e) {
    console.log("Dogodek (pritisk tipke) se je zgodil!")
  }
</script>
```

--- 

# Projekt: Aim Lab igra

Cilj tega projekta je izdelava prve igre z uporabo JS, HTML & CSS znanja.

Osnovna ideja: na zaslonu se na naključnih mestih izrisuje krog (ali katerikoli drug 2D lik), katerega mora uporabnik klikniti z miško. To idejo lahko poljubno razširite ali pa spremenite. Lahko uporabite različne pristope, kot so:
- uporabnik mora čim prej klikniti krogec – štejemo najboljši cas "zadetka"
- uporabnik mora čim večkrat klikniti krogec v določenem časovnem odboju – štejemo število klikov
- ...

Primer te igre se nahaja tukaj: https://codepen.io/bartolomej/pen/GROMpXd

---

# Pridobivanje podatkov iz interneta

Spodnja slika prikazuje potek komunikacije med računalniki na internetu. 

<img src="https://darvishdarab.github.io/cs421_f20/assets/images/client-server-1-d85a93ea16590c10bed340dd78294d0d.png" width="200" />

Preko JavaScript-a bomo z nasim računalnikom poslali _zahtevo_ (angl. request) nekemu oddaljenemu strežniku, ki hrani zelene podatke. Ta strežnik nam bo odgovoril z _odzivom_ (angl. response), ki bo vseboval zelene podatke.

```js
fetch("https://soundverse.netlify.app/.netlify/functions/search?q=eminem")
  .then(odziv => odziv.json()) // pretvorba podatkov v JavaScript-u prijazno obliko
  .then(podatki => console.log(podatki)) // tukaj imamo ze zahtevane podatke
  .catch(napaka => console.error(napaka)) // ta vrsstica se izvede v primeru napake
```

Primer uporabe deezerjevih podatkov: https://codepen.io/bartolomej/pen/rNYbYYG?editors=1010

Storitev za pridobivanje podatkov o glasbi: https://developers.deezer.com/api

Seznam brezplačnih API-jev: https://github.com/public-apis/public-apis

---

# Canvas

Do zdaj smo spoznali, kako z JavaScript-om "rišemo" na zaslon samo z uporabo HTML-ja.

<img style="height: 20vh; border-radius: 20px" src="https://lenadesign.org/wp-content/uploads/2020/01/canvas.jpg" />

Največkrat je HTML res najbolj primeren način. Na primer, za prikaz besedila, izdelavo vnosnih form, itd.

Ta način pa nas v nekaterih primerih tudi omejuje. Predstavljajmo si, da želimo izdelati igro, kjer ponavadi želimo postavljati elemente na točno določena mesta v 2D ali pa celo 3D prostoru. Poleg tega pa bi želeli risati še razne krivulje, trikotnike in razne druge oblike.

V primerih, ko nam samo HTML ne zadošča za izdelavo našega uporabniškega vmesnika lahko uporabimo [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp).

---

# Osnove Canvas-a

Canvas je HTML element, katerega dodamo v HTML kodo naše strani. Vso risanje pa opravimo z JavaScript-om.

```html
<canvas id="moj-canvas"></canvas>
<script>
// poiščemo html canvas
let mojCanvas = document.getElementById("moj-canvas");
// pridobimo "kontekst" za risanje
let ctx = mojCanvas.getContext();

// premaknemo se na zacetno tocno x=0, y=0
ctx.moveTo(0, 0);
// narišemo crto iz zacetne točke x=0, y=0 v končno točko x=100, y=200
ctx.lineTo(100, 200);

// pobarvamo
ctx.stroke();
</script>
```

Primer: https://codepen.io/bartolomej/pen/vYppRpd

Kako risati: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

---

# Več o Canvas-u

<img style="width: 200px; border-radius: 10px; display: inline;" src="https://bartolomej.site/static/1306db9b40a99e5311027cf7507ec73a/5707d/2020-01.png" />
<img style="width: 200px; border-radius: 10px; display: inline; margin-left: 10px;" src="https://bartolomej.site/static/7d9d022fb778eff2820dca047afbc427/5707d/2020-03.png" />
<img style="width: 200px; border-radius: 10px; display: inline; margin-left: 10px;" src="https://bartolomej.site/static/51abf126510382aa1095957e7487256e/5707d/2020-02.png" />

Zanimivi programi: https://project-awesome.org/raphamorim/awesome-canvas#examples

Več dokumentacije najdete na:
- https://www.w3schools.com/html/html5_canvas.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
- https://flaviocopes.com/canvas
