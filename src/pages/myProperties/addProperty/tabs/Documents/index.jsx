import React from 'react'
import TableRow from './TableRow'

export default function Documents({ setActiveTab }) {
    return (
        <div>
            <table className='w-full'>
                <thead className='bg-[#f1f8ff]'>
                    <tr>
                        <th className='p-3 font-semibold text-center'>Rent Document</th>
                        <th className='p-3 font-semibold text-center'>Upload / View</th>
                    </tr>
                </thead>

                <tbody>
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
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
