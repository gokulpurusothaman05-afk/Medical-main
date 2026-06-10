(function () {
  const AUTH_KEY = "stackly_medical_session";

  window.StacklyAuth = {
    signIn(email) {
      sessionStorage.setItem(
        AUTH_KEY,
        JSON.stringify({ email: email || "", signedIn: true }),
      );
    },

    signOut() {
      sessionStorage.removeItem(AUTH_KEY);
    },

    isSignedIn() {
      try {
        return JSON.parse(sessionStorage.getItem(AUTH_KEY) || "{}").signedIn === true;
      } catch {
        return false;
      }
    },
  };

  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

  window.validateMedicalCredentials = function (email, password) {
    if (!gmailPattern.test(email)) {
      alert("Email must end with @gmail.com");
      return false;
    }

    if (!passwordPattern.test(password)) {
      alert(
        "Password must contain:\n- Uppercase letter\n- Lowercase letter\n- Number\n- Special symbol\n- Minimum 6 characters",
      );
      return false;
    }

    return true;
  };
})();
