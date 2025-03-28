/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: 2FcG1aUx3cMM

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: f7DE9y7qp46fyCw5nuY8f9/projectcss
import sty from "./PlasmicBoutonCreerUneAlerte.module.css"; // plasmic-import: 2FcG1aUx3cMM/css

createPlasmicElementProxy;

export type PlasmicBoutonCreerUneAlerte__VariantMembers = {};
export type PlasmicBoutonCreerUneAlerte__VariantsArgs = {};
type VariantPropType = keyof PlasmicBoutonCreerUneAlerte__VariantsArgs;
export const PlasmicBoutonCreerUneAlerte__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBoutonCreerUneAlerte__ArgsType = {};
type ArgPropType = keyof PlasmicBoutonCreerUneAlerte__ArgsType;
export const PlasmicBoutonCreerUneAlerte__ArgProps = new Array<ArgPropType>();

export type PlasmicBoutonCreerUneAlerte__OverridesType = {
  buttonBase?: Flex__<"div">;
  text?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultBoutonCreerUneAlerteProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBoutonCreerUneAlerte__RenderFunc(props: {
  variants: PlasmicBoutonCreerUneAlerte__VariantsArgs;
  args: PlasmicBoutonCreerUneAlerte__ArgsType;
  overrides: PlasmicBoutonCreerUneAlerte__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"buttonBase"}
      data-plasmic-override={overrides.buttonBase}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.buttonBase
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"cr\u00e9er une alerte"}
      </div>
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"33px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"33px"}
        loading={"lazy"}
        src={{
          src: "/plasmic/jam_production_🚀/images/plusCircle.svg",
          fullWidth: 33,
          fullHeight: 33,
          aspectRatio: 1
        }}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  buttonBase: ["buttonBase", "text", "img"],
  text: ["text"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  buttonBase: "div";
  text: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBoutonCreerUneAlerte__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBoutonCreerUneAlerte__VariantsArgs;
    args?: PlasmicBoutonCreerUneAlerte__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBoutonCreerUneAlerte__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBoutonCreerUneAlerte__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBoutonCreerUneAlerte__ArgProps,
          internalVariantPropNames: PlasmicBoutonCreerUneAlerte__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBoutonCreerUneAlerte__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "buttonBase") {
    func.displayName = "PlasmicBoutonCreerUneAlerte";
  } else {
    func.displayName = `PlasmicBoutonCreerUneAlerte.${nodeName}`;
  }
  return func;
}

export const PlasmicBoutonCreerUneAlerte = Object.assign(
  // Top-level PlasmicBoutonCreerUneAlerte renders the root element
  makeNodeComponent("buttonBase"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicBoutonCreerUneAlerte
    internalVariantProps: PlasmicBoutonCreerUneAlerte__VariantProps,
    internalArgProps: PlasmicBoutonCreerUneAlerte__ArgProps
  }
);

export default PlasmicBoutonCreerUneAlerte;
/* prettier-ignore-end */
