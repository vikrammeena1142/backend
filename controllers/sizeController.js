const asyncHandler = require("express-async-handler");
const con = require("../config/ConnDB");

const getAllSizes = asyncHandler(async (req, res) => {

  con.query("select * from Sizes", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });



});
const getSize = asyncHandler (async (req, res) => {
  con.query('select * from Sizes where id=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result);
      else
          console.log(err);
  })
})

const createNewSize = asyncHandler(async (req, res) => {
  

})


const updateSize = asyncHandler(async (req, res) => {

})


const deleteSize = asyncHandler(async (req, res) => {
  connection.query('delete from Sizes where empid=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result)
      else
          res.send(err);
  })
})

module.exports = {
    getAllSizes,
    createNewSize,
    updateSize,
    deleteSize,
    getSize
}
