export function NoteImg({ info}) {
    return <div className="note">
         {info.title}
        <img src={`${info.url}`} alt=""/>
       
        {/* <input type="range" max={info.max} onChange={(ev) => {
            onAns(+ev.target.value)
        }} /> */}
    </div>
}