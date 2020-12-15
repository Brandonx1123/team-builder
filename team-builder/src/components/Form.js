import React from 'react'


export default function Form (props) {

    const {details} =props

    if (!details) { // if nothing is rendered from details this message will pop
        return <h3> Fetching your data</h3>
    }
        return (
        <div className ='Form Big Box '>
        <h2> {details.username}</h2>
        <p> Email: {details.email}</p>
        <p> Role: {details.role}</p>
        </div>
    )
}