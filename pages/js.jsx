import React, { Fragment } from "react";
import { Background, Main } from "../styles/shared";
import Header from "../components/Header";
import { FaJsSquare } from "react-icons/fa";
import dynamic from "next/dynamic";
import Head from "next/head";
import { theme } from "../styles/theme";
import { IoPlayOutline } from "react-icons/io5";
import Code from "../components/code/Code";

const whereToWriteJs =
  `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Naslov</title>

	<style>
	  /* Tukaj pisemo css kodo */
		img {
			width: 100px;
		}
	</style>
</head>
<body>
	<!-- Tukaj pisemo html kodo, ki zelimo da se prikaze na strani -->
	<h1>Naslov</h1>
	
  <!-- Tega brskalnik nebo prepoznal kot JavaScript -->
	alert("Hello, World!")

	<script>
		// Tukaj pisemo JavaScript kodo
		        alert("Hello, World!")
	</script>
</body>
</html>
`

const dataInJs =
  `// cena je 102$
let cena = 102;

// zunaj je 10°C
let temperatura = 10;

// 15% popusta
let procentovPopusta = 15;

// 15/20 učencev je brez domace naloge
let steviloVsehUcencev = 20;
let steviloUcencevBrezNaloge = 15;

// ime mi je Matej
let ime = "Matej";
`

const basicUserInteraction =
  `// najprej vprasamo uporabnika po potrebnih podatkih
// uporabimo prompt() ukaz (temu recemo tudi funkcija)
// alert() = window.alert()
let ime = prompt("Vnesi ime")
let priimek = prompt("Vnesi priimek")

// zdaj imamo v "ime" in "priimek" v spremenljivkah shranjena dva niza, ki predstavljata uporabnikovo ime in priiimek
// zelimo izpisati celo ime uporabnika
// to naredimo tako da zlepimo skupaj "ime" in "priimek"
// ne smemo pozabiti na presledek (' ')
let celoIme = ime + ' ' + priimek;
 
// spodnje funkcije/ukaze lahko uporabimo za izpisovanje vrednosti (stevil, nizov, logicnih tipov,...)
alert(celoIme); // prikaze modalno okno
console.log(celoIme); // izpise v konzolo
document.write(celoIme); // izpise na html stran
`

const renderCustomVideo =
  `let videoUrl = prompt("Vnesi link do videa");

let prviDelHtmlja = "<video width=400 controls><source src=";

let drugiDelHtmlja = " type=video/mp4></video>";

// POZOR!
let test = "prviDedaHtmlja" + "videoUrl" + "drugiDelHtmlja";

let celotenHtml = prviDelHtmlja + videoUrl + drugiDelHtmlja;

document.write(celotenHtml)
`

function Css () {
  const CodeEditor = dynamic(() => import("../components/code/CodeEditor"), { ssr: false })
  const editorHeight = "500px"

  return (
    <Fragment>
      <Head>
        <title>WebDev TLDR; - JS</title>
      </Head>
      <Background opacity={0.1}/>
      <Header backgroundColor={theme.colors.js}>
        <h1>JavaScript <FaJsSquare/></h1>
        <p>JavaScript je programski jezik, ki nam omogoca izvajanje poljubne <span data-tip="npr. branje in izpis podatkov, racunanje s stevili, pogojni stavki, ponavljanje,...">logike</span>.</p>
      </Header>
      <Main color={theme.colors.js}>

        <section>
          <h2>Uvod</h2>

          <details>
            <summary>
              Kje lahko pisemo JavaScript kodo ?
            </summary>
            <div>
              <p>Podobno kot CSS, pisemo tudi JavaScript v posebno <code>{`<script>`}</code> znacko.</p>
              <p>Zavedati se moramo, da bo kakrsna koli JavaScript koda, ki nebo zapisana v <code>{`<script>`}</code> prikazana kot navadno tekstovno besedilo.</p>
              <blockquote>
                💡Poskusi izvesti spodnjo kodo, s klikom na <IoPlayOutline/> tipko, ter opazuj kako se izpise "Hello, World!" besedilo.
              </blockquote>
              <CodeEditor code={whereToWriteJs} height={editorHeight}/>
            </div>
          </details>

          <details>
            <summary>
              Predstavitev podatkov
            </summary>
            <div>
              <ul>
                <li>cena je 102$</li>
                <li>zunaj je 10°C</li>
                <li>15% popusta</li>
                <li>15/20 učencev je brez domace naloge</li>
                <li>ime mi je Matej</li>
              </ul>
              <p>Kaj je skupno zgornjim vrsticam ? Vsaka vrstica vsebuje podatek iz vsakdana, naj bo to trenutna temperatura, moja starost, cena izdelka, itd.</p>
              <blockquote>Podatek je zapis dolocenega "dejstva" iz sveta.</blockquote>
              <p>Poglejmo si kako bi predstavili zgornje podatke v JavaScript jeziku.</p>
              <CodeEditor lang="javascript" websitePreview={false} code={dataInJs} height={editorHeight}/>
            </div>
          </details>

          <details>
            <summary>
              Osnovna interakcija z uporabnikom
            </summary>
            <div>
              <p>Na naših spletnih straneh bomo velikokrat potrebovali, da uporabnik vnese ali pa razbere dolocene podatke.</p>
              <p>Na primer, na spletni strani, ki vsebuje prijavo oz. registracijo uporabnikov, bo uporabnik potreboval vpisati svoje uporabnisko ime in geslo (*vnos podatkov*), ter razbrati, ali je vneseno geslo pravilno ali ne. Da bomo lahko sprogramirali tako spletno stran, bomo morali spoznati nekaj nacinov za *interakcijo* z uporabnikom. </p>
              <p>Za vnos lahko uporabimo <Code executable>prompt("Vnesi karkoli")</Code>, medtem ko imamo za izpis podatkov vec izbire:</p>
              <ul>
                <li><Code executable>alert("izpiz v modalnem oknu")</Code></li>
                <li><Code executable>console.log("izpis v konzoli")</Code></li>
                <li><Code>document.write("izpis v html")</Code></li>
              </ul>
              <CodeEditor lang="javascript" websitePreview={false} code={basicUserInteraction} height={editorHeight}/>
              <p>Poglejmo si še en (podoben) primer. Tudi tukaj bomo zahtevali od uporabnika vnos nekega podatka - url povezavo do video posnetka. Pridobljeni URL bomo zatem <i>zlepili</i> skupaj z ostalo potrebno html kodo, tako da bo razultat programa html video element, katerega bomo prikazali na našo spletno stran.</p>
              <blockquote><b>POZOR!</b> <br/> Bodi pazljiv kako <i>lepis</i> znakovne nize. Če uporabljas <i>spremenljivko</i>, na primer <Code>let testSpremenljivka = 123;</Code>, ter zelis sestaviti drug znakovni niz, ki vsebuje <i>vrednost</i> spremenljivke, potem ne smes napisati dvojnih navednic (<code>"</code>) okoli imena spremenljivke. <br/><br/> Poglejmo si dva primera. Ta koda: <Code code={`let ime = "Janez";\nlet zlepljenka = "Pozdravljen " + "ime";\nalert(zlepljenka);`} block executable/> ne izpise enakega niza, kot ta: <Code code={`let ime = "Janez";\nlet zlepljenka = "Pozdravljen " + ime;\nalert(zlepljenka);`} block executable/></blockquote>
              <p>Spodaj je primer programa, ki od uporabnika zahteva ime in priimek, ta dva niza zdruzi v en niz *celoIme*, ter ta podatek izpise na vec razlicnih nacinov.</p>
              <CodeEditor lang="javascript" websitePreview={true} code={renderCustomVideo} height={editorHeight}/>
            </div>
          </details>

        </section>

      </Main>
    </Fragment>
  )
}

export default Css;
