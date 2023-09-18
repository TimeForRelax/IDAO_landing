import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { StageBlock } from "./components/stage_block/StageBlock";
import { roadMapData } from "./data/data";

const Background = styled.div`
  background-color: ${colorFetch("primary")};
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled(GlobalWrapper)`
  padding-top: 150px;
  padding-bottom: 80px;
`;

const Title = styled.h2`
  color: ${colorFetch("secondary")};
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  line-height: 72px;
  margin-bottom: 60px;
`;

const Columns = styled.div`
  overflow-y: auto;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(5, minmax(216px, 1fr));
  gap: 20px;
`;

const Column = styled.div`
  width: 100%;
`;

const TitleBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 86px;
  white-space: break-spaces;
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: HelveticaNeueCyr;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 52px;

  &.background0 {
    background: linear-gradient(90deg, #30cfb0 0%, #34cbb4 100%);
  }

  &.background1 {
    background: linear-gradient(90deg, #34cbb4 0%, #40c0c0 100%);
  }

  &.background2 {
    background: linear-gradient(90deg, #40c0c0 0%, #55afd4 100%);
  }

  &.background3 {
    background: linear-gradient(90deg, #55afd4 0%, #7296f0 100%);
  }

  &.background4 {
    background: linear-gradient(90deg, #7296f0 0%, #7d8efa 100%);
  }
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 2px;
  height: ${({ height }) => `${height}px`};

  &.background0 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #2ab099 100%
    );
  }

  &.background1 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #2fccb2 100%
    );
  }

  &.background2 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #28b6b5 100%
    );
  }

  &.background3 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #47a3c2 100%
    );
  }

  &.background4 {
    background: linear-gradient(
      180deg,
      ${colorFetch("primary")} 0%,
      #6190df 100%
    );
  }
`;

export const RoadMap = () => {
  const [coords, setCoords] = useState([
    { y: null },
    { y: null },
    { y: null },
    { y: null },
    { y: null },
  ]);

  const [node, setNode] = useState(null);

  const titleBlockRef = useCallback((node) => {
    if (node !== null) {
      setNode(
        node.getBoundingClientRect().y + node.getBoundingClientRect().height
      );
    }
  }, []);

  return (
    <Background>
      <ContentWrapper>
        <Title>Дорожная карта</Title>
        <Columns>
          {roadMapData.map(({ title, list }, index) => (
            <Column>
              <TitleBlock
                ref={titleBlockRef}
                className={`${"background" + index}`}
              >
                {title}
                <Line
                  className={`${"background" + index}`}
                  height={coords[index] - node - 10}
                />
              </TitleBlock>

              {list.map(({ content }) => (
                <StageBlock
                  content={content}
                  index={index}
                  setCoords={setCoords}
                />
              ))}
            </Column>
          ))}
        </Columns>
      </ContentWrapper>
    </Background>
  );
};
