import {Link} from 'react-router';
const MailboxList = ({mailBoxes}) => {
    if (!mailBoxes || mailBoxes.length === 0) {
        return <h2>No mailboxes available</h2>
    }
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {mailBoxes.map((currentMailbox) => (
                    <li key={currentMailbox._id} className='.mail-box'>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>
                        {currentMailbox.boxOwner}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;