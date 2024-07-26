import React, { useState, useRef } from 'react';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [colorStatus, setColorStatus] = useState('#112D4E');
  const [borderColor, setBorderColor] = useState('#DBE2EF');

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    // Validate input (allow only digits)
    const sanitizedValue = value.replace(/\D/g, '');

    // Update the otp state
    const newOtp = otp.slice(0, index) + sanitizedValue + otp.slice(index + 1);
    setOtp(newOtp);

    // Move focus to the next input field
    if (sanitizedValue.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace: move focus to the previous input field
    if (e.key === 'Backspace') {
      if (otp[index]) {
        // Delete the current character and update the otp state
        const newOtp = otp.slice(0, index) + otp.slice(index + 1);
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }

    // Handle arrow keys to navigate between input fields
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
    if (e.key === 'ArrowRight' && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }

    // Handle Enter key to trigger OTP verification
    if (e.key === 'Enter' && index === inputRefs.length - 1) {
      verifyOtp();
    }
  };

  const verifyOtp = () => {
    if (otp === '1234') {
      setVerificationStatus('Verified');
      setColorStatus('green');
      setBorderColor('green');
    } else {
      setVerificationStatus('Verification Failed');
      setColorStatus('red');
      setBorderColor('red');
    }
    setOtp('');

    setTimeout(() => {
      setVerificationStatus(null);
      setColorStatus('#112D4E');
      setBorderColor('#DBE2EF');
    }, 3000);
  };

  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="w-fit px-10 h-96 bg-white text-center rounded-2xl">
        <h1 className="font-[700] text-3xl font-DMSans mt-10">
          Mobile Phone Verification
        </h1>
        <p className="text-[#BFBFBF] font-[400] text-wrap text-md">
          Enter the 4-digit verification code that was sent to your phone number.
        </p>
        <div className="flex gap-10 justify-center mt-10">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              className={`bg-[#DBE2EF] rounded-2xl h-20 w-20 ${verificationStatus===null ? 'outline-blue-500 outline-8' : 'outline-none'} text-4xl text-center caret-transparent border-2`}
              style={{ borderColor: borderColor }}
              type="text"
              name="otp"
              id={`otp-${index}`}
              maxLength={1}
              value={otp[index] || ''}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <button
          className={` px-20 py-2 mt-10 text-white rounded-md`}
          style={{ backgroundColor: colorStatus }}
          onClick={() => verifyOtp()}
        >
          {verificationStatus || 'Verify Account'}
        </button>
        <p className="text-[#BFBFBF] font-[400] font-DMSans mt-4">
          Didn’t receive the code?{' '}
          <span className="text-[#112D4E] cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default Otp;
