import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Contact Manager</h1>

      <p>
        This application allows you to manage your contacts
        easily. You can add, view, edit and delete contacts.
      </p>

      <div className="home-cards">

        <div className="home-card">
          <h3>Home</h3>
          <p>
            The homepage introduces the application and
            explains its main features.
          </p>
        </div>

        <div className="home-card">
          <h3>Add Contact</h3>
          <p>
            This view contains a form for adding new contacts
            with name, phone, email and address.
          </p>
        </div>

        <div className="home-card">
          <h3>Contact List</h3>
          <p>
            Displays all contacts with their names and phone
            numbers. Contacts can also be edited or deleted.
          </p>
        </div>

        <div className="home-card">
          <h3>Contact Details</h3>
          <p>
            Displays complete information about an individual
            contact using a dynamic URL and contact ID.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;