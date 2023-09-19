import { Accordion, AccordionDetails, AccordionSummary, Avatar, Backdrop, Breadcrumbs, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, Grid, IconButton, Link, Modal, Theme, createStyles, makeStyles } from "@material-ui/core";
import "../profile-patient/ProfilePatient.scss";
import deleteIcon from "../../assets/images/delete-red.svg";
import editIcon from "../../assets/images/edit-black.svg";
import addIcon from "../../assets/images/icon-user-create.png";

// import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from '../../assets/images/arrow-accordion.svg';
import { UploadFileImage } from "../../components/uploadFileImage/UploadFileImage";
import React from "react";
import ProfileUpsert from "../../components/profile-upsert/ProfileUpsert";
import { useNavigate } from "react-router-dom";

const DeleteIcon = () => (<img src={deleteIcon} alt="delete-icon"></img>);
const EditIcon = () => (<img src={editIcon} alt="edit-icon"></img>);

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
function ProfilePatientDetailPage() {
  const navigate = useNavigate();
 
  const [open, setOpen] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);

  function getData(val) {
    console.log(val)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const classes = useStyles();


  return (
    <div className="wrapper-profile-patient-page">
      <div className="container-app">
        <h1 className="title">Hồ sơ bệnh nhân</h1>
        <div className="top-title-page">

          <Breadcrumbs aria-label="breadcrumb" className="my-breadcrumb">
            <Link onClick={() => { navigate("/ho-so-benh-nhan") }}>
              Hồ sơ bệnh nhân
            </Link>
            <h2>Chi tiết hồ sơ của bạn</h2>

          </Breadcrumbs>
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>

              <div className="box-profile">
                <div className="top-info">
                  <div className="name">Huỳnh Khang</div>
                  <div className="group-action">
                    <IconButton onClick={handleClickOpenConfirm} aria-label="delete" className="btn-delete-profile">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={handleOpen} aria-label="delete" className="btn-edit-profile">
                      <EditIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="content-info">
                  <div className="row-content-info">
                    <div className="col-content-info birthday">Ngày sinh:</div>
                    <div className="col-content-info">10/09/1990</div>
                  </div>
                  <div className="row-content-info">
                    <div className="col-content-info code">Mã hồ sơ bệnh nhân:</div>
                    <div className="col-content-info">HCAMD1930</div>
                  </div>
                  <div className="row-content-info">
                    <div className="col-content-info phone">Số điện thoại:</div>
                    <div className="col-content-info">0938225141</div>
                  </div>
                  <div className="row-content-info">
                    <div className="col-content-info address">Địa chỉ:</div>
                    <div className="col-content-info">Ấp cây cam 1, xã vườn cam, huyện Mang Thít, Vĩnh Long</div>
                  </div>
                </div>
              </div>
              <div className="box-profile box-profile-schedule">
                <div className="top-info">
                  <div className="title">Lịch tái khám</div>
                </div>
                <div className="content-info">
                  <div className="row-schedule">
                    <div className="col-item">Ngày tái khám</div>
                    <div className="col-item">Trạng thái</div>
                  </div>
                  <div className="row-schedule">
                    <div className="col-item">15/07/2023</div>
                    <div className="col-item col-status">Sắp đến ngày</div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="box-profile box-profile-result">
                <div className="top-info">
                  <div className="title">Kết quả khám</div>
                </div>
                <div className="content-info">
                  <Accordion className="my-accordion">
                    <AccordionSummary
                      expandIcon={<Avatar
                        src={
                          ExpandMoreIcon
                        }
                      />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="header-content">
                        <div className="date-text">22/10/2023</div>
                        <div className="date-text">Khám nội thận - bệnh viện chỡ rẫy</div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="detail-content">
                        <UploadFileImage id={'id1'} callBackData={getData}></UploadFileImage>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="my-accordion">
                    <AccordionSummary
                      expandIcon={<Avatar
                        src={
                          ExpandMoreIcon
                        }
                      />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="header-content">
                        <div className="date-text">22/10/2023</div>
                        <div className="date-text">Khám nội thận - bệnh viện chỡ rẫy</div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="detail-content">
                        <UploadFileImage id={'id2'} callBackData={getData}></UploadFileImage>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                </div>
              </div>
            </Grid>
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
            <ProfileUpsert isEdit={true} callBackCloseModal = {handleClose}></ProfileUpsert>
          </div>
        </Fade>
      </Modal>
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Xóa hồ sơ</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc là muốn xóa hồ sơ này ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="btn-reject" onClick={handleCloseConfirm} color="primary">
            Từ chối
          </Button>
          <Button className="btn-accept" onClick={handleCloseConfirm} color="primary" autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfilePatientDetailPage;

