const transformData = (input_data) => {
    let transformed_data_ohlc = [], transformed_data_volume = [];
    for (let value of input_data) {
        let obj_ohlc = {
            x: new Date(value.Date),
            y: [parseFloat(value.Open), parseFloat(value.High), parseFloat(value.Low), parseFloat(value.Close)]
        };

        let obj_volume = {
            x: new Date(value.Date),
            y: parseFloat(value.Volume)
        };

        transformed_data_ohlc = [...transformed_data_ohlc, obj_ohlc];
        transformed_data_volume = [...transformed_data_volume, obj_volume];
    }

    return { ohlc_data: transformed_data_ohlc, volume_data: transformed_data_volume };
}

export default transformData