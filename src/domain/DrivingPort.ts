interface DrivingPort<IN, OUT> {
    execute(inbound: IN): Promise<OUT>;
}

export default DrivingPort;