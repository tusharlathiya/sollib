pragma solidity ^0.4.24;

contract Math {
    function multiply(int _p, int _q) public pure returns (int) {
        return _p * _q;
    }

    function abs(int _number) public pure returns (int) {
        return (_number < 0) ? -(_number) : _number;
    }

    function pow(int _number, int _power) public pure returns (int result) {
        require(_power >= 0, 'Power must be positive.');
        result = 1;
        for(int _index = 0;_index<abs(_power);_index++)
            result *= _number;
        if(_number<0) result = -result;
    }

    function factorial(int _number) public pure returns (int _result) {
        _result = 1;
        int limit = abs(_number);
        while(limit > 1) {
            _result *= limit;
            limit--;
        }
        if(_number < 0) _result = -_result;
    }
}
