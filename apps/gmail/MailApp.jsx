import { AppHeader } from '../../cmps/App-header.jsx'
import { MailService } from '../gmail/services/mail-service.js'
import { EmailList } from '../gmail/cmps/Email-list.jsx'
import { EmailOptions } from '../gmail/cmps/Email-options.jsx'


export class MailApp extends React.Component {

    state = {
        emails:[],
        filterBy:{
            subject:''
        },
        selectedEmail:null,


    }

    /// INIT
    componentDidMount(){
        this.loadEmail()

    }

    loadEmail = () =>{
        const emails = MailService.query()
        this.setState({
            emails
        })
        // console.log(emails);
    }


    getEmailsForDisplay = () =>{
        const {filterBy} = this.state
        return this.state.emails.filter((email) =>{
            return email.subject.toLowerCase().includes(filterBy.subject.toLowerCase())
        })

    }
    onEmailPreview = (email) =>{
        console.log('email:' , email);
        this.setState({
            selectedEmail : email
        })

    }


    onEmailDelete = (email) =>{
        console.log('deliting email' , email);
        var areUSure = confirm('Are you sure that you want to delete this Email?')
        if(areUSure){
            var copyEmail = MailService.deleteEmail(email.id)
            // console.log(copyEmail);
            this.setState({
                emails : copyEmail
            })
        }
        else return
    }


    onCloseModal = () =>{
        this.setState({
            selectedEmail :null
          })
    }



    render() {
        return (
            <section>

                <AppHeader />
                <section className="email-container">
                    
                        <EmailOptions/>
                    <div className="email-list-container">
                        <EmailList emails={this.getEmailsForDisplay()} onEmailPreview={this.onEmailPreview} onEmailDelete={this.onEmailDelete}/>
                    </div>

                </section>

                {this.state.selectedEmail && <div className="modal">
                    <div className="modal-content">

                    <div className="modal-header">
                        <span className="close" onClick={()=>this.onCloseModal()}>&times;</span>
                        <h2>Subject: {this.state.selectedEmail.subject}</h2>
                    </div>


                    <div className="modal-body">
                        <p><span>Description:</span> {this.state.selectedEmail.body}</p>
                    </div>


                    </div>
                    </div>}

            </section>
        )
    }
}

