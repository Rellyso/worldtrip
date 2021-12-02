import { useState, useEffect } from "react";
import { api } from "../services/api";
import { Continent } from "../services/mirage";

export function useContinents() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    getContinents();
  }, [])

  async function getContinents() {
    const response = await api.get("continents")

    setContinents(response.data.continents)
  }

  return { continents };
}