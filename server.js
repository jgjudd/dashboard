const express = require('express');
const app = express();
const cors = require('cors')
///////////////////////////
const corsOptions = {
  headers: {'Access-Control-Allow-Origin': '*'}
}

app.get('/api/cases', cors(corsOptions), (req, res) => {
  req.header('Access-Control-Allow-Origin', '*');
  const cases = [
    {id: 1, caseName: 'Case A'},
    {id: 2, caseName: 'Case B'},
    {id: 3, caseName: 'Case C'},
    {id: 4, caseName: 'Case D'},
    {id: 5, caseName: 'Case E'}
  ];

  res.json(cases);
});

/////////////////////////// 
const port = 5555; 
app.listen(5555, () => console.log(`Server Started at port ${port}`));


/// test 