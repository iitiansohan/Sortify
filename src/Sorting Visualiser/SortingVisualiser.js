import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import getMergeSort from "./Sorting-Algorithms/MergeSort";
import getQuickSort from "./Sorting-Algorithms/QuickSort";
import getBubbleSort from "./Sorting-Algorithms/BubbleSort";
import getInsertionSort from "./Sorting-Algorithms/InsertionSort";
import getSelectionSort from "./Sorting-Algorithms/SelectionSort";
import "./SortingVisualiser.css";

const PRIMARY_COLOR = "#508991";

const SortingVisualiser = (props) => {
    const [array, resetArray] = useState([]);
    let [resetArrayDepend, setResetArrayDepend] = useState(1);

    let [ANIMATION_SPEED, SET_ANIMATION_SPEED] = useState(20);
    let [NUMBER_OF_ARRAY_BARS, SET_NUMBER_OF_ARRAY_BARS] = useState(50);

    useEffect(() => {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            newArray.push(randomIntFromIntervals(5, 1000));
        }
        resetArray(newArray);
    }, [resetArrayDepend, NUMBER_OF_ARRAY_BARS]);

    const arrayResetHandler = () => {
        const bars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < bars.length; i++)
            bars[i].style.backgroundColor = PRIMARY_COLOR;
        setResetArrayDepend((resetArrayDepend += 1));
    };

    const arrayResizeHandler = (event) => {
        const bars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < bars.length; i++)
            bars[i].style.backgroundColor = PRIMARY_COLOR;
        SET_NUMBER_OF_ARRAY_BARS(event.target.value);
    };

    const speedChangeHandler = (event) => {
        SET_ANIMATION_SPEED(320 - parseInt(event.target.value));
    };

    const mergeSortHandler = () => {
        getMergeSort(ANIMATION_SPEED);
    };

    const quickSortHandler = () => {
        getQuickSort(ANIMATION_SPEED);
    };

    const bubbleSortHandler = () => {
        getBubbleSort(ANIMATION_SPEED);
    };

    const insertionSortHandler = () => {
        getInsertionSort(ANIMATION_SPEED);
    };

    const selectionSortHandler = () => {
        getSelectionSort(ANIMATION_SPEED);
    };

    const widthOfBars =
        NUMBER_OF_ARRAY_BARS > 65
            ? 5
            : NUMBER_OF_ARRAY_BARS > 50
                ? 10
                : NUMBER_OF_ARRAY_BARS > 40
                    ? 18
                    : NUMBER_OF_ARRAY_BARS > 30
                        ? 20
                        : NUMBER_OF_ARRAY_BARS > 20
                            ? 25
                            : NUMBER_OF_ARRAY_BARS > 12
                                ? 30
                                : NUMBER_OF_ARRAY_BARS > 5
                                    ? 100
                                    : 40;

    return (
        <>
            <Header
                onResize={arrayResizeHandler}
                onSpeed={speedChangeHandler}
                onGenerateArray={arrayResetHandler}
                onMergeSort={mergeSortHandler}
                onQuickSort={quickSortHandler}
                onBubbleSort={bubbleSortHandler}
                onInsertionSort={insertionSortHandler}
                onSelectionSort={selectionSortHandler}
            />
            <div className="visualiser-body">
                <div className="array-container">
                    {array.map((value, idx) => {
                        return (
                            <div
                                className="array-bar"
                                id={idx}
                                key={idx}
                                style={{
                                    height: `${value / 1.5}px`,
                                    width: `${widthOfBars}px`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default SortingVisualiser;
