/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from 'react'

import './styles.scss'

const CastVote = (props) => {

  const stars = 5
  const [star, setStar] = useState(null)
  const [rate, setRate] = useState(null)

  const Validate = (value: number) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: props.id,
        rating: value,
        comment: "no comment",
        email: superDemo.conf.fakeEmail,
      })
    }

    fetch(superDemo.api + superDemo.conf.appAPI + 'rating/', requestOptions)
      .then(response => response.json())
      .then(response => {

        // RESPONSE ABOUT VOTE
        //console.log(response)

        if (response.record === 'exist') alert('sorry, you already voted!')

        if (response.record === 'inserted') {
          getRating(props.id)
          alert('Many thanks, we received your vote!')
        }

      })
      .catch((error) => {
        console.log(error)
      })

  }

  /*********************************************************************/

  const getRating = (id) => {
    fetch(superDemo.api + superDemo.conf.appAPI + 'count/?id=' + id)
      .then(res => res.json())
      .then(res => {
        setRate(Number(res[0].rating / res[0].count) || 0)
        //console.log( Number( res[0].rating / res[0].count ) || 0 )
      })
      .catch(err => err)

  }

  useEffect(() => {
    getRating(props.id)
  })

  // setTimeout(()=>{}, 2000 )

  return (
    <>
      <div className="castVote">
        {/* val: { rate || 0 } */}
        <ul>
          {[...Array(stars)].map((e, i) => (
            <li
              key={i}
              onClick={() => Validate(Number(i + 1))}
              className={Number(rate > i) ? "sel" : ""}
            >
            </li>
          ))}
        </ul>
      </div>

    </>
  )

}

export default CastVote

