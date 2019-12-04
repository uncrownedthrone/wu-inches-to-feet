import React, { useState } from 'react'

// DONE take user input and store it

// TODO use stored user input and convert inches to feet
// TODO display the results in the feet placeholder

const InchesToFeet = () => {
  const [input, setInput] = useState('')
  console.log(input)
  return (
    <>
      <input
        type="number"
        value={input}
        onInput={e => setInput(e.target.value)}
      />
      <button>Convert to Feet</button>
      <p>Feet - [placeholder]</p>
    </>
  )
}

export default InchesToFeet
