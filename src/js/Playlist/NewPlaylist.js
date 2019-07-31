import React, { Component } from "react";
const axios = require('axios');

class NewPlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: 'normal',
            error: false,
            errorText: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        axios.get('/api/playlists')
        .then((response) => {
            var sameName = response.data.playlists.filter((i) => {i.name == this.state.name ? true : false});
            if(sameName.length == 0){
                axios.put('/api/playlist', {
                    name: this.state.name,
                    parts: [],
                    shuffle: false,
                    type: this.state.type,
                }).catch((error) => {
                    console.log(error);
                })
            }else{
                this.setState({
                    error: true,
                    errorText: 'name already exists'
                });
            }
        });
        console.log(this.state);
    }

    render(){
        return (
            <table className="app-table">
                <thead>
                    <tr>
                        <th colSpan="2">
                            <h1 className="ui-text center-text">new playlist</h1>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select className="full-width" name="type" onChange={this.handleInputChange}>
                                <option value="normal">normal</option>
                                <option value="recents">recents</option>
                            </select>
                        </td>
                        <td>
                            <input 
                                className="full-width" 
                                name="name" 
                                type="text" 
                                value={this.state.name} 
                                onChange={this.handleInputChange}
                                placeholder="name"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button className="button full-width" onClick={this.handleSubmit}>create</button>
                        </td>
                    </tr>
                    { this.state.error && 
                    <tr>
                        <td colSpan="2">
                            <p className="full-width" style={{color: 'red'}}>{this.state.errorText}</p>
                        </td>
                    </tr>}
                </tbody>
            </table>
        );
    }

}

export default NewPlaylist;