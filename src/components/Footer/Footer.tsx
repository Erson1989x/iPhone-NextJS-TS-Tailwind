import { footerLinks } from "@/constants";
import { link } from "fs";
import { Span } from "next/dist/trace";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple store </span> or{" "}
            <span className="underline text-blue">other retailer </span> near
            you. Or call 1-800-124-888.
          </p>
        </div>
        <div className="bg-neutral-700 h-[1px] my-5 w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
            <p className="font-semibold text-gray text-xs">
                Copyright © 2024 Apple Inc. All rights reserved.
            </p>
            <div className="flex">
                {footerLinks.map((link, i) => (
                    <p key={link} className="font-semibold text-gray text-xs">{link}{' '}{i !== footerLinks.length - 1 && (<span className="mx-2"> | </span>)}</p>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
