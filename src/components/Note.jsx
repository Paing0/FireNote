import DeleteIcon from "../svgs/DeleteIcon"

const Note = ({ note, getNotes }) => {
  // destructure note object
  const { data, id } = note

  // delete note
  const deleteNote = async () => {
    try {
      const response = await fetch(
        `https://fir-note-app-74989-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "DELETE",
        }
      )
      if (!response.ok) {
        throw new Error("Failed to delete")
      }
      getNotes()
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className="card card-ctr ">
      <h3 className="text-white">- {data}</h3>
      <div onClick={deleteNote}>
        <DeleteIcon />
      </div>
    </div>
  )
}

export default Note
