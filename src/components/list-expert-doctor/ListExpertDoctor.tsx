import { Backdrop, Button, Fade, Grid, IconButton, Modal, Theme, createStyles, makeStyles } from "@material-ui/core";
import "./ListExpertDoctor.scss";
import imgDoctor from "../../assets/images/doctor-slider.jpg";
import { useNavigate } from "react-router-dom";
import React from "react";
import closeIcon from "../../assets/images/close.svg";

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
export function ListExpertDoctor() {
  const [open, setOpen] = React.useState(false);
  const data = [1, 2, 3, 4, 5, 6, 6, 6];
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  function bookingCalendar() {
    setOpen(true);
    // navigate('/dat-lich-kham/1');
  }
  const getItem = data => data.map((item, index) => (
    <Grid key={index} item xs={12} sm={4} md={4}>
      <div className="wrapper-column">
        <img src={imgDoctor} alt="img"></img>
        <div className="name">GS BS Nguyen Thien Thuat</div>
        <ul className="info-job">
          <li className="department">Sản khoa</li>
          <li className="hospital">Bệnh viện NASA</li>
          <li className="experience">10 năm kinh nghiệm</li>
        </ul>
        <Button onClick={() => bookingCalendar()} variant="contained" className="my-btn btn-blue-dash btn-contained btn-detail">
          Đặt lịch khám
        </Button>
      </div>
    </Grid>
  ));
  return (
    <React.Fragment>
      <div className="wrapper-list-expert-doctor">
        <h2 className="title">
          <span className="text">Danh sách bác sĩ chuyên khoa</span>
          <span className="line"></span>
        </h2>
        <div className="list-data">
          <Grid container spacing={2}>
            {getItem(data)}

          </Grid>
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
          <div className="wrapper-my-modal">
            <div className="head-modal">
              <h1 className="title">Chọn hồ sơ bệnh nhân</h1>
              <IconButton onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </div>
            {/* <form className="wrapper-form" onSubmit={handleSubmit(onSubmitCreateProfile)}>


              <div className={`form-group item-input required ${errors.province_id ? 'has-error' : ''}`}>
                <InputLabel id="province_id-label" className="label-config"><span>Tỉnh/thành</span></InputLabel>
                <FormControl className={'my-wrapper-select'}>
                  <Select
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null
                    }}
                    inputProps={register("province_id", {
                      required: true
                    })}
                    labelId="province_id-label"
                    value={formValuesProfile.province_id}
                    onChange={handleProvinceChange}
                    displayEmpty
                    className={'my-select'}
                  >
                    <MenuItem value="" disabled>
                      Chọn tỉnh thành...
                    </MenuItem>
                    {provinces.map((el: any, index) => (
                      <MenuItem key={index} value={el.id}>{el.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className="form-control-feedback">
                  <span className="arrow"></span>
                  <img src={imgError} alt="error" />
                  {errors.province_id && <span id="province_id-helper-text">Tỉnh/thành là bắt buộc.</span>}
                </div>
              </div>

              <Button onClick={() => handleClose()} variant="outlined" color="primary" type="button" className="my-btn btn-outlined btn-black">
                Hủy
              </Button>
              <Button variant="contained" color="primary" type="submit" className="my-btn btn-contained btn-blue-dash">
                Lưu
              </Button>
            </form> */}
          </div>
        </Fade>
      </Modal>
    </React.Fragment>

  )
}
