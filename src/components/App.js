import React, { useState, useEffect } from 'react';
import Container from './container/container';
import Form from './form/form';
import ContactsList from './contactsList/contactsList';
import Filter from './filterContacts/filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filterEl, setFilterEl] = useState('');

  useEffect(() => {
    const localSt = JSON.parse(window.localStorage.getItem('contactsList'));
    if (localSt) {
      setContacts(localSt);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      window.localStorage.setItem('contactsList', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addValidContacts = value => {
    const arrey = [...contacts, value];
    if (
      contacts.every(e => e.name !== value.name) &&
      contacts.every(e => e.number !== value.number)
    ) {
      setContacts(arrey);
    } else {
      alert(`"${value.name}" is already in contact!`);
    }
  };

  const onInputFilter = value => {
    setFilterEl(value.trim());
  };

  const filterVisibleEl = () => {
    const filterLowCace = filterEl.toLowerCase();
    return contacts.filter(el => el.name.toLowerCase().includes(filterLowCace));
  };

  const removeContacts = id => {
    setContacts(prevContats => prevContats.filter(el => el.id !== id));
  };

  return (
    <Container>
      <div>
        <Form addValidContacts={addValidContacts} />
        <Filter onInputFilter={onInputFilter} />
      </div>
      <ContactsList contacts={filterVisibleEl()} removeContacs={removeContacts} />
    </Container>
  );
}
