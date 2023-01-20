import React, {useState} from 'react';
import './App.css';


function App() {
  const [user , setuser] = useState("");
  const [re , setre] = useState("");
  const data = (e) =>{
       setuser(user.concat(e.target.value));
  }
 
  const blank = () =>{
       setuser("");
       setre("");
      
     };
     const del = () =>{
       setuser(user.slice(0, -1));
       setre("");
     }
     const result = () =>{
       try{ 
              setre(eval(user));
             
       }catch(e){
              console.log(e);
       }
      
     }
  return (
    <>
    <div className='center'>

    <div>
<h1>Calculator</h1>
    </div>
    <div className='box'>
    
    <input className="inp1" type="text" placeholder="" value={re}/>  
             <input className="inp2" type="text" placeholder="0" value={user}/>  
   
      
      <div>
      <div>  
       
       <input type="text" value="C" className='size col' onClick={blank}/>
      <input type="text" value="DEL" className='size2 col' onClick={del}/>
      <input type="text" value="+" className='size col' name="+" onClick={data}/>
       </div>
      <div>
      <input type="text" value="1" className='size' onClick={data}/>
      <input type="text" value="2" className='size' onClick={data}/>
      <input type="text" value="3" className='size' onClick={data}/>
      <input type="text" value="-" className='size col' onClick={data}/>
      
      </div>
      <div>
      <input type="text" value="4" className='size' onClick={data}/>
      <input type="text" value="5" className='size' onClick={data}/>
      <input type="text" value="6" className='size' onClick={data}/>
      <input type="text" value="*" className='size col' name="*" onClick={data}/>
     
      </div>
      
      <div>
      <input type="text" value="7" className='size' onClick={data}/>
      <input type="text" value="8" className='size' onClick={data}/>
      <input type="text" value="9" className='size' onClick={data}/>
      <input type="text" value="/" className='size col' name="*" onClick={data}/>

      
      </div>
      <div>
      <input type="text" value="." className='size' onClick={data}/>
      <input type="text" value="0" className='size' onClick={data}/>
      <input type="text" value="=" className='size2 col' onClick={result}/>
     
             
      </div>
      </div>

    </div>
    </div>
    </>
  );
}

export default App;
