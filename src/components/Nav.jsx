const Nav = ({ getNotes, totalNotes }) => {
  return (
    <section className="flex items-center justify-between">
      <h1 className="text-blue-400 text-3xl">FireNote</h1>

      <p className="px-2 py-3 border-none text-lg font-semibold rounded-xl  bg-blue-400 text-white cursor-default">
        Total Notes - <span>{totalNotes}</span>
      </p>
    </section>
  )
}

export default Nav
