import React, {useState} from 'react'
import Link from 'next/link'

export default function Dropdown(props){
  const [path, setPath] = useState()

  return(
    <div>
      <select value={path} onChange={(e)=>{
        setPath(e.target.value);
      }}><option>Select Class </option>
        {Object.entries(props.paths).map((p)=>(
          <option key={p[0]} value={p[1]}>{p[1]}</option>
        ))}
      </select>

      <Link href={{
        pathname:"/StudentPage",
        query:{classroom:path}
      }}>
        <button>
          Go
        </button>
      </Link>
    </div>
  )


}
