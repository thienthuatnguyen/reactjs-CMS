import "./IntroduceInfo.scss";
export function IntroduceInfo() {
  return (
    <div className="wrapper-introduce-info">
      <h2 className="title">
        <span className="text">Giới thiệu khoa</span>
        <span className="line"></span>
      </h2>
      <div className="text-introduce">
        Sometimes, we want to run some additional code after React has updated the DOM. Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that because we can run them and immediately forget about them. Let’s compare how classes and Hooks let us express such side effects.


      </div>
    </div>
  )
}
