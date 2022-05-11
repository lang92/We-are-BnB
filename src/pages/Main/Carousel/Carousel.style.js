import styled from 'styled-components';

const IMG_MARGIN = 100;
const IMG_SIZE = 300;

export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 624px;
  background-color: white;
  overflow: hidden;
`;

export const Slide = styled.div`
  display: flex;
  ${({ imgIdx }) =>
    `transform: translateX(calc(-${
      IMG_MARGIN + IMG_SIZE
    }px * ${imgIdx} + 50vw - ${IMG_SIZE}px/2 - ${IMG_MARGIN}px))`};
  ${({ isTransitionOn }) => isTransitionOn && `transition: 0.5s;`};
`;

export const SlideImg = styled.img`
  width: ${IMG_SIZE}px;
  height: ${IMG_SIZE}px;
  margin-right: ${IMG_MARGIN}px;
  ${({ isTransitionOn }) => isTransitionOn && `transition: 0.5s;`};
  ${({ isCurrent }) => isCurrent && `transform: scale(1.5);`};
`;

export const Btn = styled.img`
  position: absolute;
  z-index: 3;
  cursor: pointer;

  &:hover {
    filter: invert(50%);
  }
`;

export const LeftBtn = styled(Btn)`
  left: calc(50vw - 420px);
`;

export const RightBtn = styled(Btn)`
  right: calc(50vw - 420px);
`;

export const Gradient = styled.div`
  position: absolute;
  width: calc(50vw - 300px);
  height: 624px;
  z-index: 2;
`;

export const GradientLeft = styled(Gradient)`
  left: 0;
  background: linear-gradient(
    to right,
    white 70%,
    rgba(246, 244, 241, 0) 94.9%
  );
`;

export const GradientRight = styled(Gradient)`
  right: 0;
  background: linear-gradient(to left, white 70%, rgba(246, 244, 241, 0) 94.9%);
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Indicator = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  ${({ isCurrent }) =>
    isCurrent
      ? `background-color: gray;
         transform: scale(1.3);`
      : `background-color: lightgray;`}

  &:hover {
    background-color: gray;
    transform: scale(1.3);
  }

  &:last-child {
    margin: 0;
  }
`;
