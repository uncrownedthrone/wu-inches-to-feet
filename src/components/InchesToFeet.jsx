import React, { useState, useEffect } from 'react'

// DONE take user input and store it
// DONE use stored user input and convert inches to feet
// DONE display the results in the feet placeholder

// TODO convert on click
// TODO convert decimals to feet and inches

const InchesToFeet = () => {
  const [input, setInput] = useState('')
  const converter = input / 12
  console.log(input)

  useEffect(() => {
    setInput()
  }, [])

  return (
    <>
      <input
        type="number"
        value={input}
        placeholder="enter inches"
        onInput={e => setInput(e.target.value)}
      />
      <p>{converter} feet</p>
    </>
  )
}

export default InchesToFeet
