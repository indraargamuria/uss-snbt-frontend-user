import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';
import './TryOutPrepare.css';

class UserTryOutPrepare extends Component {
    state = {
        packageinfo_tab: [
            {
                idbagianpaket: 'Skolastik',
                namabagianpaket: 'Skolastik'
            },
            {
                idbagianpaket: 'Literasi',
                namabagianpaket: 'Literasi'
            }
        ],
        packageinfo_activetab: 'Skolastik',
        packageinfo_filteredcolumn: ['bagianpaket','namasubtes','durasisubtes','totalsoalsubtes'],
        packageinfo_displayedcolumn: [],
        packageinfo_displayed: [],
        packageinfo: [
            {
                idpaket: 1,
                namapaket: 'SNBT#6',
                bagianpaket: 'Skolastik',
                idsubtes: 1,
                namasubtes: 'Kemampuan Penalaran Umum',
                durasisubtes: '15 Menit',
                totalsoalsubtes: '20 Soal'
            },
            {
                idpaket: 1,
                namapaket: 'SNBT#6',
                bagianpaket: 'Skolastik',
                idsubtes: 2,
                namasubtes: 'Pengetahuan dan Pemahaman Umum',
                durasisubtes: '15 Menit',
                totalsoalsubtes: '20 Soal'
            },
            {
                idpaket: 1,
                namapaket: 'SNBT#6',
                bagianpaket: 'Skolastik',
                idsubtes: 3,
                namasubtes: 'Kemampuan Memahami Bacaan dan Menulis',
                durasisubtes: '15 Menit',
                totalsoalsubtes: '20 Soal'
            },
            {
                idpaket: 1,
                namapaket: 'SNBT#6',
                bagianpaket: 'Skolastik',
                idsubtes: 4,
                namasubtes: 'Pengetahuan Kuantitatif',
                durasisubtes: '15 Menit',
                totalsoalsubtes: '20 Soal'
            },
            {
                idpaket: 1,
                namapaket: 'SNBT#6',
                bagianpaket: 'Literasi',
                idsubtes: 5,
                namasubtes: 'Literasi dalam Bahasa Indonesia',
                durasisubtes: '15 Menit',
                totalsoalsubtes: '20 Soal'
            },
            {
                idpaket: 1,
                namapaket: 'SNBT#6',
                bagianpaket: 'Literasi',
                idsubtes: 6,
                namasubtes: 'Literasi dalam Bahasa Inggris',
                durasisubtes: '15 Menit',
                totalsoalsubtes: '20 Soal'
            },
            {
                idpaket: 1,
                namapaket: 'SNBT#6',
                bagianpaket: 'Literasi',
                idsubtes: 7,
                namasubtes: 'Penalaran Matematika',
                durasisubtes: '15 Menit',
                totalsoalsubtes: '20 Soal'
            }
        ]
    }
    
    handleChangeTab = (activeTab) => {
        this.setState({
            packageinfo_activetab: activeTab
        },
            () => {
                this.handlePackageInfoChange(activeTab)
            }
        )
    }
    handlePackageInfoChange = (activeTab) => {
        var allPackageInfo = this.state.packageinfo;
        var displayedPackageInfo = allPackageInfo.filter((item) => {
            return item.bagianpaket === activeTab;
          });
        this.setState({
            packageinfo_displayed: displayedPackageInfo
        },() => console.log(this.state.packageinfo_displayed))
    }
    componentDidMount() {
        
        var packageInfoAllColumn = Object.keys(this.state.packageinfo[0]);
        var packageInfoFilteredColumn = this.state.packageinfo_filteredcolumn;

        var packageInfoDisplayedColumn = packageInfoAllColumn.filter((tab) => {
            return packageInfoFilteredColumn.find((selected)=>{
                return tab === selected
            });
        });
        this.setState({
            packageinfo_displayedcolumn: packageInfoDisplayedColumn
        },() => console.log(this.state.packageinfo_displayedcolumn));


        var allPackageInfo = this.state.packageinfo;
        var displayedPackageInfo = allPackageInfo.filter((item) => {
            return item.bagianpaket === this.state.packageinfo_activetab;
          });
        this.setState({
            packageinfo_displayed: displayedPackageInfo
        },() => console.log(this.state.packageinfo_displayed))
    }

    render(){
        return <Fragment>
            <UserTopBar></UserTopBar>
            <UserNav page="/tryoutprepare"></UserNav>
            <div className="prepare">
                <div className="prepareleftblankspace"></div>
                <div className="prepareleft"></div>
                <div className="preparemid">
                    <div className="breadcrumbs">
                        <ul>
                            <li className="breadcrumbs-parent">TRY OUT SNBT #6</li>
                            <li className="breadcrumbs-divider">&#62;</li>
                            <li className="breadcrumbs-menu">PERSIAPAN</li>
                        </ul>
                    </div>
                    <div className="preparecontent">
                        <div className="preparerule">
                            <div className="preparerule-title">PERATURAN</div>
                            <div className="preparerule-point">
                                <ol>
                                    <li>Grup Subtes Dikerjakan Secara Berurutan</li>
                                    <li>Layar Akan Otomatis Pindah ke Subtes Berikutnya Apabila Waktu Habis</li>
                                    <li>Jawaban Boleh Dikosongkan</li>
                                    <li>Siswa Dapat Berpindah Subtes Sebelum Waktu Habis</li>
                                    <li>Siswa Tidak Dapat Kembali ke Subtes Sebelumnya</li>
                                    <li>Tidak Diperkenankan Bekerja Selama Pengerjaan Try Out</li>
                                </ol>
                            </div>
                        </div>
                        <div className="preparepackageinfo">
                            <div className="preparepackageinfo-boxactive">
                                <div className="preparepackageinfo-section">BAGIAN SKOLASTIK</div>
                                <div className="preparepackageinfo-component">
                                    <ul>
                                        <li className="preparepackageinfo-componentcolumntitle">Sub Test</li>
                                        <li>Kemampuan Penalaran Umum</li>
                                        <li>Pengetahuan dan Pemahaman Umum</li>
                                        <li>Pengetahuan Kuantitatif</li>
                                        <li>Kemampuan Memahami Bacaan dan Menulis</li>
                                    </ul>
                                    <ul>
                                        <li className="preparepackageinfo-componentcolumntitle">Durasi</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                    </ul>
                                    <ul className="hide-on-mobile">
                                        <li className="preparepackageinfo-componentcolumntitle">Jumlah Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                    </ul>
                                </div>
                                <div className="preparepackageinfo-nav">
                                    <a href="/tryout"><i><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></i>Mulai Try Out</a>
                                </div>
                            </div>
                            <div className="preparepackageinfo-boxinactive">
                                <div className="preparepackageinfo-section">BAGIAN LITERASI</div>
                                <div className="preparepackageinfo-component">
                                    <ul>
                                        <li className="preparepackageinfo-componentcolumntitle">Sub Test</li>
                                        <li>Literasi Bahasa Indonesia</li>
                                        <li>Literasi Bahasa Inggris</li>
                                        <li>Literasi Matematika</li>
                                        <li></li>
                                    </ul>
                                    <ul>
                                        <li className="preparepackageinfo-componentcolumntitle">Durasi</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li>22 Menit</li>
                                        <li></li>
                                    </ul>
                                    <ul className="hide-on-mobile">
                                        <li className="preparepackageinfo-componentcolumntitle">Jumlah Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>20 Soal</li>
                                        <li>.</li>
                                    </ul>
                                </div>
                                <div className="preparepackageinfo-nav">
                                    <a><i><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></i>Selesaikan Skolastik</a>
                                </div>
                            </div>
                            {/* <div className="preparepackageinfo-nav">
                                <ul>
                                    {this.state.packageinfo_tab.map(datalist => {
                                        return <li onClick={() => this.handleChangeTab(datalist.idbagianpaket)} key={datalist.idbagianpaket} className={datalist.idbagianpaket === this.state.packageinfo_activetab ? "packageinfo-nav-active" : "packageinfo-nav-inactive"}>{datalist.namabagianpaket}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="preparepackageinfo-content">
                            <table>
                                <thead>
                                    <tr>
                                        {this.state.packageinfo_displayedcolumn.map(datalist => {
                                            return <td key={datalist}>{datalist.toUpperCase()}</td>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.packageinfo_displayed.map((row, index) => {
                                        return <tr key={index}>
                                            {this.state.packageinfo_displayedcolumn.map((key, index) => {
                                                return <td key={row[key]}>{row[key]}</td>
                                            })}
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="prepareright"></div>
                <div className="preparerightblankspace"></div>
            </div>
        </Fragment>
    }
}

export default UserTryOutPrepare;