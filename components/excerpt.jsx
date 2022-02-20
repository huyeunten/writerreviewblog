import React from 'react'

const excerpt = ({ excerpt }) => {
  return (
    <div>
        {excerpt.title}
        {excerpt.text}
    </div>
  )
}

export default excerpt