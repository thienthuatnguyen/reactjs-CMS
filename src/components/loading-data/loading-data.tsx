import "./loading-data.scss";
import Skeleton from '@mui/material/Skeleton';

export function LoadingData(props) {
  if (props.count <= 1) {
    return (
      <div className="loading-data single-loading">
        <Skeleton variant={props.variant} height={props.height ? props.height : 30} width={props.width} />
      </div>
    )
  } else {
    let array: any = [];
    for (let i = 0; i < props.count; i++) {
      array.push(i);
    }
    return (
      <div className="loading-data">
        {
          array.map(() => (
            <Skeleton variant={props.variant} height={props.height ? props.height : 30} width={props.width} />
          ))
        }
      </div>
    )

  }

}



