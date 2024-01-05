import React, { useCallback, useEffect, useState } from 'react'
import DocumentTypeTableRow from './documentTypeTableRow'
import { authApi } from '../../../../../api';

export default function Documents({ setActiveTab }) {

    const [documentTypes, setDocumentTypes] = useState();

    async function getDocumentTypes() {
        const { data: { data } } = await authApi.get('/document-type/read');
        console.log(data);
        setDocumentTypes(data);
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
                    {documentTypes?.map((documentType) => (
                        <DocumentTypeTableRow
                            key={documentType?._id}
                            getDocumentTypes={getDocumentTypes}
                            // setModal={setModal}
                            documentType={documentType}
                        />
                    ))}
                </tbody>
            </table>
            <div className='mt-10 flex justify-end items-center'>
                <button
                    type='button'
                    onClick={() => setActiveTab('auditDetails')}
                    className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                >
                    Next
                </button>
            </div>

        </div>
    )
}
