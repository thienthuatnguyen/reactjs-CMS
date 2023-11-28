import "./loading-data.scss";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function LoadingData({count, width}) {
  return (
    <div className={count == 1 ? 'loading-data single-loading' : 'loading-data'}>
        <Skeleton height={20} count={count} borderRadius = {3} width={width} />
    </div>
  )
}
