export const USERNAME_REGEX: RegExp = /^[a-zA-Z0-9_]+$/;

export const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PHONENUMBER_REGEX: RegExp = /^\d{9}$/;

export const ADDRESS_REGEX: RegExp = /^[a-zA-Z0-9\s,.'-]*$/;

export const PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const VALIDATION_MESSAGE = {
    username: "Username can only contain letters, numbers, underscores, and hyphens.",
    email: "Please enter a valid email address.",
    phone: "Phone number must be 10 digits.",
    address: "Please enter a valid address.",
    password: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
    confirmPassword: "Passwords do not match."
};



// const ValidateFields = (username: string, email: string, phone: string, address: string, password: string): boolean => {
//     const isUsernameValid = USERNAME_REGEX.test(username);
//     const isEmailValid = EMAIL_REGEX.test(email);
//     const isPhoneValid = PHONENUMBER_REGEX.test(phone);
//     const isAddressValid = ADDRESS_REGEX.test(address);
//     const isPasswordValid = PASSWORD_REGEX.test(password);

//     return isUsernameValid && isEmailValid && isPhoneValid && isAddressValid && isPasswordValid;
// };

// export default ValidateFields;