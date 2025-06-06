const ResetPasswordMeta = {
  name: "ResetPassword",
  section: "🔑 Authentication",
  displayName: "Reset Password",
  description: "Un formulaire pour réinitialiser le mot de passe avec indicateur de force du mot de passe à couleurs dynamiques, visibilité du mot de passe et système d'alertes intégré",
  thumbnailUrl: "https://plasmic-api.agence-scroll.com/reset-password.png",
  props: {

    // Wrapper style
    wrapperStyle: {
      type: "string",
      defaultValue: "card",
      options: ["simple", "card", "custom"],
      description: "Style du conteneur du formulaire",
    },

    // Title
    title: {
      type: "string",
      defaultValue: "Réinitialiser le mot de passe",
    },
    titleHeading: {
      type: "string",
      defaultValue: "h1",
      options: ["h1", "h2", "h3"],
      description: "Niveau du titre",
    },

    // Input
    inputStyle: {
      type: "choice",
      defaultValue: "simple",
      options: ["simple", "advance"],
      description: "Style des champs de saisie",
    },
    
    // Nouveau mot de passe
    passwordLabel: {
      type: "string",
      defaultValue: "Nouveau mot de passe",
    },
    password: {
      type: "string",
      defaultValue: "",
      valueProp: "password",
      onChangeProp: "onPasswordChange",
    },
    passwordPlaceholder: {
      type: "string",
      defaultValue: "Entrez votre nouveau mot de passe",
    },

    // Confirmer mot de passe
    confirmPasswordLabel: {
      type: "string",
      defaultValue: "Répétez le mot de passe",
    },
    confirmPassword: {
      type: "string",
      defaultValue: "",
      valueProp: "confirmPassword",
      onChangeProp: "onConfirmPasswordChange",
    },
    confirmPasswordPlaceholder: {
      type: "string",
      defaultValue: "Confirmez votre mot de passe",
    },

    // Barres de progression pour le mot de passe
    passwordStrength: {
      type: "boolean",
      defaultValue: true,
    },
    
    // Contrôle de visibilité
    showPasswordToggle: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche un bouton pour montrer/masquer le mot de passe",
    },
    showSubmitButton: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche ou masque le bouton de soumission",
    },
    showCancelButton: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche ou masque le bouton Retour",
    },
    showAlerts: {
      type: "boolean",
      defaultValue: true,
      description: "Affiche des alertes pour les erreurs et succès",
    },

    eyeIconColor: {
      type: "string",
      defaultValue: "#666",
      description: "Couleur de l'icône d'œil",
    },

    // Alertes
    alertPosition: {
      type: "choice",
      options: ["top", "bottom", "inline"],
      defaultValue: "top",
      description: "Position des alertes dans le composant",
    },
    maxAlerts: {
      type: "number",
      defaultValue: 3,
      description: "Nombre maximum d'alertes à afficher simultanément",
    },
    customErrorMessages: {
      type: "object",
      description: "Messages d'erreur personnalisés pour chaque type d'erreur",
    },
    resetSuccessMessage: {
      type: "string",
      defaultValue: "Votre mot de passe a été réinitialisé avec succès!",
      description: "Message affiché après une réinitialisation réussie",
    },

    // Boutons
    submitButtonText: {
      type: "string",
      defaultValue: "Réinitialiser",
      description: "Texte du bouton de soumission",
    },
    submitButtonStyle: {
      type: "string",
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary"],
      description: "Style du bouton de soumission",
    },
    cancelButtonText: {
      type: "string",
      defaultValue: "Annuler",
      description: "Texte du bouton annuler",
    },
    cancelButtonStyle: {
      type: "string",
      defaultValue: "tertiary",
      options: ["primary", "secondary", "tertiary"],
      description: "Style du bouton annuler",
    },

    // Events handlers
    onSubmit: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onPasswordChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onConfirmPasswordChange: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
    onAlertClose: {
      type: "eventHandler",
      argTypes: [{ name: "id", type: "string" }],
      description: "Fonction appelée lorsqu'une alerte est fermée",
    },
  },

  // States
  states: {
    password: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'password',
      onChangeProp: 'onPasswordChange'
    },
    confirmPassword: {
      type: 'writable',
      variableType: 'text',
      valueProp: 'confirmPassword',
      onChangeProp: 'onConfirmPasswordChange'
    },
  },
  importPath: "./components/auth/ResetPassword",
};

export default ResetPasswordMeta;
