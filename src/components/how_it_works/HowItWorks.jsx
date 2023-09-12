import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { Block } from "./components/Block";
import { dataHowItWorks } from "./data/data";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled(GlobalWrapper)`
  padding-top: 150px;
`;

const Title = styled.h2`
  color: ${colorFetch("primary")};
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 70px;
`;

export const HowItWorks = () => {
  return (
    <Background>
      <ContentWrapper>
        <Title>Как это работает</Title>
        {dataHowItWorks.map(
          ({ label, title, description, list, video }, index) => (
            <Block
              label={label}
              title={title}
              description={description}
              list={list}
              video={video}
              index={index}
            />
          )
        )}
      </ContentWrapper>
    </Background>
  );
};
