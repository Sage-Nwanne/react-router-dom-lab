import {useParams} from 'react-router'

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    console.log('mailboxId:' , mailboxId)

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    if (!selectedBox) {
        return <p>Mailbox not found.</p>
    }

    return(
    <>
        <h2>Mailbox {selectedBox._id}</h2>
        <ul>
            <li><h2>Box Owner: {selectedBox.boxOwner}</h2></li>
            <li><h2>Box Size: {selectedBox.boxSize}</h2></li>
        </ul>

     </>
    );
};

export default MailboxDetails