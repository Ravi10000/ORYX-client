import React from 'react'
import { Link } from 'react-router-dom'

export default function TableRow() {
    return (
        <tr>
            <td>Document Name</td>

            <td>
                <Link
                    to=''
                    className='text-secondary underline'
                >
                    View
                </Link>
            </td>

            <td className='flex justify-center items-center gap-2'>
                <img
                    src='/src/assets/done2.png'
                    alt='done'
                    className='w-5 h-5'
                />

                <img
                    src='/src/assets/cancel.png'
                    alt='cancel'
                    className='w-5 h-5'
                />
            </td>
        </tr>
    )
}
