import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
const normalBorder = "#143F6B";
const activeBorder = "#FF9F29";
const keys = [
  { keycode: 65, key: "A", soundName: "Clap" },
  { keycode: 83, key: "S", soundName: "Hihat" },
  { keycode: 68, key: "D", soundName: "Kick" },
  { keycode: 70, key: "F", soundName: "Openhat" },
  { keycode: 71, key: "G", soundName: "Boom" },
  { keycode: 72, key: "H", soundName: "Ride" },
  { keycode: 74, key: "J", soundName: "Snare" },
  { keycode: 75, key: "K", soundName: "Tom" },
  { keycode: 76, key: "L", soundName: "Tink" },
];

const DrumKit = () => {
  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      const key = document.querySelector(`div[data-key="${e.key}"]`);
      const audio: Record<any, any> | null = document.querySelector(
        `audio[data-key="${e.key}"]`
      );
      if (!audio || !key) return;
      console.log(audio);
      audio.currentTime = 0;
      audio.play();
      key.classList.remove(`border-[${normalBorder}]`);
      key.classList.add(`border-[${activeBorder}]`);
    });

    window.addEventListener("keyup", function (e) {
      const key = document.querySelector(`div[data-key="${e.key}"]`);
      const audio = document.querySelector(`audio[data-key="${e.key}"]`);
      if (!audio || !key) return;
      key.classList.remove(`border-[${activeBorder}]`);
      key.classList.add(`border-[${normalBorder}]`);
    });

    // const keys = document.querySelectorAll("div");

    // keys.forEach((key) => {
    //   console.log(1);
    //   key.addEventListener("transitionend", function (e) {
    //     console.log(e.target.classList);
    //     if (e.propertyName !== "transform") return;
    //     console.log(1);
    //     e.target.classList.remove(
    //       "border-doctor-darwin-accent-bright-yellow-800"
    //     );
    //     e.target.classList.add("border-gmb-neutrals-600");
    //   });
    // });
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <Head>
        <title>C.bi Projects</title>
        <link rel="icon" href="/snowflake-solid.svg" />
      </Head>
      <Image
        src={"/drum-kit/background.jpg"}
        layout="fill"
        objectFit="cover"
        objectPosition={"center"}
      />

      <div className="z-2 w-full  p-20">
        <div className="keys flex space-x-15 items-center justify-center">
          {keys.map((k) => {
            return (
              <div
                key={k.keycode + k.key}
                data-key={k.key.toLowerCase()}
                className={`flex flex-col items-center border-5 rounded-2 min-w-80 transform transition duration-200 shadow-1 shadow-doctor-neutral-7 bg-gmb-neutrals-300 border-[${normalBorder}]`}
              >
                <kbd className="text-30 font-700">{k.key}</kbd>
                <span className="sound font-600">{k.soundName}</span>
              </div>
            );
          })}
        </div>

        <audio data-key="a" src="sounds/clap.wav"></audio>
        <audio data-key="s" src="sounds/hihat.wav"></audio>
        <audio data-key="d" src="sounds/kick.wav"></audio>
        <audio data-key="f" src="sounds/openhat.wav"></audio>
        <audio data-key="g" src="sounds/boom.wav"></audio>
        <audio data-key="h" src="sounds/ride.wav"></audio>
        <audio data-key="j" src="sounds/snare.wav"></audio>
        <audio data-key="k" src="sounds/tom.wav"></audio>
        <audio data-key="l" src="sounds/tink.wav"></audio>
      </div>
    </div>
  );
};

export default DrumKit;
