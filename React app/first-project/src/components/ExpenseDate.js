import React from 'react'

function ExpenseDate(props) {
    console.log("propsDetails" , props)

  return (
    <div>
        {/* <h2>{props?.date ? props?.date : "SHubham"} */}
        {/* <h2>{new Date(props.date)}</h2> */}
        <h2>
        {props.date.toISOString()}
        </h2>
    </div>
  )
}

export default ExpenseDate