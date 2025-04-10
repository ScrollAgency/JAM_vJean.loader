/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: NtQK0cTq4r4D

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

import MobileNavbarTop from "../../MobileNavbarTop"; // plasmic-import: mAg8Ml3XUEhy/component
import Slidebar from "../../Slidebar"; // plasmic-import: M06HuWMcBQV2/component
import BoutonVoirLesOffres from "../../BoutonVoirLesOffres"; // plasmic-import: 0Dt9ei2n73Lz/component
import MobileNavbarBottom from "../../MobileNavbarBottom"; // plasmic-import: BIS-N7QZzUVV/component

import { useScreenVariants as useScreenVariantshm8Nko4B5BDd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HM8Nko4B5BDd/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: f7DE9y7qp46fyCw5nuY8f9/projectcss
import sty from "./PlasmicMesAnnonces.module.css"; // plasmic-import: NtQK0cTq4r4D/css

import HeartStraightIcon from "./icons/PlasmicIcon__HeartStraight"; // plasmic-import: 2A8amxR7FAse/icon

createPlasmicElementProxy;

export type PlasmicMesAnnonces__VariantMembers = {};
export type PlasmicMesAnnonces__VariantsArgs = {};
type VariantPropType = keyof PlasmicMesAnnonces__VariantsArgs;
export const PlasmicMesAnnonces__VariantProps = new Array<VariantPropType>();

export type PlasmicMesAnnonces__ArgsType = {};
type ArgPropType = keyof PlasmicMesAnnonces__ArgsType;
export const PlasmicMesAnnonces__ArgProps = new Array<ArgPropType>();

export type PlasmicMesAnnonces__OverridesType = {
  annonces?: Flex__<"div">;
  mobileNavbarTop?: Flex__<typeof MobileNavbarTop>;
  slidebar?: Flex__<typeof Slidebar>;
  main?: Flex__<"div">;
  heading?: Flex__<"div">;
  card?: Flex__<"div">;
  content6?: Flex__<"div">;
  featuredIcon?: Flex__<"div">;
  svg?: Flex__<"svg">;
  textAndSupportingText?: Flex__<"div">;
  text6?: Flex__<"div">;
  supportingText?: Flex__<"div">;
  boutonVoirLesOffres?: Flex__<typeof BoutonVoirLesOffres>;
  mobileNavbarBottom?: Flex__<typeof MobileNavbarBottom>;
};

export interface DefaultMesAnnoncesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMesAnnonces__RenderFunc(props: {
  variants: PlasmicMesAnnonces__VariantsArgs;
  args: PlasmicMesAnnonces__ArgsType;
  overrides: PlasmicMesAnnonces__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshm8Nko4B5BDd()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"annonces"}
          data-plasmic-override={overrides.annonces}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
            sty.annonces
          )}
        >
          <MobileNavbarTop
            data-plasmic-name={"mobileNavbarTop"}
            data-plasmic-override={overrides.mobileNavbarTop}
            className={classNames("__wab_instance", sty.mobileNavbarTop)}
          />

          <Slidebar
            data-plasmic-name={"slidebar"}
            data-plasmic-override={overrides.slidebar}
            className={classNames("__wab_instance", sty.slidebar)}
          />

          <Stack__
            as={"div"}
            data-plasmic-name={"main"}
            data-plasmic-override={overrides.main}
            hasGap={true}
            className={classNames(projectcss.all, sty.main)}
          >
            <div
              data-plasmic-name={"heading"}
              data-plasmic-override={overrides.heading}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.heading
              )}
            >
              {"Mes annonces sauvegard\u00e9es"}
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"card"}
              data-plasmic-override={overrides.card}
              hasGap={true}
              className={classNames(projectcss.all, sty.card)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"content6"}
                data-plasmic-override={overrides.content6}
                hasGap={true}
                className={classNames(projectcss.all, sty.content6)}
              >
                <div
                  data-plasmic-name={"featuredIcon"}
                  data-plasmic-override={overrides.featuredIcon}
                  className={classNames(projectcss.all, sty.featuredIcon)}
                >
                  <HeartStraightIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                </div>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"textAndSupportingText"}
                  data-plasmic-override={overrides.textAndSupportingText}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    sty.textAndSupportingText
                  )}
                >
                  <div
                    data-plasmic-name={"text6"}
                    data-plasmic-override={overrides.text6}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text6
                    )}
                  >
                    {"Aucune annonce sauvegard\u00e9e"}
                  </div>
                  <div
                    data-plasmic-name={"supportingText"}
                    data-plasmic-override={overrides.supportingText}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.supportingText
                    )}
                  >
                    {"Sauvegardez des annonces pour les retrouver plus tard."}
                  </div>
                </Stack__>
                <BoutonVoirLesOffres
                  data-plasmic-name={"boutonVoirLesOffres"}
                  data-plasmic-override={overrides.boutonVoirLesOffres}
                  className={classNames(
                    "__wab_instance",
                    sty.boutonVoirLesOffres
                  )}
                />
              </Stack__>
            </Stack__>
          </Stack__>
          <MobileNavbarBottom
            data-plasmic-name={"mobileNavbarBottom"}
            data-plasmic-override={overrides.mobileNavbarBottom}
            className={classNames("__wab_instance", sty.mobileNavbarBottom)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  annonces: [
    "annonces",
    "mobileNavbarTop",
    "slidebar",
    "main",
    "heading",
    "card",
    "content6",
    "featuredIcon",
    "svg",
    "textAndSupportingText",
    "text6",
    "supportingText",
    "boutonVoirLesOffres",
    "mobileNavbarBottom"
  ],
  mobileNavbarTop: ["mobileNavbarTop"],
  slidebar: ["slidebar"],
  main: [
    "main",
    "heading",
    "card",
    "content6",
    "featuredIcon",
    "svg",
    "textAndSupportingText",
    "text6",
    "supportingText",
    "boutonVoirLesOffres"
  ],
  heading: ["heading"],
  card: [
    "card",
    "content6",
    "featuredIcon",
    "svg",
    "textAndSupportingText",
    "text6",
    "supportingText",
    "boutonVoirLesOffres"
  ],
  content6: [
    "content6",
    "featuredIcon",
    "svg",
    "textAndSupportingText",
    "text6",
    "supportingText",
    "boutonVoirLesOffres"
  ],
  featuredIcon: ["featuredIcon", "svg"],
  svg: ["svg"],
  textAndSupportingText: ["textAndSupportingText", "text6", "supportingText"],
  text6: ["text6"],
  supportingText: ["supportingText"],
  boutonVoirLesOffres: ["boutonVoirLesOffres"],
  mobileNavbarBottom: ["mobileNavbarBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  annonces: "div";
  mobileNavbarTop: typeof MobileNavbarTop;
  slidebar: typeof Slidebar;
  main: "div";
  heading: "div";
  card: "div";
  content6: "div";
  featuredIcon: "div";
  svg: "svg";
  textAndSupportingText: "div";
  text6: "div";
  supportingText: "div";
  boutonVoirLesOffres: typeof BoutonVoirLesOffres;
  mobileNavbarBottom: typeof MobileNavbarBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMesAnnonces__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMesAnnonces__VariantsArgs;
    args?: PlasmicMesAnnonces__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMesAnnonces__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMesAnnonces__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMesAnnonces__ArgProps,
          internalVariantPropNames: PlasmicMesAnnonces__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMesAnnonces__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "annonces") {
    func.displayName = "PlasmicMesAnnonces";
  } else {
    func.displayName = `PlasmicMesAnnonces.${nodeName}`;
  }
  return func;
}

export const PlasmicMesAnnonces = Object.assign(
  // Top-level PlasmicMesAnnonces renders the root element
  makeNodeComponent("annonces"),
  {
    // Helper components rendering sub-elements
    mobileNavbarTop: makeNodeComponent("mobileNavbarTop"),
    slidebar: makeNodeComponent("slidebar"),
    main: makeNodeComponent("main"),
    heading: makeNodeComponent("heading"),
    card: makeNodeComponent("card"),
    content6: makeNodeComponent("content6"),
    featuredIcon: makeNodeComponent("featuredIcon"),
    svg: makeNodeComponent("svg"),
    textAndSupportingText: makeNodeComponent("textAndSupportingText"),
    text6: makeNodeComponent("text6"),
    supportingText: makeNodeComponent("supportingText"),
    boutonVoirLesOffres: makeNodeComponent("boutonVoirLesOffres"),
    mobileNavbarBottom: makeNodeComponent("mobileNavbarBottom"),

    // Metadata about props expected for PlasmicMesAnnonces
    internalVariantProps: PlasmicMesAnnonces__VariantProps,
    internalArgProps: PlasmicMesAnnonces__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMesAnnonces;
/* prettier-ignore-end */
