import React from 'react'
import Loading from '../loading/loading';
import ReactJson from "react-json-view";

export default function Results(props) {

  return (
    <div>
      <section>
        <pre>{props.data ?  <div className="result-titles">
            <h2>HEADERS:</h2>
            <ReactJson src={props.data.headers} />
            <h2>DATA:</h2>
            <ReactJson src={props.data.data} />
          </div>
           : <Loading/>}</pre>
      </section>
    </div>
  )
}
