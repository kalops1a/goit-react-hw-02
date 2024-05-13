
export const Feedback = ({ feedbackTypes, total, positiveFeedback }) => {
  return (
    <div>
      
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Total: { total}</p>
    <p>Positive: {positiveFeedback}</p>
    </div>
  );
};