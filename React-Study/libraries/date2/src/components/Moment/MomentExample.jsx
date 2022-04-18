import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";

export default function MomentExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (e) => {
    setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const formatToPositive = (props) => {
    if (props < 0) {
      return props * -1;
    } else {
      return props;
    }
  };
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");
  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
        <br />
      </div>
      <br />
      <div>Summer Time (NewYork)</div>
      <div>
        2018/3/10 13시에 하루 더하기 :
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div>
        2018/3/10 13시에 24시간 더하기 :
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
      </div>
      <br />
      <div>Leap year (Korea)</div>
      <div>
        2017//1/1에 1년 빼기 :
        {moment("2017-01-01 00:00:00").subtract(1, "year").format()}
      </div>
      <div>
        2017//1/1에 365일 빼기 :
        {moment("2017-01-01 00:00:00").subtract(365, "day").format()}
      </div>
      <br />
      <div>한국어로 표기</div>
      <div>{moment("2017-07-17 00:00:00").format("YYYY년 M월 D일")}</div>
      <br />
      <div>생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>{day}</div>
      </div>
      <div>두 날짜 비교</div>
      <div>{`${formatToPositive(
        moment("2022-04-18").diff(moment("2022-09-23"), "day")
      )}일 차이`}</div>
    </div>
  );
}
