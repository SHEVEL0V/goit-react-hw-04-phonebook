import React, { useState, useEffect } from 'react';
import Container from './container/container';
import Form from './form/form';
import ContactsList from './contactsList/contactsList';
import Filter from './filterContacts/filter';

const getContacts = () => {
  const contacts = JSON.parse(window.localStorage.getItem('contactsList'));
  return contacts ? contacts : [];
};

export default function App() {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const addValidContacts = value => {
    const arrey = [...contacts, value];
    if (contacts.every(e => e.name.toLowerCase() !== value.name.toLowerCase())) {
      setContacts(arrey);
    } else {
      alert(`"${value.name}" is already in contact!`);
    }
  };

  const onInputFilter = value => {
    setFilter(value.trim());
  };

  const filterVisibleEl = () => {
    const filterLowCace = filter.toLowerCase();
    return contacts.filter(el => el.name.toLowerCase().includes(filterLowCace));
  };

  const removeContacts = id => {
    setContacts(prevContats => prevContats.filter(el => el.id !== id));
  };

  return (
    <Container>
      <div>
        <Form addValidContacts={addValidContacts} />
        <Filter onInputFilter={onInputFilter} value={filter} />
      </div>
      <ContactsList contacts={filterVisibleEl()} removeContacs={removeContacts} />
    </Container>
  );
}
