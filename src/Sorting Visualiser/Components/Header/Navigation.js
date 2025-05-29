import React from "react"; 
import classes from "./Navigation.module.css";

const Navigation = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.slider}>
                    <label htmlFor="arr_sz">Size of Array</label>
                    <input
                        id="arr_sz"
                        type="range"
                        min="6"
                        max="100"
                        onChange={props.onResize}
                    />
                </li>
                <li className={classes.slider}>
                    <label htmlFor="speed_input">Animation Speed</label>
                    <input
                        id="speed_input"
                        type="range"
                        min="20"
                        max="300"
                        step="10"
                        onChange={props.onSpeed}
                    />
                </li>

                {/* Use an empty li with breaker class to separate */}
                <li className={classes.breaker}></li>

                <li>
                    <button onClick={props.onMergeSort} className="mergeSort">
                        Merge Sort
                    </button>
                </li>

                <li>
                    <button onClick={props.onQuickSort} className="quickSort">
                        Quick Sort
                    </button>
                </li>

                <li>
                    <button onClick={props.onBubbleSort} className="bubbleSort">
                        Bubble Sort
                    </button>
                </li>

                <li>
                    <button onClick={props.onInsertionSort} className="insertionSort">
                        Insertion Sort
                    </button>
                </li>

                <li>
                    <button onClick={props.onSelectionSort} className="selectionSort">
                        Selection Sort
                    </button>
                </li>

                <li className={classes.breaker}></li>

                <li>
                    <button onClick={props.onGenerate} className="new-array">
                        Generate New Array!
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
