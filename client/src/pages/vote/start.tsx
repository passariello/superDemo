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

  const
    [beersList, setBeersList] = useState([]),
    [pageSetup, setPageSetup] = useState({}),
    location = useLocation()

  const pagination = () => {
    setPageSetup(
      {
        page: Number(dphelper.path.query('page')) || 1,
        per_page: Number(dphelper.path.query('per_pages')) || 40,
        pages: Math.ceil(beersList?.[1] / Number(dphelper.path.query('per_pages')) || 9),
        tot: beersList?.[1] || 325
      }
    )
  }

  const getData = async () => {

    try {

      const
        resp = await fetch(`/api?page=${dphelper.path.query('page') || 1}&per_pages=${dphelper.path.query('per_page') || 40}`),
        json = await resp.json()

      setBeersList(json)
      pagination()

    } catch (err) {
      // setBeersList(err.message);
    }
  }

  useEffect(
    () => {
      getData()
    }, [location]
  )

  useEffect(
    () => {
      getData()
    }, []
  )

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
            Volume: {props?.boil_volume.value} {props?.boil_volume.unit}
            <br />
            <i>{props?.food_pairing?.map((pair) => pair + ", ")}</i>
          </div>
        </div>

      </li>

    )
  }

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

              <div>
                Page: {pageSetup['page']} of {pageSetup['pages']} / {pageSetup['per_page']} per page, total: {pageSetup['tot']}
                <ul>
                  {
                    [...Array(pageSetup['pages'])].map(
                      (e, i) => (
                        <li key={i}>
                          <Link
                            to={'?page=' + Number(i + 1) + '&per_pages=' + pageSetup['per_page']}
                            title={'Page' + Number(i + 1)}
                            className={Number(i + 1) === pageSetup['page'] ? "selected" : ""}
                          >
                            {i + 1}
                          </Link>
                        </li>
                      )
                    )
                  }
                </ul>
              </div>

            </div>

            <div className="beer" >
              <ul>
                {
                  beersList?.[0]?.map((val) => listBeers(val))
                }
              </ul>
            </div>

          </div>
      }
    </>
  )

}

export default Vote
