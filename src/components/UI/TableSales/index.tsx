import { Order } from '@/DTOs/Order.type'
import './table-sales.style.css'
import { StatusSuccess } from '../Span'

type TableSalesProps = {
  orders: Order[]
  children?: React.ReactNode
}

export function TableSales({orders, children}: TableSalesProps) {
  return (
    <>
      <div className="table-container">
        <table className='table-sales'>
          <thead className='thead-sale'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='tbody-sales'>
            {orders.map((item: Order) => {
              return <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.date.toLocaleDateString()}</td>
              <td>{item.type}</td>
              <td><StatusSuccess status={item.status}>{item.status}</StatusSuccess></td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}