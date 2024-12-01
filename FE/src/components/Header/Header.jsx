import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#3076B7] flex justify-end px-4 py-2 pr-10">
      {/* 오른쪽 메뉴 */}
      <ul className="flex gap-8">
        <li>
          <Link
            to="/"
            className="text-white hover:text-[#ccc] transition-colors duration-300"
          >
            홈
          </Link>
        </li>
        <li>
          <Link
            to="/ps"
            className="text-white hover:text-[#ccc] transition-colors duration-300"
          >
            디코라이브(급식소)
          </Link>
        </li>
        <li>
          <Link
            to="/story"
            className="text-white hover:text-[#ccc] transition-colors duration-300"
          >
            사연보내기
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
