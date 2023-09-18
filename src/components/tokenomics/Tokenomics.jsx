import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { useState, useCallback } from "react";

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
    transform: rotate(30deg);
  }

  &.line1 {
    transform: rotate(56deg);
  }

  &.line2 {
    transform: rotate(230deg);
  }

  &.line3 {
    transform: rotate(15deg);
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
          <Line className="line1" />
          <Line className="line2" />
          <Line ref={lineForText} className="line3" />
          <Line className="line4" />
          <Line className="line5" />
          <Line className="line6" />

          <Percents
            top={node?.offsetTop}
            left={node?.offsetLeft + (Math.sin((15 * Math.PI) / 180) * 530) / 2}
          >
            7%
          </Percents>
        </Circle>
      </ContentWrapper>
    </Background>
  );
};
