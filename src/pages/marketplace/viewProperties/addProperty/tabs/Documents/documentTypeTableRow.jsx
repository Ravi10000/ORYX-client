import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export default function DocumentTypeTableRow({ register, getValues, errors, documentType, index }) {
    const [file, setFile] = useState(null);

    useEffect(() => {
        const doc = getValues(`${documentType.name}`)
        // console.log(doc);
        if (doc.length <= 0) return;
        setFile(doc)
    }, []);

    function handleFileChange(e) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    function handleViewDocument() {
        if (file) {
            const fileURL = URL.createObjectURL(file);
            const newTab = window.open(fileURL, '_blank');
            if (newTab) {
                newTab.addEventListener('beforeunload', () => URL.revokeObjectURL(fileURL));
            }
        } else {
            toast.error('Please select a document file first.');
        }
    }

    return (
        <tr className='border-b-2 border-[#eef2f6]'>
            <td className='p-3 text-center'>{documentType.name}</td>

            <td className={`p-3 text-center font-medium ${documentType.isRequired === 'Yes' ? 'text-red-500' : 'text-primary'}`}>{documentType.isRequired}</td>

            <td className='p-3 text-center flex gap-1 justify-center items-center'>
                <div className='flex-1 relative text-sm'>
                    <div className='border border-[#EEF2F6] bg-[#F7FBFF] w-full outline-secondary rounded-lg'>
                        <input
                            type='file'
                            className='opacity-0 absolute w-16 top-[2px] right-[2px]'
                            {...register(`${documentType.name}`, {
                                required: documentType?.isRequired === 'Yes' ? `${documentType.name} is Required.` : false,
                                onChange: e => { handleFileChange(e) }
                            })
                            }
                        />
                        <div className='flex justify-center items-center gap-2 px-2 py-1 cursor-pointer'>
                            <span>Upload</span>
                        </div>
                    </div>
                    {errors?.[documentType?.name]?.type === "required" && <p className='text-red-500 font-medium'>{errors?.[documentType?.name]?.message}</p>}
                </div>

                <div className='flex-1'>
                    {file &&
                        <button type='button'
                            className='text-primary border-b border-primary cursor-pointer'
                            onClick={handleViewDocument}>View</button>
                    }
                </div>

            </td>

        </tr>
    )
}
