### node-jobscheduler

Node module to interface with jobscheduler. 

_installation_
```
npm install node-jobscheduler
```
_setup_
```
var scheduler = require("node-jobscheduler");
scheduler.server("****");

```
_configuration_
```
var options = {
    "host":"#hostserver",
    "port":"#port"
};
```
_all jobs_
```
scheduler.all().then(function(response){

});

```
_history_
```
scheduler.history("job name").then(function(response){

});

```
_enable_
```
scheduler.enable("job name").then(function(response){

});

```

_disable_
```
scheduler.disable("job name").then(function(response){

});

```