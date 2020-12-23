export function NoteImg({ note}) {
    return <div className="note">
         {note.info.title}
        <img src={`${note.info.url}`} alt=""/>
       
        {/* <input type="range" max={info.max} onChange={(ev) => {
            onAns(+ev.target.value)
        }} /> */}
    </div>
}