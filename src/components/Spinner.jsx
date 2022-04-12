import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <>
      <SpinnerBox>
        <section>
          <div className="sk-three-bounce">
            <div className="sk-bounce-1 sk-child"></div>
            <div className="sk-bounce-2 sk-child"></div>
            <div className="sk-bounce-3 sk-child"></div>
          </div>
        </section>
      </SpinnerBox>
    </>
  );
};

const SpinnerBox = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  section {
    flex: 1 1 25%;
  }
  .sk-three-bounce {
    width: 8em;
    margin: auto;
    text-align: center;
  }
  .sk-three-bounce .sk-child {
    width: 2em;
    height: 2em;
    background-color: #00aaee;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
    animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
  }
  .sk-three-bounce .sk-bounce-1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .sk-three-bounce .sk-bounce-2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-three-bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }

  @keyframes sk-three-bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export default Spinner;
