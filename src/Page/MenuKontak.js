import React, { Component } from 'react'

class MenuKontak extends Component {
    constructor(props){
        super(props);
        this.state = {
            alamat : "Jl. Rancaekek - Majalaya, Rancaekek Wetan, Kabupaten Bandung",
            kontak : "+6281320243889"
        }    
    }
    
    render(){
        return(
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami : {this.state.kontak} </h4>
                </center>   
            </div>
        );
    }
}

export default MenuKontak;