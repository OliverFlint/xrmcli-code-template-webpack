class ContactForm {
  OnLoad = (executionContext: Xrm.Events.EventContext) => {
    const formContext = executionContext.getFormContext();
    formContext.getAttribute("firstname").setValue("XrmCli!");
  };
}

(window as any).ContactForm = new ContactForm();
