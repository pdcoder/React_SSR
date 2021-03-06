const express = require('express');
const app = express();
const React = require('react');
const {renderToString} = require('react-dom/server');
const Home = require('./client/components/Home').default;
app.get('/',(req,res)=>{
    const content  = renderToString(<Home />);
    res.send(content);
})

app.listen(3000,()=>{
    console.log('Listening toport 3000');
});