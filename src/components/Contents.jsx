import { useState } from "react";
import List from "./List";
import NoList from "./NoList";
import { list } from "./Test";
import Modal from "./Modal";

export default function Contents() {
  // let item = [1,2,3,4] // useState에서 받아온 초기 데이터값
  // let setItem = ()=>{} // item 정보의 수정을 도와주는 변경함수
  let [item, setItem] = useState(list);
  let [isActive, setIsActive] = useState(false);
  let [titleNum, setTitleNum] = useState();
  let [inputText, setInputText] = useState("");

  let toggleModal = () => {
    setIsActive(!isActive);
  };

  let openModal = (i) => {
    setIsActive(true);
    setTitleNum(i);
  };
  let closeModal = () => {
    setIsActive(false);
  };
  let addItem = () => {
    let copy = [...item]; // 기존에 있던거를 복사해서 쓰는 방법 ...변수이름
    copy.unshift(inputText);
    setItem(copy); // 기존에 있던 item 업데이트
    setInputText("");
  };
  let delItem = (i) => {
    let copy = [...item];
    copy.splice(i, 1);
    setItem(copy);
  };

  return (
    <>
      <div className="main">
        <div className="inputBox">
          <input
            value={inputText}
            type="text"
            placeholder="가고싶은 여행지를 등록하세요"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button onClick={addItem}>입력</button>
        </div>
        <p className="count">
          <span>total</span>
          <strong>{item.length}</strong>
        </p>

        {item.length === 0 ? (
          <NoList />
        ) : (
          <ul className="listCon">
            {item.map((list, i) => {
              return (
                <List
                  list={list}
                  i={i}
                  openModal={openModal}
                  key={i}
                  delItem={delItem}
                />
              );
            })}
          </ul>
        )}
        {isActive && (
          <Modal item={item} titleNum={titleNum} closeModal={closeModal} />
        )}
      </div>
    </>
  );
}
