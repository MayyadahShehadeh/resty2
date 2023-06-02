import React from 'react'
import Loading from '../loading/loading';

export default function Results(props) {
  return (
    <div>
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading/>}</pre>
      </section>
    </div>
  )
}
