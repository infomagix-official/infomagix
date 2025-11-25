import footerLogo from '../../assets/logo/logo_footer.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-top">
          <img src={footerLogo} alt="Infomagix footer logo" />
          <div>
            <div className="footer-meta">Customer Service</div>
            <div className="footer-meta">010-9061-3414 | 09:00 - 18:00</div>
          </div>
        </div>
        <div className="footer-body">
          Established: September 3, 2002 | CEO: Youngbak Park | Business Registration Number: 220-86-46473
          <br />
          Address: A-610 B TEGN TOWER, Gasan-dong, Geumcheon-gu, Seoul, Republic of Korea
          <br />
          Tel: 0505-335-4141 | Fax: 02-861-9763 | Email: mapark@infomagix.com
        </div>
        <div className="footer-meta">Copyright © Infomagix Co., Ltd. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
