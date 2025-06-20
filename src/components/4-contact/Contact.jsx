import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animations/Animation - 1719000498504.json";
import contactAnimation from "../../../public/animations/contact.json";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzjdjpv");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    // Section entrance animation
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      delay: 0.2,
    });

    // Subtitle animation
    gsap.from(subtitleRef.current, {
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      delay: 0.4,
    });

    // Form animation
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -100,
      duration: 2,
      delay: 0.6,
      ease: "back.out",
    });

    // Animation container
    gsap.from(animationRef.current, {
      scrollTrigger: {
        trigger: animationRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 100,
      duration: 2,
      delay: 0.8,
      ease: "elastic.out(1, 0.5)",
    });

    // Button hover animation
    const button = formRef.current?.querySelector(".submit");
    if (button) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, []);

  return (
    <section className="contact-us" ref={sectionRef}>
      <h1 className="title" ref={titleRef}>
        <span className="icon-envelope"></span>
        Contact us:
      </h1>

      <p className="sub-title" ref={subtitleRef}>
        Contact us for more information and get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="" onSubmit={handleSubmit} ref={formRef}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div style={{ marginTop: "24px" }} className="flex">
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: "55px" }}
                animationData={doneAnimation}
              />
              Thanks for your message!
            </p>
          )}
        </form>

        <div className="animation" ref={animationRef}>
          <Lottie
            className="contact-animation"
            loop={true}
            style={{ height: "355px" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
