import React, { useState } from "react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

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
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSpecialChars
    )
      return;
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      alert("copied");
    } catch (err) {}
  };
  return (
    <div className="">
      <div className="bg-neutral-900 p-4 text-2xl font-mono my-4 flex justify-between items-center">
        <p className="">{password}</p>
        <HiOutlineDocumentDuplicate
          className="text-2xl text-emerald-500 cursor-pointer"
          onClick={copyToClipboard}
        />
      </div>
      <section className="bg-neutral-900 bg- p-4">
        <div className="flex justify-between my-2">
          <label className="block text-lg ">Character Length </label>
          <p className="text-2xl text-emerald-500 ">{passwordLength}</p>
        </div>
        <input
          className="block w-full mb-4 accent-emerald-500"
          type="range"
          max={24}
          min={0}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <label className="flex items-center my-2 text-lg ">
          <input
            className="mr-4 h-4 w-4 accent-emerald-500"
            type="checkbox"
            checked={includeUppercase}
            onChange={handleCheckboxChange(setIncludeUppercase)}
          />
          Include Uppercase Letters
        </label>
        <label className="flex items-center my-2 text-lg ">
          <input
            className="mr-4 h-4 w-4 accent-emerald-500"
            type="checkbox"
            checked={includeLowercase}
            onChange={handleCheckboxChange(setIncludeLowercase)}
          />
          Include Lowercase Letters
        </label>
        <label className="flex items-center my-2 text-lg ">
          <input
            className="mr-4 h-4 w-4 accent-emerald-500"
            type="checkbox"
            checked={includeNumbers}
            onChange={handleCheckboxChange(setIncludeNumbers)}
          />
          Include Numbers
        </label>
        <label className="flex items-center my-2 text-lg ">
          <input
            className="mr-4 h-4 w-4 accent-emerald-500 "
            type="checkbox"
            checked={includeSpecialChars}
            onChange={handleCheckboxChange(setIncludeSpecialChars)}
          />
          Include Special Characters
        </label>
        <div className="h-12 w-full bg-stone-800 flex items-center justify-between p-6 ">
          <p className="text-zinc-500 font-semibold text-md">STRENGTH</p>
          <p
            className={`text-emerald-500 font-semibold text-xl ${
              passwordLength < 8
                ? "text-red-500"
                : passwordLength < 16
                ? "text-yellow-500"
                : ""
            }`}
          >
            {passwordLength < 8
              ? "Weak"
              : passwordLength < 16
              ? "Medium"
              : "Strong"}
          </p>
        </div>
        <button
          className="w-full bg-emerald-500 text-black text-lg py-2 my-4 "
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </section>
    </div>
  );
};

export default PasswordGenerator;
