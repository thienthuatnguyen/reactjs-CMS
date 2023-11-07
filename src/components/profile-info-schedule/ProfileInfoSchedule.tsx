export function ProfileInfoSchedule({profileInfo}) {
  return (
    <div className="profile-info-schedule box-info box-info-first">
      <div className="box-title">Thông tin bệnh nhân</div>
      <div className="box-profile">
        <div className="top-info">
          <div className="name">{profileInfo.full_name}</div>
        </div>
        <div className="content-info">
          <div className="row-content-info">
            <div className="col-content-info birthday">Ngày sinh:</div>
            <div className="col-content-info">{profileInfo.birthday}</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info phone">Số điện thoại:</div>
            <div className="col-content-info">{profileInfo.phone_number}</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info address">Địa chỉ:</div>
            <div className="col-content-info">{profileInfo.address}</div>
          </div>
          <div className="row-content-info">
            <div className="col-content-info sex">Giới tính:</div>
            <div className="col-content-info">{(profileInfo.gender == '0') ? 'Nam' : 'Nữ'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
