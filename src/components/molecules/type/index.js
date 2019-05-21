import React from 'react'

const Type = (props) => {
  return (
    <div style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  )
}

export default Type
