import React, { useState } from "react"

const AddNote = ({ getNotes }) => {
  // define state
  const [note, setNote] = useState("")

  //   add new note
  const addNote = async (e) => {
    e.preventDefault()
    try {
      await fetch(
        "https://fir-note-app-74989-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: { "Content-Type": "application/json" },
        }
      )
      getNotes()
      setNote("")
    } catch (error) {
      alert("Error Occurred")
    }
  }
  return (
    <section className="flex justify-center items-center">
      <form className="card" onSubmit={addNote}>
        <input
          type="text"
          placeholder="add note"
          className="p-2 w-[60%] text-lg border-none outline-none rounded-xl max-w-[500px]"
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="p-2 text-blue-400 border-none text-lg font-semibold rounded-xl cursor-pointer">
          Add Note
        </button>
      </form>
    </section>
  )
}

export default AddNote
