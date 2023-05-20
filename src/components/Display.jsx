import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [passwordLength, setPasswordLength] = useState(0);

  const generatePassword = () => {
    const charSets = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      specialChars: "!@#$%^&*",
    };

    let charSet = "";
    if (includeUppercase) charSet += charSets.uppercase;
    if (includeLowercase) charSet += charSets.lowercase;
    if (includeNumbers) charSet += charSets.numbers;
    if (includeSpecialChars) charSet += charSets.specialChars;

    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      newPassword += charSet.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  return (
    <div>
      <label>
        Length:
        <input
          type="range"
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </label>
      <label>
        Include Uppercase Letters:
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={handleCheckboxChange(setIncludeUppercase)}
        />
      </label>
      <label>
        Include Lowercase Letters:
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={handleCheckboxChange(setIncludeLowercase)}
        />
      </label>
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={handleCheckboxChange(setIncludeNumbers)}
        />
      </label>
      <label>
        Include Special Characters:
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={handleCheckboxChange(setIncludeSpecialChars)}
        />
      </label>
      <button onClick={generatePassword}>Generate Password</button>
      <p>{password}</p>
    </div>
  );
};

export default PasswordGenerator;
