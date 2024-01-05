import React from 'react'
import { Link } from 'react-router-dom'

export default function DocumentTypeTableRow({ documentType }) {

    return (
        <tr className='border-b-2 border-[#eef2f6]'>
            <td className='p-3 text-center'>{documentType.name}</td>

            <td className={`p-3 text-center font-medium ${documentType.isRequired === 'Yes' ? 'text-primary' : 'text-red-500'}`}>{documentType.isRequired}</td>

            <td className='p-3 text-center flex gap-5 justify-center items-center'>
                <span>Upload</span>
                <Link
                    to=''
                    className='text-primary underline text-base'
                >
                    View
                </Link>
            </td>

        </tr>
    )
}
