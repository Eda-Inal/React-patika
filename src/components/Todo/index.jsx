import React, { useState } from 'react'

const defaultItems = [
    {
        name : "Item A "
    },
    {
        name : "Item B "
    },
    {
        name : "Item C "
    }
]

function Todo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);
  return (
    <div> <br /><br />

<label>
Text <br />
 <input value={text} onChange={(e) => setText(e.target.value)}  />

</label>
     
      <button onClick={() => setItems((prev) => [...prev, {name : text}])}>Add</button>
<br /><br />
{
    items.map((item, key) => (
        <div key={key}>{item.name}</div>
    ))
}


    </div>

  )
}

export default Todo
