export interface UniversityDetailsType {
  university_details: {
    university: {
      foundedIn: string;
      globalRank: string;
      languages: string;
    };
    tabs: {
      studyPrograms: string;
      studentHousing: string;
      faqs: string;
    };
    studyPrograms: {
      programs: string;
      studyYears: string;
      language: string;
      fees: string;
      annualFees: string;
      grantAvailable: string;
    };
    housing: {
      capacity: string;
      price: string;
      beds: string;
      meals: string;
      internet: string;
    };
    specifications: {
      title: string;
    };
  };
}
