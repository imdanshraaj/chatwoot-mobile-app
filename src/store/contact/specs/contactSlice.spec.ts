import reducer, {
  addContacts,
  addContact,
  clearAllContacts,
  updateContactsPresence,
} from '../contactSlice';
import { contact } from './contactMockData';

describe('contact reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      ids: [],
      entities: {},
    });
  });

  it('should handle clearAllContacts', () => {
    const initialState = {
      ids: [1],
      entities: { 1: contact },
    };
    expect(reducer(initialState, clearAllContacts())).toEqual({
      ids: [],
      entities: {},
    });
  });

  it('should add a single contact', () => {
    const action = addContact(contact);
    const state = reducer(undefined, action);
    expect(state.entities[contact.id]).toEqual(contact);
  });

  it('should add all the contacts', () => {
    const contacts = [contact];
    const action = addContacts({ contacts });
    const state = reducer(undefined, action);
    expect(state.entities[contact.id]).toEqual(contact);
  });

  it('should update the contacts presence', () => {
    const initialState = {
      ids: [1],
      entities: { 1: contact },
    };
    const action = updateContactsPresence({ contacts: { 1: 'offline' } });
    const state = reducer(initialState, action);
    expect(state.entities[contact.id]?.availabilityStatus).toEqual('offline');
  });
});