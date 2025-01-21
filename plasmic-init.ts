import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {
  SupabaseProvider,
  SupabaseProviderMeta,
  SupabaseUserGlobalContext,
  SupabaseUserGlobalContextMeta,
  SupabaseUppyUploader,
  SupabaseUppyUploaderMeta,
  SupabaseStorageGetSignedUrl,
  SupabaseStorageGetSignedUrlMeta,
} from "plasmic-supabase";

// Import des composants locaux
import { AuthButton } from "./components/AuthButton";
import { AuthForm } from "./components/AuthForm";
import TextInput from "./components/TextInput";
import Icons from "./components/Icons";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import FileUploader from "./components/FileUploader";
import CardJob from "./components/JobCard";
import ProgressBar from "./components/ProgressBar";
import Switch from "./components/Switch";
import TextLink from "./components/TextLink";
import ButtonWalk from "./components/ButtonWalk";
import PhoneSelector from "./components/PhoneSelector/PhoneSelector";
import Dropdown from "./components/DropDown";
import Products from "./components/Products";
import Option from "./components/Option";
//import Map from "./components/Map";

// Initialisation du loader Plasmic
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "f7DE9y7qp46fyCw5nuY8f9",  // ID du projet
      token: "MbfTgnLngWKW6r2sjjKszD0QR0IEyjlKb6jfrxGaXXvu2ahBO3RaSu8TdfJCVSazD06yVW3tXJeOldNd0kw"  // Token API pour le projet
    }
  ],
  // Désactiver pour la production afin d'assurer que seules les modifications publiées sont rendues
  preview: true,
});

// Enregistrement du contexte global Supabase
PLASMIC.registerGlobalContext(SupabaseUserGlobalContext, SupabaseUserGlobalContextMeta);

// Enregistrement des composants Supabase
PLASMIC.registerComponent(SupabaseProvider, SupabaseProviderMeta);
PLASMIC.registerComponent(SupabaseUppyUploader, SupabaseUppyUploaderMeta);
PLASMIC.registerComponent(SupabaseStorageGetSignedUrl, SupabaseStorageGetSignedUrlMeta);

// Remplacement des composants
PLASMIC.substituteComponent(AuthButton, "AuthButton");
PLASMIC.substituteComponent(AuthForm, "AuthForm");

// Enregistrement du composant TextInput avec ses propriétés
PLASMIC.registerComponent(TextInput, {
  name: "TextInput",
  props: {
    Label: "string",
    Placeholder: "string",
    Required: "boolean",
    Type: {
      type: "choice",
      options: ["Default", "Leading Text", "TextArea", "Password", "Phone"],
      defaultValue: "Default",
    },
    Destructive: "boolean",
    disabled: "boolean",
    iconImage: "string",
    prefixedText: "string",
    Hint: "string",
    className: "string",
    iconUrl: "imageUrl",
  },
});

// Enregistrement des composants Icons
Object.entries(Icons).forEach(([iconName, iconComponent]) => {
  PLASMIC.registerComponent(iconComponent, {
    name: `Icons_${iconName}`,
    props: {},
    importPath: "./components/icons",
  });
});

// Enregistrement des composants Button et CheckBox
PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    iconImage: "imageUrl",
    label: "string",
  },
  importPath: "./components/Button",
});

PLASMIC.registerComponent(CheckBox, {
  name: "CheckBox",
  props: {
    checked: "boolean",
    type: {
      type: "choice",
      defaultValue: "Checkbox",
      options: ["Checkbox", "Check circle"],
      required: false,
    },
    disabled: "boolean",
  },
  importPath: "./components/CheckBox",
});

// Enregistrement des autres composants (Uploader, CardJob, ProgressBar, Switch, etc.)
PLASMIC.registerComponent(FileUploader, {
  name: "FileUploader",
  props: {},
  importPath: "./components/FileUploader",
});

PLASMIC.registerComponent(CardJob, {
  name: "CardJob",
  props: {
    title: "string",
    description: "string",
    location: "string",
    date: "string",
    time: "string",
    icon: "imageUrl",
  },
  importPath: "./components/JobCard",
});

PLASMIC.registerComponent(ProgressBar, {
  name: "ProgressBar",
  props: {
    progress: "number",
  },
  importPath: "./components/ProgressBar",
});

PLASMIC.registerComponent(Switch, {
  name: "Switch",
  props: {
    disabled: "boolean",
  },
  importPath: "./components/Switch",
});

PLASMIC.registerComponent(TextLink, {
  name: "TextLink",
  props: {
    redirect: {
      type: "string",
      defaultValue: "",
    },
    label: "string",
    size: {
      type: "choice",
      defaultValue: "Small",
      options: ["Small", "Large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "None",
      options: ["Start", "None", "End"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
  importPath: "./components/TextLink",
});

PLASMIC.registerComponent(ButtonWalk, {
  name: "ButtonWalk",
  props: {
    label: "string",
    variant: {
      type: "choice",
      defaultValue: "active",
      options: ["active", "inactive", "disabled"],
      required: false,
    },
    size: {
      type: "choice",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
  importPath: "./components/ButtonWalk",
});

PLASMIC.registerComponent(PhoneSelector, {
  name: "PhoneSelector",
  props: {},
  importPath: "./components/PhoneSelector/PhoneSelector",
});

// Enregistrement du composant DropDownSelector
// Dans ton fichier d'enregistrement des composants

PLASMIC.registerComponent(Dropdown, {
  name: "Dropdown",  // Nom du composant dans Plasmic
  props: {
    iconeUrl: "imageUrl",  // L'URL de l'icône optionnelle
    label: {
      type: "string",  // Le label du select
      defaultValue: "Choisir une option",  // Valeur par défaut du label
    },
    options: {
      type: "object",  // Pour stocker une liste d'options (par exemple un tableau d'objets)
      defaultValue: [
        { key: "1", value: "Option 1" },
        { key: "2", value: "Option 2" },
        { key: "3", value: "Option 3" }
      ]
    },
    children: {
      type: "slot", // Le slot pour accepter des composants enfants (par exemple des options)
      allowedComponents: ["Option"], // Ici, tu peux accepter des composants `Option` comme enfants
      defaultValue: [
        {
          type: "component",
          name: "Option",  // Assure-toi que `Option` est enregistré aussi dans Plasmic
          props: {
            value: "Option 1",
            children: { type: "text", value: "Option 1" }
          }
        },
        {
          type: "component",
          name: "Option",  // Assure-toi que `Option` est enregistré aussi dans Plasmic
          props: {
            value: "Option 2",
            children: { type: "text", value: "Option 2" }
          }
        }
      ]
    },
  },
  importPath: "./components/DropDown",  // Chemin d'importation du composant DropDownSelector
});

PLASMIC.registerComponent(Option, {
  name: "Option",
  props: {
    value: "string",
    children: {
      type: "slot",
      defaultValue: "Option Text",
    },
  },
  importPath: "./components/Option",
});

// PLASMIC.registerComponent(Map, {
//   name: "Map",
//   props: {
//     apiKey: "string",
//     width: "string",
//     height: "string",
//     zoom: "number",
//     center: {
//       type: "object",
//       defaultValue: { lat: 0, lng: 0 }
//     },
//     markers: {
//       type: "object",
//       defaultValue: []
//     },
//     emplacements: {
//       type: "object",
//       defaultValue: []
//     }
//   },
//   importPath: "./components/Map"
// });






