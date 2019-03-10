import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// import image
import GE from '../../assets/img/partner/GE.png'
import Kepware from '../../assets/img/partner/Kepware.png'
import ServelecControls from '../../assets/img/partner/ServelecControls.png'
import Wonderware from '../../assets/img/partner/Wonderware.png'
import Siemens from '../../assets/img/partner/Siemens.png'
import Lantronix from '../../assets/img/partner/Lantronix.png'
import Eldon from '../../assets/img/partner/Eldon.png'
import DetTronics from '../../assets/img/partner/DetTronics.png'
import Rittal from '../../assets/img/partner/Rittal.png'
import RockwellAutomation from '../../assets/img/partner/RockwellAutomation.png'
import RedLion from '../../assets/img/partner/RedLion.png'

const styles = theme => ({
  root: {
    marginTop: 10
  },
  paragraph: {
    marginTop: theme.spacing.unit*4
  },
  header: {
    color: '#2196f3'
  },
  companyName: {
    color: 'red',
    marginTop: theme.spacing.unit*3
  },
  img: {
    height: 30,
    width: 'auto',
    marginRight: 10,
    marginTop: 10
  }
})

const HelpContent = ({ classes }) => (
  <div className={classes.root}>
    <Typography
      className={classes.header}
      variant="h5"
    >
      Trợ giúp
    </Typography>
    <Typography
      className={classes.companyName}
      variant="subtitle1"
    >
      CÔNG TY TNHH TM-DV-KT PHÁT TRIỂN PHÁP TRÍ
    </Typography>
    <Typography>
      Địa chỉ: 294/18K Xô Viết Nghệ Tĩnh, P. 21, Q. Bình Thạnh, TPHCM
      <br/>
      Website: <a href="">www.ptt.vn</a>
      <br/>
      MSTT: 031 083 2329
      <br/>
      Hotline: 0989 167 691 (Kinh doanh) - 0977 780 700 (Kỹ thuật)
    </Typography>
    <div>
      <img 
        src={GE} 
        alt="GE"
        className={classes.img}
      ></img>
      <img 
        src={Kepware} 
        alt="Kepware"
        className={classes.img}
      ></img>
      <img 
        src={ServelecControls} 
        alt="ServelecControls"
        className={classes.img}
      ></img>
      <img 
        src={Wonderware} 
        alt="Wonderware"
        className={classes.img}
      ></img>
      <img 
        src={Siemens} 
        alt="Siemens"
        className={classes.img}
      ></img>
      <img 
        src={Lantronix} 
        alt="Lantronix"
        className={classes.img}
      ></img>
      <img 
        src={Eldon} 
        alt="Eldon"
        className={classes.img}
      ></img>
      <img 
        src={DetTronics} 
        alt="DetTronics"
        className={classes.img}
      ></img>
      <img 
        src={Rittal} 
        alt="Rittal"
        className={classes.img}
      ></img>
      <img 
        src={RockwellAutomation} 
        alt="RockwellAutomation"
        className={classes.img}
      ></img>
      <img 
        src={RedLion} 
        alt="RedLion"
        className={classes.img}
      ></img>
    </div>
  </div>
)

export default withStyles(styles)(HelpContent)