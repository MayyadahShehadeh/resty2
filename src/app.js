import React, { useState,useReducer,useEffect } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';
import History from './components/history/history';
import historyReducer, {addHistoryAction,initialState} from './components/history/reducer';


export default function app(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const [state,dispatch] = useReducer(historyReducer,initialState);
  const [render,setRender]=useState('')

  async function callApi(requestParams){
    // mock output (RESPONSE)
    console.log(requestParams);

    if (requestParams.url) {
      const response = await axios({
        method: requestParams.method,
        url: requestParams.url,
        data: requestParams.request,
      });

      setData(response);
      setRequestParams(requestParams);
      dispatch(addHistoryAction(requestParams));

      console.log('res ::', response);

    } else {

      const data = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setData(data);
      setRequestParams(requestParams);
      dispatch(addHistoryAction(requestParams));

      
    }
  }
  useEffect(() => {

    setRender(`method : ${requestParams.method}, URL : ${requestParams.url}`)
  })

  return (
    <div>

      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <div>from useEffect : {render}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        
      <History historyArr = {state.history} 
      handleApiCall={callApi}/>

      {console.log('state.history', state.history)}
        <Footer />
      </React.Fragment>
    </div>
  )
}




