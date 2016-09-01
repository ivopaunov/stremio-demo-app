import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ChannelListBox = ({channel, onChange}) => {
  return (
    <div className="meta-item">

      <div href="" className ="meta-link" data-toggle="modal">
        <div className="meta-hover">
          <div className="meta-hover-content">
            <div>

              <span className="fa-stack">
                <i className="fa fa-play-circle-o fa-stack-2x"></i>
              </span>
            </div>
            <br/>
            <div className=""><span>  {channel.name} </span> </div>
            <br/>
            <div className="text-center">
              <span> <i className="fa fa-eye" aria-hidden="true"></i></span> &nbsp; <span>{channel.viewCount}</span>
            </div>
          </div>
        </div>
        <span className="fa-stack fav-mark" onClick={(event) => onChange(event, channel) }>
          <i className={channel.checked ? "fa fa-check-square-o fa-stack-2x" : "fa fa-square-o fa-stack-2x"}></i>
        </span>
        <p className="vignette">
          <img src={channel.poster} onClick={onChange} className="img-responsive img-centered img-full-width" alt=""/>
        </p>

      </div>
    </div>
  );
};

ChannelListBox.propTypes = {
  channel: PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default ChannelListBox;
