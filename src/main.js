import React from 'react'
import {render} from 'react-dom'
import "../styles/main.sass"
import Counter from "./components/Counter";

//console.log(articles);

render(<Counter/>, document.getElementById('container'));
