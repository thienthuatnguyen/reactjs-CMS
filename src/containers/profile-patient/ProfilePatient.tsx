import { Avatar, Button, Grid } from "@material-ui/core";
import "./ProfilePatient.scss";
import addIcon from "../../assets/images/icon-user-create.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EmptyData } from "../../components/empty-data/EmptyData";
import { useEffect, useState } from "react";
import profileService from "../../services/profileService";
import { Pagination } from "@mui/material";

function ProfilePatientPage() {
  const [pagination, setPagination] = useState({
    current_page: 1,
    per_page: 10,
    total: 0,
    totalPage: 0
  });

  const [listItem, setListItem] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [pagination.current_page]);
  
  function getData() {
    let params: any = {
      page: pagination.current_page,
      per_page: pagination.per_page
    }
    if(searchParams.get("value")) {
      params.search = searchParams.get("value");
    }
    profileService.getListMedicalProfile(params).then(
      (res) => {
        let body = res.data;
        if ((body.error === false) && body.data) {
          setListItem(body.data.profiles);
          setPagination(prevState => ({
            ...prevState,
            'total': body.data.meta.total,
            'totalPage': body.data.meta.totalPage
          }));
        }
      }
    )
  }

  function handleChangePage(event, val) {
    setPagination(prevState => ({
      ...prevState,
      'current_page': val,
    }));
  }
  const getList = array => array.map((item, index) => (
    <Grid key={index} item xs={12} sm={6} md={6}>
      <div className="box-profile">
        <div className="top-info">
          <div className="name">{item.full_name}</div>
          <Button variant="outlined"
            className="my-btn btn-blue btn-outlined btn-view-detail" onClick={() => { navigate(`/ho-so-benh-nhan/${item.id}`) }}>Chọn hồ sơ</Button>
        </div>
        <div className="content-info">
          <div className="row-content-info">
            <div className="col-content-info birthday">Ngày sinh:</div>
            <div className="col-content-info">{item.birthday}</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info code">Mã hồ sơ bệnh nhân:</div>
            <div className="col-content-info">{item.code}</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info phone">Số điện thoại:</div>
            <div className="col-content-info">{item.phone_number}</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info address">Địa chỉ:</div>
            <div className="col-content-info">{item.address}</div>
          </div>
        </div>
      </div>
    </Grid>
  ));
  return (
    <div className="wrapper-profile-patient-page">
      <div className="container-app">
        <h1 className="title">Hồ sơ bệnh nhân</h1>
        <div className="top-title-page">
          <h2>Danh sách hồ sơ của bạn</h2>
          <Button onClick={() => { navigate("/tao-ho-so") }}
            variant="contained"
            className="my-btn btn-blue-dash btn-contained large-size btn-create-profile"
            startIcon={<Avatar
              src={
                addIcon
              }
            />}
          >
            Tạo hồ sơ của bạn
          </Button>
        </div>
        <div className="list-profile">
          {(listItem.length > 0) && <Grid container spacing={2}>
            {getList(listItem)}
          </Grid>}
          {(listItem.length <= 0) && <EmptyData />}
        </div>
        {(listItem.length > 0) && <Pagination className={'my-pagination'} showFirstButton  showLastButton  onChange={handleChangePage} count={pagination.totalPage} page={pagination.current_page} variant="outlined" shape="rounded" />}
      </div>
    </div>
  );
}

export default ProfilePatientPage;

