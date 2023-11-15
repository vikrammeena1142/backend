const asyncHandler = require("express-async-handler");
const con = require("../config/ConnDB");

const getAllDealers = asyncHandler(async (req, res) => {

  con.query("select * from Dealers", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });



});
const getDealer = asyncHandler (async (req, res) => {
  con.query('select * from Dealers where id=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result);
      else
          console.log(err);
  })
})

const createNewDealer = asyncHandler(async (req, res) => {
  const {name,address,contactName,contactNumber,GSTIN} = req.body
con.query("INSERT INTO `dealers` (`name`,`address`,`contactName`,contactNumber,GSTIN) VALUES (?,?,?,?,?)",
[name,address,contactName,contactNumber,GSTIN],(err,result)=>{
  if(!err){throw "there is an issue"}
  res.send(result)
})
})


const updateDealer = asyncHandler(async (req, res) => {
res.json({"api":"update"})
})


const deleteDealer = asyncHandler(async (req, res) => {
  connection.query('delete from Dealers where empid=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result)
      else
          res.send(err);
  })
})

module.exports = {
    getAllDealers,
    createNewDealer,
    updateDealer,
    deleteDealer,
    getDealer
}
