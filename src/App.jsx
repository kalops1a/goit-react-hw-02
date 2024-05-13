import { useState, useEffect } from "react";
import { Feedback } from "./components/Feedback/Feedback";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

export const App = () => {
    const initialState = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    const [feedbackTypes, setFeedbackTypes] = useState(() => {
        const storedFeedback = localStorage.getItem("feedback");
        try {
            return storedFeedback ? JSON.parse(storedFeedback) : initialState;
        } catch (error) {
            console.error("Error parsing stored feedback:", error);
            return initialState;
        }
    }); 

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedbackTypes));
    }, [feedbackTypes]);

    const updateFeedback = (feedbackType) => {
        setFeedbackTypes((prevState) => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setFeedbackTypes(initialState);
    };

    const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
    const positiveFeedback = Math.round((feedbackTypes.good / totalFeedback) * 100);

    return (
        <div>
            <Description />
            <Options updateFeedback={updateFeedback} total={totalFeedback} resetFeedback={resetFeedback} />
            {totalFeedback > 0 ? (
                <Feedback feedbackTypes={feedbackTypes} total={totalFeedback} positiveFeedback={positiveFeedback} />
            ) : (
                <Notification />
            )}
        </div>
    );
};  