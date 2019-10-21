import React from 'react'

export default function Info(props) {
    const { value, form } = props;
    
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center '}}>
              <h2>{value.name}</h2>
              <p>{value.text}</p>
            </div>
            <button onClick={() => {
            //   setEditingNews(true)
            }}>Edit news</button>
            <button >Delete news</button>
          </div>
    )
}