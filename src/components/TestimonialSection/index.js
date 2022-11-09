import React from 'react'
import Baby from '../../images/Baby.jpeg'
import Guy from "../../images/guy.jpeg";
import Lady1 from "../../images/lady1.jpeg";
import Lady2 from "../../images/lady2.jpeg";
import Play from "../../images/play.svg";
import Apple from "../../images/apple-icon.svg";
 
import {
  TestimonialComponent,
  Description,
  ContentWrapper,
  Testimonial,
  TextContainer,
  TestBtn,
  TestBtnLink,
  TestimonialImg,
  TestBtnLink1,
  TestimonialContent,
  AllTestimonials,
} from "./TestimonialElements";

export const TestimonialSection = () => {
  return (
    <TestimonialComponent>
      <TestimonialContent>
        <ContentWrapper>
          <AllTestimonials>

          <Testimonial>
            <TestimonialImg>
              <img src={Guy} alt="guy" />
            </TestimonialImg>
            <Description>
              <h6>Tobenna A</h6>
              <p>
                Thanks to piggyvest I've saved enough money to start up a really
                large business
              </p>
            </Description>
          </Testimonial>
          <Testimonial>
            <TestimonialImg>
              <img src={Baby} alt="baby" />
            </TestimonialImg>
            <Description>
              <h6>Micheal F</h6>
              <p>
                I just joined tho and I believe piggyVest won't disappoint me
                😊❤️
              </p>
            </Description>
          </Testimonial>
          <Testimonial>
            <TestimonialImg>
              <img src={Lady1} alt="lady1" />
            </TestimonialImg>
            <Description>
              <h6>Rachael O</h6>
              <p>
                My name is Rachael Joseph and I am here to testify that
                Piggyvest has helped me a lot. I had to spread the good news to
                my friends and tell them about the app and behold they are also
                using it. Thank you so much Pggyvest for saving me cause I am
                the type of person that spends lavishly. Thank you once again
                Piggyvest 💙
              </p>
            </Description>
          </Testimonial>
          <Testimonial>
            <TestimonialImg>
              <img src={Lady2} alt="lady2" />
            </TestimonialImg>
            <Description>
              <h6>Uchendu C</h6>
              <p>
                Whenever money got into my hands, I never knew how I squandered
                it so fast without even saving a little. I got to hear about
                Piggy vest and it's various services and right now, I am totally
                enjoying this journey.
              </p>
            </Description>
          </Testimonial>
          <Testimonial>
            <TestimonialImg>
              <img src={Lady2} alt="lady2" />
            </TestimonialImg>
            <Description>
              <h6>Uchendu C</h6>
              <p>
                Whenever money got into my hands, I never knew how I squandered
                it so fast without even saving a little. I got to hear about
                Piggy vest and it's various services and right now, I am totally
                enjoying this journey.
              </p>
            </Description>
          </Testimonial>
          <Testimonial>
            <TestimonialImg>
              <img src={Lady2} alt="lady2" />
            </TestimonialImg>
            <Description>
              <h6>Uchendu C</h6>
              <p>
                Whenever money got into my hands, I never knew how I squandered
                it so fast without even saving a little. I got to hear about
                Piggy vest and it's various services and right now, I am totally
                enjoying this journey.
              </p>
            </Description>
          </Testimonial>
          </AllTestimonials>
        </ContentWrapper>
        <TextContainer>
          <h2>4 Million + customers</h2>
          <p>
            Since launching in 2016, over 4,000,000 people have used PiggyVest
            to manage their money better, avoid over-spending and be more
            accountable.
          </p>
          <TestBtn>
            <TestBtnLink to="/account">Create free account</TestBtnLink>
          </TestBtn>
          <TestBtn>
            <TestBtnLink1 to="/iphone">
              <img src={Apple} alt="apple" />
              Get on iPhone
            </TestBtnLink1>
            <TestBtnLink1 to="/android">
              <img src={Play} alt="play" />
              Get on Android
            </TestBtnLink1>
          </TestBtn>
        </TextContainer>
      </TestimonialContent>
    </TestimonialComponent>
  );
}

export default TestimonialSection;