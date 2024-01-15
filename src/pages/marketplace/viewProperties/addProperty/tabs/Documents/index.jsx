import React, { useEffect, useState } from 'react'
import DocumentTypeTableRow from './documentTypeTableRow'
import { authApi } from '../../../../../../api';

export default function Documents({ register, handleSubmit, getValues, errors, setActiveTab }) {

    const [documentTypes, setDocumentTypes] = useState();

    async function getDocumentTypes() {
        try {
            const { data: { data } } = await authApi.get('/document-type/read');
            // console.log(data);
            setDocumentTypes(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDocumentTypes();
    }, []);

    return (
        <div>
            <table className='w-full'>
                <thead className='bg-[#f1f8ff]'>
                    <tr>
                        <th className='p-3 font-semibold text-center'>Rent Document</th>
                        <th className='p-3 font-semibold text-center'>Required</th>
                        <th className='p-3 font-semibold text-center'>Upload / View</th>
                    </tr>
                </thead>

                <tbody>
                    {documentTypes?.map((documentType, index) => (
                        <DocumentTypeTableRow
                            key={documentType?._id}
                            getDocumentTypes={getDocumentTypes}
                            documentType={documentType}
                            index={index}
                            register={register}
                            getValues={getValues}
                            errors={errors}
                        />
                    ))}
                </tbody>
            </table>
            <div className='mt-10 flex justify-end items-center'>
                <button
                    type='button'
                    onClick={handleSubmit((data) => {
                        // console.log(data);
                        setActiveTab('auditDetails')
                    })}
                    className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}
