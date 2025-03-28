/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: ohBmQIEVPz-L

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

import { BaseDialogTrigger } from "@plasmicpkgs/react-aria/skinny/registerDialogTrigger";
import { JamButton } from "../../forms/JamButton/JamButton"; // plasmic-import: UiI0wt2mxfuf/codeComponent
import { BaseModal } from "@plasmicpkgs/react-aria/skinny/registerModal";
import { BaseDialog } from "@plasmicpkgs/react-aria/skinny/registerDialog";

import { useScreenVariants as useScreenVariantshm8Nko4B5BDd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: HM8Nko4B5BDd/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: f7DE9y7qp46fyCw5nuY8f9/projectcss
import sty from "./PlasmicDrawer.module.css"; // plasmic-import: ohBmQIEVPz-L/css

createPlasmicElementProxy;

export type PlasmicDrawer__VariantMembers = {
  noTrigger: "noTrigger";
};
export type PlasmicDrawer__VariantsArgs = {
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
};
type VariantPropType = keyof PlasmicDrawer__VariantsArgs;
export const PlasmicDrawer__VariantProps = new Array<VariantPropType>(
  "noTrigger"
);

export type PlasmicDrawer__ArgsType = {
  isOpen?: boolean;
  closeOnBackdropClick?: boolean;
  showHeading?: boolean;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  isKeyboardDismissDisabled?: boolean;
  onOpenChange?: (val: boolean) => void;
  trigger?: React.ReactNode;
  heading?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDrawer__ArgsType;
export const PlasmicDrawer__ArgProps = new Array<ArgPropType>(
  "isOpen",
  "closeOnBackdropClick",
  "showHeading",
  "showCancelButton",
  "showConfirmButton",
  "isKeyboardDismissDisabled",
  "onOpenChange",
  "trigger",
  "heading",
  "content",
  "footer"
);

export type PlasmicDrawer__OverridesType = {
  ariaDialogTrigger?: Flex__<typeof BaseDialogTrigger>;
  ariaModal?: Flex__<typeof BaseModal>;
  ariaDialog?: Flex__<typeof BaseDialog>;
  scrollableContent?: Flex__<"div">;
};

export interface DefaultDrawerProps {
  isOpen?: boolean;
  closeOnBackdropClick?: boolean;
  showHeading?: boolean;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  isKeyboardDismissDisabled?: boolean;
  onOpenChange?: (val: boolean) => void;
  trigger?: React.ReactNode;
  heading?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDrawer__RenderFunc(props: {
  variants: PlasmicDrawer__VariantsArgs;
  args: PlasmicDrawer__ArgsType;
  overrides: PlasmicDrawer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          closeOnBackdropClick: true,
          showHeading: true,
          showCancelButton: true,
          showConfirmButton: true
        },
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaDialogTrigger.isOpen",
        type: "writable",
        variableType: "boolean",

        valueProp: "isOpen",
        onChangeProp: "onOpenChange"
      },
      {
        path: "ariaModal.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true,

        refName: "ariaModal"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshm8Nko4B5BDd()
  });

  return (
    <BaseDialogTrigger
      data-plasmic-name={"ariaDialogTrigger"}
      data-plasmic-override={overrides.ariaDialogTrigger}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaDialogTrigger,
        {
          [sty.ariaDialogTriggernoTrigger]: hasVariant(
            $state,
            "noTrigger",
            "noTrigger"
          )
        }
      )}
      dialog={
        <BaseModal
          data-plasmic-name={"ariaModal"}
          data-plasmic-override={overrides.ariaModal}
          className={classNames("__wab_instance", sty.ariaModal, {
            [sty.ariaModalnoTrigger]: hasVariant(
              $state,
              "noTrigger",
              "noTrigger"
            )
          })}
          defaultOpen={true}
          isDismissable={args.closeOnBackdropClick}
          isKeyboardDismissDisabled={args.isKeyboardDismissDisabled}
          isOpen={generateStateValueProp($state, ["ariaModal", "isOpen"])}
          modalOverlayClass={classNames({ [sty["pcls_HY9LmsSgZ6I3"]]: true })}
          onOpenChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["ariaModal", "isOpen"]).apply(
              null,
              eventArgs
            );
          }}
          ref={ref => {
            $refs["ariaModal"] = ref;
          }}
          resetClassName={classNames(
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens
          )}
        >
          <BaseDialog
            data-plasmic-name={"ariaDialog"}
            data-plasmic-override={overrides.ariaDialog}
            className={classNames("__wab_instance", sty.ariaDialog, {
              [sty.ariaDialognoTrigger]: hasVariant(
                $state,
                "noTrigger",
                "noTrigger"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox__qfPu1)}>
              {renderPlasmicSlot({
                defaultContents: (
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__hQgf1
                    )}
                  >
                    {"Heading"}
                  </h2>
                ),
                value: args.heading
              })}
              <div
                data-plasmic-name={"scrollableContent"}
                data-plasmic-override={overrides.scrollableContent}
                className={classNames(projectcss.all, sty.scrollableContent)}
              >
                {renderPlasmicSlot({
                  defaultContents: (
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___4KXEf
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__uoXtG
                        )}
                      >
                        {"This is a Modal!"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___2U2LP
                        )}
                      >
                        {
                          "You can put anything here!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </div>
                    </Stack__>
                  ),
                  value: args.content
                })}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__o1Dnk)}>
                {renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__rNCt)}
                    >
                      <JamButton
                        className={classNames(
                          "__wab_instance",
                          sty.jamButton__xgvT
                        )}
                        icon={"none"}
                      />
                    </div>
                  ),
                  value: args.footer
                })}
              </div>
            </div>
          </BaseDialog>
        </BaseModal>
      }
      isOpen={generateStateValueProp($state, ["ariaDialogTrigger", "isOpen"])}
      onOpenChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, [
          "ariaDialogTrigger",
          "isOpen"
        ]).apply(null, eventArgs);
      }}
      trigger={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <JamButton
                  className={classNames("__wab_instance", sty.jamButton__duoFw)}
                  icon={"none"}
                />
              ),

              value: args.trigger
            })
          : null
      }
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaDialogTrigger: [
    "ariaDialogTrigger",
    "ariaModal",
    "ariaDialog",
    "scrollableContent"
  ],
  ariaModal: ["ariaModal", "ariaDialog", "scrollableContent"],
  ariaDialog: ["ariaDialog", "scrollableContent"],
  scrollableContent: ["scrollableContent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaDialogTrigger: typeof BaseDialogTrigger;
  ariaModal: typeof BaseModal;
  ariaDialog: typeof BaseDialog;
  scrollableContent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDrawer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDrawer__VariantsArgs;
    args?: PlasmicDrawer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDrawer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDrawer__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDrawer__ArgProps,
          internalVariantPropNames: PlasmicDrawer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrawer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaDialogTrigger") {
    func.displayName = "PlasmicDrawer";
  } else {
    func.displayName = `PlasmicDrawer.${nodeName}`;
  }
  return func;
}

export const PlasmicDrawer = Object.assign(
  // Top-level PlasmicDrawer renders the root element
  makeNodeComponent("ariaDialogTrigger"),
  {
    // Helper components rendering sub-elements
    ariaModal: makeNodeComponent("ariaModal"),
    ariaDialog: makeNodeComponent("ariaDialog"),
    scrollableContent: makeNodeComponent("scrollableContent"),

    // Metadata about props expected for PlasmicDrawer
    internalVariantProps: PlasmicDrawer__VariantProps,
    internalArgProps: PlasmicDrawer__ArgProps
  }
);

export default PlasmicDrawer;
/* prettier-ignore-end */
