import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'price', text: 'Price', value: 'price' },
  { key: 'location', text: 'Location', value: 'location' }
]


const DropDown = () => {
    const [value, setValue] = useState("")



    return (
        <Dropdown
        placeholder='Filter' 
        fluid multiple 
        selection 
        options={options}
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default DropDown