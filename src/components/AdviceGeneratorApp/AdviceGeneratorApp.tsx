// import { getAdvices } from "../../helpers/getAdvices"
import { useFetchAdvices } from "../../helpers/useFetchAdvices"

export const AdviceGeneratorApp = () => {

  const { advice, error, isLoading, getTips } = useFetchAdvices();

  if(isLoading) return <h1>Loading Advice...</h1>

  if(error) return <h1>Network request failed</h1>

  return (
    <main>

      <h4>Advice # {advice?.id}</h4>
      <h1>{advice?.advice}</h1>
      
      <img src="/assets/images/pattern-divider-desktop.svg" alt="divider" />
      
      <button onClick={getTips}>
        <img src="/assets/images/icon-dice.svg" alt="icon-dice" />
      </button>

    </main>
  )
}