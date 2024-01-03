import React from 'react'
import TableRow from './TableRow'

export default function Documents({ setActiveTab }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rent Document</th>
                        <th>View</th>
                        <th>Action</th>
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
                    onClick={() => setActiveTab('auditDetails')}
                    className='p-2 w-60 cursor-pointer bg-primary text-white font-medium text-xl text-center rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}
