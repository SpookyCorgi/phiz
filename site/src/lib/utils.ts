//types
export interface ShapeFrame {
    shapes: Map<string, number>;
    time: number;
}

const smoothQueueSize: number = 60;
export function dataSmoother (current: ShapeFrame, storedData: ShapeFrame[], smoothBin: number): [ShapeFrame, number] {
    //add current data to storedData
    storedData.push(current);
    //remove oldest data if storedData is longer than queue size
    if (storedData.length > smoothQueueSize) {
        storedData.shift();
    }
    //calculate average
    let average: ShapeFrame = {
        shapes: new Map<string, number>(),
        time: current.time
    };
    let count: number = 0;
    for (let [name, value] of current.shapes.entries()) {
        let sum = 0;
        let j = storedData.length - 1;
        //go through all data within the time frame
        while (j >= 0 && current.time - storedData[j].time < 1000 * smoothBin) {
            sum += storedData[j].shapes.get(name) ?? 0;
            j--;
        }
        count = storedData.length - j - 1;
        //if no data is available, use the current value
        if (count === 0) {
            sum = value;
            count = 1;
        }
        average.shapes.set(name, sum / count);
    }
    return [average, count];
}