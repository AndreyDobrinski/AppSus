export function EmailPreview ({email , onEmailPreview , onEmailDelete}){

    return (
        <div className="email-preview">
            <h1 className="email-subject" >

                {email.subject}
                
                <div>
                    <button className="email-viewfull" onClick={()=>onEmailPreview(email)}>+</button>
                    <button className="email-delete" onClick={()=>onEmailDelete(email)}>X</button>
                </div>

            </h1>

        </div>
    )

}