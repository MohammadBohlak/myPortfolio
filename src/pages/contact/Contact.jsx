// Contact.jsx
import React, { useRef, useEffect } from "react";
import { TbMessage2Share } from "react-icons/tb";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../assets/animations/doneAnimation.json";
import animationData from "../../assets/animations/Animation - 1751145818201.json";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SubTitle, Title } from "../hero/hero.styles";
import {
  ContainerContact,
  Form,
  FormGroup,
  LeftContact,
  RightContact,
  StyledContact,
  SubmitBtn,
  SuccessMessage,
} from "./contact.styles";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzjdjpv");

  // Refs للعنصر كله والعنوان والقسمين
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // ننشئ سياق gsap مربوط بالـ sectionRef
    const ctx = gsap.context(() => {
      // 1) إظهار العنوان
      gsap.from(titleRef.current, {
        autoAlpha: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // 2) دخول اليمين واليسار متزامنين
      gsap.from([leftRef.current, rightRef.current], {
        x: (i) => (i === 0 ? -100 : 100), // i=0 للقسم الأيسر، i=1 للقسم الأيمن
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <ContainerContact id="contact" ref={sectionRef}>
      <Title ref={titleRef} style={{ textAlign: "center" }}>
        Contact me
      </Title>

      <StyledContact className="contact-us">
        <LeftContact ref={leftRef}>
          <SubTitle>
            Contact us for more information and get notified when I publish
            something new.
          </SubTitle>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="email">Email Address:</label>
              <input required type="email" name="email" id="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Your Message:</label>
              <textarea required name="message" id="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </FormGroup>

            <SubmitBtn>
              <button
                type="submit"
                disabled={state.submitting}
                className="submit"
              >
                <div>
                  <span>{state.submitting ? "Submitting..." : "Submit"}</span>
                  {!state.submitting && <TbMessage2Share />}
                </div>
              </button>
            </SubmitBtn>

            {state.succeeded && (
              <SuccessMessage>
                Thanks for your message!
                <Lottie
                  loop={false}
                  style={{ height: "55px" }}
                  animationData={doneAnimation}
                />
              </SuccessMessage>
            )}
          </Form>
        </LeftContact>

        <RightContact ref={rightRef} className="animation">
          <Lottie loop={true} animationData={animationData} />
        </RightContact>
      </StyledContact>
    </ContainerContact>
  );
};

export default Contact;
