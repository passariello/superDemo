/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React from 'react'
import Social from 'Components/general/social/component'

import styles from "./styles.less"

function About() {

  return (

    <div className={ styles.content }>

      <h2>About the event...</h2>
      <hr/>

      <fieldset>
      <legend>About SuperDemo App</legend>

        <div>
          <img className={ styles.upic }
            src="/assets/logos/logo.png"
            alt="Dario Passariello website"
            width="90"
          />
        </div>

        <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>

      </fieldset>

      <br/>
      <hr/>

      <fieldset>
        <legend>About the author</legend>

        <div>
          <img className={ styles.upic }
            src="https://s.gravatar.com/avatar/01a45ddbdc5d19503265cebdbc9b5c2f?s=180"
            alt="Dario Passariello website"
            width="90"
          />
        </div>

        <div>
          <b><i>Dario Passariello</i></b>
          <br/>
          <br/>
          Developer in HTML5, JavaScript, PHP, and web technologies such as WebGL 3D on a browser.<br/>
          Over 25+ years of IT and multimedia experiences as a professional included educational fields as professor, instructor, freelance and business owner. <br/>
          I am a hard worker, thinker, maker and I use my analytical mind to gather and address technical and design requirements and the best yet simplest solution for distinct software development problems using logic.
          <br/>
          <br/>

            <div>
              <Social
                type="large"
                channel="website"
                url="https://dario.passariello.ca"
                text="Dario's Website"
              />

              <br/>
              <br/>
              Social:
              <hr/>

              <Social
                type="large"
                channel="linkedin"
                url="https://www.linkedin.com/in/passariello"
              />
              <Social
                type="large"
                channel="twitter"
                url="https://www.twitter.com/passariello"
              />
              <Social
                type="large"
                channel="facebook"
                url="https://www.facebook.com/passariello"
              />
            </div>
          <br/>
        </div>

      </fieldset>

    </div>
  )

}

export default About
