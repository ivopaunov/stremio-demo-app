import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as channelsActions from '../../actions/channelsActions';
import ChannelsList from './ChannelsList';
import {browserHistory} from 'react-router';

class ChannelsPage extends React.Component {
  constructor(props, context) {
    super(props, context); 
    this.updateChannelState = this.updateChannelState.bind(this);
  }

  updateChannelState(event, channel) {
    event.preventDefault();
    this.props.actions.toggleChannelChecked(channel);
  }

  render() {
    const {channels} = this.props;

    return (
      <div>
        <ChannelsList
          channels={channels}
          onChange={this.updateChannelState}/>
      </div>
    );
  }
}

ChannelsPage.propTypes = {
  channels: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(channelsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsPage);
