// Define allowed email addresses
const ALLOWED_EMAILS = [
  process.env.SANITY_ALLOWED_EMAIL_1,
  process.env.SANITY_ALLOWED_EMAIL_2,
].filter(Boolean) as string[];

export const authConfig = {
  // Custom authentication check
  authenticate: async (email: string) => {
    if (!ALLOWED_EMAILS.length) {
      console.warn(
        "No allowed emails configured. Please set SANITY_ALLOWED_EMAIL_1 and/or SANITY_ALLOWED_EMAIL_2 environment variables."
      );
      return false;
    }

    const isAllowed = ALLOWED_EMAILS.includes(email.toLowerCase());
    console.log(
      `Authentication attempt for ${email}: ${isAllowed ? "ALLOWED" : "DENIED"}`
    );
    return isAllowed;
  },

  // Get user info
  getUser: async (email: string) => {
    if (!ALLOWED_EMAILS.includes(email.toLowerCase())) {
      return null;
    }

    return {
      id: email,
      email: email,
      name: email.split("@")[0], // Use email prefix as name
      image: undefined,
    };
  },
};

// Export the allowed emails for reference
export { ALLOWED_EMAILS };
