
import './form.scss';

import React from 'react'
import { useState } from 'react';
import './form.scss';

export default function Form(props) {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [restMethod, setrestMethod] = useState('get');
  const [textArea, settextArea] = useState(false)
  const [request, setrequest] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      method:restMethod,
      url: url,
      request
    };
    props.handleApiCall(formData);
  }


  function UrlSetstate(e) {
    setUrl(e.target.value);
  }

// ----- for get and delete methods to not show teatarea
  function restMethodFun(e) {
    setrestMethod(e.target.id);
    console.log('rest method :::: ', e.target.id);
    settextArea(false);
  }
  
// ---- to show textarea just for put and post methods
  function textAreaFun(e) {
    settextArea(true);
    setrestMethod(e.target.id);
  }
  function requestBodyFun(e) {
    let data = JSON.parse(e.target.value);
    setrequest(data);
  }


  return (
    <>
      <form
        onSubmit={handleSubmit}>

        <label >
          <span>URL: </span>
          <input name='url' type='text'  onChange={UrlSetstate} />
          <button type="submit">GO!</button>
        </label>

        <label className="methods">
          <span id="get" onClick={restMethodFun}>GET</span>
          <span id="post" onClick={textAreaFun}>POST</span>
          <span id="put" onClick={textAreaFun}>PUT</span>
          <span id="delete" onClick={restMethodFun}>DELETE</span>
        </label>

        {textArea &&
          <textarea rows='5' cols='40' onChange={requestBodyFun} />}
      </form>
    </>
  )
}
