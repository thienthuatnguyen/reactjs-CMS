import { useParams } from "react-router-dom";

function UserDetailPage() {
  let { userId } = useParams();

    return (
      <div className="page-404">
       page user detail
       {userId}
      </div>
    );
  };
  
  export default UserDetailPage;
  