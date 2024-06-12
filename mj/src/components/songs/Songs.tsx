import React from "react";
import "./Songs.css";

const Songs: React.FC = () => {
  return (
    <>
      <div className="songs-title">
        <div className="songs-title-content">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-5xl lg:text-6xl">
            Hi
            <span className="dark:pink-blue-500 text-pink-600"> Love </span>
           thank you sa pag share ani
          </h1>
          <p className=" text-gray-500 dark:text-gray-400 lg:text-xl mb-3">
            You are in love with this music because it touches your spirit and
            talks to your heart. It's a tune that captures your grace, beauty,
            and all the things that make you unique; it's more than simply
            music. Every word on the song, every note, is a representation of
            the amazing person you are.
          </p>
          <p className=" text-gray-500 dark:text-gray-400 lg:text-xl">
            This song makes me think of our times together, our shared laughs,
            and our ever-deepening love. It brightens my life and makes me
            happy, just like it does for you.
          </p>
        </div>
      </div>
      <div className="songs">
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600">
              {" "}
              All i ever need
            </span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600"> Mirrors</span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600"> It's you</span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600"> 365</span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600">
              {" "}
              Dandelions
            </span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600"> Moonlight</span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600">
              {" "}
              Head in the clouds
            </span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav7.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="song-content">
          <h1 className=" text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600"> Superhero</span>
          </h1>
          <video className="w-full" controls>
            <source src="/fav8.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Songs;
