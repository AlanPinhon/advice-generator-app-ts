import { getAdvices } from "../../helpers/getAdvices"

export const AdviceGeneratorApp = () => {

  getAdvices();

  return (
    <main>
      <h4>Advice # 117</h4>
      <h1>Phrase here</h1>
      <img src="/assets/images/pattern-divider-desktop.svg" alt="divider" />
      <img src="/assets/images/icon-dice.svg" alt="icon-dice" />
    </main>
  )
}