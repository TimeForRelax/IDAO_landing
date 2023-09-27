import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { useState, useCallback } from "react";

import { ReactComponent as LeftLineIcon } from "./assets/left_line.svg";
import { ReactComponent as RightLineIcon } from "./assets/right_line.svg";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled(GlobalWrapper)`
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  line-height: 72px;
  margin-bottom: 180px;
`;

const Circle = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  background: linear-gradient(135deg, #30cfb0 20%, #40b0c9 50%, #5b82f0 80%);
  border: 1px solid white;
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 0%,
    transparent 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  position: absolute;
  bottom: 0;
  left: 50%;

  &.line0 {
    transform: rotate(78deg);
  }

  &.line1 {
    transform: rotate(56deg);
  }

  &.line2 {
    transform: rotate(230deg);
  }

  &.line3 {
    transform: rotate(39deg);
    background-image: linear-gradient(
      to top,
      transparent 0%,
      transparent 50%,
      transparent 50%,
      transparent 100%
    );
    height: calc(100% + 2px);
  }
`;

const Percents = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background-color: #fff;
  width: 81px;
  height: 42px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 400;
  color: ${colorFetch("primary")};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);
`;

const StyledLeftLineIcon = styled(LeftLineIcon)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  transform: translate(calc(-100% + 20px), 40px);
`;

const StyledRightLineIcon = styled(RightLineIcon)`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  transform: translate(calc(100% - 20px), 40px);
`;

const CenterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 310px;
  width: 310px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenterText = styled.span`
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  max-width: 165px;
  margin-bottom: 20px;
`;

const CenterCount = styled.span`
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 32px;
`;

export const Tokenomics = () => {
  const [node, setNode] = useState(null);

  const lineForText = useCallback((node) => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  console.dir(node);

  return (
    <Background>
      <ContentWrapper>
        <Title>Токеномика</Title>

        <Circle>
          <Line />
          <Line className="line0" />
          {/* <Line className="line1" />
          <Line className="line2" /> */}
          <Line ref={lineForText} className="line3" />
          {/* <Line className="line4" />
          <Line className="line5" />
          <Line className="line6" /> */}

          <Percents
            top={node?.offsetTop}
            left={node?.offsetLeft + (Math.sin((39 * Math.PI) / 180) * 530) / 2}
          >
            7%
          </Percents>
          <StyledLeftLineIcon />
          <StyledRightLineIcon />
          <CenterContent>
            <CenterText>Общее предложение</CenterText>
            <CenterCount>1,000,000</CenterCount>
          </CenterContent>
        </Circle>
      </ContentWrapper>
    </Background>
  );
};
