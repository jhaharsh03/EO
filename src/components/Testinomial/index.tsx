import { Row, Col, Carousel } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, ImageWrapper, TextWrapper, Paragraph } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const Testinomial = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <div>
                <h6>{t(title)}</h6>
                <Content>{t(content)}</Content>
                {/* Top Half: Carousel */}
                <Carousel autoplay autoplaySpeed={2000}>
                  <div>
                    <div className="carousel-item">
                      <ImageWrapper>
                        <img src="/img/Image/one.jpeg" alt="Carousel Image 1" />
                      </ImageWrapper>
                      <TextWrapper>
                        <Paragraph className="left-aligned">The tutors here are very good. Teachers are so good.</Paragraph>
                      </TextWrapper>
                    </div>
                  </div>
                  <div>
                    <div className="carousel-item">
                      <ImageWrapper>
                        <img src="/img/Image/three.jpeg" alt="Carousel Image 1" />
                      </ImageWrapper>
                      <TextWrapper>
                        <Paragraph className="left-aligned">The tutors here are very good. Teachers are so good.</Paragraph>
                      </TextWrapper>
                    </div>
                  </div>
                  <div>
                    <div className="carousel-item">
                      <ImageWrapper>
                        <img src="/img/Image/two.jpeg" alt="Carousel Image 2" />
                      </ImageWrapper>
                      <TextWrapper>
                        <Paragraph className="left-aligned">Mast hai bhai yaha lena chahiye. Selection kafi sahi coaching center hai. Samajh rahe ho.</Paragraph>
                      </TextWrapper>
                    </div>
                  </div>
                  {/* Add more carousel items as needed */}
                </Carousel>
                {/* Bottom Half: Content */}
                {button && (
                  <Button name="submit" onClick={() => scrollTo("mission")}>
                    {t(button)}
                  </Button>
                )}
                
              </div>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(Testinomial);
