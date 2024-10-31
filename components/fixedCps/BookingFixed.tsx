"use client";
import { Button, Card, Drawer, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BiMale, BiPhone } from "react-icons/bi";
import { CgFlag } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import {
  FaGraduationCap,
  FaLanguage,
  FaRegFileAlt,
} from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "../../i18n/client";
// import axios from "axios";

export default function BookingFixed({
  lng,
}: {
  lng: string;
}) {

  const { t: dataLang } = useTranslation(lng, "layOutFixed")
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);


  const validationSchema = Yup.object({
    name: Yup.string().required(dataLang('drawer.name_required')),
    surname: Yup.string().required(dataLang('drawer.surname_required')),
    country: Yup.string().required(dataLang('drawer.country_required')),
    gender: Yup.string().required(dataLang("drawer.gender_required")),
    email: Yup.string().email(dataLang('drawer.invalid_email')).required(dataLang("drawer.email_required")),
    mobile: Yup.string().required(dataLang('drawer.phone_required')),
    select_degree: Yup.string().required(dataLang('drawer.select_degree_required')),
    language: Yup.string().required(dataLang("drawer.select_language_required")),
    specialization: Yup.string().required(dataLang('drawer.select_specialization_required')),
    universities: Yup.string().required(dataLang("drawer.select_universities_required")),
    message: Yup.string().required(dataLang('drawer.message_required')),
  });

  const handleSubmit = async (values: any) => {
    try {
      // const response = await axios.post("/", values);
      // console.log(response.data); 
      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div>
      <div
        className="fixed top-1/3 right-0 cursor-pointer bg-red-600 p-2.5 md:p-4 rtl:flex-row-reverse items-center text-sm md:text-base text-white rounded-l-xl flex z-[25789] w-[8rem] md:w-[9rem] translate-x-[5.5rem] gap-x-3 hover:translate-x-0 duration-300"
        onClick={() => setIsOpen(true)}
      >
        <FaHandPointRight className="text-white text-lg text-start md:text-2xl w-8" />
        {dataLang("drawer.register_now")}
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="w-10/12 bg-gray-100 p-0.5 pt-4 z-[178787]"
      >
        <Drawer.Header title={dataLang("drawer.register_now")} />
        <Drawer.Items>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              country: "",
              gender: "",
              email: "",
              mobile: "",
              select_degree: "",
              language: "",
              specialization: "",
              universities: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-0">
                <Card className="shadow-none [&>div]:p-3 md:[&>div]:p-4">
                  <h3 className="text-base md:text-lg text-primary">
                    {dataLang("drawer.personal_info")}
                  </h3>
                  <Field
                    name="name"
                    as={TextInput}
                    rightIcon={lng === "ar" && CiUser}
                    icon={lng === "en" && CiUser}
                    placeholder={dataLang("drawer.name")}
                    sizing="lg"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                  <Field
                    name="surname"
                    as={TextInput}
                    rightIcon={lng === "ar" && CiUser}
                    icon={lng === "en" && CiUser}
                    placeholder={dataLang("drawer.surname")}
                    sizing="lg"
                  />
                  <ErrorMessage name="surname" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                  <Field
                    name="country"
                    as={TextInput}
                    rightIcon={lng === "ar" && CgFlag}
                    icon={lng === "en" && CgFlag}
                    placeholder={dataLang("drawer.country_of_residence")}
                    sizing="lg"
                  />
                  <ErrorMessage name="country" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                  <Field
                    name="gender"
                    as={TextInput}
                    rightIcon={lng === "ar" && BiMale}
                    icon={lng === "en" && BiMale}
                    placeholder={dataLang("drawer.gender")}
                    sizing="lg"
                  />
                  <ErrorMessage name="gender" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                  <Field
                    name="email"
                    as={TextInput}
                    rightIcon={lng === "ar" && MdEmail}
                    icon={lng === "en" && MdEmail}
                    placeholder={dataLang("drawer.email")}
                    sizing="lg"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                  <Field
                    name="mobile"
                    as={TextInput}
                    rightIcon={lng === "ar" && BiPhone}
                    icon={lng === "en" && BiPhone}
                    placeholder={dataLang("drawer.phone_number")}
                    sizing="lg"
                  />
                  <ErrorMessage name="mobile" component="div" className="text-red-500 text-start  text-sm md:text-base" />
                </Card>

                <div className="flex flex-col gap-2 md:gap-4">
                  <Card className="shadow-none [&>div]:p-3 md:[&>div]:p-4">
                    <h3 className="text-base md:text-lg text-primary">
                      {dataLang("drawer.university_info")}
                    </h3>
                    <Field
                      name="select_degree"
                      as={TextInput}
                      rightIcon={lng === "ar" && FaRegFileAlt}
                    icon={lng === "en" && FaRegFileAlt}
                      placeholder={dataLang("drawer.select_degree")}
                      sizing="lg"
                    />
                    <ErrorMessage name="select_degree" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                    <Field
                      name="language"
                      as={TextInput}
                      rightIcon={lng === "ar" && FaLanguage}
                    icon={lng === "en" && FaLanguage}
                      placeholder={dataLang("drawer.select_language")}
                      sizing="lg"
                    />
                    <ErrorMessage name="language" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                    <Field
                      name="specialization"
                      as={TextInput}
                      rightIcon={lng === "ar" && FaGraduationCap}
                    icon={lng === "en" && FaGraduationCap}
                      placeholder={dataLang("drawer.select_specialization")}
                      sizing="lg"
                    />
                    <ErrorMessage name="specialization" component="div" className="text-red-500 text-start  text-sm md:text-base" />

                    <Field
                      name="universities"
                      as={TextInput}
                      rightIcon={lng === "ar" && LuGraduationCap}
                    icon={lng === "en" && LuGraduationCap}
                      placeholder={dataLang("drawer.select_universities")}
                      sizing="lg"
                    />
                    <ErrorMessage name="universities" component="div" className="text-red-500 text-start  text-sm md:text-base" />
                  </Card>

                  <Card className="w-full shadow-none [&>div]:p-3 md:[&>div]:p-4">
                    <h3 className="text-base md:text-lg text-primary">
                      {dataLang("drawer.message_text")}
                    </h3>
                    <Field
                      name="message"
                      as={Textarea}
                      placeholder={dataLang("drawer.message_content")}
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-start text-sm md:text-base" />
                  </Card>
                </div>

                <div className="col-span-full flex justify-center">
                  <Button
                    type="submit"
                    color="primary"
                    className="md:w-2/6 font-bold px-1 md:px-2 md:py-1 text-xs md:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? dataLang("drawer.submitting") : dataLang("drawer.register_now")}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}
