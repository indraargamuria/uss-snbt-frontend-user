import React, { Component, Fragment } from 'react';
// import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

class PackageBoxOrder extends Component {
    render(){
        return <Fragment>
            <div className="packagebox">
                <div className="packagebox-name">{this.props.name}</div>
                <div className="packagebox-image"><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1676387738~exp=1676388338~hmac=b979b4bf6f760d7164954b5e594dcc4fa270f03b996b85ac2ef53ee510ee3e6a" alt="" /></div>
                <div className="packagebox-subtest">
                    <div className="packagebox-subtestcontent">
                        <span className="packagebox-subtestcontent-group">Skolastik</span>
                        <span>Kemampuan Penalaran Umum</span>
                        <span>Pengetahuan dan Pemahaman Umum</span>
                        <span>Kemampuan Memahami Bacaan dan Menulis</span>
                        <span>Pengetahuan Kuantitatif</span>
                        <span className="packagebox-subtestcontent-group">Literasi</span>
                        <span>Literasi dalam Bahasa Indonesia</span>
                        <span>Literasi dalam Bahasa Inggris</span>
                        <span>Literasi Matematika</span>
                    </div>
                    
                </div>
                <div className="packagebox-footer">
                    <div className="packagebox-price"><span>Rp {this.props.price},-</span></div>
                    <div className="packagebox-navigation"><button><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default PackageBoxOrder;