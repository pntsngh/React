import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import initialContacts from "./data/initialContacts"

import Navbar from "./components/Navbar"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import ContactDetails from "./components/ContactDetails"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

import "./App.css"

function App() {

    const [contacts, setContacts] = useState(initialContacts)

    function addContact(contact) {
        setContacts([...contacts, contact])
    }

    function removeContact(id) {
        const newContacts = contacts.filter((contact) => contact.id !== id)

        setContacts(newContacts)
    }

    function editContact(updatedContact) {

        const newContacts = contacts.map((contact) => {

            if (contact.id === updatedContact.id) {
                return updatedContact
            }

            return contact
        })

        setContacts(newContacts)
    }

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/add-contact"
                    element={<AddContact onAddContact={addContact} />}
                />

                <Route
                    path="/contacts"
                    element={
                        <ContactList
                            contacts={contacts}
                            onRemoveContact={removeContact}
                            onEditContact={editContact}
                        />
                    }
                />

                <Route
                    path="/contacts/:id"
                    element={<ContactDetails contacts={contacts} />}
                />

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    )
}

export default App