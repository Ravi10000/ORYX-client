import React from 'react'

const Table = () => {
  return (
    <div className='overflow-x-auto w-full'>
        <table className='text-center whitespace-nowrap w-full'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>username</th>
                    <th>Fractions Owned</th>
                    <th>Current Value</th>
                    <th>Performance</th>
                    <th>Dividends Received	</th>
                    <th>Trading Volume	</th>
                    <th>Total Profit/Loss</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td className='center min-w-max'>
                        <img src="	https://oryx.maxocart.com/assets/dream2earn/user_01.png" alt="" width={52}/>
                    </td>
                    <td>Gohard</td>
                    <td>2.4K</td>
                    <td>$1.2M</td>
                    <td>+20%</td>
                    <td>+ $100,000</td>
                    <td>$2.5M</td>
                    <td className='text-green-500'>+ $300,000</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td className='center  min-w-fit'>
                        <img src="	https://oryx.maxocart.com/assets/dream2earn/user_01.png" alt="" width={52}/>
                    </td>
                    <td>Gohard</td>
                    <td>2.4K</td>
                    <td>$1.2M</td>
                    <td>+20%</td>
                    <td>+ $100,000</td>
                    <td>$2.5M</td>
                    <td className='text-green-500'>+ $300,000</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td className='center min-w-fit'>
                        <img src="	https://oryx.maxocart.com/assets/dream2earn/user_01.png" alt="" width={52}/>
                    </td>
                    <td>Gohard</td>
                    <td>2.4K</td>
                    <td>$1.2M</td>
                    <td>+20%</td>
                    <td>+ $100,000</td>
                    <td>$2.5M</td>
                    <td className='text-green-500'>+ $300,000</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table