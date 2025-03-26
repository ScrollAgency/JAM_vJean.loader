import type * as React from "react";
import { forwardRef } from "react";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { presets, getTokenValue } from "@/styles/presets";
import PhoneSelector from "../../forms/PhoneSelector/PhoneSelector";
import ButtonGoogle from "../../buttons/ButtonGoogle/ButtonGoogle";
import ButtonApple from "../../buttons/ButtonApple/ButtonApple";
import AlertManager, { type AlertType, type AlertMessage } from "../../alerts/AlertManager/AlertManager";

export interface SignUpProps {

  wrapperStyle?: "simple" | "card" | "custom";
  inputStyle?: "simple" | "advance";
  titleHeading?: "h1" | "h2" | "h3";
  title?: string;

  // Styles des inputs
  showLabels?: boolean;
  emailLabel?: string;
  passwordLabel?: string;
  firstNameLabel?: string;
  lastNameLabel?: string;
  confirmPasswordLabel?: string;

  placeholderEmail?: string;
  placeholderPassword?: string;
  placeholderFirstName?: string;
  placeholderLastName?: string;
  placeholderConfirmPassword?: string;
  phoneLabel?: string;
  placeholderPhone?: string;
  
  // Contrôle de visibilité du mot de passe
  showPasswordToggle?: boolean;
  eyeIconColor?: string;

  // Styles du bouton Submit
  buttonStyle?: "primary" | "secondary" | "tertiary";
  buttonAbordStyle?: "primary" | "secondary" | "tertiary";
  submitButtonText?: string;

  // Boutons OAuth
  showOAuthButtons?: boolean;
  googleButtonText?: string;
  appleButtonText?: string;
  oAuthButtonsPosition?: 'top' | 'bottom';
  oAuthSeparatorText?: string;

  // Lien de connexion
  showLoginLink?: boolean;
  loginLinkText?: string;
  loginLinkHref?: string;

  // Gestion des alertes
  showAlerts?: boolean;
  alertPosition?: 'top' | 'bottom' | 'inline';
  maxAlerts?: number;
  customErrorMessages?: {
    invalidEmail?: string;
    weakPassword?: string;
    passwordMismatch?: string;
    invalidPhone?: string;
    networkError?: string;
    emailExists?: string;
  };

  // Comportement
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;

  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  onFirstNameChange?: (value: string) => void;
  onLastNameChange?: (value: string) => void;
  onConfirmPasswordChange?: (value: string) => void;
  onPhoneChange?: (value: string) => void;
  onGoogleSignIn?: () => void;
  onAppleSignIn?: () => void;
  onAlertClose?: (id: string) => void;

  isPasswordValid?: boolean;

  // Autres
  passwordInfoText?: string;
  privacyPolicyText?: string;
}

function SignUp_(
  props: SignUpProps, 
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    wrapperStyle = "card",
    buttonStyle = "primary",
    buttonAbordStyle = "tertiary",
    inputStyle = "simple",
    titleHeading = "h1",
    title = "Inscription",

    showLabels = true,
    emailLabel = "Email",
    passwordLabel = "Mot de passe",
    confirmPasswordLabel = "Répétez le mot de passe",
    firstNameLabel = "Prénom",
    lastNameLabel = "Nom",
    phoneLabel = "Téléphone",

    placeholderEmail = "Email",
    placeholderPassword = "••••••••",
    placeholderFirstName = "Prénom",
    placeholderLastName = "Nom",
    placeholderPhone = "060606060606",
    placeholderConfirmPassword = "••••••••",
    
    // Contrôle de visibilité du mot de passe
    showPasswordToggle = true,
    eyeIconColor = "#666",

    submitButtonText = "S'inscrire",

    // Boutons OAuth
    showOAuthButtons = true,
    googleButtonText = "GOOGLE",
    appleButtonText = "APPLE",
    oAuthButtonsPosition = 'bottom',
    oAuthSeparatorText = "ou",

    // Lien de connexion
    showLoginLink = true,
    loginLinkText = "Déjà inscrit(e) ? CONNEXION",

    // Gestion des alertes
    showAlerts = true,
    alertPosition = 'top',
    maxAlerts = 3,
    customErrorMessages,

    passwordInfoText = "Utilisez 8 caractères ou plus en mélangeant lettres, chiffres et symboles.",
    privacyPolicyText = "J'accepte la politique de confidentialité",

    onSubmit,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onFirstNameChange,
    onLastNameChange,
    onPhoneChange,
    onGoogleSignIn,
    onAppleSignIn,
    onAlertClose,
  } = props;

  const Title = titleHeading as keyof JSX.IntrinsicElements;
  const [email, setEmail] = useState(props.email || "");
  const [firstName, setFirstName] = useState(props.firstName || "");
  const [lastName, setLastName] = useState(props.lastName || "");
  const [password, setPassword] = useState(props.password || "");
  const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword || "");
  const [phone, setPhone] = useState(props.phone || "");
  const [countryCode, setCountryCode] = useState("+33");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);

  // Messages d'erreur par défaut
  const defaultErrorMessages = {
    invalidEmail: "L'adresse email n'est pas valide",
    weakPassword: "Le mot de passe est trop faible. Utilisez au moins 8 caractères avec des lettres, chiffres et symboles.",
    passwordMismatch: "Les mots de passe ne correspondent pas",
    invalidPhone: "Veuillez entrer un numéro de téléphone valide",
    networkError: "Une erreur réseau s'est produite. Veuillez réessayer.",
    emailExists: "Cette adresse email est déjà utilisée"
  };

  // Fusionner avec les messages personnalisés
  const errorMessages = { ...defaultErrorMessages, ...customErrorMessages };

  // Ajouter une alerte
  const addAlert = (type: AlertType, message: string) => {
    const id = Date.now().toString();
    setAlerts(prevAlerts => [...prevAlerts, { id, type, message }]);
    return id;
  };

  // Supprimer une alerte
  const removeAlert = (id: string) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
    if (onAlertClose) onAlertClose(id);
  };

  // Gestion du changement des inputs
  const handleEmailChange = useCallback((value: string) => {
      setEmail(value);
      if (onEmailChange) onEmailChange(value);
    }, [onEmailChange]);

  const handleFirstNameChange = useCallback((value: string) => {
    setFirstName(value);
    if (onFirstNameChange) onFirstNameChange(value);
  }, [onFirstNameChange]);

  const handleLastNameChange = useCallback((value: string) => {
    setLastName(value);
    if (onLastNameChange) onLastNameChange(value);
  }, [onLastNameChange]);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
    checkPasswordStrength(value);
    if (onPasswordChange) onPasswordChange(value);
  }, [onPasswordChange]);

  const handleConfirmPasswordChange = useCallback((value: string) => {
    setConfirmPassword(value);
    if (onConfirmPasswordChange) onConfirmPasswordChange(value);
  }, [onConfirmPasswordChange]);

  // Fonction pour formater le numéro de téléphone à l'affichage 
  const formatPhoneDisplay = (phoneNumber: string) => {
    if (!phoneNumber) return '';
    
    // Format par groupes de 2 chiffres (XX XX XX XX XX)
    return phoneNumber.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  };

  // Gestion des changements du numéro de téléphone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Nettoyage du numéro : on garde seulement les chiffres
    let cleanedValue = inputValue.replace(/[^\d]/g, '');
    // Limitation à 15 chiffres maximum (standard international)
    cleanedValue = cleanedValue.slice(0, 15);
    // Mise à jour de l'état interne
    setPhone(cleanedValue);
    // Validation du numéro
    const isValidPhone = cleanedValue.length >= 8; // Longueur minimale pour un numéro valide
    setPhoneError(!isValidPhone && cleanedValue.length > 0);
    // Affichage formaté dans le champ
    e.target.value = formatPhoneDisplay(cleanedValue);
    // Appel de la fonction callback
    onPhoneChange?.(cleanedValue);
  };

  const checkPasswordStrength = useCallback((password: string) => {
    const criteria = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/];
    const hasMinLength = password.length >= 8;
    const criteriaCount = criteria.filter(regex => regex.test(password)).length;
    setPasswordStrength(hasMinLength ? criteriaCount : Math.min(criteriaCount, 2));
  }, []);

  const renderStrengthBars = () => {
    const bars = [];
    for (let i = 0; i < 4; i++) {
      bars.push(
        <div
          key={i}
          style={{
            ...presets.strengthBar as React.CSSProperties,
            backgroundColor: i < passwordStrength ? getStrengthColor(passwordStrength) : getTokenValue("grey-300")
          }}
        />
      );
    }
    return bars;
  };

  const getStrengthColor = (strength: number) => {
    switch (strength) {
      case 1: return "#ff4d4d"; // Rouge pour très faible
      case 2: return "#ffaa00"; // Orange pour faible
      case 3: return "#c9d64f"; // Vert clair pour moyen
      case 4: return "#4caf50"; // Vert foncé pour fort
      default: return "#ddd"; // Gris par défaut
    }
  };

  // Fonction de bascule pour la visibilité du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Fonction de bascule pour la visibilité de la confirmation du mot de passe
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>Icône d'œil</title> {/* Accessibilité */}
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const ViewIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>Icône de vue</title> {/* Accessibilité */}
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  useEffect(() => {
    setEmail((prevEmail) => props.email || prevEmail);
    setFirstName((prevFirstName) => props.firstName || prevFirstName);
    setLastName((prevLastName) => props.lastName || prevLastName);
    setPassword((prevPassword) => props.password || prevPassword);
    setConfirmPassword((prevConfirmPassword) => props.confirmPassword || prevConfirmPassword);
    setPhone((prevPhone) => props.phone || prevPhone);
    if (props.password) checkPasswordStrength(props.password);
  }, [props.email, props.firstName, props.lastName, props.password, props.confirmPassword, props.phone, checkPasswordStrength]);

  // Nettoyage des alertes
  useEffect(() => {
    return () => {
      setAlerts([]);
    };
  }, []);

  // Rendu des boutons OAuth
  const renderOAuthButtons = () => {
    if (!showOAuthButtons) return null;
    
    return (
      <div style={presets.oAuthButtons as React.CSSProperties}>
        <div
          onClick={onGoogleSignIn}
          role="button"
          tabIndex={0}
          style={presets.oAuthButton as React.CSSProperties}
          onKeyDown={(e) => e.key === 'Enter' && onGoogleSignIn?.()}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8084 9.2C17.8084 8.6 17.7584 8 17.6584 7.4H9.00839V10.9H13.9584C13.7584 12 13.1084 12.9 12.1084 13.5V15.8H15.0084C16.7084 14.2 17.8084 11.9 17.8084 9.2Z" fill="#4285F4"/>
            <path d="M9.00843 18C11.4084 18 13.4084 17.2 15.0084 15.8L12.1084 13.5C11.3084 14 10.2584 14.3 9.00843 14.3C6.60843 14.3 4.60843 12.7 3.90843 10.6H0.908432V13C2.50843 16 5.50843 18 9.00843 18Z" fill="#34A853"/>
            <path d="M3.90833 10.6C3.70833 10 3.60833 9.4 3.60833 8.8C3.60833 8.2 3.70833 7.6 3.90833 7L3.90833 4.6H0.908328C0.308328 5.9 -0.00167273 7.3 -0.00167273 8.8C-0.00167273 10.3 0.308328 11.7 0.908328 13L3.90833 10.6Z" fill="#FBBC05"/>
            <path d="M9.00843 3.3C10.3084 3.3 11.4584 3.7 12.3584 4.6L14.9084 2C13.4084 0.8 11.4084 0 9.00843 0C5.50843 0 2.50843 2 0.908432 5L3.90843 7.4C4.60843 5.3 6.60843 3.3 9.00843 3.3Z" fill="#EA4335"/>
          </svg>
          {googleButtonText}
        </div>
        <div
          onClick={onAppleSignIn}
          role="button"
          tabIndex={0}
          style={presets.oAuthButton as React.CSSProperties}
          onKeyDown={(e) => e.key === 'Enter' && onAppleSignIn?.()}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3354 9.47829C14.3173 7.21055 16.1398 6.14422 16.2304 6.08828C15.0317 4.34462 13.1617 4.09605 12.4961 4.08056C10.9048 3.92143 9.3677 5.05102 8.56057 5.05102C7.73586 5.05102 6.49336 4.09605 5.16367 4.12963C3.45429 4.16321 1.87805 5.18162 1.02148 6.73602C-0.743086 9.8914 0.626914 14.6195 2.31773 17.3183C3.16086 18.6389 4.15742 20.1281 5.46367 20.0621C6.72711 19.9907 7.20429 19.1879 8.71836 19.1879C10.2152 19.1879 10.6596 20.0621 11.9838 20.0223C13.3533 19.9907 14.2037 18.6718 15.0121 17.3402C15.9815 15.8235 16.3706 14.3397 16.3887 14.2737C16.3525 14.2628 14.3571 13.4927 14.3354 11.2359C14.3173 9.34099 15.904 8.42087 15.9973 8.35384C14.8221 6.68471 13.0212 6.45943 12.4961 6.41266C10.9371 6.25352 9.59836 7.23076 8.71836 7.23076C7.8563 7.23076 6.67148 6.45943 5.29461 6.45943C5.29742 6.45943 5.29742 6.45943 5.29461 6.45943Z" fill="black"/>
            <path d="M12.2016 2.23033C12.8977 1.37239 13.3368 0.186 13.2079 -1C12.1957 0.0486913 10.8865 0.813195 10.159 1.64423C9.51504 2.37865 8.98067 3.60254 9.12773 4.75541C10.2692 4.84572 11.4774 3.08827 12.2016 2.23033Z" fill="black"/>
          </svg>
          {appleButtonText}
        </div>
      </div>
    );
  };

  // Fonction de validation de l'email
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Réinitialiser les alertes précédentes
    setAlerts([]);
    
    // Validation du formulaire
    let isValid = true;
    let hasShownError = false;
    
    // Validation de l'email
    if (!validateEmail(email)) {
      isValid = false;
      addAlert('error', errorMessages.invalidEmail);
      hasShownError = true;
    }
    
    // Validation du mot de passe
    if (passwordStrength < 3) {
      isValid = false;
      if (!hasShownError) {
        addAlert('error', errorMessages.weakPassword);
        hasShownError = true;
      }
    }
    
    // Vérification de la correspondance des mots de passe
    if (password !== confirmPassword) {
      isValid = false;
      setPasswordsMatch(false);
      if (!hasShownError) {
        addAlert('error', errorMessages.passwordMismatch);
        hasShownError = true;
      }
    } else {
      setPasswordsMatch(true);
    }
    
    // Vérification de la longueur minimale du numéro de téléphone
    if (phone.length < 8) {
      isValid = false;
      setPhoneError(true);
      if (!hasShownError) {
        addAlert('error', errorMessages.invalidPhone);
      }
    } else {
      setPhoneError(false);
    }
    
    // Si tout est valide, on soumet le formulaire
    if (isValid && onSubmit) {
      try {
        onSubmit(e);
        // Afficher une alerte de succès uniquement si aucune erreur n'a été lancée par onSubmit
        addAlert('success', "Votre compte a été créé avec succès!");
      } catch (error) {
        // Capturer les erreurs lancées par onSubmit
        if (error instanceof Error) {
          addAlert('error', error.message || errorMessages.networkError);
        } else {
          addAlert('error', errorMessages.networkError);
        }
      }
    }
  };

  const nameInputGroup = {
    display: "flex",
    gap: "16px",
    width: "100%",
    marginBottom: "16px",
    
    "@media (max-width: 768px)": {
      flexDirection: "column"
    }
  };

  // Définir les composants manquants
  const ArrowIcon = () => (
    <span style={{ marginLeft: "8px" }}>→</span>
  );

  return (
    <div
      ref={ref}
      style={presets.wrappers[wrapperStyle] as React.CSSProperties}
    >
      <Title style={presets.heading1 as React.CSSProperties}>{title}</Title>

      {showAlerts && <AlertManager 
        alerts={alerts} 
        position={alertPosition} 
        onClose={removeAlert}
        maxAlerts={maxAlerts}
      />}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        {oAuthButtonsPosition === 'top' && showOAuthButtons && renderOAuthButtons()}

        {showLabels && (
          <div style={nameInputGroup as React.CSSProperties}>
            <div style={{ width: "100%" }}>
              <label style={presets.formLabel as React.CSSProperties} htmlFor="firstNameInput">{firstNameLabel}</label>
              <input
                type="text"
                id="firstNameInput"
                placeholder={placeholderFirstName}
                value={firstName}
                onChange={(e) => handleFirstNameChange(e.target.value)}
                required
                style={presets.inputs[inputStyle]}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label style={presets.formLabel as React.CSSProperties} htmlFor="lastNameInput">{lastNameLabel}</label>
              <input
                type="text"
                id="lastNameInput"
                placeholder={placeholderLastName}
                value={lastName}
                onChange={(e) => handleLastNameChange(e.target.value)}
                required
                style={presets.inputs[inputStyle]}
              />
            </div>
          </div>
        )}

        <div style={presets.formLabel as React.CSSProperties}>
          {showLabels && (
            <label
              htmlFor="emailInput"
              style={presets.formLabel as React.CSSProperties}
            >
              {emailLabel}
            </label>
          )}
          <input
            type="email"
            id="emailInput"
            placeholder={placeholderEmail}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            required
            style={presets.inputs[inputStyle]}
          />
        </div>

        <div style={presets.formLabel as React.CSSProperties}>
          {showLabels && (
            <label
              htmlFor="phoneInput"
              style={presets.formLabel as React.CSSProperties}
            >
              {phoneLabel}
            </label>
          )}
          <div style={presets.phoneInputGroup as React.CSSProperties}>
            <PhoneSelector style={presets.phoneSelector as React.CSSProperties} />
            <input
              type="tel"
              id="phoneInput"
              placeholder={placeholderPhone}
              value={formatPhoneDisplay(phone)}
              onChange={handlePhoneChange}
              required
              style={presets.phoneInput as React.CSSProperties}
            />
          </div>
        </div>

        <div style={presets.inputField as React.CSSProperties}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="passwordInput">{passwordLabel}</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="passwordInput"
              placeholder={placeholderPassword}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
              style={presets.inputs[inputStyle]}
            />
            {showPasswordToggle && (
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                style={presets.togglePasswordVisibility as React.CSSProperties}
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? <EyeIcon /> : <ViewIcon />}
              </button>
            )}
          </div>
          <div style={presets.strengthBars as React.CSSProperties}>{renderStrengthBars()}</div>
          <small style={presets.passwordHint as React.CSSProperties}>{passwordInfoText}</small>
        </div>

        <div style={presets.inputField as React.CSSProperties}>
          <label style={presets.formLabel as React.CSSProperties} htmlFor="confirmPasswordInput">{confirmPasswordLabel}</label>
          <div style={{ position: "relative" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPasswordInput"
              placeholder={placeholderConfirmPassword}
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              required
              style={presets.inputs[inputStyle]}
            />
            {showPasswordToggle && (
              <button 
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                style={presets.togglePasswordVisibility as React.CSSProperties}
                aria-label={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showConfirmPassword ? <EyeIcon /> : <ViewIcon />}
              </button>
            )}
          </div>
        </div>

        <div style={presets.checkboxGroup as React.CSSProperties}>
          <input type="checkbox" id="termsCheckbox" required />
          <label htmlFor="termsCheckbox" style={presets.checkboxLabel as React.CSSProperties}>
            {privacyPolicyText}
          </label>
        </div>

        <button
          type="submit"
          style={presets.buttons[buttonStyle] as React.CSSProperties}
        >
          {submitButtonText} <ArrowIcon />
        </button>
      </form>

      {oAuthButtonsPosition === 'bottom' && showOAuthButtons && renderOAuthButtons()}

      {showLoginLink && (
        <div style={{...presets.loginLinkContainer as React.CSSProperties, marginTop: "8px"}}>
          <Link href={"/login"} style={{
            ...presets.loginLink as React.CSSProperties,
            color: getTokenValue("information-text")
          }}>
            {loginLinkText}
          </Link>
        </div>
      )}
    </div>
  );
}

const SignUp = forwardRef<HTMLDivElement, SignUpProps>(SignUp_);
export default SignUp;
