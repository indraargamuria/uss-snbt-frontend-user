import { faArrowRightToBracket, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';
import './TryOut.css';

class TryOut extends Component {
    state = {
        active_question: 2,
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
                answer_description: 'Pertumbuhan lumut yang semakin pesat dalam 3 tahun terakhir disebabkan oleh curah hujan yang lebih tinggi',
                question_id: 2
            },
            {
                answer_id: 7,
                answer_description: 'Kelembapan udara yang stabil membuat pertumbuhan lumut semakin meningkat',
                question_id: 2
            },
            {
                answer_id: 8,
                answer_description: 'Lumut menyebabkan pelapukan pada batuan dengan cara menyerap mineral batuan ',
                question_id: 2
            },
            {
                answer_id: 9,
                answer_description: 'Dalam 3 tahun terakhir jadwal pembersihan lumut tidak mengalami pengurangan ',
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
                    <p>1.	Dalam bacaan, terdapat pernyataan “Lato-lato yang trending disebabkan oleh adanya pewarisan ingatan sosiohistoris akan eksistensi artefak klasik”.</p>`,
            },
            {
                question_id: 2,
                question_type: 'truefalse',
                question_description: 
                    `<p>Pertumbuhan lumut di Candi Borobudur terus meningkat selama 3 tahun terakhir. Indikator peningkatan tersebut dilihat dari perubahan waktu pertumbuhan bryophyta. Biasanya, seusai pembersihan tumbuhan tersebut, bryophyta akan tumbuh 21 hari kemudian. Namun, kini hanya dalam waktu 2 minggu, tumbuhan itu sudah tumbuh meluas. Hal itu mungkin disebabkan oleh perubahan iklim, yaitu musim hujan lebih panjang daripada musim kemarau dibandingkan tiga tahun sebelumnya</p>
                    <p>Selain itu, pertumbuhan lumut, ganggang, dan jamur kerak, juga semakin meluas. Data 2005 lalu, luas pertumbuhan tiga jenis tumbuhan ini mencapai 15.983 cm2. Pada 2006, serangan lumut, ganggang, dan jamur kerak meluas hingga 366.883 cm2. Sama seperti tahun-tahun sebelumnya, bagian yang banyak ditumbuhi tiga jenis tanaman ini adalah sisi sebelah utara dan bagian dasar candi, yang jarang terkena sinar matahari. Pertumbuhan lumut, ganggang, dan jamur kerak yang sering tumbuh di batuan candi dipengaruhi oleh kondisi iklim dan cuaca, termasuk curah hujan dan kelembapan udara. Data yang dihimpun menunjukkan, sejak 1971 hingga sekarang, rata-rata kelembapan udara boleh dikatakan stabil, berkisar 70% hingga 80%. Meskipun demikian, pertumbuhan lumut tetap tak bisa dihindari, terlebih pada musim hujan seperti sekarang ini.</p>
                    <p>2.	Berilah tanda centang (√) pada kolom BENAR atau SALAH setiap pernyataan berikut sesuai dengan bacaan.</p>`,
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
    // handleActiveQuestion = (newActiveQuestion)=> {
    //     this.setState({
    //         active_question: newActiveQuestion
    //     })
    // }
    handleSetActiveQuestion = (setActiveQuestion) => {
        this.setState({
            active_question: setActiveQuestion
        },() => {
            this.handleChangeQuestion(setActiveQuestion)
        })
    }
    handleChangeQuestion = (handleActiveQuestion) => {
        var allQuestion = this.state.question;
        var displayedQuestion = allQuestion.filter((item) => {
            return item.question_id === handleActiveQuestion;
          });

        var allAnswer = this.state.answer;
        var displayedAnswer = allAnswer.filter((item) => {
            return item.question_id === handleActiveQuestion
        })
        this.setState({
            displayed_question: displayedQuestion,
            displayed_answer: displayedAnswer
        })
    }
    componentDidMount(){
        var allQuestion = this.state.question;
        var displayedQuestion = allQuestion.filter((item) => {
            return item.question_id === this.state.active_question;
          });

        var allAnswer = this.state.answer;
        var displayedAnswer = allAnswer.filter((item) => {
            return item.question_id === this.state.active_question
        })
        this.setState({
            displayed_question: displayedQuestion,
            displayed_answer: displayedAnswer
        })
        

    }
    render(){
        return <Fragment>
            <UserTopBar></UserTopBar>
            <UserNav page="/tryout"></UserNav>
            <div className="prepare">
                <div className="prepareleftblankspace"></div>
                <div className="prepareleft"></div>
                <div className="preparemid">
                    <div className="breadcrumbs">
                        <ul>
                            <li className="breadcrumbs-parent">TRY OUT SNBT #6</li>
                            <li className="breadcrumbs-divider">&#62;</li>
                            <li className="breadcrumbs-menu">PENGERJAAN</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="prepareright"></div>
                <div className="preparerightblankspace"></div>
            </div>
            <div className="tryout">
                <div className="tryout-blank"></div>
                <div className="tryout-left">
                    {this.state.displayed_question.map(datalist => {
                        return this.state.active_question === 1 ? 
                        <div key={datalist.question_id} className="question-wrapper">
                        
                            <div className="question-title">Potensi Kognitif Soal No {datalist.question_id}</div>
                            <div className="question-content">
                                <div className="question-content-main">
                                    <div dangerouslySetInnerHTML={{ __html: datalist.question_description}}></div>
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
                                    </ul>
                                </div>
                            </div>
                        </div> : this.state.active_question === 2 ?
                        <div key={datalist.question_id} className="question-wrapper">
                        
                            <div className="question-title">Potensi Kognitif Soal No {datalist.question_id}</div>
                            <div className="question-content">
                                <div className="question-content-main">
                                    <div dangerouslySetInnerHTML={{ __html: datalist.question_description}}></div>
                                </div>
                                <div className="question-content-sub border">
                                    <ul>
                                        <li>
                                            <div className="answer-truefalse-wrapper-title">
                                                <span>PERNYATAAN</span>
                                                <span>BENAR</span>
                                                <span>SALAH</span>
                                            </div>
                                        </li>
                                        {this.state.displayed_answer.map(datalist => {
                                            return <li key={datalist.answer_id}>
                                                {/* <label className="answer-radio-wrapper">
                                                    <input type="radio" name="answer"/>
                                                    <span className="answer-radio-button">
                                                        {datalist.answer_description}
                                                    </span>
                                                </label> */}
                                                <div className="answer-truefalse-wrapper">
                                                    <span className="answer-truefalse-content">{datalist.answer_description}</span>
                                                    <label className="answer-truefalse-radio-wrapper">
                                                        <input type="radio" name={'answer' + datalist.answer_id}/>
                                                        <div className="answer-truefalse-radio-button">
                                                            <i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i>
                                                        </div>
                                                    </label>
                                                    <label className="answer-truefalse-radio-wrapper">
                                                        <input type="radio" name={'answer' + datalist.answer_id}/>
                                                        <div className="answer-truefalse-radio-button">
                                                            <i><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></i>
                                                        </div>
                                                    </label>
                                                </div>
                                            </li>

                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        : 
                        <div></div>
                    })}
                </div>
                <div className="tryout-mid"></div>
                <div className="tryout-right">
                    <div className="question-navwrapper">

                        <div className="question-navtitle">Navigasi</div>
                        <div className="question-navcontent">
                            {this.state.question_nav.map(datalist => {
                                return <div className="question-navbox" key={datalist.id} onClick={() => this.handleSetActiveQuestion(datalist.qnum)}>
                                    <div className="question-navbox-wrapper" >
                                        <div className="question-answer-typeone" >-</div>
                                        <div className={datalist.qnum === this.state.active_question ? "question-number-active" : "question-number-inactive"}>{datalist.qnum}</div>
                                    </div>
                                </div>
                                // <TryOutNav key={datalist.qnum} qnum={datalist.qnum} active={datalist.qnum === this.state.active_question ? 1 : 0}/>
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