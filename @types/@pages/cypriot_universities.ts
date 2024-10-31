export interface Cypriot_universitiesLangType {
  cypriot_universities: {
    title: string;
    links: {
      all: string;
      privateUniversities: string;
      internationalUniversities: string;
      cyprusUniversities: string;
    };
    mostRanked: string;
    topMajors: string;
    universityInfo: {
      name: string;
      description: string;
      establishmentYear: string;
      ranking: string;
      rankingNumber: string;
      establishedYearValue: string;
      majors: {
        humanSciences: string;
        medicine: string;
        computerEngineering: string;
        pharmacy: string;
      };
      startingPrices: string;
      priceRange: {
        form: string;
        to: string;
      };
      registerNow: string;
    };
    show_more: string;
  };
}
