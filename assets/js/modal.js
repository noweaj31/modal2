"use strict";

const $modalOpenButtons = document.querySelectorAll(".btn-wrap button");
const $modalWrap = document.querySelector(".modal-wrap");
const $modal = document.querySelector(".modal");
const $modalCloseButton = document.querySelector(".close");
const $modalConfirm = document.querySelector(".confirm");

const modalContents = [
  {
    title: "Modal1",
    body: `<p>모달 1입니다.</p>`,
    foot: `<button class="confirm">확인</button>
           <button class="cancel">취소</button>`,
  },
  {
    title: "Modal2",
    body: `<p>모달 2입니다.</p>`,
    foot: `<button class="confirm">확인</button>
           <button class="cancel">취소</button>`,
  },
  {
    title: "Modal3",
    body: `<p>모달 3입니다.</p>`,
    foot: `<button class="confirm">확인</button>
           <button class="cancel">취소</button>`,
  },
  {
    title: "Modal4",
    body: `<p>모달 4입니다.</p>`,
    foot: `<button class="confirm">저장</button>
           <button class="cancel">취소</button>`,
  },
];

const createModalContent = (title, body, foot) => {
  return `
  <div class="modal">
    <div class="modal-head">
      <h3 class="modal-title">${title}</h3>
      <button class="close" onClick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">${body}</div>
    <div class="modal-foot">${foot}</div>
  </div>
  `;
};

const closeModal = () => {
  //모달창 끔
  $modalWrap.style.display = "none";
};

const openModal = (index) => {
  //모달창 오픈
  const { title, body, foot } = modalContents[index];
  const modalContent = createModalContent(title, body, foot);
  $modalWrap.style.display = "flex";
  $modalWrap.innerHTML = modalContent;
};

$modalOpenButtons.forEach(($modalButton, index) => {
  $modalButton.addEventListener("click", () => {
    openModal(index);
  });
});
