import {util} from '../../../services/util.js'


export const MailService = {
    query,
    deleteEmail,
}

var gEmails;
_createEmails()


function query (){
    return gEmails
}

function _createEmails(){
    gEmails = _getDemoEmails()
}


function _getDemoEmails(){
    const defaultEmails = [

        {
            id: util.makeid(),
            subject:'Ajax updates',
            body:'The slimy bird precisely dodged because some dog passionately killed towards a beautiful dog which, became a professional, lovely boy.',
            isRead: false,
            sentAt:0
        },
        {
            id: util.makeid(),
            subject:'Invite to Vtuber',
            body:'The beautiful teacher sadly died because some bird slowly kicked down a rough bird which, became a dumb, soft plastic.',
            isRead: false,
            sentAt:0
        },
        {
            id: util.makeid(),
            subject:'Shoes on sale!',
            body:'The rough bird sadly breathed because some teacher humbly rolled below a beautiful old lady which, became a dumb, hot plastic.',
            isRead: false,
            sentAt:0
        },


    ]
    return defaultEmails
}


function deleteEmail(emailId){
    gEmails = gEmails.filter(email =>{
        return email.id !== emailId
    })
    return gEmails
}