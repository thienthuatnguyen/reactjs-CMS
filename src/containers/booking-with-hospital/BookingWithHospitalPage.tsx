import React, { useEffect, useState } from "react";
import "../booking-with-doctor/BookingPage.scss";
import { Button, Grid } from "@material-ui/core";
import ToastMessage from "../../components/toast-message/ToastMessage";
import hopitalService from "../../services/hospitalService";
import { useNavigate } from "react-router";
import { Hospital } from "../../models/hospital.model";
import imgDefault from "../../assets/images/avatar-loading.svg";
import { EmptyData } from "../../components/empty-data/EmptyData";
import FilterBookingHospital from "../../components/filter-booking-hospital/FilterBookingHospital";
import { setHospitalId, setProfileId } from "../../actions/actions";
import { connect } from "react-redux";



function BookingWithHospitalPage(props: any) {
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  let filterParams: any = {};

  const navigate = useNavigate();
  useEffect(() => {
    getHopitals();
  }, []);


  function viewDetail(id) {
    props.setHospitalId(id);
    navigate(`/dat-kham-theo-benh-vien/search?hospital_id=${id}`);
  }

  const getItem = hospitals => hospitals.map((item, index) => (
    <Grid key={index} item xs={12} sm={4} md={4}>
      <div className="wrapper-column hospital-column">
        <div className="avatar-image">
          <img src={item.avatar} alt="img"
            onError={(e: any) => {
              e.target.src = imgDefault
            }}></img>
        </div>
        <div className="name">{item.title}</div>
        <div className="address">
          {item.address}
        </div>
        <div className="btn-detail">
          <Button onClick={() => viewDetail(item.id)} variant="contained" className="my-btn btn-blue-dash btn-contained btn-detail">
            Xem chi tiết
          </Button>
        </div>
      </div>
    </Grid>
  ));

  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  function getHopitals(filterParams?: any) {
    hopitalService.getHospitals(filterParams).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setHospitals(body.data.hospitals);
       
      }
    });
  }
  function getFilterParams(params) {
    filterParams = {};
    if (params.keyword) {
      filterParams.keyword = params.keyword;
    }
    if (params.province_id) {
      filterParams.province_id = params.province_id;
    }
    if (params.district_id) {
      filterParams.district_id = params.district_id;
    }
    if ((params.work_at_home !== null) || (params.work_at_home !== '')) {
      filterParams.work_at_home = params.work_at_home;
    }
    if (params.radius) {
      filterParams.radius = params.radius;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          filterParams.long = position.coords.longitude;
          filterParams.lat = position.coords.latitude;
          getHopitals(filterParams);
        });
      }
    } else {
      getHopitals(filterParams);

    }
  }


  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <div className="wrapper-booking-page">
        <div className="container-app">
          <div className="content-booking">
            <div className="left-content">

              <FilterBookingHospital callBackParams={getFilterParams}></FilterBookingHospital>

            </div>
            <div className="right-content">
              <div className="wrapper-right-content">
                <div className="wrapper-list-data">
                  <h2 className="title">
                    <span className="text">Danh sách bệnh viện</span>
                    <span className="line"></span>
                  </h2>
                  <div className="list-data">
                  {(hospitals.length <= 0) && <EmptyData></EmptyData>}
                    {(hospitals.length > 0) &&
                      <React.Fragment> <Grid container spacing={2}>
                        {getItem(hospitals)}
                      </Grid>
                      </React.Fragment>}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}
const mapStateToProps = (state: any) => ({
  profileId: state.profileId,
  hospitalId: state.hospitalId
})

const mapDispatchToProps = (dispatch: any) => ({
  setProfileId: (data: any) => dispatch(setProfileId(data)),
  setHospitalId: (data: any) => dispatch(setHospitalId(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(BookingWithHospitalPage);

