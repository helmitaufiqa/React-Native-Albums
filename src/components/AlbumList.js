import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component{
    constructor() {
        super()
        this.state = {
            albums: [],
        }
    }

    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(Response => {
                console.log({Response})
                this.setState({albums: Response.data})
            })
    }

    renderAlbums(){
        return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album}/>);
    }

    render(){
        console.log(this.state)
        return(
            <ScrollView>
                    {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList;