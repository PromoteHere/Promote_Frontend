
const generateOTP = async (email: string, newuser: string): Promise<void> => {
  try {
    const response = await fetch('https://promotehere-signin.onrender.com/email/generate-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, newuser }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate OTP');
    }
    console.log('OTP generated successfully');
  } catch (error: any) {
    throw new Error(error.message);
  }
};


const verifyOTP = async (email: string, otp: string): Promise<void> => {
  try {
    const response = await fetch('https://promotehere-signin.onrender.com/email/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    if (!response.ok) {
      throw new Error('Failed to verify OTP');
    }
    console.log('OTP verified successfully');
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default { generateOTP, verifyOTP };

