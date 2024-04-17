
const generateOTP = async (email: string, newuser: string): Promise<void> => {
  try {
    const response = await fetch('http://localhost:8080/email/generate-otp', {
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

export default { generateOTP };
