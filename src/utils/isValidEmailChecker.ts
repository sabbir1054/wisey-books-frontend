export const isEmailValid = (email: string): boolean => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex and return true if it matches, otherwise false
  return emailRegex.test(email);
};
