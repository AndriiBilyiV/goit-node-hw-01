import * as contactService from "./contacts.js";
import { program } from "commander";

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");
program.parse();
const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      return console.log(allContacts);
    case "get":
      const getedContact = await contactService.getContactById(id);
      return console.log(getedContact);
    case "add":
      const addedContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      return console.log(addedContact);
    case "remove":
      const deletedContact = await contactService.removeContact(id);
      return console.log(deletedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
