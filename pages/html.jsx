import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { Background } from "../components/ui";

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

function Html() {
  const CodeEditor = dynamic(() => import("../components/CodeEditor"), {ssr: false})
  const editorHeight = "200px"

  return (
    <>
      <Background opacity={0.1} />
      <main>
      <header>
        <h1>HTML</h1>
        <p><span data-tip="...ali Hyper Text Markup Language na dolgo">Html</span> je t.i. <span data-tip={`po anglesko "markup language"`}>"oznacevalni jezik"</span>, saj z njim opisujemo strukturo (zgradbo) dokumenta (najveckrat je to spletna stran).</p>
        <p>Html dokument (beri "koda") je sestavljen iz znack  (ali elementov) in njihovih atributov, s katerimi opisemo vsebino na nasi spletni strani. Obstajajo znacke za prikaz, medijskih vsebin (<code>img</code>, video, audio,...), teksta (h1, p, span, b,..) in raznih drugih vsebin. Z atributi opisemo dodatne lastnosti nasih html elementov, na primer njihovo velikost (npr.: width="10"), razred (npr.: class="rdeci-tekst"), identifikator (npr.: id="glavni-naslov"), izvor (src="https://spletna-stran.com/slika.png"), itd..</p>
      </header>
      <section>
        <h2>Osnovne znacke</h2>

        <details>
          <summary>
            Naslovi (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>,...)
          </summary>
          <div>
            <CodeEditor code={`<h1>Najvecji naslov</h1>`} height={editorHeight}/>
          </div>
        </details>

        <details>
          <summary>
            Odstavek <code>&lt;p&gt;</code>
          </summary>
          <div>
            <CodeEditor code={`<p>Moj odstavek ...</p>`} height={editorHeight}/>
          </div>
        </details>

        <details>
          <summary>
            Povezave <code>&lt;a&gt;</code>
          </summary>
          <div>
            <CodeEditor code={linkExample} height={editorHeight}/>
          </div>
        </details>

        <details>
          <summary>
            Slike <code>&lt;img&gt;</code>
          </summary>
          <div>
            <DetailsTable>
              <tr>
                <td className="title">Atributi</td>
                <td><i>src</i>, <i>alt</i>, <i>width</i></td>
              </tr>
              <tr>
                <td className="title">Dvodelna</td>
                <td>NE</td>
              </tr>
            </DetailsTable>
            <CodeEditor code={imgExample} height={editorHeight} />
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
    </main>
    </>
  )
}

const DetailsTable = styled.table`
  margin-bottom: 15px;
`;

export default Html;
