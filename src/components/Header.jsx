import { MdTimer } from "react-icons/md";

const Header = ({ title }) => {
  return (
    <>
      <header>
        <h1>
          <MdTimer className="timer" /> {title}
        </h1>
      </header>
    </>
  );
};
export default Header;
