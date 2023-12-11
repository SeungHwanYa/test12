export default function Member({ memberName, nickName }) {
  // 변수에 중괄호 확인 잘하기
  return (
    <div className="member">
      <h1>{memberName}</h1>
      <p>{nickName}</p>
    </div>
  );
}
