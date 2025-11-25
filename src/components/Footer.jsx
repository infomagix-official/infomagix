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
          Established: September 3, 2002 | CEO: Myoungshik Park | Business Registration Number: 220-86-46429
          <br />
          Address : A-1401 D TECH TOWER, Gwacheon-daero, Gwacheon-si, Gyeonggi-do, Republic of Korea
          <br />
          Tel: 02-2088-0517 | Fax: 02-6919-1575
        </div>
        <div className="footer-meta">Copyright © Infomagix Co., Ltd. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
