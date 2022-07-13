import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let i = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(i);
    };
  });

  return (
    <div className="h-screen bg-gradient-to-br from-[#231955] to-[#1F4690] flex items-center justify-center">
      <div className="relative rounded-full w-400 h-400 border-[#E8AA42] border-10 flex items-center">
        {/* <div className="h-10 w-10 rounded-full absolute top-[185px] left-[186px] bg-[#c6c6c6]"></div> */}
        <div
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
          className={`sec absolute top-[0px] left-[188px] h-190 w-4 bg-[#d62727] origin-bottom`}
        ></div>
        <div
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
          className={`min absolute top-[0px] left-[188px] h-190 w-4 bg-[#FFE5B4] origin-bottom`}
        ></div>
        <div
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
          className={`hr absolute top-[50px] left-[188px] h-140 w-4 bg-[#FFE5B4] origin-bottom`}
        ></div>
        <div className="absolute top-[-20px] w-18 text-center bg-[#FFF] left-[182px]">
          12
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px] ">1</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">2</div> */}
        <div className="absolute top-[175px] w-18 text-center bg-[#FFF] right-[-13px]">
          3
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">4</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">5</div> */}
        <div className="absolute top-[375px] w-18 text-center bg-[#FFF] left-[182px]">
          6
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">7</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">8</div> */}
        <div className="absolute top-[175px] w-18 text-center bg-[#FFF] left-[-13px]">
          9
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">10</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">11</div> */}
      </div>
      <div className="absolute bottom-[40px] text-text-white left-[45%]">
        Created with ❤️
      </div>
    </div>
  );
};

export default AnalogClock;
