// import { getAdvices } from "../../helpers/getAdvices"
import { useFetchAdvices } from "../../helpers/useFetchAdvices"

export const AdviceGeneratorApp = () => {

  const { advice, error, isLoading } = useFetchAdvices();

  return (
    <main>

      <h4>Advice # {isLoading ? '' : advice?.id}</h4>
      {isLoading && <p>Loading Advice...</p>}
      {error && <p>Network request failed</p>}
      <h1>{advice?.advice}</h1>
      
      <img src="/assets/images/pattern-divider-desktop.svg" alt="divider" />
      <img src="/assets/images/icon-dice.svg" alt="icon-dice" />

    </main>
  )
}