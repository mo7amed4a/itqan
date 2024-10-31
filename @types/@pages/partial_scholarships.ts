export interface Partial_scholarshipsLangType {
  partial_scholarships: {
    title: string;
    university: string;
    specialization: {
      label: string;
      option1: string;
      option2: string;
      option3: string;
      option4: string;
    };
    language: {
      label: string;
      value: string;
    };
    fees: {
      label: string;
      value: string;
    };
    buttons: {
      view_university: string;
      register_scholarship: string;
    };
    show_more: string;
  };
}
