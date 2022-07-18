import React, { useEffect, useState } from 'react'
import './Loader.css'

const Loader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(()=> {
    const setteoLoader = () => {
      setLoader(false);
    }

    setTimeout(setteoLoader, 3000)
  }, [])
  return (
    <>
    {loader ? <div className='container'>
      <div className='loader'></div>
    </div> : <h3>Loaded!!!!</h3>}
    
    </>

  )
}

export default Loader