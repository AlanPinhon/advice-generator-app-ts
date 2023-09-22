import './AdviceErrorMsgStyles.css';

type retryClickProps = {
  getTips: () => Promise<void>;
}

export const AdviceErrorMsg = ({getTips}:retryClickProps) => {
  return (
    <section className="error-container">
      <img className="warn-icon" src="/assets/images/alert-triangle.svg" alt="warn-icon" />
      <h1 className="error-msg">Network request failed</h1>
      <button onClick={getTips} className="retry-btn">Retry</button>
    </section>
  )
}