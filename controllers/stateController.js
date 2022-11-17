

const db = require('../db/mockDbAdapter')

exports.getStates = (req, res, next) => {
  res.status(201).json({
    states: [
      {id: "9", name:  'California'},
      {id: "10", name: 'Colorado'},
      {id: "11", name: 'Connecticut'},
    ]
  })
}

exports.zipRanges = (req, res, next) => {
  const {id} = req.params

  if (!id) {
    return res.status(404).json({})  
  }

  db.getZipRanges(id)
  .then(ranges => {
    return res.status(201).json({
      ranges
    })
  }).catch(error => {
    return res.status(400).json(error)
  })
}

exports.confirm_state = (req, res, next) => {
  const {state, zip} = req.body
  
  if (!state) {
    return res.status(404).end();  
  }

  return db.saveState(state, zip).then(result => {
    return res.status(201).json(result)
  }).catch(result => {
    return res.status(400).json(result)
  })
}


