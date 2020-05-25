# Textual 

Create text based games with visual aids

## Getting Started

### Installing
* Clone project
* npm i

## Usage 

### Instancing 
All advanced functions will be added as modules that are injected with the textual reference.

Default base modules will be provided but can be overridden. Any passed functions will be injected with textual as an argument. 

```js

function UI () {}
function Data () {}

const mods = {
  UI;
  Data;
}
const textual = Textual(mods);

textual.Data.obj1;
```
