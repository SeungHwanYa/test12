import Header from "./Header";
import "../css/common.css";
import "../css/reset.css";
import Contents from "./Contents";
//연습
// import Member from "./Member";

export default function Main() {
  return (
    <>
      <Header />
      <Contents />
      {/* <Member memberName={"민수"} nickName={"모름"} /> */}
    </>
  );
}
