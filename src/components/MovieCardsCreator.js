import React, { Component } from 'react'

export default function MovieCardsCreator(props) {

    const {title, id, poster} = props

    return(<div><p>{title}</p><p>{id}</p><p>{poster}</p></div>)
    
}