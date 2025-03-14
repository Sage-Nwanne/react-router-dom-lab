import {Link} from 'react-router';
const MailboxList = ({mailboxes}) => {
    if (!mailboxes || mailboxes.length === 0) {
        return <h2>No mailboxes available</h2>
    }
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {mailboxes.map((currentMailbox) => (
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