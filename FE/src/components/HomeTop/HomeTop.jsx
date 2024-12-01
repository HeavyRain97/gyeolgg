import YoutubeList from "../YoutubeList/YoutubeList";

const HomeTop = () => {
  return (
    <>
      <div className="bg-[#4F8AC2] overflow-hidden">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[160px] mx-auto pt-5"
        />

        <YoutubeList />
      </div>
    </>
  );
};

export default HomeTop;
