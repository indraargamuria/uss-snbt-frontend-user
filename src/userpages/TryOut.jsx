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

                </div>
                <div className="tryout-mid"></div>
                <div className="tryout-right">
                    <div className="question-navwrapper">

                        <div className="question-navtitle">Navigasi Ini</div>
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