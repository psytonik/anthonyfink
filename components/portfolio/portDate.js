import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

const PortfolioDateForm = () => {
    const [startDate, setStartDate] = useState({dateValue:moment()});

    return (
        <DatePicker
            selected={startDate}
            maxDate={moment()}
            onChange={date => setStartDate(date)} />
    );
};
export default PortfolioDateForm;
