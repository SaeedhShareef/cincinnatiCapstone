import React, { Component } from 'react'
export default class Play extends Component {
    render() {
        return (
           <div className=''>
            <div style={{ textAlign: "center", marginTop: 25 }}>
            <div className="cool jumbotron jumbotron-fluid" style={{ marginBottom: 200 }}>
  <div className="jumbooo">
    <h1 className="display-4 text-white">Need Some Entertainment?</h1>
    <a href='#lion'>
    <p className="lead">Check this out!</p>
    </a>
  </div>
</div>
<br></br>
<br></br>
<div id='lion' className="tiger jumbotron float-left text-white" style={{ padding:'1rem', maxWidth: 600, marginLeft: 70, paddingBottom: 40, borderRadius: 10 }}>
  <h1 className="display-4 jumbooo">Arcade Legacy!</h1>
  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt atque dolorum voluptatem soluta ratione.</p>
  <hr className="my-4" style={{ background: "white" }} />
  <img src={require('../assets/controller.jpg')} alt='controller' style={{ width: 500, borderRadius: 10 }} />
  {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
</div>
<br></br>
<div style={{ marginTop: 660 }}>
<div class="panda jumbotron float-right text-white" style={{ padding:'1rem', maxWidth: 600, marginRight: 70, paddingBottom: 40, borderRadius: 10 }}>
  <h1 class="display-4 text-white">Game All Day</h1>
  <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt atque dolorum voluptatem soluta ratione.</p>
  <hr class="my-4" style={{ background: "white" }} />
  <img src={require('../assets/console.jpg')} alt='console' style={{ width: 500, borderRadius: 10, height: 400 }} />
</div>
</div>
<div style={{ marginTop: 1340 }}>
<div class="tiger jumbotron float-left text-white" style={{ padding:'1rem', maxWidth: 600, marginLeft: 70, paddingBottom: 40, borderRadius: 10 }}>
  <h1 class="display-4 jumbooo">Play Now, Play Here</h1>
  <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt atque dolorum voluptatem soluta ratione.</p>
  <hr class="my-4" style={{ background: "white" }} />
  <img src={require('../assets/playing.jpg')} alt='playing' style={{ width: 500, borderRadius: 10 }} />
</div>
</div>
            </div>
            </div>
        )
    }
}