import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import TryOutNav from '../usercomponents/TryOutNav';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';
import './TryOut.css';

class TryOut extends Component {
    state = {
        active_question: 1,
        question_nav: [
            { id: 1, qnum: 1, active: 1},
            { id: 2, qnum: 2, active: 0},
            { id: 3, qnum: 3, active: 0},
            { id: 4, qnum: 4, active: 0},
            { id: 5, qnum: 5, active: 0},
            { id: 6, qnum: 6, active: 0},
            { id: 7, qnum: 7, active: 0},
            { id: 8, qnum: 8, active: 0},
            { id: 9, qnum: 9, active: 0},
            { id: 10, qnum: 10, active: 0},
            { id: 11, qnum: 11, active: 0},
            { id: 12, qnum: 12, active: 0},
            { id: 13, qnum: 13, active: 0},
            { id: 14, qnum: 14, active: 0},
            { id: 15, qnum: 15, active: 0}
        ],
        displayed_answer: [],
        answer: [
            {
                answer_id: 1,
                answer_description: '(A) eksistensi piranti pemainan kontemporer tidak lebih baik dari perkakas pemainan lawas',
                question_id: 1
            },
            {
                answer_id: 2,
                answer_description: '(B) pengalaman hidup seseorang atau kelompok di masa lalu yang kemudian dimaknai pada masa kini',
                question_id: 1
            },
            {
                answer_id: 3,
                answer_description: '(C) sarana alternatif agar anak tidak terlalu terikat dan termanjakan dengan gadget',
                question_id: 1
            },
            {
                answer_id: 4,
                answer_description: '(D) meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat',
                question_id: 1
            },
            {
                answer_id: 5,
                answer_description: '(E) memotivasi individu untuk mengembangkan diri secara aktif',
                question_id: 1
            },
            {
                answer_id: 6,
                answer_description: 'A',
                question_id: 2
            },
            {
                answer_id: 7,
                answer_description: 'B',
                question_id: 2
            },
            {
                answer_id: 8,
                answer_description: 'C',
                question_id: 2
            },
            {
                answer_id: 9,
                answer_description: 'D',
                question_id: 2
            },
            {
                answer_id: 10,
                answer_description: 'E',
                question_id: 2
            },
            {
                answer_id: 11,
                answer_description: 'A',
                question_id: 3
            },
            {
                answer_id: 12,
                answer_description: 'B',
                question_id: 3
            },
            {
                answer_id: 13,
                answer_description: 'C',
                question_id: 3
            },
            {
                answer_id: 14,
                answer_description: 'D',
                question_id: 3
            }
        ],

        displayed_question: [],
        question: [
            {
                question_id: 1,
                question_type: 'multiplechoice',
                question_description: 
                    `<p>Permainan Lato-lato sedang menjadi tren setelah viral di Tik Tok. Permainan tersebut menggunakan sepasang bola kecil yang dikaitkan dengan seutas tali, dan kedua bola diayunkan hingga berbenturan, dan di situlah letak keasyikan dari bermain Lato-lato. Bermain Lato-lato juga memberikan manfaat yakni melatih kesabaran, keseimbangan, ketenangan berpikir, dan kemampuan dasar motorik.</p>
                    <p>Lato-lato berkembang pada dekade 60-an dan mulai diperkenalkan di Amerika Serikat pada tahun 70-an. Pada tahun 90-an Lato-lato mulai merambah ke Indonesia. Lato-lato secara harfiah berasal dari bahasa Bugis. Di Makassar disebut sebagai Kato-kato. Sedangkan di Jawa disebut sebagai Tek-etek.</p>
                    <p>Secara sosiologis, Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik dan menandakan eksistensi piranti-piranti permainan kontemporer tidak lebih baik dari perkakas permainan lawas. Pewarisan memori sosiohistoris Lato-lato dibentuk dari sisi fenomenologis pada individu atau kelompok terhadap pengalaman di masa lalu untuk kemudian dimaknai atau didefinisikan ulang pada saat ini baik dalam hal fungsi, ciri khas, bentuk, nama maupun nilai-nilai yang terkandung di dalamnya.</p>
                    <p>Aktualisasi kembali permainan Lato-lato di era ini juga dapat menjadi sarana alternatif agar anak-anak tidak terlalu terikat dan termanjakan dengan gadget, melatih kemampuan manual anak, dan memotivasi seorang individu khususnya anak yang cenderung lebih suka bermain untuk mengembangkan diri secara aktif dalam mendayagunakan pengalaman kebertubuhannya secara unik dan lebih dinamis terhadap artefak-artefak lama. Pengalaman kebertubuhan tersebut memperlakukan tubuh secara natural dalam mengonstruksi ide, rasionalitas, kreativitas, dan sisi kerja material yang memiliki nilai guna berkelanjutan secara historis dalam kehidupan sekaligus menjadi kritik terhadap wacana dominan digital games dan permainan modern lainnya yang cenderung meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat.</p>
                    <p>1.	Dalam bacaan, terdapat pernyataan “Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik”.</p>`,
            },
            {
                question_id: 2,
                question_type: 'multiplechoice',
                question_description: 
                    `<p>Permainan Lato-lato sedang menjadi tren setelah viral di Tik Tok. Permainan tersebut menggunakan sepasang bola kecil yang dikaitkan dengan seutas tali, dan kedua bola diayunkan hingga berbenturan, dan di situlah letak keasyikan dari bermain Lato-lato. Bermain Lato-lato juga memberikan manfaat yakni melatih kesabaran, keseimbangan, ketenangan berpikir, dan kemampuan dasar motorik.</p>
                    <p>Lato-lato berkembang pada dekade 60-an dan mulai diperkenalkan di Amerika Serikat pada tahun 70-an. Pada tahun 90-an Lato-lato mulai merambah ke Indonesia. Lato-lato secara harfiah berasal dari bahasa Bugis. Di Makassar disebut sebagai Kato-kato. Sedangkan di Jawa disebut sebagai Tek-etek.</p>
                    <p>Secara sosiologis, Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik dan menandakan eksistensi piranti-piranti permainan kontemporer tidak lebih baik dari perkakas permainan lawas. Pewarisan memori sosiohistoris Lato-lato dibentuk dari sisi fenomenologis pada individu atau kelompok terhadap pengalaman di masa lalu untuk kemudian dimaknai atau didefinisikan ulang pada saat ini baik dalam hal fungsi, ciri khas, bentuk, nama maupun nilai-nilai yang terkandung di dalamnya.</p>
                    <p>Aktualisasi kembali permainan Lato-lato di era ini juga dapat menjadi sarana alternatif agar anak-anak tidak terlalu terikat dan termanjakan dengan gadget, melatih kemampuan manual anak, dan memotivasi seorang individu khususnya anak yang cenderung lebih suka bermain untuk mengembangkan diri secara aktif dalam mendayagunakan pengalaman kebertubuhannya secara unik dan lebih dinamis terhadap artefak-artefak lama. Pengalaman kebertubuhan tersebut memperlakukan tubuh secara natural dalam mengonstruksi ide, rasionalitas, kreativitas, dan sisi kerja material yang memiliki nilai guna berkelanjutan secara historis dalam kehidupan sekaligus menjadi kritik terhadap wacana dominan digital games dan permainan modern lainnya yang cenderung meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat.</p>
                    <p>2.	Dalam bacaan, terdapat pernyataan “Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik”.</p>`,
            },
            {
                question_id: 3,
                question_type: 'multiplechoice',
                question_description: 
                    `<p>Permainan Lato-lato sedang menjadi tren setelah viral di Tik Tok. Permainan tersebut menggunakan sepasang bola kecil yang dikaitkan dengan seutas tali, dan kedua bola diayunkan hingga berbenturan, dan di situlah letak keasyikan dari bermain Lato-lato. Bermain Lato-lato juga memberikan manfaat yakni melatih kesabaran, keseimbangan, ketenangan berpikir, dan kemampuan dasar motorik.</p>
                    <p>Lato-lato berkembang pada dekade 60-an dan mulai diperkenalkan di Amerika Serikat pada tahun 70-an. Pada tahun 90-an Lato-lato mulai merambah ke Indonesia. Lato-lato secara harfiah berasal dari bahasa Bugis. Di Makassar disebut sebagai Kato-kato. Sedangkan di Jawa disebut sebagai Tek-etek.</p>
                    <p>Secara sosiologis, Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik dan menandakan eksistensi piranti-piranti permainan kontemporer tidak lebih baik dari perkakas permainan lawas. Pewarisan memori sosiohistoris Lato-lato dibentuk dari sisi fenomenologis pada individu atau kelompok terhadap pengalaman di masa lalu untuk kemudian dimaknai atau didefinisikan ulang pada saat ini baik dalam hal fungsi, ciri khas, bentuk, nama maupun nilai-nilai yang terkandung di dalamnya.</p>
                    <p>Aktualisasi kembali permainan Lato-lato di era ini juga dapat menjadi sarana alternatif agar anak-anak tidak terlalu terikat dan termanjakan dengan gadget, melatih kemampuan manual anak, dan memotivasi seorang individu khususnya anak yang cenderung lebih suka bermain untuk mengembangkan diri secara aktif dalam mendayagunakan pengalaman kebertubuhannya secara unik dan lebih dinamis terhadap artefak-artefak lama. Pengalaman kebertubuhan tersebut memperlakukan tubuh secara natural dalam mengonstruksi ide, rasionalitas, kreativitas, dan sisi kerja material yang memiliki nilai guna berkelanjutan secara historis dalam kehidupan sekaligus menjadi kritik terhadap wacana dominan digital games dan permainan modern lainnya yang cenderung meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat.</p>
                    <p>3.	Dalam bacaan, terdapat pernyataan “Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik”.</p>
                    <p><img src=""/></p>`,
            }
        ]
    }
    componentDidMount(){
        console.log(this.state.active_question)
        
        var allQuestion = this.state.question;
        var displayedQuestion = allQuestion.filter((item) => {
            return item.question_id === this.state.active_question;
          });

        var allAnswer = this.state.answer;
        var displayedAnswer = allAnswer.filter((item) => {
            return item.question_id === this.state.active_question
        })
        console.log(this.state.answer);
        this.setState({
            displayed_question: displayedQuestion,
            displayed_answer: displayedAnswer
        })

    }
    render(){
        return <Fragment>
            <UserTopBar></UserTopBar>
            <UserNav page="/tryout"></UserNav>
            <div className="tryout">
                <div className="tryout-blank"></div>
                <div className="tryout-left">
                    {this.state.displayed_question.map(datalist => {
                        return <div key={datalist.question_id} className="question-wrapper">
                        
                        <div className="question-title">Potensi Kognitif Soal No {datalist.question_id}</div>
                        <div className="question-content">
                            <div className="question-content-main">
                                <div dangerouslySetInnerHTML={{ __html: datalist.question_description}}></div>
                                {/* {datalist.question_description} */}
                                {/* <p>Permainan Lato-lato sedang menjadi tren setelah viral di Tik Tok. Permainan tersebut menggunakan sepasang bola kecil yang dikaitkan dengan seutas tali, dan kedua bola diayunkan hingga berbenturan, dan di situlah letak keasyikan dari bermain Lato-lato. Bermain Lato-lato juga memberikan manfaat yakni melatih kesabaran, keseimbangan, ketenangan berpikir, dan kemampuan dasar motorik.</p>
                                <p>Lato-lato berkembang pada dekade 60-an dan mulai diperkenalkan di Amerika Serikat pada tahun 70-an. Pada tahun 90-an Lato-lato mulai merambah ke Indonesia. Lato-lato secara harfiah berasal dari bahasa Bugis. Di Makassar disebut sebagai Kato-kato. Sedangkan di Jawa disebut sebagai Tek-etek.</p>
                                <p>Secara sosiologis, Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik dan menandakan eksistensi piranti-piranti permainan kontemporer tidak lebih baik dari perkakas permainan lawas. Pewarisan memori sosiohistoris Lato-lato dibentuk dari sisi fenomenologis pada individu atau kelompok terhadap pengalaman di masa lalu untuk kemudian dimaknai atau didefinisikan ulang pada saat ini baik dalam hal fungsi, ciri khas, bentuk, nama maupun nilai-nilai yang terkandung di dalamnya.</p>
                                <p>Aktualisasi kembali permainan Lato-lato di era ini juga dapat menjadi sarana alternatif agar anak-anak tidak terlalu terikat dan termanjakan dengan gadget, melatih kemampuan manual anak, dan memotivasi seorang individu khususnya anak yang cenderung lebih suka bermain untuk mengembangkan diri secara aktif dalam mendayagunakan pengalaman kebertubuhannya secara unik dan lebih dinamis terhadap artefak-artefak lama. Pengalaman kebertubuhan tersebut memperlakukan tubuh secara natural dalam mengonstruksi ide, rasionalitas, kreativitas, dan sisi kerja material yang memiliki nilai guna berkelanjutan secara historis dalam kehidupan sekaligus menjadi kritik terhadap wacana dominan digital games dan permainan modern lainnya yang cenderung meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat.</p>
                                <p>1.	Dalam bacaan, terdapat pernyataan “Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik”.</p> */}
                            </div>
                            <div className="question-content-sub">
                                <ul>
                                    {this.state.displayed_answer.map(datalist => {
                                        return <li key={datalist.answer_id}>
                                            <label className="answer-radio-wrapper">
                                                <input type="radio" name="answer"/>
                                                <span className="answer-radio-button">
                                                    {datalist.answer_description}
                                                </span>
                                            </label>
                                        </li>
                                    })}
                                    {/* 
                                    <li>
                                        <label className="answer-radio-wrapper">
                                            <input type="radio" name="answer"/>
                                            <span className="answer-radio-button">
                                                (B) pengalaman hidup seseorang atau kelompok di masa lalu yang kemudian dimaknai pada masa kini
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="answer-radio-wrapper">
                                            <input type="radio" name="answer"/>
                                            <span className="answer-radio-button">
                                                (C) sarana alternatif agar anak tidak terlalu terikat dan termanjakan dengan gadget
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="answer-radio-wrapper">
                                            <input type="radio" name="answer"/>
                                            <span className="answer-radio-button">
                                                (D) meminggirkan eksistensi permainan lawas yang telah terbentuk dalam kultur masyarakat
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="answer-radio-wrapper">
                                            <input type="radio" name="answer"/>
                                            <span className="answer-radio-button">
                                                (E) memotivasi individu untuk mengembangkan diri secara aktif
                                            </span>
                                        </label>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
                <div className="tryout-mid"></div>
                <div className="tryout-right">
                    <div className="question-navwrapper">

                        <div className="question-navtitle">Navigasi</div>
                        <div className="question-navcontent">
                            {this.state.question_nav.map(datalist => {
                                return <TryOutNav key={datalist.qnum} qnum={datalist.qnum} active={datalist.qnum === this.state.active_question ? 1 : 0}/>
                            })}
                                
                        </div>
                        <div className="question-navchangepage">
                            {/* <button className="previous-page">
                                a
                            </button> */}
                            <button className="next-page">
                                 <i><FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tryout-blank"></div>
            </div>
        </Fragment>
    }
}

export default TryOut;