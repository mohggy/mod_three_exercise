const modThree = (binaryInput: string): number => {
    let result: number = 0; // at the 0th position, the output will always be 0

    // start at left most position (MSB) and iterate over the string until the right most
    for (let i = 0; i < binaryInput.length; i++) {
        const value: number = parseInt(binaryInput[i]);
        result = getNextState(value, result);
    }
    return result;
}

const getNextState = (bit: number, currentState: number): number => {
    let newState: number = 0;
    if (currentState === 0) {
        newState = bit === 0 ? currentState : 1;
    } else if (currentState === 1) {
        newState = bit === 0 ? 2 : 0
    } else if (currentState === 2) {
        newState = bit === 0 ? 1 : currentState;
    }
    return newState;
}

export default modThree;