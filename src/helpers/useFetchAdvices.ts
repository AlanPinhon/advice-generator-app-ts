import { useEffect, useState } from "react";
import { getAdvices } from "./getAdvices";
import { Advice } from "../types/AdviceTypes";

export const useFetchAdvices = () => {

  const [advice, setAdvice] = useState<Advice>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getTips = async () => {
    try {
      const newAdvice = await getAdvices();
      setAdvice(newAdvice);
      setIsLoading(false);
      setError(null)
    } catch (error) {
      setError(error as Error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTips();
  },[]);
  
  return { advice, error, isLoading , getTips }
}