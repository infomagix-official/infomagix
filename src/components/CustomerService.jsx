import { Link } from 'react-router-dom'

function CustomerService() {
  return (
    <section className="customer-service">
      <div className="cs-panel cs-panel--single">
        <div>
          <p className="cs-title">Customer Service</p>
          <p className="cs-number">010-9061-3414</p>
          <p className="cs-hours">Weekday 09:00 - 18:00</p>
        </div>
        {/* <div className="cs-actions">
          <Link to="/contact" className="btn btn-primary">
            Quote
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default CustomerService
