import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      message: "Welcome to SkillLink!",
      read: false,
      timestamp: new Date(),
    },
  ]);
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date(),
      read: false,
      ...notification,
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = {
    notifications,
    addNotification,
    markAsRead,
    theme,
    toggleTheme,
    mobileMenuOpen,
    setMobileMenuOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
