import React, { Component, Fragment } from 'react';
import './UserCatalog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import TryOutTimeline from '../usercomponents/TryOutTimeline';
import Hero from '../usercomponents/Hero';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';
import PackageBoxOrder from '../usercomponents/PackageBoxOrder';

class UserCatalog extends Component {
    state = {
        mobile_filtered_tab: ['nama'],
        filtered_tab: ['kode','nama','subtes','durasi'],
        mobile_displayed_tab: [],
        displayed_tab: [],
        catalog_nav: [
            {
                id: 1,
                nav: 'SIAP TRY OUT'
            },
            {
                id: 2,
                nav: 'SUDAH SELESAI'
            }
        ],
        catalog_navactive: 1,
        displayed_user_package: [],
        user_package: [
            {
                id: 1,
                kode: '23_001_SNBT.6',
                nama: 'SNBT #6',
                subtes: '4 Skolastik & 3 Literasi',
                durasi: '1 Jam 20 Menit',
                status: 1
            },
            {
                id: 2,
                kode: '23_002_SNBT.7',
                nama: 'SNBT #7',
                subtes: '4 Skolastik',
                durasi: '1 Jam 20 Menit',
                status: 1
            },
            {
                id: 3,
                kode: '23_003_SNBT.2',
                nama: 'SNBT #3',
                subtes: '4 Skolastik & 4 Akademik',
                durasi: '1 Jam 20 Menit',
                status: 2
            }
        ]
    }
    handleChangeTab = (activeCatalogNav) => {
        this.setState({
            catalog_navactive: activeCatalogNav
        },
            () => {
                this.handleUserPackageChange(activeCatalogNav)
            }
        )
    }
    handleUserPackageChange = (activeCatalogNav) => {
        var allUserPackage = this.state.user_package;
        var displayedUserPackage = allUserPackage.filter((item) => {
            return item.status === activeCatalogNav;
          });
        this.setState({
            displayed_user_package: displayedUserPackage
        },() => console.log(this.state.displayed_user_package))
    }
    componentDidMount() {
        var allTab = Object.keys(this.state.user_package[0]);
        var filteredTab = this.state.filtered_tab;
        var mobileFilteredTab = this.state.mobile_filtered_tab;

        var displayedTab = allTab.filter((tab) => {
            return filteredTab.find((selected)=>{
                return tab === selected
            });
        });
        var mobileDisplayedTab = allTab.filter((tab) => {
            return mobileFilteredTab.find((selected)=>{
                return tab === selected
            });
        });
        this.setState({
            displayed_tab: displayedTab,
            mobile_displayed_tab: mobileDisplayedTab
        },() => console.log(displayedTab))

        var allUserPackage = this.state.user_package;
        var displayedUserPackage = allUserPackage.filter((item) => {
            return item.status === this.state.catalog_navactive;
          });
        this.setState({
            displayed_user_package: displayedUserPackage
        },() => console.log(this.state.displayed_user_package))
    }
    
    render(){
        return <Fragment>
            <UserTopBar></UserTopBar>
            <UserNav page="/catalog"></UserNav>
            <div className="catalog">
                <div className="catalogleftblankspace"></div>
                <div className="catalogleft"></div>
                <div className="catalogmid">
                    <div className="catalognav">
                        <ul>
                            {this.state.catalog_nav.map(datalist => {
                                return <li onClick={() => this.handleChangeTab(datalist.id)} key={datalist.id} className={datalist.id === this.state.catalog_navactive ? "catalognav-active" : "catalognav-inactive"}>{datalist.nav}</li>
                            })}
                        </ul>
                    </div>
                    <div className="catalogcontent">
                        <table>
                            <thead>
                                <tr>
                                    {this.state.displayed_tab.map(datalist => {
                                        return <td key={datalist}>{datalist.toUpperCase()}</td>
                                    })}
                                    <td className={this.state.catalog_navactive === 1 ? '' : 'hide'}>NAVIGASI</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.displayed_user_package.map((row, index) => {
                                    return <tr key={index}>
                                        {this.state.displayed_tab.map((key, index) => {
                                            return <td key={row[key]}>{row[key]}</td>
                                        })}
                                        <td className={this.state.catalog_navactive === 1 ? '' : 'hide'}><a href="/tryoutprepare">MULAI TRY OUT</a></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="mobilecatalogcontent">
                        <table>
                            <thead>
                                <tr>
                                    {this.state.mobile_displayed_tab.map(datalist => {
                                        return <td key={datalist}>{datalist.toUpperCase()}</td>
                                    })}
                                    <td className={this.state.catalog_navactive === 1 ? '' : 'hide'}>NAVIGASI</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.displayed_user_package.map((row, index) => {
                                    return <tr key={index}>
                                        {this.state.mobile_displayed_tab.map((key, index) => {
                                            return <td className='mobilecatalogcontentpackage' key={row.key}>
                                                Kode: {row.kode}<br/>
                                                Paket: {row.nama}<br/>
                                                Subtes: {row.subtes}<br/>
                                                Durasi: {row.durasi}
                                            </td>
                                        })}
                                        <td className={this.state.catalog_navactive === 1 ? '' : 'hide'}><a href="/tryoutprepare">MULAI TRY OUT</a></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="catalogright"></div>
                <div className="catalogrightblankspace"></div>
            </div>
        </Fragment>
    }
}

export default UserCatalog;