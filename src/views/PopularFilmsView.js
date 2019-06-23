import React, { Component } from 'react'

import {Link} from "react-router-dom";
import FilmList from '../components/FilmList.js'
import PageChanger from '../components/PageChanger.js';
import {getMostPopularFilms} from './../API/TMDB'

export class PopularFilmsView extends Component{

     static defaultProps = {
         page: 1,
        
    }
    state = {
        page: this.props.page,
        list: [],
        }
    
        getDataFilms = async () => {
        this.setState( {list : await getMostPopularFilms(this.props.page)})
        };
    
        
        componentDidMount(){
            console.log('didmount didmount')
            if(this.props.match.params.pageId == undefined){
                this.state.page = 1
            }
            else{
                this.state.page = this.props.match.params.pageId
            }
            console.log('page is:' ,this.state.page)
            this.getDataFilms()
            console.log('fini didmount')

        }
        componentDidUpdate(prevState){

            const {page} = this.state
            console.log('before didupdate page ', page)
            console.log('params didupdate ', this.props.match.params.pageId)
            if(page !== prevState.page){
                if(this.props.match.params.pageId == undefined){
                    //this.state.page = 1
                    console.log('here')
                }
                else{
                    //this.state.page = this.props.match.params.pageId
                    console.log('ici')
                    
                }
                
                
            }

        }
        
    getNextPage(nextPage){
        this.props.page = nextPage
    }

    render(){

        const {page} = this.state
        console.log('in render typeof.page; ', typeof page)
        
        
        return (
            <div className="App">
                <Link to={`/popularFilms/${this.props.nextPage}`}>
                <PageChanger page={page} nextpage={this.getNextPage.bind(this)}>Change page</PageChanger>
                </Link>
                
                <FilmList items = {this.state.list} page={page}></FilmList>
            </div>
        )
    }

    
}
