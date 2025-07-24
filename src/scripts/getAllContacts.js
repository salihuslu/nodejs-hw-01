import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    const contacts = await readContacts();
    console.log(await getAllContacts());
    console.table(contacts);

};

getAllContacts();

