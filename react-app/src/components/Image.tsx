import React, {Component} from 'react'
import {MapTo} from '@adobe/cq-react-editable-components'
 
const ImageEditConfig = {
 
    emptyLabel: 'Image',
 
    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};
 
interface ImageProperties {
    src: string
    alt: string
    title: string
    displayPopupTitle: boolean
}

class Image extends Component<ImageProperties> {
 
    get caption() {
        if(this.props.title && this.props.title.length > 0) {
            return <span className="rectangle-2">{this.props.title}</span>;
        }
        return null;
    }
 
    get content() {
        return <img src={this.props.src} alt={this.props.alt}
            title={this.props.title}/>
    }
 
    render() {
        return (
            <div className="Image">
                {this.content}
                {this.caption}
            </div>);
    }
}
 
MapTo('aem-reactjs/components/content/image')(Image, ImageEditConfig);
