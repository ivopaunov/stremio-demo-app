import React, {PropTypes} from 'react';
import ChannelListBox from './ChannelListBox';

const ChannelsList = ({channels, onChange}) => {
  return (
    <div  className="metas-list-container square">
      <div className="row">
        {channels.map(channel =>
          <ChannelListBox key={channel.yt_id} channel={channel} onChange={onChange}/>
        )}
      </div>
    </div>
  );
};

ChannelsList.propTypes = {
  channels: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default ChannelsList;
