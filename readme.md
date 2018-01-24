Format a version number (String) to an actual number.

e.g '1.0.0' will be converted to 100

The function accepts two arguments `versionNumber` and `length`.

`versionNumber` is the version number you would like to convert.

`length` (optional) is the length of the number you would like to return.

## Example Usage

```
npm install formatversionnumber
```

```javascript
import formatVersionNumber from 'formatversionnumber'

formatVersionNumber('1.0.12', 4);
``` 

##### When might the length argument be useful? 

If you use this function whilst trying to sort multiple version numbers without adjusting the length of the returned number you may get undesired results. For example, 1.0.12 and 1.0.2 would be converted to 1012 and 102 which would give the impression that 1.0.12 is a later version than 1.0.2. Setting the length property to 4 in this instance will correct the problem.