import React from 'react';

class PanelShare extends React.Component{
  render(){
    return(
      <section id="section-share" className="section-share">
        <button type="button" className="btn btn-share"><i className="far fa-address-card icon-btn"></i> Create your card</button>
        <p className="response"></p>
        <a href="" className="twitter__link btn-twitter hidden">
            <i className="fab fa-twitter twitter-icon"></i>
            Share on Twitter
        </a>
    </section>
    )
  }

}

export default PanelShare;