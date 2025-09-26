// Register.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Password Strength Component
const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = (pwd) => {
    if (!pwd) return 0;

    let strength = 0;
    if (pwd.length >= 8) strength += 25;
    if (/[A-Z]/.test(pwd)) strength += 25;
    if (/[0-9]/.test(pwd)) strength += 25;
    if (/[^A-Za-z0-9]/.test(pwd)) strength += 25;

    return strength;
  };

  const strength = calculateStrength(password);

  const getStrengthLabel = () => {
    if (strength >= 75) return "Strong";
    if (strength >= 50) return "Medium";
    if (strength >= 25) return "Weak";
    return "Very Weak";
  };

  const getColor = () => {
    if (strength >= 75) return "bg-green-500";
    if (strength >= 50) return "bg-yellow-500";
    if (strength >= 25) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="mt-2">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getColor()}`}
          style={{ width: `${strength}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 mt-1">
        Password strength:{" "}
        <span className="font-medium">{getStrengthLabel()}</span>
      </p>
    </div>
  );
};

// Chip Selector Component
const ChipSelector = ({ options, selected, onChange, label }) => {
  const toggleOption = (option) => {
    const newSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => toggleOption(option)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selected.includes(option)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// File Upload Component
const FileUpload = ({ onFileSelect, previewUrl }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith("image/")) {
      onFileSelect(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {previewUrl ? (
          <div className="space-y-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="mx-auto h-32 w-32 object-cover rounded-full"
            />
            <p className="text-sm text-gray-600">Profile picture preview</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Drag and drop your profile picture here, or{" "}
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  browse files
                </button>
              </p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
            </div>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
      </div>
      {previewUrl && (
        <button
          type="button"
          onClick={triggerFileInput}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
        >
          Change Picture
        </button>
      )}
    </div>
  );
};

// Step Indicator Component
const StepIndicator = ({ currentStep, steps, onStepClick }) => {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center space-x-4 mb-8">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <li key={step.name} className="flex items-center">
              <button
                onClick={() => onStepClick(stepNumber)}
                disabled={stepNumber > currentStep}
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors ${
                  isCompleted
                    ? "bg-blue-500 border-blue-500 text-white"
                    : isCurrent
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-gray-500"
                } ${
                  stepNumber <= currentStep
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }`}
                aria-current={isCurrent ? "step" : undefined}
              >
                {isCompleted ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  stepNumber
                )}
              </button>
              <span
                className={`ml-2 text-sm font-medium ${
                  isCurrent ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`ml-4 w-12 h-0.5 ${
                    stepNumber < currentStep ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// Confetti Animation Component
const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            scale: 0,
          }}
          animate={{
            y: window.innerHeight,
            scale: [0, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "easeOut",
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Main Register Wizard Component
const RegisterWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    email: "",
    password: "",

    // Step 2
    educationLevel: "",
    institution: "",
    skills: [],

    // Step 3
    profilePicture: null,
    previewUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const steps = [
    {
      name: "Personal",
      fields: ["firstName", "lastName", "email", "password"],
    },
    { name: "Education", fields: ["educationLevel", "institution", "skills"] },
    { name: "Profile", fields: ["profilePicture"] },
    { name: "Review", fields: [] },
  ];

  const educationOptions = [
    "High School",
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate",
    "Other",
  ];

  const skillOptions = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "HTML/CSS",
    "SQL",
    "Git",
    "TypeScript",
    "AWS",
  ];

  const validateStep = (step) => {
    const newErrors = {};
    const currentFields = steps[step - 1].fields;

    currentFields.forEach((field) => {
      if (field === "email" && formData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
      }

      if (field === "password" && formData.password) {
        if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters long";
        }
      }

      if (field !== "skills" && field !== "profilePicture") {
        if (!formData[field]) {
          newErrors[field] = "This field is required";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileSelect = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      profilePicture: file,
      previewUrl,
    }));
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleStepClick = (step) => {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const stepVariants = {
    initial: { x: 300, opacity: 0 },
    in: { x: 0, opacity: 1 },
    out: { x: -300, opacity: 0 },
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Confetti />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Registration Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome aboard, {formData.firstName}! Your account has been created
            successfully.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(1);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                educationLevel: "",
                institution: "",
                skills: [],
                profilePicture: null,
                previewUrl: "",
              });
            }}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Register Another Account
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <StepIndicator
          currentStep={currentStep}
          steps={steps}
          onStepClick={handleStepClick}
        />

        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={stepVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password *
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                    <PasswordStrengthMeter password={formData.password} />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Education & Skills
                  </h2>

                  <div>
                    <label
                      htmlFor="educationLevel"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Highest Education Level *
                    </label>
                    <select
                      id="educationLevel"
                      value={formData.educationLevel}
                      onChange={(e) =>
                        handleInputChange("educationLevel", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.educationLevel
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select education level</option>
                      {educationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.educationLevel && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.educationLevel}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="institution"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Institution *
                    </label>
                    <input
                      type="text"
                      id="institution"
                      value={formData.institution}
                      onChange={(e) =>
                        handleInputChange("institution", e.target.value)
                      }
                      className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.institution
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="University or School name"
                    />
                    {errors.institution && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.institution}
                      </p>
                    )}
                  </div>

                  <ChipSelector
                    options={skillOptions}
                    selected={formData.skills}
                    onChange={(skills) => handleInputChange("skills", skills)}
                    label="Select your skills *"
                  />
                  {errors.skills && (
                    <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
                  )}
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Profile Picture
                  </h2>
                  <FileUpload
                    onFileSelect={handleFileSelect}
                    previewUrl={formData.previewUrl}
                  />
                  {errors.profilePicture && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.profilePicture}
                    </p>
                  )}
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Review Your Information
                  </h2>

                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Name
                        </p>
                        <p className="font-medium">
                          {formData.firstName} {formData.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Email
                        </p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Education
                        </p>
                        <p className="font-medium">{formData.educationLevel}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Institution
                        </p>
                        <p className="font-medium">{formData.institution}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Skills
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {formData.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {formData.previewUrl && (
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Profile Picture
                        </p>
                        <img
                          src={formData.previewUrl}
                          alt="Profile preview"
                          className="w-16 h-16 object-cover rounded-full mt-1"
                        />
                      </div>
                    )}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      Please review your information carefully. You can go back
                      to previous steps to make changes.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-md border border-gray-300 text-gray-700 ${
                currentStep === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
            >
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Register Component
const Register = () => {
  return <RegisterWizard />;
};

export default Register;
