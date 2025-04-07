
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [note, setNote] = useState('')

  useEffect(() => {
    axios.get('/note').then(res => setNote(res.data.note))
  }, [])

  const saveNote = () => {
    axios.post('/note', { note }).then(() => alert('Note saved!'))
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 Online Notepad</h1>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: '100%', height: '300px' }}
      />
      <br />
      <button onClick={saveNote}>Save</button>
    </div>
  )
}

export default App
