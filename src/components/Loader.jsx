import ReactTooltip from "react-tooltip";
import { BallTriangle } from  'react-loader-spinner';

function Loader() {
  return (
    <div>
        <a data-tip data-for="happyFace">
          <BallTriangle
            height="100"
            width="100"
            color='black'
            ariaLabel='loading'
          />
        </a>
        <ReactTooltip       
          id="happyFace"
          place="top"
          type="dark"
          effect="float"
        >
          <span>Loading..</span>
        </ReactTooltip>
    </div>
  )
}

export default Loader