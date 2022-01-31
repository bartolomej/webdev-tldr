import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import { Background, Main } from "../styles/shared";
import Header from "../components/Header";
import { FaHtml5 } from 'react-icons/fa';
import HtmlInfoTable from "../components/HtmlInfoTable";
import Head from "next/head";
import {theme} from "../styles/theme";

const imgExample =
`<img 
  width="200"
  alt="Slika macka" 
  src="https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg"
/>
`

const linkExample =
`<a 
  target="_blank" 
  href="https://example.com"
>
  Pojdi na drugo spletno stran
</a>
`

const classExample =
`<h1 class="rdeca">Naslov</h1>
<p class="rdeca">Odstavek 1</p>
<p>Odstavek 2</p>

<style>
.rdeca {
    color: red;
}
</style>
`;

const idExample =
  `<h1 id="glavni-naslov">Naslov</h1>
<p>Odstavek 1</p>

<style>
#glavni-naslov {
    color: green;
}
</style>
`;

function Html() {
  const CodeEditor = dynamic(() => import("../components/CodeEditor"), {ssr: false})
  const editorHeight = "200px"

  return (
    <Fragment>
      <Head>
        <title>WebDev TLDR; - HTML</title>
      </Head>
      <Background opacity={0.1} />
      <Header backgroundColor={theme.colors.html}>
        <h1>HTML <FaHtml5 /> </h1>
        <p><span data-tip="...ali Hyper Text Markup Language na dolgo">Html</span> je t.i. <span data-tip={`po anglesko "markup language"`}>"oznacevalni jezik"</span>, saj z njim opisujemo strukturo (zgradbo) dokumenta (najveckrat je to spletna stran).</p>
      </Header>
      <Main color={theme.colors.html}>
        <section>
          <p>Html <span data-tip="...oziroma njegova koda">dokument</span> je sestavljen iz <span data-tip="...katere imenujemo tudi 'elementi'">znack</span> in njihovih <span data-tip="...z domaco besedo 'lastnosti'">atributov</span>, s katerimi opisemo vsebino na nasi spletni strani. Obstajajo znacke za prikaz, medijskih vsebin (<code>img</code>, video, audio,...), teksta (h1, p, span, b,..) in raznih drugih vsebin. </p>
          <p>Z atributi opisemo dodatne lastnosti nasih html elementov, na primer njihovo velikost (npr.: <code>width="10"</code>), razred (npr.: <code>class="rdeci-tekst"</code>), identifikator (npr.: <code>id="glavni-naslov"</code>), izvor (<code>src="https://spletna-stran.com/slika.png"</code>), itd..</p>
        </section>

        <section>
        <h2>Osnovne znacke</h2>

        <details>
          <summary>
            Naslovi <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>,...
          </summary>
          <div>
            <HtmlInfoTable
              tag="h1"
              isTwoPart={true}
            />
            <CodeEditor autorun code={`<h1>Najvecji naslov</h1>`} height={editorHeight}/>
          </div>
        </details>

        <details>
          <summary>
            Odstavek <code>&lt;p&gt;</code>
          </summary>
          <div>
            <HtmlInfoTable
              tag="p"
              isTwoPart={true}
            />
            <CodeEditor autorun code={`<p>Moj odstavek ...</p>`} height={editorHeight}/>
          </div>
        </details>

        <details>
          <summary>
            Povezave <code>&lt;a&gt;</code>
          </summary>
          <div>
            <HtmlInfoTable
              tag="a"
              isTwoPart={false}
              attributes={[
                {name: 'href', about: 'Dolocimo ciljno spletno stran.'},
                {name: 'target', about: 'Opisemo nacin odpiranja povezave (v novem oknu, v novem zavihku).'},
              ]}
            />
            <CodeEditor autorun code={linkExample} height={editorHeight}/>
          </div>
        </details>

        <details>
          <summary>
            Slike <code>&lt;img&gt;</code>
          </summary>
          <div>
            <HtmlInfoTable
              tag="img"
              isTwoPart={false}
              attributes={[
                {name: 'src', about: 'Dolocimo izvor do slike (url ali lokalna pot).'},
                {name: 'alt', about: 'Opisemo vsebino slike z besedami.'},
                {name: 'width', about: 'Dolocimo sirino slike.'},
                {name: 'height', about: 'Dolocimo visino slike.'},
              ]}
            />
            <CodeEditor autorun code={imgExample} height={editorHeight} />
          </div>
        </details>
      </section>

        <section>
          <h2>Osnovni koncepti</h2>
          <details>
            <summary>
              Unikatni identifikator elementa <code>id="..."</code>
            </summary>
            <div>
              <p>Unikatni identifikator elementa oznacuje tocno dolocen element z dolocenim imenom. Z dodajanjem kode <code>id="glavni-naslov"</code>, lahko enemu samemu elementu na nasi strani dolocimo unikatno ime "glavni-naslov". Z css stilom bi lahko temu elementu dodali unikatni stil (naprimer mu spremenili barvo besedila).</p>
              <CodeEditor autorun code={idExample} height={editorHeight}/>
            </div>
          </details>
          <details>
            <summary>
              Razred elementa <code>class="..."</code>
            </summary>
            <div>
              <p>Razred je skupina sorodnih elementov (v tem primeru so to html elementi). Z dodajanjem kode <code>class="rdeca"</code>, uvrstimo katerikoli html element v razred z imenom "rdeca". Z css stilom bi lahko vsem elementeom tega razreda dodali enake stile (na primer pobarvali besedilo z rdeco barvo).</p>
              <CodeEditor autorun code={classExample} height={editorHeight}/>
            </div>
          </details>
        </section>

        <section>
          <h2>Bodi pozoren na ...</h2>
          <details>
            <summary>
              Kako pises znacke
            </summary>
            <div>
              <p>
                Vecina znack (npr.: <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>) imajo vedno dva dela <code>&lt;h1&gt; ... vsebina ... &lt;/h1&gt;</code>.
              </p>
              <p>
                Izjema je nekaj znack, ki ne potrebujejo dodatne vsebina, ampak vsebino opisemo ze z npr. atributi <code>&lt;img src="../pot/do/slike.ong" /&gt;</code>
              </p>
            </div>
          </details>
        </section>
    </Main>
    </Fragment>
  )
}

export default Html;
