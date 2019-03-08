import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import HandAndCard from '../assets/HandAndCard.png'
// import React Router components
import { Link } from 'react-router-dom'

import ReadyForm from '../components/WaitPage1/ReadyForm'

class WaitPage1 extends React.Component {

  render() {
    return (
      <ReadyForm/>
    );
  }
}

export default WaitPage1