import React from 'react'

const ReturnTemprano = ({condition}) => {
  
    if(condition){

        return (
        <h3>La condicion es correcta</h3>
      )

    }
    return(
        <h3>La condicion es falsa</h3>
    )
  
}



export default ReturnTemprano

