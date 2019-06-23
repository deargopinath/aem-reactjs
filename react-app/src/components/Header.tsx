// Header.tsx - Maps to aem-reactjs/components/content/Header

 
import React, {Component} from 'react'
import {Link} from "react-router-dom"
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/Icons'

const HeaderEditConfig = {
 
    emptyLabel: 'Header',
 
    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1
    }
}

interface HeaderProperties {
    navigationRoot: string
    location: {pathname: string}
}

class Header extends Component<HeaderProperties> {

    get homeLink() {
        let currLocation;
        currLocation = this.props.location.pathname;
        currLocation = currLocation.substr(0, currLocation.length - 5)
 
        if (this.props.navigationRoot && currLocation !== this.props.navigationRoot) {
            return (
                <Link className="Header-action" to={this.props.navigationRoot + ".html"}>
                    <FontAwesomeIcon icon="chevron-left" />
                </Link>
            )
        }
        return null
    }
 
    render() {
        return (
            <header className="Header">
                <div className="Header-wrapper">
                    <h1 className="Header-title">Main Menu
                        <span className="Header-title--inverse">_</span>
                        <div className="Header-tools">{ this.homeLink }</div>
                    </h1>
                </div>
            </header>
        )
    }
}
 
export default withRouter(Header)
