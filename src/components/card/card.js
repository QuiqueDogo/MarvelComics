import React from 'react';
import styleCard from './card.module.css'

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
            <div className={styleCard.card}>
                <div className={styleCard.wrappy}>
                    <img src={`${path}/detail.${extension}`} alt="imgofMarvel" className={styleCard.image} />
                    <div className={styleCard.subcontent}>
                        <h4 className={styleCard.text}>{title}</h4>
                        <div className={styleCard.icons}>
                            <i className="bi bi-heart-fill"></i>
                            <i className="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card