import { useParams, Link } from "react-router-dom"

function ContactDetails({ contacts }) {

    const { id } = useParams()

    const contact = contacts.find((contact) => contact.id === id)

    if (!contact) {
        return (
            <div>
                <h1>Contact not found</h1>

                <Link to="/contacts">
                    Back to Contact List
                </Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Contact Details</h1>

            <h2>{contact.name}</h2>

            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Address: {contact.address}</p>

            <Link to="/contacts">
                Back to Contact List
            </Link>
        </div>
    )
}

export default ContactDetails