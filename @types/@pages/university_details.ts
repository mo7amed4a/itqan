export interface UniversityDetailsType {
  university_details: {
    university: {
      foundedIn: string;
      globalRank: string;
      localRank: string;
      languages: string;
      staff: string;
      studentsCount: number;
      nationalityCount: number;
      video: string;
      photo: string;
      features: string;
      studentHousings: string;
      languagesStudy: string;
      languagesStudyAvailable: string;
      languagesStudyMoreLanguages: string;
      faqs: string;
    };
    tabs: {
      studyPrograms: string;
      studentHousing: string;
      faqs: string;
      majors: string;
      studyYears: string;
      studyLanguage: string;
      tuitionFee: string;
      registration: string;
      years: string;
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
    booking_now: string;
  };
}
