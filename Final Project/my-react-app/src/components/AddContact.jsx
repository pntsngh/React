import { useState } from "react"

function AddContact({ onAddContact }) {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    function handleAddContact() {

        if (name.trim() === "") return
        if (phone.trim() === "") return
        if (email.trim() === "") return
        if (address.trim() === "") return

        const contact = {
            id: Date.now().toString(),
            name: name,
            phone: phone,
            email: email,
            address: address
        }

        onAddContact(contact)

        setName("")
        setPhone("")
        setEmail("")
        setAddress("")
    }

    return (
        <div className="container">
            <div className="contact-form">
                <h1>Add Contact</h1>

                <input
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    placeholder="Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />

                <button onClick={handleAddContact}>
                    Add Contact
                </button>
            </div>
        </div>
    )
}

export default AddContact