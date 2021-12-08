import React, { Fragment } from "react";
import { Background, Main } from "../styles/shared";
import Header from "../components/Header";
import { FaJsSquare } from "react-icons/fa";
import dynamic from "next/dynamic";
import Head from "next/head";
import { theme } from "../styles/theme";
import { IoPlayOutline } from "react-icons/io5";

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

function Css () {
  const CodeEditor = dynamic(() => import("../components/CodeEditor"), { ssr: false })
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
        </section>

      </Main>
    </Fragment>
  )
}

export default Css;
