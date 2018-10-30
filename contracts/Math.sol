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

    function floorSqrt(int _number) public pure returns (int) {
        require(_number >= 0, 'Number must be zero or positive.');
        if(_number == 0 || _number == 1) return _number;

        int _start  = 1;
        int _end    = _number;
        int _result = 0;
        int _mid;
        while(_start <= _end) {
            _mid = (_start + _end) / 2;
            if(multiply(_mid,_mid) == _number) return _mid;
            if(multiply(_mid,_mid) < _number) {
                _start  = _mid + 1;
                _result = _mid;
            } else {
                _end = _mid - 1;
            }
        }
        return _result;
    }

    function min(int _p, int _q) public pure returns (int) {
        require(_p != _q, 'Both number must not be equal.');
        return (_p < _q) ? _p : _q;
    }

    function max(int _p, int _q) public pure returns (int) {
        require(_p != _q, 'Both number must not be equal.');
        return (_p > _q) ? _p : _q;
    }

    function floorCbrt(int _number) public pure returns (int) {
        require(_number >= 0, 'Number must be zero or positive.');
        if(_number == 0 || _number == 1) return _number;

        int _start  = 1;
        int _end    = _number;
        int _result = 0;
        int _mid;
        while(_start <= _end) {
            _mid = (_start + _end) / 2;
            if(multiply(_mid,multiply(_mid,_mid)) == _number) return _mid;
            if(multiply(_mid,multiply(_mid,_mid)) < _number) {
                _start  = _mid + 1;
                _result = _mid;
            } else {
                _end = _mid - 1;
            }
        }
        return _result;
    }
}
