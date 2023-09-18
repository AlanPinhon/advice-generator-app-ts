// import { getAdvices } from "../../helpers/getAdvices"
import { useFetchAdvices } from "../../helpers/useFetchAdvices"

export const AdviceGeneratorApp = () => {

  const { adviceState } = useFetchAdvices();

  return (
    <main>

      <h4>Advice # {adviceState?.id}</h4>
      <h1>{adviceState?.advice}</h1>
      
      <img src="/assets/images/pattern-divider-desktop.svg" alt="divider" />
      
      <img src="/assets/images/icon-dice.svg" alt="icon-dice" />

    </main>
  )
}