import { useFetchAdvices } from "../../helpers/useFetchAdvices"
import { AdviceErrorMsg } from "../AdviceErrorMsg/AdviceErrorMsg";
import './AdviceGeneratorAppStyles.css';

export const AdviceGeneratorApp = () => {
  const { advice, error, isLoading, getTips } = useFetchAdvices();

  if(isLoading) return <h1 className="loading-text">Loading Advice...</h1>

  if(error) return <AdviceErrorMsg getTips={getTips} />

  return (
    <main className="advice-app-container">

      <section>
        <h4 className="advice-id">Advice # {advice?.id}</h4>
        <h1 className="advice-text">"{advice?.advice}"</h1>
      </section>
      
      <img className="divider" src="/assets/images/pattern-divider-desktop.svg" alt="divider" />
      
      <button className="advice-btn" onClick={getTips}>
        <img src="/assets/images/icon-dice.svg" alt="icon-dice" />
      </button>

    </main>
  )
}