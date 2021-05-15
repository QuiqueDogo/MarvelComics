import React from 'react';
import Card from '../card/card';
import axios from 'axios';
import sytles from '../style/home.module.css'



class Home extends React.Component{
    state = {
        comics: null,
        loading: true
      }
    
      activePage() {
        console.log('this is:', this)  
      }
    
      componentDidMount() {
        let number = Math.floor(Math.random() * 50)
        axios.get(`https://gateway.marvel.com:443/v1/public/comics?offset=${number}&hasDigitalIssue=true&ts=1&apikey=0587dfa027b8eb01ed792f6dd076de86&hash=78e55c6b747a0a183b60de3beea67b4a`)
        .then(res =>{
          console.log(res.data)
          this.setState({
            comics: res.data.data.results,
            loading: false
          })
    
        })
        .catch(error => {
          this.setState({
            error,
            loading: true
           })
        })
      } 
      render(){
        const { comics, loading } = this.state;
      // console.log(comics)
    return (
        <div className={sytles.allcomics}>
            {loading ? <p>Cargando...</p> : 
          comics.map((data, index) => {
            return (
              <div className={sytles.comic} key={`${index}Comics`}>
                <Card key={`${data.id}Comic`} infoComics={data} />
              </div>
            );
          })}
        </div>
    );
}
}

export default Home;