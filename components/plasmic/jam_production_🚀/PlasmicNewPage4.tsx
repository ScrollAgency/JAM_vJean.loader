/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: LqToj-B7qe35

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

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: f7DE9y7qp46fyCw5nuY8f9/projectcss
import sty from "./PlasmicNewPage4.module.css"; // plasmic-import: LqToj-B7qe35/css

createPlasmicElementProxy;

export type PlasmicNewPage4__VariantMembers = {};
export type PlasmicNewPage4__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage4__VariantsArgs;
export const PlasmicNewPage4__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage4__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage4__ArgsType;
export const PlasmicNewPage4__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage4__OverridesType = {
  root?: Flex__<"div">;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  passwordInput?: Flex__<typeof AntdPassword>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
};

export interface DefaultNewPage4Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage4__RenderFunc(props: {
  variants: PlasmicNewPage4__VariantsArgs;
  args: PlasmicNewPage4__ArgsType;
  overrides: PlasmicNewPage4__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "email",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "password",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
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
            sty.root
          )}
        >
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.form),
              extendedOnValuesChange: async (...eventArgs: any) => {
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["form", "value"],
                  FormWrapper_Helpers
                ).apply(null, eventArgs);
              },
              formItems: undefined,
              labelCol: { span: 8, horizontalOnly: true },
              layout: "vertical",
              mode: undefined,
              onFinish: async values => {
                const $steps = {};

                $steps["invokeGlobalAction"] = true
                  ? (() => {
                      const actionArgs = {
                        args: [
                          (() => {
                            try {
                              return $state.form.value.login;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })(),
                          (() => {
                            try {
                              return $state.form.value.password;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })(),
                          "/maison"
                        ]
                      };
                      return $globalActions[
                        "SupabaseUserGlobalContext.login"
                      ]?.apply(null, [...actionArgs.args]);
                    })()
                  : undefined;
                if (
                  $steps["invokeGlobalAction"] != null &&
                  typeof $steps["invokeGlobalAction"] === "object" &&
                  typeof $steps["invokeGlobalAction"].then === "function"
                ) {
                  $steps["invokeGlobalAction"] = await $steps[
                    "invokeGlobalAction"
                  ];
                }
              },
              onIsSubmittingChange: async (...eventArgs: any) => {
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "isSubmitting",
                  ["form", "isSubmitting"],
                  FormWrapper_Helpers
                ).apply(null, eventArgs);
              },
              ref: ref => {
                $refs["form"] = ref;
              },
              wrapperCol: { span: 16, horizontalOnly: true }
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "form.value"
                },
                {
                  name: "isSubmitting",
                  plasmicStateName: "form.isSubmitting"
                }
              ],
              [],
              FormWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <FormWrapper
                data-plasmic-name={"form"}
                data-plasmic-override={overrides.form}
                {...child$Props}
              >
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__uoyvg)}
                  label={"login"}
                  name={"login"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__zUOhU)}
                  initialValue={(() => {
                    try {
                      return $state.password;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  label={"password"}
                  name={"password"}
                >
                  <AntdPassword
                    className={classNames("__wab_instance", sty.passwordInput)}
                  />
                </FormItemWrapper>
                <AntdButton
                  className={classNames("__wab_instance", sty.button)}
                  submitsForm={true}
                  type={"primary"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Submit"}
                  </div>
                </AntdButton>
              </FormWrapper>
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "form", "input", "passwordInput", "button", "text"],
  form: ["form", "input", "passwordInput", "button", "text"],
  input: ["input"],
  passwordInput: ["passwordInput"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: typeof FormWrapper;
  input: typeof AntdInput;
  passwordInput: typeof AntdPassword;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage4__VariantsArgs;
    args?: PlasmicNewPage4__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewPage4__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNewPage4__ArgProps,
          internalVariantPropNames: PlasmicNewPage4__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage4__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage4";
  } else {
    func.displayName = `PlasmicNewPage4.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage4 = Object.assign(
  // Top-level PlasmicNewPage4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    passwordInput: makeNodeComponent("passwordInput"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicNewPage4
    internalVariantProps: PlasmicNewPage4__VariantProps,
    internalArgProps: PlasmicNewPage4__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage4;
/* prettier-ignore-end */
