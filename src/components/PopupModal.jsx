import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ModalImg from "../assets/modal_img.gif";

const PopupModal = ({ content, setShowModal }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeOut = setTimeout(() => dispatch(setShowModal()), 1400);
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch, setShowModal]);
  return (
    <>
      <ModalBox>
        <Container>
          <MessageBox>{content}</MessageBox>
          <img src={ModalImg} width="105" height="105" alt="modal_img" />
        </Container>
      </ModalBox>
    </>
  );
};

const ModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9;

  animation: fadeIn 0.45s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const Container = styled.div`
  width: 38rem;
  height: 18rem;
  line-height: 18rem;
  text-align: center;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: upDown 0.55s ease;

    @keyframes upDown {
      from {
        opacity: 0;
        margin-top: -6.5%;
      }
      to {
        opacity: 1;
        margin-top: 0;
      }
    }
  }
`;

const MessageBox = styled.div`
  width: 290px;
  height: 60px;
  line-height: 64px;
  text-align: center;
  color: #ff7a7a;
  background-color: #242424;
  border-radius: 10px;
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 2px;
  position: relative;

  :after {
    border-top: 8px solid #242424;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default PopupModal;
