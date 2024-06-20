import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

function FooterSection() {
  return (
    <section className="flex justify-between px-72 pt-14 pb-14 bg-primary relative">
        <div className="flex justify-center items-center">
          <a
            href="https://www.soulbilingue.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/logo-branco.png" width={200} height={200} alt="logo" />
          </a>
        </div>
      <div className="flex flex-col gap-5 justify-center items-center pt-10 pb-10 bg-primary">
        <h2>
          <span className="text-[15.8px] md:text-[28px] text-white text-center">
            In case you have issues, contact:
          </span>
        </h2>
        <div className="flex flex-col gap-1.5  text-center">
          <p className="text-[14px] md:text-[18px] text-secondary">
            <span className="font-semibold">Coordinator</span>
          </p>
          <p className="text-[14px] md:text-[18px] text-white">
            <a href="mailto:mentoring@soulbilingue.com">
              mentoring@soulbilingue.com
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-1.5  text-center">
          <p className="text-[14px] md:text-[18px] text-secondary">
            <span className="font-semibold"> Facilitator </span>
          </p>
          <p className="text-[14px] md:text-[18px] text-white">
            <a href="mailto:adam.sousa@soulbilingue.com">
              adam.sousa@soulbilingue.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-start pt-10 pb-10 bg-primary">
        <div className="flex flex-col gap-1.5">
          <p className="text-[14px] md:text-[18px] text-secondary">
            <span className="font-semibold">Links rápidos</span>
          </p>
          <p className="text-[14px] md:text-[18px] text-white">
            <a href="https://www.soulbilingue.com/quemsomos" target="_blank">
            Sobre
            </a>
          </p>
          <p className="text-[14px] md:text-[18px] text-white">
            <a href="https://www.soulbilingue.com/doe" target="_blank">
            Apoie
            </a>
          </p>
          <p className="text-[14px] md:text-[18px] text-white">
            <a href="https://www.soulbilingue.com/_files/ugd/e9f2c6_23c44046d14748a6b451666c915e65c8.pdf" target="_blank">
            Código de Conduta
            </a>
          </p>
          <p className="text-[14px] md:text-[18px] text-white">
            <a href="https://www.soulbilingue.com/_files/ugd/91eed0_3f8f9ba1e1464f6cb51a9821304638c5.pdf" target="_blank">
            Política de Privacidade
            </a>
          </p>
          <p className="text-[14px] md:text-[18px] text-white">
            <a href="https://www.soulbilingue.com/_files/ugd/e9f2c6_0e1ce78472114492a1df681abc0e2242.pdf"target="_blank">
            Estatuto social
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
