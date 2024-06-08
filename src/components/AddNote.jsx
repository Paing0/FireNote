import React, { useState } from "react"

const AddNote = ({ getNotes }) => {
  // define state
  const [note, setNote] = useState("")

  //   add new note
  const addNote = async (e) => {
    e.preventDefault()

    if (note.trim().length === 0) {
      alert("Please enter a valid note.")
      return
    }

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
          className="p-1.5 w-[60%] text-lg border-none outline-none rounded-xl max-w-[500px] min-w-[100px] mr-4"
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="p-1.5 text-blue-400 border-none text-lg font-semibold rounded-xl cursor-pointer min-w-[101px]">
          Add Note
        </button>
      </form>
    </section>
  )
}

export default AddNote
