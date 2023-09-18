import { useEffect, useState } from "react";
import { getAdvices } from "./getAdvices";
import { Advice } from "../types/AdviceTypes";

export const useFetchAdvices = () => {

  const [adviceState, setAdviceState] = useState<Advice>();

  const getTips = async () => {
    const newAdvice = await getAdvices();
    setAdviceState(newAdvice);
  }

  useEffect(() => {
    getTips();
  },[]);
  
  return { adviceState, getTips }
}