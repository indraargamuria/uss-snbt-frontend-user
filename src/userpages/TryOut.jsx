import React, { Component, Fragment } from 'react';
import './TryOut.css';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';
import TryOutNav from '../usercomponents/TryOutNav';

class TryOut extends Component {
    state = {
        question_nav: [
            { id: 1, qnum: 1, active: 0},
            { id: 2, qnum: 2, active: 0},
            { id: 3, qnum: 3, active: 0},
            { id: 4, qnum: 4, active: 0},
            { id: 5, qnum: 5, active: 0},
            { id: 6, qnum: 6, active: 0},
            { id: 7, qnum: 7, active: 1},
            { id: 8, qnum: 8, active: 0},
            { id: 9, qnum: 9, active: 0},
            { id: 10, qnum: 10, active: 0},
            { id: 11, qnum: 11, active: 0},
            { id: 12, qnum: 12, active: 0},
            { id: 13, qnum: 13, active: 0},
            { id: 14, qnum: 14, active: 0},
            { id: 15, qnum: 15, active: 0}
        ]
    }
    render(){
        return <Fragment>
            <UserTopBar></UserTopBar>
            <UserNav page="/tryout"></UserNav>
            <div className="tryout">
                <div className="tryout-blank"></div>
                <div className="tryout-left">
                    <div className="question-wrapper">
                        <div className="question-title">Potensi Kognitif | Soal Nomor 1</div>
                        <div className="question-content">
                            <div className="question-content-main">
                                <p>Permainan Lato-lato sedang menjadi tren setelah viral di Tik Tok. Permainan tersebut menggunakan sepasang bola kecil yang dikaitkan dengan seutas tali, dan kedua bola diayunkan hingga berbenturan, dan di situlah letak keasyikan dari bermain Lato-lato. Bermain Lato-lato juga memberikan manfaat yakni melatih kesabaran, keseimbangan, ketenangan berpikir, dan kemampuan dasar motorik.</p>
                                <p>Lato-lato berkembang pada dekade 60-an dan mulai diperkenalkan di Amerika Serikat pada tahun 70-an. Pada tahun 90-an Lato-lato mulai merambah ke Indonesia. Lato-lato secara harfiah berasal dari bahasa Bugis. Di Makassar disebut sebagai Kato-kato. Sedangkan di Jawa disebut sebagai Tek-etek.</p>
                                <p>Secara sosiologis, Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik dan menandakan eksistensi piranti-piranti permainan kontemporer tidak lebih baik dari perkakas permainan lawas. Pewarisan memori sosiohistoris Lato-lato dibentuk dari sisi fenomenologis pada individu atau kelompok terhadap pengalaman di masa lalu untuk kemudian dimaknai atau didefinisikan ulang pada saat ini baik dalam hal fungsi, ciri khas, bentuk, nama maupun nilai-nilai yang terkandung di dalamnya.</p>
                                <p>Aktualisasi kembali permainan Lato-lato di era ini juga dapat menjadi sarana alternatif agar anak-anak tidak terlalu terikat dan termanjakan dengan gadget, melatih kemampuan manual anak, dan memotivasi seorang individu khususnya anak yang cenderung lebih suka bermain untuk mengembangkan diri secara aktif dalam mendayagunakan pengalaman kebertubuhannya secara unik dan lebih dinamis terhadap artefak-artefak lama. Pengalaman kebertubuhan tersebut memperlakukan tubuh secara natural dalam mengonstruksi ide, rasionalitas, kreativitas, dan sisi kerja material yang memiliki nilai guna berkelanjutan secara historis dalam kehidupan sekaligus menjadi kritik terhadap wacana dominan digital games dan permainan modern lainnya yang cenderung meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat.</p>
                                <p>1.	Dalam bacaan, terdapat pernyataan “Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik”.</p>
                            </div>
                            <div className="question-content-sub">
                                <ul>
                                    <li><label><input type="radio" name="pilihan" id="a" />(A) eksistensi piranti pemainan kontemporer tidak lebih baik dari perkakas pemainan lawas</label></li>
                                    <li><label><input type="radio" name="pilihan" id="b" />(B) pengalaman hidup seseorang atau kelompok di masa lalu yang kemudian dimaknai pada masa kini</label></li>
                                    <li><label><input type="radio" name="pilihan" id="c" />(C) sarana alternatif agar anak tidak terlalu terikat dan termanjakan dengan gadget</label></li>
                                    <li><label><input type="radio" name="pilihan" id="d" />(D) meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat</label></li>
                                    <li><label><input type="radio" name="pilihan" id="e" />(E) memotivasi individu untuk mengembangkan diri secara aktif</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tryout-mid"></div>
                <div className="tryout-right">
                    <div className="question-navwrapper">

                        <div className="question-navtitle">Navigasi</div>
                        <div className="question-navcontent">
                            {this.state.question_nav.map(datalist => {
                                return <TryOutNav qnum={datalist.qnum} active={datalist.active}/>
                            })}
                                
                        </div>
                    </div>
                </div>
                <div className="tryout-blank"></div>
            </div>
        </Fragment>
    }
}

export default TryOut;