import React from 'react';
import './card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    state = {
        path:this.props.infoComics.thumbnail.path,
        extension: this.props.infoComics.thumbnail.extension,
        title: this.props.infoComics.title,
        description: this.props.infoComics.description
    }

    render() {
        let { path, extension, title, description } = this.state
        return (
            <div className="card">
                <div className="fade">
                    <img src={`${path}/detail.${extension}`} alt="imgofMarvel" className="image" />

                </div>
                <h4 className="text">{title}</h4>
                <div className="contentInfo">
                    <p className="text info">{description}</p>
                </div>
                <div className="buttonMore">Leer Más</div>
        </div>
        )
    }
}

export default Card