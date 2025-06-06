/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhOfficeChairIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhOfficeChairIcon(props: IconPhOfficeChairIconProps) {
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
          "M19.375 10a.624.624 0 01-.625.625h-1.302a3.757 3.757 0 01-3.698 3.125h-3.125v1.875H12.5a2.5 2.5 0 012.5 2.5.624.624 0 11-1.25 0 1.25 1.25 0 00-1.25-1.25h-1.875v1.25a.624.624 0 11-1.25 0v-1.25H7.5a1.25 1.25 0 00-1.25 1.25.625.625 0 11-1.25 0 2.5 2.5 0 012.5-2.5h1.875V13.75H6.25a3.756 3.756 0 01-3.698-3.125H1.25a.625.625 0 110-1.25h1.875A.625.625 0 013.75 10a2.5 2.5 0 002.5 2.5h7.5a2.5 2.5 0 002.5-2.5.625.625 0 01.625-.625h1.875a.625.625 0 01.625.625zm-14.07.819a1.25 1.25 0 01-.292-.996l1.071-7.5A1.256 1.256 0 017.322 1.25h5.356a1.256 1.256 0 011.238 1.073l1.072 7.5a1.25 1.25 0 01-1.238 1.427h-7.5a1.25 1.25 0 01-.945-.431zM6.25 10h7.5l-1.072-7.5H7.321L6.25 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhOfficeChairIcon;
/* prettier-ignore-end */
