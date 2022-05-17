import React, { useState, useEffect } from 'react';
import Container from './container/container';
import Form from './form/form';
import ContactsList from './contactsList/contactsList';
import Filter from './filterContacts/filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const localSt = JSON.parse(window.localStorage.getItem('contactsList'));

  useEffect(() => {
    if (localSt) {
      setContacts(localSt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (contacts !== localSt) {
      window.localStorage.setItem('contactsList', JSON.stringify(contacts));
    }
  }, [contacts, localSt]);

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
        <Filter onInputFilter={onInputFilter} />
      </div>
      <ContactsList contacts={filterVisibleEl()} removeContacs={removeContacts} />
    </Container>
  );
}
