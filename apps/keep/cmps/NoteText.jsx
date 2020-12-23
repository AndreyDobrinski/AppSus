export function NoteText({ info}) {
    return <label>
        {info.title}
        <img src={info.url} alt=""/>
        {/* <input type="range" max={info.max} onChange={(ev) => {
            onAns(+ev.target.value)
        }} /> */}
    </label>
}