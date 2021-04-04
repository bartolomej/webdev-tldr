import React, {Fragment} from "react";
import styled from "styled-components";

function HtmlInfoTable({ attributes = [], isTwoPart = false, tag }) {

  const allAttributes = [
    ...attributes,
    { name: 'id', about: 'Dolocimo unikatni identifikator elementa.'},
    { name: 'class', about: 'Dolocimo kateremu razredu pripada element.'},
    { name: 'style', about: 'Dolocimo vrsticne (css) stile elementa.'},
  ]

  return (
    <Container>
      <tbody>
        <tr>
          <td className="title">Atributi</td>
          <td>
            {allAttributes.map((e, i) => (
              <Fragment key={i}>
                <i data-tip={e.about}>{e.name}</i>
                {i !== allAttributes.length - 1 ? ', ' : ''}
              </Fragment>
            ))}
          </td>
        </tr>
        <tr>
          <td className="title">Dvodelna</td>
          <td>{isTwoPart ? 'DA' : 'NE'}</td>
        </tr>
        <tr>
          <td className="title">Viri</td>
          <td>
            <a target="_blank" href={`https://www.w3schools.com/tags/tag_${tag}.asp`}>w3schools</a>, {' '}
            <a target="_blank" href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`}>mozilla</a>
          </td>
        </tr>
      </tbody>
    </Container>
  )
}

const Container = styled.table`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export default HtmlInfoTable;
