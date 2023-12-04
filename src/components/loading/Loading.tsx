import "./Loading.scss";

export function Loading({color}) {
  return (
    <div className="wrapper-loading-data">
      <div className="lds-facebook">
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
        <div style={{ backgroundColor: color }}></div>
      </div>
    </div>
  )
}
