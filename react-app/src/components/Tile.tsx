/*
Tile.tsx
 
Maps to aem-reactjs/components/content/tile
*/
 
import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
/**
* Default Edit configuration for the Tile component
*
* @type EditConfig
*/
const TileEditConfig = {
 
    emptyLabel: 'Tile',
 
    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

interface TileProperties {
    richText: boolean
    text: string
}
/**
* Tile React component
*/
class Tile extends Component<TileProperties> {
 
    get richTextContent() {
        return <div dangerouslySetInnerHTML={{__html:  this.props.text}}/>;
    }
 
    get textContent() {
        return <div>{this.props.text}</div>;
    }
 
    render() {
        return this.props.richText ? this.richTextContent : this.textContent;
    }
}
 
export default MapTo('aem-reactjs/components/content/tile')(Tile, TileEditConfig);