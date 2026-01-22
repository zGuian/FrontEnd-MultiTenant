export type OrderStatus = 'Completed' | 'Processing' | 'Rejected' | 'On Hold' | 'In Transit';

export interface Order {
  id: string;
  name: string;
  address: string;
  date: Date;
  type: string;
  status: OrderStatus;
} 