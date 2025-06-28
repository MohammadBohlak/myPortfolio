import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myProjects from "./myProjects.js";
import { Title } from "../hero/hero.styles.js";
import {
  Card,
  CardFooter,
  Desc,
  FilterBar,
  FilterBtn,
  Grid,
  IconLink,
  IconRow,
  ImageWrap,
  Overlay,
  Section,
  Thumbnail,
} from "./main.styles.js";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(myProjects.map((p) => p.category))];
  const shown =
    filter === "All"
      ? myProjects
      : myProjects.filter((p) => p.category === filter);

  // refs
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // 1) animate on scroll (initial reveal)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".main-title", { autoAlpha: 0, y: 50, duration: 0.6 })
        .from(
          ".filter-btn",
          { autoAlpha: 0, y: 20, duration: 0.4, stagger: 0.1 },
          "+=0.2"
        )
        .from(
          ".project-card",
          { autoAlpha: 0, y: 20, duration: 0.4, stagger: 0.15 },
          "+=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    gsap.from(cards, {
      autoAlpha: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.15,
    });
  }, [shown]);

  return (
    <Section id="projects" ref={sectionRef}>
      <Title className="main-title">My Projects</Title>

      <FilterBar>
        {categories.map((c) => (
          <FilterBtn
            key={c}
            className="filter-btn"
            $active={c === filter}
            onClick={() => setFilter(c)}
          >
            {c}
          </FilterBtn>
        ))}
      </FilterBar>

      <Grid ref={gridRef}>
        {shown.map((p) => (
          <Card key={p.id} className="project-card">
            <ImageWrap>
              <Thumbnail src={p.image} alt={p.title} />
              <Overlay>
                <Desc>{p.description}</Desc>
                <IconRow>
                  <IconLink href={p.github} target="_blank">
                    <FaGithub />
                  </IconLink>
                  <IconLink href={p.link} target="_blank">
                    <FaExternalLinkAlt />
                  </IconLink>
                </IconRow>
              </Overlay>
            </ImageWrap>
            <CardFooter>
              <h3>{p.title}</h3>
              <small>{p.category}</small>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
