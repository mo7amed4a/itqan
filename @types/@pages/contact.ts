export type ContactInfoType = {
  contact: {
    title: string;
    description: string;
    email: {
      label: string;
      value: string;
    };
    address: {
      label: string;
      value: string;
    };
    form: FormMessages;
  };
};

export type FormMessages = {
  name: string;
  email: string;
  message: string;
  submit: string;
  mobile: string;
  title: string;
  address: string;
  validation: {
    name: string;
    email: {
      required: string;
      invalid: string;
    };
    address: string;
    mobile: string;
    title: string;
    message: string;
  };
};
