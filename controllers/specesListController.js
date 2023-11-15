const asyncHandler = require("express-async-handler");
const con = require("../config/ConnDB");

const getAllspecesLists = asyncHandler(async (req, res) => {

  con.query("select * from specesList", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });



});
const getspecesList = asyncHandler (async (req, res) => {
  con.query('select * from specesList where id=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result);
      else
          console.log(err);
  })
})

const createNewspecesList = asyncHandler(async (req, res) => {
  

})


const updatespecesList = asyncHandler(async (req, res) => {

})


const deletespecesList = asyncHandler(async (req, res) => {
  connection.query('delete from specesList where empid=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result)
      else
          res.send(err);
  })
})

module.exports = {
    getAllspecesLists,
    createNewspecesList,
    updatespecesList,
    deletespecesList,
    getspecesList
}
