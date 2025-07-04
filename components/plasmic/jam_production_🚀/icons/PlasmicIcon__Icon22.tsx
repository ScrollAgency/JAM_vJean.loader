/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon22Icon(props: Icon22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      aria-hidden={"true"}
      focusable={"false"}
      style={{
        verticalAlign: "-.125em",
        msTransform: "rotate(360deg)",
        webkitTransform: 'rotate(360deg)"',

        ...(style || {}),
      }}
      preserveAspectRatio={"xMidYMid meet"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "iconify icon:uil:sunset w-7 h-7"
      )}
      data-icon={"uil:sunset"}
      transform={"rotate(360)"}
      height={"1em"}
      width={"1em"}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.66 8.34a1 1 0 00.7-.29l.71-.71a1 1 0 10-1.41-1.41l-.66.71a1 1 0 000 1.41 1 1 0 00.66.29zM12 6a1 1 0 001-1V4a1 1 0 00-2 0v1a1 1 0 001 1zm-8 6H3a1 1 0 000 2h1a1 1 0 000-2zm1.64-3.95a1 1 0 00.7.29 1 1 0 00.71-.29 1 1 0 000-1.41l-.71-.71a1 1 0 00-1.41 1.41zM21 12h-1a1 1 0 000 2h1a1 1 0 000-2zm-10 7H8a1 1 0 000 2h3a1 1 0 000-2zm7-4h-.88a5.39 5.39 0 00.38-2 5.5 5.5 0 00-11 0 5.39 5.39 0 00.38 2H6a1 1 0 000 2h12a1 1 0 000-2zm-3.15 0h-5.7a3.44 3.44 0 01-.65-2 3.5 3.5 0 017 0 3.44 3.44 0 01-.65 2zM16 19h-1a1 1 0 000 2h1a1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon22Icon;
/* prettier-ignore-end */
