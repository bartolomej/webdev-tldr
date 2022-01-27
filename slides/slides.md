---
# try also 'default' to start simple
theme: seriph
background: https://cs.ucsb.edu/sites/default/files/2021-06/source-4280758_1920.jpg
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

# <carbon-code /> JavaScript (za začetnike)


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
