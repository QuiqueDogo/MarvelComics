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
    }

    ChangeHeart(e){
        console.log(e, e.target.className)
        e.target.className ='bi bi-heart-fill jumpi'
    }
    

    render() {
        let { path, extension, title } = this.state
        return (
            <div className={styleCard.card}>
                <div className={styleCard.wrappy}>
                    <img src={`${path}/detail.${extension}`} alt="imgofMarvel" className={styleCard.image} />
                    <div className={styleCard.subcontent}>
                        <h4 className={styleCard.text}>{title}</h4>
                        <div className={styleCard.icons}>
                            <i onClick={this.ChangeHeart} className=" bi bi-heart">Guardar</i>
                            <i onClick={() => this.props.onModalCheck()} className="bi bi-three-dots-vertical">Ver Más</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card