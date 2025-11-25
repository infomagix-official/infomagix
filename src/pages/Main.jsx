import CustomerService from '../components/CustomerService'
import ProductShortcuts from '../components/ProductShortcuts'
import Slider from '../components/Slider'

function Main() {
  return (
    <main className="content">
      <Slider />
      <ProductShortcuts />
      <CustomerService />
    </main>
  )
}

export default Main
