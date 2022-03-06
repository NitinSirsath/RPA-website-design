import React,{useState} from 'react'


const intern = () => {
    const [input, setInput] = useState('')
    const handleClick = () =>{
        
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setnput(e.target.value)} />
            <button onClick={handleClick}>click</button>
    <div>
        {input*2}
    </div>
    </div>
  )
}

export default intern;