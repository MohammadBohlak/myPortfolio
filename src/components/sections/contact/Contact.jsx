// src/components/sections/Contact.js
import { useState } from "react";
import { Container } from "../../common/Container";
import { Button } from "../../common/Button";
import { CONTACT_INFO } from "../../../utils/constants";
import {
  ContactBg,
  ContactContainer,
  ContactForm,
  ContactInfo,
  ContactInfoTitle,
  ContactItem,
  ContactSection,
  FormControl,
  FormGroup,
  Link,
  Textarea,
} from "./contact.styles";
import { SectionTitle } from "../../common/sectionTitle";
import { SectionSubtitle } from "../../common/SectionSubtitle";
import { useForm } from "@formspree/react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xyzjdjpv");

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   handleSubmit();
  //   alert(`Thank you for your message! I'll get back to you soon at ${email}.`);

  //   // Reset form
  //   setEmail("");
  //   setMessage("");
  // };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      message,
    };

    const result = await handleSubmit(formData);

    if (result?.ok) {
      alert(
        `Thank you for your message! I'll get back to you soon at ${email}.`
      );
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ContactSection id="contact">
      <ContactBg>
        <div className="circle parallax-element"></div>
        <div className="circle parallax-element"></div>
      </ContactBg>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind? Let's work together to bring your ideas to
          life
        </SectionSubtitle>

        <ContactContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactInfo variants={itemVariants}>
            <ContactInfoTitle>Let's Connect</ContactInfoTitle>
            {CONTACT_INFO.map((item, index) => (
              <ContactItem
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <i className={item.icon}></i>
                <Link href={item.link}>{item.text}</Link>
              </ContactItem>
            ))}
          </ContactInfo>

          <ContactForm variants={itemVariants} onSubmit={handleSubmitForm}>
            <FormGroup>
              <FormControl
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
              />
            </FormGroup>
            <Button as="button" type="submit" className="submit-btn">
              Send Message
            </Button>
          </ContactForm>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};
