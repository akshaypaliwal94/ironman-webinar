"use client";

import { createContext, useContext, useState, useEffect } from "react";

const TicketContext = createContext(12);

export function TicketProvider({ children }: { children: React.ReactNode }) {
  const [tickets, setTickets] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickets((prev) => (prev > 1 ? prev - 1 : prev));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return <TicketContext.Provider value={tickets}>{children}</TicketContext.Provider>;
}

export function useTickets() {
  return useContext(TicketContext);
}
