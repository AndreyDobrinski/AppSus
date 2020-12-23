
import { EmailPreview } from '../cmps/Email-preview.jsx'

export function EmailList({emails}){
    return (
        emails.map(email =>{
            return <EmailPreview email={email} key={email.id} />
        })
    )
}