import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>YAŞAYIŞ QİYMƏTİNƏ DAXİL OLAN İKİ NƏFƏR ÜÇÜN LÜKS İSTİRAHƏT</h2>
                    <p>Azerbaycan Hotellerin-de cütlər üçün "hər şey daxil" sistemində lüks Karib bayramının ən yüksək zirvəsini yaşamağa gəlin. Qebele, Nabran, Şeki, Quba, Masalli, Yardimli və Lenkeran ən möhtəşəm tropik mənzərələr və incə çimərliklər boyunca yerləşən lüks çimərlik kurortlarımız qeyri-adi sayda nəfis yeməklər, ilk sinif likörləri və şərabları təqdim edən unikal barlar, eləcə də golf kurortlarımızda pulsuz yaşıl yığımlar daxil olmaqla, bütün növ yerüstü və su idmanı təklif edir. və əksər kurortlarda akvalanqla sertifikatlaşdırılmış PADI snorkelling. Bir toy planlıyorsanız, Lahic. bal ayı üçün toy turlar və turlar arasında liderdir.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>DÜNYANIN APARICI</h3>
                                <p>"HƏR ŞEY DAXİL" ŞİRKƏTİ ARTIQ 20 İLDİR Kİ, DALBADAL</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">7%-dək əlavə endirim əldə edin</h4>
                        <p className="timer">12 SAAT QALDI!</p>
                        <p className="offers">BÜTÜN CARİ TƏKLİFLƏR BAX</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Təyinat yeri</label>
                            <select>
                                <option value="1">Nabran</option>
                                <option value="1">Qəbələ</option>
                                <option value="1">Şəki</option>
                                <option value="1">Lənkəran</option>
                                <option value="1">Masalli</option>
                                <option value="1">Kəlbəcər</option>
                                <option value="1">Şuşa</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>İndi sifariş et </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
