import { FilterSales } from "@/components/UI/FilterSales";
import { TableSales } from "@/components/UI/TableSales";
import { Order } from "@/DTOs/Order.type";
import styles from "./page.module.css"

export default function SalesPage() {
  const orders: Order[] = [
    {
      id: "00001",
      name: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      date: new Date(2019, 8, 4),
      type: "Electric",
      status: "Completed",
    },
    {
      id: "00002",
      name: "Rosie Pearson",
      address: "979 Immanuel Ferry Suite 526",
      date: new Date(2019, 4, 28),
      type: "Book",
      status: "Processing",
    },
    {
      id: "00003",
      name: "Darrell Caldwell",
      address: "8587 Frida Ports",
      date: new Date(2019, 10, 23),
      type: "Medicine",
      status: "Rejected",
    },
    {
      id: "00004",
      name: "Gilbert Johnston",
      address: "768 Destiny Lake Suite 600",
      date: new Date(2019, 1, 5),
      type: "Mobile",
      status: "Completed",
    },
    {
      id: "00005",
      name: "Alan Cain",
      address: "042 Mylene Throughway",
      date: new Date(2019, 6, 29),
      type: "Watch",
      status: "Processing",
    },
    {
      id: "00006",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: new Date(2019, 7, 15),
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "00007",
      name: "Maggie Sullivan",
      address: "New Scottieberg",
      date: new Date(2019, 11, 21),
      type: "Watch",
      status: "Processing",
    },
    {
      id: "00008",
      name: "Rosie Todd",
      address: "New Jon",
      date: new Date(2019, 3, 30),
      type: "Medicine",
      status: "On Hold",
    },
    {
      id: "00009",
      name: "Dollie Hines",
      address: "124 Lyla Forge Suite 975",
      date: new Date(2019, 6, 16),
      type: "Book",
      status: "In Transit",
    },
  ]

  return (
    <>
      <div className={styles.titleWrapper}>
        <h2>Lista de Pedidos</h2>
      </div>
      <div className={styles.filterWrapper}>
        <FilterSales />
      </div>
      <div>
        <TableSales orders={orders} />
      </div>
    </>
  )
}