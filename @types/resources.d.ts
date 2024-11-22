import { BlogLangType } from "./@pages/blog";
import { BookingFixedType } from "./@pages/bookingFixed";
import { ContactInfoType } from "./@pages/contact";
import { Cypriot_universitiesLangType } from "./@pages/cypriot_universities";
import { FollowupRequestType } from "./@pages/followup_request";
import { HomeLangType } from "./@pages/home";
import { HousingLangType } from "./@pages/housing";
import { Partial_scholarshipsLangType } from "./@pages/partial_scholarships";
import { ServicesLangType } from "./@pages/services";
import { Turkish_universitiesLangType } from "./@pages/turkish_universities";
import { UniversityDetailsType } from "./@pages/university_details";

interface Resources
  extends HomeLangType,
    BookingFixedType,
    BlogLangType,
    Turkish_universitiesLangType,
    Cypriot_universitiesLangType,
    Partial_scholarshipsLangType,
    FollowupRequestType,
    ContactInfoType,
    HousingLangType,
    ServicesLangType,
    UniversityDetailsType {
  Header: {
    be_our_agent: string;
    follow_up_on_the_registration_request: string;
    search_for_the_university: string;
    booking_btn: string;
    home: string;
    blog: string;
    about_us: string;
    contact_us: string;
    turkish_universities: string;
    cyprus_universities: string;
    student_accommodation: string;
    partial_scholarships: string;
    opportunities: string;
    services: string;
    search_university: string;
    register_now: string;
    steps_to_register: string;
    first_arab_site: string;
    in_turkey_for_arab_students: string;
  };
  Footer: {
    siteName: string;
    copyright: string;
    home: string;
    aboutUs: string;
    contactUs: string;
    services: string;
    links: string;
    address: string;
    bio: string;
    LinkApps: string;
    TOS: string;
    agents: string;
    privacyPolicy: string;
  };
  pagination: {
    next: string;
    previous: string;
  };
}

export default Resources;
