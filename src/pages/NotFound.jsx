import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container, Seo, Eyebrow, Button } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — Aji C. George" />
      <section className="hero-wash flex min-h-[80vh] items-center">
        <Container className="py-32 text-center">
          <Eyebrow className="justify-center">Error 404</Eyebrow>
          <p className="mt-8 font-display text-[6rem] font-semibold leading-none text-ink sm:text-[8rem]">404</p>
          <h1 className="mt-4 font-display text-[1.8rem] text-ink">This page isn't on the books.</h1>
          <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-slate">
            The page you're looking for may have moved or never existed. Let's get you back to solid ground.
          </p>
          <div className="mt-9 flex justify-center">
            <Button to="/" icon={<FontAwesomeIcon icon={faArrowLeft} className="text-[0.72rem]" />}>Back to home</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
