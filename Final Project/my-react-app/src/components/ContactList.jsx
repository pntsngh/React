import { Link } from "react-router-dom"

function ContactList({ contacts, onRemoveContact, onEditContact }) {

    function handleEditContact(contact) {

        const newName = prompt("New name:", contact.name)

        if (newName === null || newName.trim() === "") return

        const newPhone = prompt("New phone:", contact.phone)

        if (newPhone === null || newPhone.trim() === "") return

        const updatedContact = {
            ...contact,
            name: newName,
            phone: newPhone
        }

        onEditContact(updatedContact)
    }

    return (
        <div>
            <h1>Contact List</h1>

            {contacts.map((contact) => (
                <div key={contact.id}>

                    <h2>
                        <Link to={`/contacts/${contact.id}`}>
                            {contact.name}
                        </Link>
                    </h2>

                    <p>{contact.phone}</p>

                    <button onClick={() => handleEditContact(contact)}>
                        Edit
                    </button>

                    <button onClick={() => onRemoveContact(contact.id)}>
                        Delete
                    </button>

                </div>
            ))}
        </div>
    )
}

export default ContactList