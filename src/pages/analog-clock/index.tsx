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
    <div className="min-h-screen bg-gradient-to-br from-[#231955] to-[#1F4690] flex flex-col items-center justify-center">
      <div className="relative rounded-full md:w-400 md:h-400 w-300 h-300 border-[#E8AA42] border-10 flex items-center">
        {/* <div className="h-10 w-10 rounded-full absolute top-[185px] left-[186px] bg-[#c6c6c6]"></div> */}
        <div
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
          className={`sec absolute md:top-[0px] md:left-[188px] top-[5%] left-[50%] h-[45%] md:h-190 w-4 bg-[#d62727] origin-bottom`}
        ></div>
        <div
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
          className={`min absolute md:top-[0px] md:left-[188px] top-[5%] left-[50%] h-[45%] md:h-190 w-4  bg-[#FFE5B4] origin-bottom`}
        ></div>
        <div
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
          className={`hr absolute md:top-[50px] md:left-[188px] top-[5%] left-[50%] h-[45%] md:h-140 w-4 bg-[#FFE5B4] origin-bottom`}
        ></div>
        <div className="absolute top-[-20px] w-18 text-center bg-[#FFF] left-[48%] md:left-[182px]">
          12
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px] ">1</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">2</div> */}
        <div className="absolute md:top-[175px] top-[45%] w-18 text-center bg-[#FFF] right-[-13px]">
          3
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">4</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">5</div> */}
        <div className="absolute md:top-[375px] top-[98%] w-18 text-center bg-[#FFF] left-[48%] md:left-[182px]">
          6
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">7</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">8</div> */}
        <div className="absolute md:top-[175px] top-[45%] w-18 text-center bg-[#FFF] left-[-13px]">
          9
        </div>
        {/* <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">10</div>
        <div className="absolute top-[-20px] bg-[#FFF] left-[185px]">11</div> */}
      </div>
      <div className="md:pt-80 pt-100  text-text-white left-[45%]">
        Created with ❤️
      </div>
    </div>
  );
};

export default AnalogClock;
