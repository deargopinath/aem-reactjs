import React, {Component} from 'react'
import {MapTo} from '@adobe/cq-react-editable-components'
 
const BannerEditConfig = {
    emptyLabel: 'Banner', 
    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1
    }
}

interface BannerProperties {
    image: string
    heading: string
    description: string
    link: string
    label: string
    alignment: string
}

class Banner extends Component<BannerProperties> {

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
            <section className={this.props.alignment + " spotlight style1 image-position-center onscroll-image-fade-in"}>
                <div className="content">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.description}</p>
                    <ul className="actions stacked">
                        <li>
                            <a href={this.props.link} className="button">{this.props.label}</a>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src={this.props.image} alt={this.props.heading} />
                </div>
            </section>
        )
    }
}
 
export default MapTo('aem-reactjs/components/content/Banner')(Banner, BannerEditConfig)
