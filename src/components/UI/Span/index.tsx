import React from 'react'
import './span-style.css'
import { OrderStatus } from '@/DTOs/Order.type'

type StatusType = {
  children?: React.ReactNode
  status: OrderStatus
  rest?: any
}

export function StatusSuccess({ children, status, ...rest }: StatusType) {
  const renderStatus = () => {
    switch (status) {
      case 'Completed':
        return <span className="status-badge status-completed">Concluído</span>
      case 'Processing':
        return <span className='status-badge status-processing'>Processando</span>
      case 'Rejected':
        return <span className='status-badge status-rejected'>Rejeitado</span>
      case 'On Hold':
        return <span className='status-badge status-on-hold'>Em espera</span>
      case 'In Transit':
        return <span className='status-badge status-in-transit'>Em transporte</span>
      default:
        break;
    }
  }

  return (
    <>
      {renderStatus()}
    </>
  )
}