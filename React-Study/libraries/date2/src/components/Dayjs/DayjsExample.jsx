import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayjsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (e) => {
    setDay(dayjs(e.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const formatToPositive = (props) => {
    if (props < 0) {
      return props * -1;
    } else {
      return props;
    }
  };
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.clone().add(1, "week");
  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
        <br />
      </div>
      <br />
      {/* moment와 차이점 : 24시간을 더했을 경우 알아서 계산하고 1일 더한것과 같이 출력 */}
      <div>Summer Time (NewYork)</div>
      <div>{dayjs.tz.guess()}</div>
      <div>
        2018/3/10 13시에 하루 더하기 :
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div>
        2018/3/10 13시에 24시간 더하기 :
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
      </div>
      <br />
      <div>Leap year (Korea)</div>
      <div>
        2017//1/1에 1년 빼기 :
        {dayjs("2017-01-01 00:00:00").subtract(1, "year").format()}
      </div>
      <div>
        2017//1/1에 365일 빼기 :
        {dayjs("2017-01-01 00:00:00").subtract(365, "day").format()}
      </div>
      <br />
      <div>한국어로 표기</div>
      <div>{dayjs("2017-07-17 00:00:00").format("YYYY년 M월 D일")}</div>
      <br />
      <div>생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>{day}</div>
      </div>
      <div>두 날짜 비교</div>
      <div>{`${formatToPositive(
        dayjs("2022-04-18").diff(dayjs("2022-09-23"), "day")
      )}일 차이`}</div>
    </div>
  );
}
