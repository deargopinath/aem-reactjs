//  Text - Maps to aem-reactjs/components/content/text
 
import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';

const TextEditConfig = {
 
    emptyLabel: 'Text',
 
    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};
 
interface TextProperties {
    richText: boolean
    text: string
}

class Text extends Component<TextProperties> {
 
    get richTextContent() {
        return <div dangerouslySetInnerHTML={{__html:  this.props.text}}/>;
    }
 
    get textContent() {
        return <div>{this.props.text}</div>;
    }
 
    render() {
        let innercontent = this.props.richText ? this.richTextContent : this.textContent
        return (<div className="Text">{innercontent}</div>)
    }
}
 
export default MapTo('aem-reactjs/components/content/text')(Text, TextEditConfig);