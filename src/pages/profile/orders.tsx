import Profile from 'templates/Profile'

import mockOrders from 'components/OrdersList/mock'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

export default function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: mockOrders
    }
  }
}
