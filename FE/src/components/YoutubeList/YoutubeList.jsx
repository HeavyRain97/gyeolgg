const YoutubeList = () => {
  return (
    <div className="w-fit text-left mx-auto pb-5">
      <div className="flex items-center gap-2 pb-2">
        <img src="/images/youtube.png" alt="ytb logo" className="w-[35px]" />
        <a
          href="https://www.youtube.com/@seohangeol"
          className="text-lg font-bold text-white text-stroke"
        >
          서한결 유튜브
        </a>
      </div>

      <ul className="flex items-center justify-center mx-auto gap-5">
        <li className="w-[400px] h-[220px] overflow-hidden bg-black rounded-lg flex items-center justify-center">
          <img
            src="/images/thumbnails/1.webp"
            alt="thumbnail-1"
            className="w-full"
          />
        </li>
        <li className="w-[400px] h-[220px] overflow-hidden bg-black rounded-lg flex items-center justify-center">
          <img
            src="/images/thumbnails/2.webp"
            alt="thumbnail-2"
            className="w-full"
          />
        </li>
        <li className="w-[400px] h-[220px] overflow-hidden bg-black rounded-lg flex items-center justify-center">
          <img
            src="/images/thumbnails/3.webp"
            alt="thumbnail-3"
            className="w-full"
          />
        </li>
      </ul>
    </div>
  );
};

export default YoutubeList;
