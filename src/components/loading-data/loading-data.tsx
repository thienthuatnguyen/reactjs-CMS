import "./loading-data.scss";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function LoadingData() {
  return (
    <div className="loading-data">
        <Skeleton count={3} />
    </div>
  )
}
