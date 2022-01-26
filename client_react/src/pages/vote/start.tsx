/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React, { useEffect, useState } from 'react'
import CastVote from 'Components/general/castVote/component'
import CircularProgress from 'Components/general/loaders/circular/progress/component'
import { Link, useLocation } from 'react-router-dom'

import "./styles.scss"

function Vote() {

  const [ beersList, setBeersList ] = useState( null )
  const location = useLocation();

  // use id to che one beer by id
  // the API refer directly to beers

  // FIRST SETUP
  let totalBeers = 325, // from original creator https://github.com/sammdec/punkapi
      page = dphelper.path.query()['page'] || 1,
      per_page = dphelper.path.query()['per_pages'] || 80,
      pages = dphelper.path.query()['id'] ? 1 : Math.ceil( totalBeers / per_page )
      pages = dphelper.path.query()['name'] ? 1 : Math.ceil( totalBeers / per_page )

  // Get data from API
  const punkAPI = () => {

    // build request in base of query -> setup vars
    let parse = dphelper.path.query(),
        name="",
        id="",
        other =""

    // check vars
    if( parse.id ) id = '?id=' + parse.id
    if( parse.name ) name = '?beer_name=' + parse.name
    if( !parse.empty && !parse.id && !parse.name ) other = '?' + parse.join('&')
    if( parse !== 'empty' && !parse.id && !parse.name ) other = `?page=${page}&per_page=${per_page}`

    //console.log( id, name, other )

    /*************************************************************************************** */
    // FETCH API

    // GET CACHED DATA
    if( dphelper.storage.get( "apiCache_"  + id + name + other ) ){

      setBeersList( JSON.parse( dphelper.storage.get( "apiCache_" + id  + name + other ) ) )

    }else{

      fetch( _SuperDemo.conf.apiProd + '/api/get' + id + name + other )
        .then(res => res.json())
        .then(res => {
          setBeersList([... res ])
          dphelper.storage.set( "apiCache_" + id + name + other , res )
        })
        .catch(err => err)

    }

    setTimeout(()=>{
      document.querySelector(".beer").scrollTop = 0
    }, 500)
  }

  useEffect( ()=>{
    punkAPI()
  }, [location] )

  /*************************************************************************************** */
  // SEARCH

  const findResults = ( event ) => {
    let val: string = document.getElementById("search")['value']?.toLowerCase()
    event.preventDefault()

    // send in the result
    window.history.pushState( '', '', val ? "/vote/?name=" + val : "/vote/" );
    punkAPI()
  }

  /*************************************************************************************** */

  const listBeers = ( props ) => {

    return (
      <li key={ props.id }>

        <div className="beerThumb">
          <img src={props.image_url} width={'40px'}/>
        </div>

        <div className="beerInfo">
          <div>{ props.name } <CastVote id={ props.id } /> </div>
          <div><b>{ props.tagline }</b></div>
          <div>{ props.description }</div>
          <div>First brewed: { props.first_brewed }</div>
          <hr/>
          <div>
            Perfect pairing:
            <br/>
             <i>{ props?.food_pairing?.map(( pair ) => pair + ", " ) }</i>
          </div>
        </div>

      </li>

    )
  }

  useEffect(()=>{
    punkAPI()
  }, [] )

  return (
    <>
    {
    !beersList
    ?
    <CircularProgress
      options={{
        size: 100,
        thickness: 8,
        speed: '500ms',
        counter: true,
        value: 'wait'
      }}
    />
    :
      <div id="beerList">

        <div className="beerSearch">
          <form onSubmit={ findResults }>
            <label htmlFor="search">Search:</label>
            <input id="search" name="name" type="search" />
            <input type="submit" value="find" />
          </form>

            <div>
              Page: {page} of {pages} - results: {beersList?.length}
              <ul>
                { [...Array(pages)].map( (e,i) => (
                <li key={i}>
                  <Link
                    to={ '?page=' + Number(i+1) + '&per_pages=' + per_page }
                    title={ 'Page' + Number(i+1) }
                    className={ Number(i+1) === Number(page) ? "selected" : "" }
                  >
                   { i+1 }
                  </Link>
                </li>
                ))}
              </ul>
            </div>

          </div>

        <div className="beer" >
          <ul>
            { beersList?.map( ( val ) => listBeers( val ) ) }
          </ul>
        </div>

      </div>
    }
    </>
  )

}

export default Vote
