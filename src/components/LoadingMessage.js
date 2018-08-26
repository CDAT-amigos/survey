import React from 'react'

export default ({loading, error, children})=>{
    if(loading) return<p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
    return children
}