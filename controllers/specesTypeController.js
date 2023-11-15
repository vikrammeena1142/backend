const asyncHandler = require("express-async-handler");
const con = require("../config/ConnDB");

const getAllspecesTypes = asyncHandler(async (req, res) => {

  con.query("select * from specesTypes", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });



});
const getspecesType = asyncHandler (async (req, res) => {
  con.query('select * from specesTypes where id=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result);
      else
          console.log(err);
  })
})

const createNewspecesType = asyncHandler(async (req, res) => {
  

})


const updatespecesType = asyncHandler(async (req, res) => {

})


const deletespecesType = asyncHandler(async (req, res) => {
  connection.query('delete from specesTypes where empid=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result)
      else
          res.send(err);
  })
})

module.exports = {
    getAllspecesTypes,
    createNewspecesType,
    updatespecesType,
    deletespecesType,
    getspecesType
}
