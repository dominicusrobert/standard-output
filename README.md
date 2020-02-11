# standard-output

## A. Description
Standard exit points in every functions.
There are 3 types of exit point:
- Success Response
- Expected Error
- Unexpected Error


## B. How to use

### 1. Installation
```
npm install --save @dobert/standard-output
```

### 2. Importing
```
const {
    SuccessResponse,
    ExpectedError,
    UnexpectedError,
    OutputTypes,
    StatusCodes
} = require('@dobert/standard_output');
```

### 3. SET the result

#### SuccessResponse
```
const result = new SuccessResponse({
    message: 'Success to ....',
    detail: StatusCodes.REQUEST_SUCCESS,
    data: {} // data you want to binding on the response
});
```

Parameters description:
- message is a simple message that you want give to the user and it must be easy to understand even by non-technical person
- detail for success response usually is `DATA_CREATED` or `REQUEST_SUCCESS`
- data is a information that you want to bind to the response

#### ExpectedError
```
const error = new ExpectedError();
error.additionalInfo({
    message: 'Failed to ...',
    detail: StatusCodes.UNAUTHORIZED
});
```
Parameters description:
- message is a simple message that you want give to the user and it must be easy to understand even by non-technical person
- detail for expected error usually besides `DATA_CREATED` and `REQUEST_SUCCESS`

#### UnexpectedError
```
const error = new UnexpectedError(err);
```
Parameters description:
- err is from error we caught in `try catch` block


### 4. GET the processed result

```
result.getStandardResult();
```

this will return object like this
```
{
    code: 200,
    json: {
        message: 'Success to get data',
        data: {}
    }
}
```

## C. Update the code SOP
1. Change the branch
   - You must following this branch flow
     
     `new_branch` > `master` > `release`
  
   - Your `new_branch` name must start with one of these:
     - breaking-change/...
     - feature/...
     - bugfixing/...

2. Update the version at `package.json`, you can refer to this [versioning standard](https://semver.org/)

3. Update the `CHANGELOG.md`


## D. How to publish the npm

1. Login to the npm
   ```
   npm adduser
   ```
2. publish the npm
   ```
   npm publish --access public
   ```

NB:
- You MUST publish to npmjs only from branch release
- If this doesn't work, please refer to [npmjs documentation](https://www.npmjs.com/)
