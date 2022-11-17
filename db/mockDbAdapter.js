const zipRanges = {
  "9": [{start: 90001, end: 96162}],
  "10": [{start: 80001, end: 81658}],
  "11": [{start: 6001, end: 6389}, {start: 6401, end: 6928}],
}

const isZipValid = (stateId, zip) => {
  

  return new Promise((resolve, reject) => {
    if (!zipRanges[stateId]) {
      reject(false);
    } else {
      let res =  zipRanges[stateId].reduce((valid, range) => {
        return valid || (range.start <= zip && zip <= range.end)
      }, false)
  
      if(res) {
        resolve(true)
      } else {
        reject(false)
      }
    }
  })
}

const saveState = (stateId, zip) => {
  // TODO check if stateId is valid
  
  return isZipValid(stateId, zip).then(res => {
    return true
  });

  // return new Promise((resolve, reject) => {
  //   if (isZipValid(stateId, zip)) {
  //     resolve(true)
  //   } else {
  //     reject("Zip is invalid for state provided")
  //   }
  // })
}

const getZipRanges = id => {
  return new Promise((resolve, reject) => {
    if (!id || !zipRanges[id]) {
      reject({error: "Invalid state"})
    }
    else {
      resolve(zipRanges[id])
    }
  })
  return 
}

exports.isZipValid = isZipValid
exports.getZipRanges = getZipRanges
exports.saveState = saveState
