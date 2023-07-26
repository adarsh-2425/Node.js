Information about basic os

```
const os = require("os");

const getSystemInfo = () => {
  const type = os.type();
  const architecture = os.arch();
  const hostName = os.hostname();

  return {
    type: type,
    architecture: architecture,
    hostName: hostName
  }
}

console.log(getSystemInfo())
```
