/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhFileTextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhFileTextIcon(props: IconPhFileTextIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.692 6.433l-4.375-4.375a.625.625 0 00-.442-.183h-7.5a1.25 1.25 0 00-1.25 1.25v13.75a1.25 1.25 0 001.25 1.25h11.25a1.25 1.25 0 001.25-1.25v-10a.624.624 0 00-.183-.442zM12.5 4.009l2.241 2.241H12.5V4.009zm3.125 12.866H4.375V3.125h6.875v3.75a.625.625 0 00.625.625h3.75v9.375zm-2.5-6.25a.624.624 0 01-.625.625h-5a.625.625 0 110-1.25h5a.624.624 0 01.625.625zm0 2.5a.624.624 0 01-.625.625h-5a.625.625 0 110-1.25h5a.624.624 0 01.625.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhFileTextIcon;
/* prettier-ignore-end */
