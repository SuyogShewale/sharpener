import React from 'react'

function ExpenseDetails(props) {
    console.log("propsDetails" , props)
  return (
    <div className='ExpenseDetails'>

        <div className='ExpenseDetails_Title'>
      <h2>
        {props.Title}
      </h2>
        </div>

        <div className='ExpenseDetails_amount'>
      <h2>
        {props.amount}
      </h2>
        </div>



    </div>
  )
}

export default ExpenseDetails