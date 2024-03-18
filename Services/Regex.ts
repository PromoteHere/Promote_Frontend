export const USERNAME_REGEX: RegExp = /^[a-zA-Z0-9_]+$/;

export const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PHONENUMBER_REGEX: RegExp = /^\d{10}$/;

export const ADDRESS_REGEX: RegExp = /^[a-zA-Z0-9\s,.'-]*$/;

export const PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// const ValidateFields = (username: string, email: string, phone: string, address: string, password: string): boolean => {
//     const isUsernameValid = USERNAME_REGEX.test(username);
//     const isEmailValid = EMAIL_REGEX.test(email);
//     const isPhoneValid = PHONENUMBER_REGEX.test(phone);
//     const isAddressValid = ADDRESS_REGEX.test(address);
//     const isPasswordValid = PASSWORD_REGEX.test(password);

//     return isUsernameValid && isEmailValid && isPhoneValid && isAddressValid && isPasswordValid;
// };

// export default ValidateFields;