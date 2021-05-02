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
        title: this.props.infoComics.title
    }

    render() {
        let { path, extension, title } = this.state
        return (
            <div className="card">
                <div className="fade">
                    <img src={`${path}/detail.${extension}`} alt="imgofMarvel" className="image" />

                </div>
                <div className="contentInfo">
                    <h4 className="text">{title}</h4>
                    <p className="text info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat provident sit iure ut accusamus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat provident sit iure ut accusamus</p>
                    <div className="buttonMore">Leer Más</div>
                </div>
        </div>
        )
    }
}

export default Card