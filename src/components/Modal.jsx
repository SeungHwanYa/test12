export default function Modal({ item, closeModal, titleNum }) {
  return (
    <div className="modal">
      <p>{item[titleNum]}</p>
      <button onClick={closeModal}>닫기</button>
    </div>
  );
}
