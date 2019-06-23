import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
import {Link} from "react-router-dom";
 
const ListEditConfig = {
 
    emptyLabel: 'List',

    isEmpty: function(props) {
        return !props || !props.items || props.items.length < 1
    }
}

/**
 * ListItem renders the individual items in the list
 */

interface ListItemProperties {
    title: string
    lastModified: string
    path: string
    url: string
}

class ListItem extends Component<ListItemProperties> {
 
    get date() {
       if(!this.props.lastModified) {
           return null
       }
        let date = new Date(this.props.lastModified)
        return date.toLocaleDateString('en-US')
    }
 
    render() {
        if(!this.props.path || !this.props.title || !this.props.url) {
            return null
        }
        return (
            <li className="ListItem" key={this.props.path}>
                <Link className="ListItem-link" to={this.props.url}>{this.props.title}
                    <span className="ListItem-date">{this.date}</span>
                </Link>
            </li>
        )
    }
}

/**
 * List renders the list contents and maps aem-reactjs/components/content/list
 */

interface ListProperties {
    items: ListItemProperties[]
}
export default class List extends Component<ListProperties> {
    render() {
        return (
                <div className="List">
                    <ul className="List-wrapper">
                        { this.props.items && this.props.items.map((listItem, index) => {
                            return <ListItem key={listItem.path} path={listItem.path} url={listItem.url} 
                                             title={listItem.title} lastModified={listItem.lastModified} />
                            })
                       }
                    </ul>
                </div>
        )
    }
}
 
MapTo("aem-reactjs/components/content/list")(List, ListEditConfig)
