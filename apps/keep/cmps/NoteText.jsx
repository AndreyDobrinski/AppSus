// export class NoteText extends React.Component {
//     state = {
//         note: this.props.note
//     }

//     handleChange = (ev) => {
//         var value = ev.target.value
//         const noteCopy = { ...this.state };
//         noteCopy.note.info.txt = value
//         this.setState(noteCopy)

//     };

//     render() {
//         return <div className="note">
//             <textarea name="" id="" rows="10" value={this.state.note.info.txt} onChange={this.handleChange}></textarea>
//         </div>
//     }
// }

export function NoteText({ info }) {
    return <div className="note">
        <textarea name="" id="" rows="10" value={info.txt}></textarea>
        {/* {info.txt} */}
        {/* <input type="range" max={info.max} onChange={(ev) => {
            onAns(+ev.target.value)
        }} /> */}
    </div>
}