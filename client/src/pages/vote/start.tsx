/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from 'react'
import CastVote from '/src/components/general/castVote/component'
import CircularProgress from '/src/components/general/loaders/circular/progress/component'
import { Link, useLocation } from 'react-router'

import "./styles.scss"

function Vote() {

  const [beersList, setBeersList] = useState(null)
  const location = useLocation()

  // use id to che one beer by id
  // the API refer directly to beers

  // // FIRST SETUP
  // let totalBeers = 325, // from original creator https://github.com/sammdec/punkapi
  //   page = dphelper.path.query('page') || 1,
  //   per_page = dphelper.path.query('per_pages') || 40,
  //   pages = dphelper.path.query('id') ? 1 : Math.ceil(totalBeers / Number(per_page))

  // pages = dphelper.path.query('name') ? 1 : Math.ceil(totalBeers / Number(per_page))

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/beers/ale');
      const json = await resp.json();
      console.log(json)
      setBeersList(json);
    } catch (err) {
      // setBeersList(err.message);
    }
  }

  useEffect(() => {
    getData()
  }, [location])

  /*************************************************************************************** */
  // SEARCH

  const findResults = (event) => {
    let val: string = document.getElementById("search")['value']?.toLowerCase()
    event.preventDefault()

    // send in the result
    window.history.pushState('', '', val ? "/vote/?name=" + val : "/vote/")
    getData()
  }

  /*************************************************************************************** */

  const listBeers = (props) => {

    return (
      <li key={props.id}>

        <div className="beerThumb">
          {props.image && <img src={props.image} width='80' />}
        </div>

        <div className="beerInfo">
          <div>{props.name} <CastVote id={props.id} /> </div>
          <div>First brewed: {props.first_brewed}</div>
          <hr />
          <div>
            Price:
            <br />
            {/* <i>{props?.food_pairing?.map((pair) => pair + ", ")}</i> */}
            <i>{props?.price}</i>
          </div>
        </div>

      </li>

    )
  }

  useEffect(() => {
    getData()
  }, [])

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
              <form onSubmit={findResults}>
                <label htmlFor="search">Search:</label>
                <input id="search" name="name" type="search" />
                <input type="submit" value="find" />
              </form>

              {/* <div>
                Page: {page} of {pages} - results: {beersList?.length}
                <ul>
                  {[...Array(pages)].map((e, i) => (
                    <li key={i}>
                      <Link
                        to={'?page=' + Number(i + 1) + '&per_pages=' + per_page}
                        title={'Page' + Number(i + 1)}
                        className={Number(i + 1) === Number(page) ? "selected" : ""}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}

            </div>

            <div className="beer" >
              <ul>
                {beersList?.map((val) => listBeers(val))}
              </ul>
            </div>

          </div>
      }
    </>
  )

}

export default Vote
