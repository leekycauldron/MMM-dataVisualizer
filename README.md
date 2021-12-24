# MMM-dataVisualizer
A Magic Mirror Module that takes numerical data from json and displays it on a graph.

Right now only a simply meter bar is used to display the data.

Config:
- **link**
> Provide the link to use for data visualization.


*Example:*
> link: "http://example.org/data.json"


- **data**
> Provide the data to be used in the app by referencing the json key. Multiple values can be provided in a list but the first value is always the value being measured by the app. Other values can include stuff like units (kg, ppm).


*Example:*
>data: ["value","unit"]

- **thresholds**
> Used for color coding. Define rules (inclusive) for what color the bar should be when the numerical value is at a certain point. Display in format [min,max,color]


*Example:*
>thresholds: [[0,200,"green"],[201,1000,"yellow"]]

- **refreshRate**
> Define how often the app polls the website, in milliseconds. Default is 30000 (30 seconds).


*Example:*
>refreshRate: 1000

