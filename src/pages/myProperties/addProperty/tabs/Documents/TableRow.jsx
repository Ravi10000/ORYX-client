import React from 'react'
import { Link } from 'react-router-dom'

export default function TableRow() {
    return (
        <tr className='border-b-2 border-[#eef2f6]'>
            <td className='p-3 text-center'>Document Name</td>

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
