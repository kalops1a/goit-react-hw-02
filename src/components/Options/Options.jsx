import css from "./Options.module.css"

export const Options = ({updateFeedback, resetFeedback, total}) => {
    const handleClick = (feedbackType) => {
        updateFeedback(feedbackType);
}




    return (
        <div className= {css.buttonBox}>
    <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
            <button onClick={() => handleClick('bad')}>Bad</button>
            {total > 0 && <button onClick={resetFeedback}>Reset</button>}
</div>

    )
}   
