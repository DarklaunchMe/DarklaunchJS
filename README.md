# Darklaunch-js

Darklaunch bindings for JavaScript.
NOTE: THIS IS A WORK IN PROGRESS AND DOESN'T ACTUALLY FUNCTION AT THE MOMENT.

## Installation

Through npm:
```
npm install darklaunch-js --save
```

Through yarn:
```
npm install darklaunch-js
```

## Usage

```
import Darklaunch from 'darklaunch-js'


...
Darklaunch.bind(uniqueID) # Optional: You may bind the darklaunch storage to uniquely identify a user.

...

if (Darklaunch.flag('DEV-123') {
  #Darklaunch Enabled
} else {
  #Darklaunch Disabled
}
```

Darklaunch.flag will automatically determine a users eligibility for a darklaunch given the response from you Darklaunch Dashboard.

## Development

Soon to come.


## Contribution
Do it. Open Source is awesome.

## Liscense
MIT
