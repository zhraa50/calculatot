
import '../App.css' ;
import {useState} from 'react';
function App ()
{

  const [num1, setnum] = useState('');
  const [num2, setnum2] = useState('');
  const [result, setResult] = useState("");




  const add= (e)=>{
     
    setResult(parseInt(num1)+parseInt(num2));
  
  }

  const min= (e)=>{
   
    setResult(parseInt(num1)-parseInt(num2));
  
  }

  const mult= (e)=>{
   
    setResult(parseInt(num1)*parseInt(num2));
  
  }

  const div= (e)=>{
   
    setResult(parseInt(num1)/parseInt(num2));
  
  }

  const rem= (e)=>{
   
    setResult(parseInt(num1)%parseInt(num2));
  
  }

  return (

    <div className=' num '>
      <h1>calculater</h1>

      <input onChange={(e) => setnum(e.target.value)} 
      value={num1}
       className="form-control" 
       type="text" 
       placeholder="Enter  number " />


      <input onChange={(e) => setnum2(e.target.value)} 
      value={num2}
       className="form-control" 
       type="text" 
       placeholder="Enter  number " />



    
<div className="oprat p-3 m-3 center">
              <button onClick={add}  type="button" className="b btn btn-outline-dark"> + </button>
              <button onClick={min} type="button" className="b btn btn-outline-dark"> - </button>
              <button onClick={mult} type="button" className="b btn btn-outline-dark"> * </button>
              <button onClick={div} type="button" className="b btn btn-outline-dark"> / </button>
              <button onClick={rem} type="button" className="b btn btn-outline-dark"> % </button>
        
</div>
<div className="Result m-4">
          <input
            onChange={setResult}
            value={result}
            type="text"
            className="form-control"
            readOnly
          />



</div>
</div>


  )

   



};

export default App;
