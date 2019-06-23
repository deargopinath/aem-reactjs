import React, {Component} from 'react'
import {MapTo} from '@adobe/cq-react-editable-components'
 
const ProductDetailsEditConfig = {
    emptyLabel: 'View Product Details', 
    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1
    }
}

interface ProductDetailsProperties {
    image: string
    heading: string
    description: string
    link: string
    label: string
    alignment: string
}

class ProductDetails extends Component<ProductDetailsProperties> {

    get content() {
        return(
    <div>
        <h2>Title = {this.props.heading}</h2>
        <strong>Description = {this.props.description}</strong>
        <p>
            Link = {this.props.link}
            Link Text = {this.props.label}
        </p>
   </div>
   )
    }
 
    render() {
        return (
            <section className="wrapper style2 align-left tile-rectangle">
				<div className="tile-rectangle">
                    <div className="green-top-border">
                        <strong className="green-text">Product category</strong> 
                        <span>Product name</span>
                    </div>
					<p>description</p>
			    </div>
			</section>
        )
    }
}
 
export default MapTo('aem-reactjs/components/content/ProductDetails')(ProductDetails, ProductDetailsEditConfig)
