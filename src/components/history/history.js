import React from 'react'

export default function history(props) {
    const handleSubmit = index => {
      
    
        const formData = {
            method: props.historyArr[index].method,
            url: props.historyArr[index].url,
            request: props.historyArr[index].request,
         
        };
        props.handleApiCall(formData);
      }

  return (
    <div>
        <h2>Requests History :</h2>
        <ul>
        {
          props.historyArr.map((req,idx)=>{
            return (
                <div>

                <li key={idx} >
                    <div>

                    <b>Method: </b> {req.method} <br/>
                    <b>Url: </b>{req.url} <br/>

                    {/* {req.request[idx] !== "" ?
                    (<div><b>req: </b>  {Object.keys(req.request)[idx] }  : {Object.values(req.request)[idx] }</div>)
                    : null }<br/> */}

                    <button onClick={() => handleSubmit(idx)}>Request</button> 
                    </div>
                    </li>
                    <br />
                </div>

            )
            
        })
    }
      </ul>
    </div>
  )
}
