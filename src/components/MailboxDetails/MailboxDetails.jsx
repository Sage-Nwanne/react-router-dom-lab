import {useParams} from 'react-router'

const MailboxDetails = (props) => {


    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find((mailbox) => (
       mailbox._id === Number(mailboxId)
    ));


    return(
        <>
        <ul>
            <li><h2>Box Owner: {selectedBox.boxOwner}</h2></li>
            <li><h2>Box Size: {selectedBox.boxSize}</h2></li>
        </ul>
        </>
    );
};

export default MailboxDetails