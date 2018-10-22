pragma solidity ^0.4.24;

library DateTime {
    // EPOCH DATE -> January 1, 1970

    function convertDateToEpoch(uint _year,
                                uint _month,
                                uint _date) public pure returns (uint epochTime){
        epochTime = 0;
        epochTime = calculateDays(_year,_month,_date) * 24 * 60 * 60;
    }

    function convertDateTimeToEpoch(uint _year,
                                    uint _month,
                                    uint _date,
                                    uint _hours,
                                    uint _minutes,
                                    uint _seconds) public pure returns (uint epochTime) {

        epochTime = 0;
        epochTime = (calculateDays(_year, _month, _date) * 24 * 60 * 60) + (_hours * 60 * 60) + (_minutes * 60) + (_seconds);
    }

    function calculateTotalDaysFromJanuary(uint _year, uint _month) private pure returns (uint _days) {
        uint16[12] memory daysOfMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

        _days = daysOfMonth[_month-1];

        if((_year % 4 == 0) && _month >= 2)
            _days += 1;
    }

    function calculateDays(uint _year,
                           uint _month,
                           uint _date) private pure returns (uint _days) {
        _days = 0;
                for(uint dayIndex=1970; dayIndex<_year; dayIndex++) {
            if(dayIndex % 4 == 0)
                _days += 366;
            else
                _days += 365;
        }
        _days = _days + calculateTotalDaysFromJanuary(_year, _month) + (_date - 1);
    }
}
