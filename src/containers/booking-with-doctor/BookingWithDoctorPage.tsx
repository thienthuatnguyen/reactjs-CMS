import React, { useEffect, useState } from "react";
import "./BookingPage.scss";
import ToastMessage from "../../components/toast-message/ToastMessage";
import FilterBooking from "../../components/filter-booking/FilterBooking";
import closeIcon from "../../assets/images/close.svg";
import { Backdrop, Button, Fade, Grid, IconButton, Modal, Theme, createStyles, makeStyles } from "@material-ui/core";
import { Doctor } from "../../models/doctor.model";
import { useNavigate } from "react-router";
import imgDefault from "../../assets/images/avatar-loading.svg";
import hopitalService from "../../services/hospitalService";
import { Pagination } from "@mui/material";
import { EmptyData } from "../../components/empty-data/EmptyData";
import { useLocation, useSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import { setDepartmentId, setDoctorId, setDoctorName, setHospitalId, setProfileId } from "../../actions/actions";
import ChoseProfile from "../../components/chose-profile/ChoseProfile";
import ChoseProfileBookHospital from "../../components/chose-profile-book-hospital/ChoseProfileBookHospital";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),

);
const CloseIcon = () => (<img src={closeIcon} alt="close-icon"></img>);
function BookingWithDoctorPage(props: { profileIdProp, hospitalIdProp, doctorIdProp,departmentIdProp, setProfileIdProp, setHospitalIdProp, setDoctorIdProp, setDepartmentIdProp, setDoctorNameProp }) {
  const [configToast, setToastConfig] = useState({ type: '', isOpen: false, message: '' });
  const [open, setOpen] = React.useState(false);
  const [openModalBookHospital, setOpenModalBookHospital] = React.useState(false);

  const [doctorName, setDoctorName] = React.useState('');
  const [pagination, setPagination] = useState({
    current_page: 1,
    per_page: 10,
    total: 0,
    totalPage: 0
  });

  const location = useLocation();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  let filterParams: any = {};
  const navigate = useNavigate();
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [hospitalID, setHospitalID] = React.useState<any>();
  const [workAtHome, setWorkAtHome] = React.useState<any>();
  const [hospitalData, setHospitalData] = React.useState<any>();


  useEffect(() => {
    if (searchParams.get("hospital_id")) {
      filterParams.hospital_id = searchParams.get("hospital_id");
      props.setHospitalIdProp(searchParams.get("hospital_id"));
    }
    if (searchParams.get("work_at_home")) {
      filterParams.work_at_home = searchParams.get("work_at_home")
    }
    setHospitalID(searchParams.get("hospital_id"))
    setWorkAtHome(searchParams.get("work_at_home"))
    getDoctors(filterParams);
   
  }, [location]);

  useEffect(() => {
    getDoctors(filterParams);
  }, [pagination.current_page]);

  useEffect(() => {
    getHopitals();
  }, [hospitalID]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModalBookingHospital = () => {
    setOpenModalBookHospital(false);
  };


  function bookingCalendar(name, id) {
    props.setDoctorIdProp(id);
    props.setDepartmentIdProp(null);
    setDoctorName(name);
    props.setDoctorNameProp(name);
    setOpen(true);
  }

  function bookingWithHospital() {
    setOpenModalBookHospital(true);
  }

  function bookingWithProfile(data) {
    if (data.profile_id && data.hospital_id && props.doctorIdProp) {
      setOpen(false);
      navigate('/dat-lich-kham');
    }
  }

  function bookingWithProfileHospital(data) {
    if (data.profile_id && data.department_id) {
      setOpen(false);
      navigate('/dat-lich-kham');
    }
  }


  function getHopitals() {
    hopitalService.getHospitals().then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        let array = body.data.hospitals;
        let hospital_id = searchParams.get("hospital_id");
        let item = array.filter(el=> { return el.id == hospital_id});
        setHospitalData(item[0]);
      }
    });
  }

  const getItem = doctors => doctors.map((item, index) => (
    <Grid key={index} item xs={12} sm={4} md={4}>
      <div className="wrapper-column">
        <div className="avatar-image">
          <img src={item.avatar} alt="img"
            onError={(e: any) => {
              e.target.src = imgDefault
            }}></img>
        </div>
        <div className="name">{item.fullname}</div>
        <ul className="info-job">
          <li className="department">{item.title}</li>
          <li className="hospital">{item.address}</li>
          <li className="experience">{item.experience}</li>
        </ul>
        <Button onClick={() => bookingCalendar(item.fullname, item.id)} variant="contained" className="my-btn btn-blue-dash btn-contained btn-detail">
          Đặt lịch khám
        </Button>
      </div>
    </Grid>
  ));
  function handleChangePage(event, val) {
    setPagination(prevState => ({
      ...prevState,
      'current_page': val,
    }));
  }
  function closeToast() {
    setToastConfig({ type: '', isOpen: false, message: '' });
  }
  function getDoctors(filterParams?: any) {
    let params: any = {
      page: pagination.current_page,
      per_page: pagination.per_page
    }
    params = Object.assign(params, filterParams);
    hopitalService.getDoctors(params).then((res) => {
      let body = res.data;
      if (body && body.error) {
        setToastConfig({ type: 'error', isOpen: true, message: body.message });
      } else {
        setDoctors(body.data.doctors);
        setPagination(prevState => ({
          ...prevState,
          'total': body.data.meta.total,
          'totalPage': body.data.meta.totalPage
        }));
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
    if (params.department_id) {
      filterParams.department_id = params.department_id;
    }
    if (params.doctor_type_id) {
      filterParams.doctor_type_id = params.doctor_type_id;
    }
    if (params.hospital_id) {
      filterParams.hospital_id = params.hospital_id;
      props.setHospitalIdProp(params.hospital_id);
    } else {
      props.setHospitalIdProp('');
    }

    if ((params.work_at_home !== null) && (params.work_at_home !== '') && (params.work_at_home !== undefined)) {
      filterParams.work_at_home = params.work_at_home;
    }
    if (params.radius) {
      filterParams.radius = params.radius;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          filterParams.long = position.coords.longitude;
          filterParams.lat = position.coords.latitude;
          getDoctors(filterParams);
        });
      }
    } else {
      getDoctors(filterParams);

    }
  }
  const GeneralInfo = (data) => (
    <div className="general-info">
      <div className="image-hospital">
      <img src={data.avatar} alt="img"
            onError={(e: any) => {
              e.target.src = imgDefault
            }}></img>
      </div>
      <div className="info">
        <div className="top">
          <div className="name">{data.title}</div>
          <div className="address">{data.address}</div>
        </div>
        <div className="bottom">
          <Button onClick={()=> {bookingWithHospital()}}
            variant="contained"
            className="my-btn btn-blue-dash btn-contained">
            Đặt lịch khám
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <ToastMessage isOpen={configToast.isOpen} closeCallback={closeToast} type={configToast.type} message={configToast.message}></ToastMessage>
      <div className="wrapper-booking-page">
        <div className="container-app">
          <div className="content-booking">
            <div className="left-content">
              <FilterBooking callBackParams={getFilterParams} hospitalId={hospitalID ? hospitalID : null} workAtHome={workAtHome ? workAtHome : null}></FilterBooking>
            </div>
            <div className="right-content">
              <div className="wrapper-right-content">
              {hospitalID && hospitalData && GeneralInfo(hospitalData)}
                <div className="wrapper-list-data">
                  <h2 className="title">
                    <span className="text">Danh sách bác sĩ hiện có</span>
                    <span className="line"></span>
                  </h2>
                  <div className="list-data">
                    {(doctors.length <= 0) && <EmptyData></EmptyData>}
                    {(doctors.length > 0) &&
                      <React.Fragment> <Grid container spacing={2}>
                        {getItem(doctors)}
                      </Grid>
                        <Pagination className={'my-pagination'} showFirstButton showLastButton onChange={handleChangePage} count={pagination.totalPage} page={pagination.current_page} variant="outlined" shape="rounded" />
                      </React.Fragment>}
                  </div>
                </div>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className="wrapper-my-modal small-size">
                      <div className="head-modal">
                        <h1 className="title">Đặt lịch khám với bác sĩ {doctorName}</h1>
                        <IconButton onClick={handleClose} aria-label="close">
                          <CloseIcon />
                        </IconButton>
                      </div>
                      <ChoseProfile callBackCorfimModal={(vl) => bookingWithProfile(vl)} callBackCloseModal={() => handleClose()}></ChoseProfile>
                    </div>
                  </Fade>
                </Modal>

                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={openModalBookHospital}
                  onClose={handleCloseModalBookingHospital}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openModalBookHospital}>
                    <div className="wrapper-my-modal small-size">
                      <div className="head-modal">
                        <h1 className="title">Đặt lịch khám với bệnh viện</h1>
                        <IconButton onClick={handleCloseModalBookingHospital} aria-label="close">
                          <CloseIcon />
                        </IconButton>
                      </div>
                      <ChoseProfileBookHospital hospitalName = {hospitalData?.title ? hospitalData.title: 'N/A'} callBackCorfimModal={(vl) => bookingWithProfileHospital(vl)} callBackCloseModal={() => handleCloseModalBookingHospital()}></ChoseProfileBookHospital>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  profileIdProp: state.profileId,
  hospitalIdProp: state.hospitalId,
  doctorIdProp: state.doctorId,
  departmentIdProp: state.departmentId
})

const mapDispatchToProps = (dispatch: any) => ({
  setProfileIdProp: (data: any) => dispatch(setProfileId(data)),
  setHospitalIdProp: (data: any) => dispatch(setHospitalId(data)),
  setDoctorIdProp: (data: any) => dispatch(setDoctorId(data)),
  setDepartmentIdProp: (data: any) => dispatch(setDepartmentId(data)),
  setDoctorNameProp: (data: any) => dispatch(setDoctorName(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingWithDoctorPage);

