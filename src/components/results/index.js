import React from 'react'

export default function Results(props) {
  return (
    <div>
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    </div>
  )
}
