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
