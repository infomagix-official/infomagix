import footerLogo from '../../assets/en/logo/logo_footer.png'
import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { language, _ } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="inner">
        {
          language === 'en' ? (
            <>
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
            </>
          ) : (
            <>
              <div className="footer-top">
                <img src={footerLogo} alt="Infomagix footer logo" />
                <div>
                  <div className="footer-meta">Customer Service</div>
                  <div className="footer-meta">010-9061-3414 | 09:00 - 18:00</div>
                </div>
              </div>
              <div className="footer-body">
                설립일 : 2002년 9월 3일 | 대표이사 : 박명식 | 개인정보책임자 : 서태일 | 이메일 : mspark@infomagix.com | 사업자등록번호 : 220-86-46429
                <br />
                주소 : 경기도 과천시 과천대로7길 33, 디테크타워 A동 1401호  |  대표전화 : 010-9061-3414
                <br />
                Tel: 02-2088-0517 | Fax: 02-6919-1575
              </div>
              <div className="footer-meta">
                Copyright (주)인포매직스 Co. Ltd. All rights reserved.
              </div>
            </>
          )
        }
      </div>
    </footer>
  )
}

export default Footer
