import { useEffect, useState } from "react"
import AddNote from "./components/AddNote"
import Nav from "./components/Nav"
import Note from "./components/Note"
import Intro from "./components/Intro"

function App() {
  // define state
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // get notes when loaded
  useEffect(() => {
    getNotes()
  }, [])

  // get notes
  const getNotes = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        "https://fir-note-app-74989-default-rtdb.firebaseio.com/notes.json"
      )
      if (!response.ok) {
        throw new Error("Cannot connect to firebase.")
      }
      const notes = await response.json()

      const modifiedNotes = []
      for (const key in notes) {
        modifiedNotes.push({
          id: key,
          data: notes[key],
        })
      }
      setNotes(modifiedNotes)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }
  return (
    <>
      <Nav totalNotes={notes.length} />
      {loading && !error && (
        <div className="flex items-center justify-center">
          <div className="loader my-10"></div>
        </div>
      )}
      {!loading && error && (
        <div className="flex items-center justify-center">
          <div className="my-10 text-red-600 text-[30px] font-bold">
            {error}
          </div>
        </div>
      )}
      {!loading && !error && (
        <>
          <AddNote getNotes={getNotes} />

          <div className="flex justify-center items-center flex-col">
            {notes.map((note, i) => (
              <Note key={i} note={note} getNotes={getNotes} />
            ))}
          </div>
        </>
      )}
      {notes.length === 0 && <Intro />}
    </>
  )
}

export default App
