"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User { id: string; email: string; full_name?: string; plan: "free" | "pro"; }
interface AuthContextType {
  user: User | null; token: string | null; isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, fullName?: string) => Promise<void>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const t = localStorage.getItem("adlentix_token");
      const u = localStorage.getItem("adlentix_user");
      if (t && u) { setToken(t); setUser(JSON.parse(u)); }
    } catch (_) {}
    setIsLoading(false);
  }, []);

  const persist = (t: string, u: User) => {
    setToken(t); setUser(u);
    localStorage.setItem("adlentix_token", t);
    localStorage.setItem("adlentix_user", JSON.stringify(u));
  };

  const login = async (email: string, _password: string) => {
    const u: User = { id: "u_" + Date.now(), email, full_name: email.split("@")[0], plan: "free" };
    persist("tok_" + Date.now(), u);
  };

  const signup = async (email: string, _password: string, fullName?: string) => {
    const u: User = { id: "u_" + Date.now(), email, full_name: fullName || email.split("@")[0], plan: "free" };
    persist("tok_" + Date.now(), u);
  };

  const logout = () => {
    setToken(null); setUser(null);
    localStorage.removeItem("adlentix_token");
    localStorage.removeItem("adlentix_user");
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, isAuthenticated: !!token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
