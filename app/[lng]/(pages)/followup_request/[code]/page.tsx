'use client';
import React, { useEffect } from 'react';
import { Card, Table } from 'flowbite-react';
import { api, setAcceptLanguage } from '../../../../../lib/axios';
import toast from 'react-hot-toast';
import { useTranslation } from '../../../../../i18n/client';

type RegistrationRequest = {
  id: number;
  code: string;
  first_name: string;
  last_name: string;
  country: string;
  gender: string;
  email: string;
  phone_number: string;
  degree_level: string;
  language: string;
  specialization: string;
  preferred_universities: string;
  message_text: string;
  created_at: string;  // يمكن تحويله إلى Date إذا كنت تعمل مع Date objects
  updated_at: string;  // يمكن تحويله إلى Date إذا كنت تعمل مع Date objects
};

const RegistrationRequest = ({
  params,
}: {
  params: { lng: string; code: string };
}) => {
  const { t: dataLang } = useTranslation(params.lng, "followup_request");

  const [requestData, setRequestData] = React.useState<RegistrationRequest | null>(null);

  useEffect(() => {
    // getReq()
    const res = api.post(`/followup_request/${params.code}`);
    res.then(res => {
      if (res?.data?.status) {
        setRequestData(res.data.data.request)
      }
      else {
        toast.error(res.data.msg)
      }
    }).catch(err=> {
      toast.error("Server error")
      console.log(err);
    })
    
  }, [params.code])
  

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Card>
        <h5 className="text-2xl font-bold text-center mb-4">
          {dataLang('title')}
        </h5>
       {requestData && <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{dataLang('code')}</Table.Cell>
              <Table.Cell>{requestData.code}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('first_name')}</Table.Cell>
              <Table.Cell>{requestData.first_name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('first_name')}</Table.Cell>
              <Table.Cell>{requestData.last_name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('country')}</Table.Cell>
              <Table.Cell>{requestData.country}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('gender')}</Table.Cell>
              <Table.Cell>{requestData.gender}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('email')}</Table.Cell>
              <Table.Cell>{requestData.email}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('phone_number')}</Table.Cell>
              <Table.Cell>{requestData.phone_number}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('degree_level')}</Table.Cell>
              <Table.Cell>{requestData.degree_level}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('language')}</Table.Cell>
              <Table.Cell>{requestData.language}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('specialization')}</Table.Cell>
              <Table.Cell>{requestData.specialization}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('preferred_universities')}</Table.Cell>
              <Table.Cell>{requestData.preferred_universities}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('message_text')}</Table.Cell>
              <Table.Cell>{requestData.message_text}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('created_at')}</Table.Cell>
              <Table.Cell>{new Date(requestData.created_at).toLocaleString()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{dataLang('updated_at')}</Table.Cell>
              <Table.Cell>{new Date(requestData.updated_at).toLocaleString()}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>}
      </Card>
    </div>
  );
};

export default RegistrationRequest;
