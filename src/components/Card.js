import React from 'react'

function Card(props) {
    const {name,...other}=props;
  return (
    <div>{name}
    {JSON.stringify(other,null,2)}
    </div>
  )
}

export default Card