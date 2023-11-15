const asyncHandler = require("express-async-handler");
const con = require("../config/ConnDB");

const getAllgroupSizes = asyncHandler(async (req, res) => {

  con.query("select * from groupSizes", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });



});
const getgroupSize = asyncHandler (async (req, res) => {
  con.query('select * from groupSizes where id=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result);
      else
          console.log(err);
  })
})

const createNewgroupSize = asyncHandler(async (req, res) => {
  

})


const updategroupSize = asyncHandler(async (req, res) => {

})


const deletegroupSize = asyncHandler(async (req, res) => {
  connection.query('delete from groupSizes where empid=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result)
      else
          res.send(err);
  })
})

module.exports = {
    getAllgroupSizes,
    createNewgroupSize,
    updategroupSize,
    deletegroupSize,
    getgroupSize
}
