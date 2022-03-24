import React,{useRef} from 'react'

export default function UncontrolledComponent() {

  const fileInputRef=useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    alert( `Selected file - ${fileInputRef.current.files[0].name}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file :&nbsp;
          <input type="file" ref={fileInputRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
