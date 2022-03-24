import React,{useState} from 'react'

export default function Form() {

  const [name, setName]=useState('')
  const [essay, setEssay]=useState('Please write an essay about your favorite DOM element.')
  const [flavor, setFlavor]=useState('')

  const handleChange=(e)=> {
    setName(e.target.value);
  }

  const handleEssayChange=(e)=> {
    setEssay(e.target.value);
  }

  const handleFlavorChange=(e)=> {
    setFlavor(e.target.value);
  }

  const handleSubmit=(e)=> {
    e.preventDefault();
    alert(`- name: ${name}\n- essay : ${essay}\n- favorite flavor : ${flavor}`);
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
          Name :&nbsp;
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <br/>
        <br/>
        <label>
          Essay :&nbsp;
          <textarea value={essay} onChange={handleEssayChange} />
        </label>
        <br/>
        <br/>
        <label>
          Pick your favorite flavor :&nbsp;
          <select value={flavor} onChange={handleFlavorChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
