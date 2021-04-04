import React, { Fragment } from "react";
import { Background } from "../components/ui";
import Header from "../components/Header";
import { FaCss3Alt } from "react-icons/fa";
import dynamic from "next/dynamic";

const tagNameSelectorExample =
`<h1>Naslov 1</h1>
<h2>Naslov 2</h2>

<style>
    h1 {
       color: red;
    }
</style>
`

const multiTagNamesSelectorExample =
  `<h1>Naslov 1</h1>
<h2>Naslov 2</h2>
<h3>Naslov 3</h3>

<style>
    h1, h2 {
      color: red;
    }
</style>
`

const idSelectorExample =
  `<h1 id="moj-naslov">Naslov 1</h1>
<h1>Naslov 1.1</h1>

<style>
    #moj-naslov {
      color: red;
    }
</style>
`

const classSelectorExample =
  `<ul>
    <li class="moder">Moder element seznama 1</li>
    <li class="zlat">Zlat element seznama 1</li>
    <li class="moder">Moder element seznama 2</li>
</ul>

<style>
    .moder {
      color: blue;
    }
    .zlat {
      color: gold;
    }
</style>
`


function Css() {
  const CodeEditor = dynamic(() => import("../components/CodeEditor"), {ssr: false})
  const editorHeight = "200px"

  return (
    <Fragment>
      <Background opacity={0.1} />
      <Header>
        <h1>CSS <FaCss3Alt /> </h1>
        <p><span data-tip="...ali Cascading Style Sheets na dolgo">Css</span> je t.i. "stilni jezik", saj lahki njegovo pomocjo html elementom dolocimo vizualne stile.</p>
      </Header>
      <main>
        <section>
          <h2>Izbiranje elementov</h2>
          <details>
            <summary>
              Izbiranje po imenu html elementa <code>{`h1 { ... }`}</code>
            </summary>
            <div>
              <CodeEditor code={tagNameSelectorExample} height={editorHeight}/>
            </div>
          </details>

          <details>
            <summary>
              Izbiranje po imenu vec html elementov <code>{`h1, h2 { ... }`}</code>
            </summary>
            <div>
              <CodeEditor code={multiTagNamesSelectorExample} height={editorHeight}/>
            </div>
          </details>

          <details>
            <summary>
              Izbiranje po <span data-tip="ID = Unikatni Identifikator">ID-ju</span> <code>{`#moj-element { ... }`}</code>
            </summary>
            <div>
              <CodeEditor code={idSelectorExample} height={editorHeight}/>
            </div>
          </details>

          <details>
            <summary>
              Izbiranje po <span data-tip="class = razred sorodnih html elementov">class-u</span> <code>{`.moji-elementi { ... }`}</code>
            </summary>
            <div>
              <CodeEditor code={classSelectorExample} height={'300px'}/>
            </div>
          </details>
        </section>
      </main>
    </Fragment>
  )
}

export default Css;
