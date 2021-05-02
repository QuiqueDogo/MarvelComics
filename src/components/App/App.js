import React from 'react';
import './App.css';
import Header from '../header/header';
import Card from '../card/card';
import axios from 'axios';

class App extends React.Component {

  state = {
    comics: null,
    loading: true
  }

  componentDidMount() {
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=0587dfa027b8eb01ed792f6dd076de86&hash=78e55c6b747a0a183b60de3beea67b4a')
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
    <div className="App">
      <Header title="Marvel Comics App"/>
      <div className="content">
        {loading ? <p>Cargando...</p> : 
          comics.map((data, index) => {
            return (
              <div key={`${index}Comics`}>
                <Card key={data.id} infoComics={data} />
              </div>
            );
          })}
      </div>
    </div>
  );}
}

export default App;
