const asyncHandler = require("express-async-handler");
const con = require("../config/ConnDB");

const getAllShowrooms = asyncHandler(async (req, res) => {

  con.query("select * from showrooms", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });



});
const getShowroom = asyncHandler (async (req, res) => {
  con.query('select * from showrooms where id=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result);
      else
          console.log(err);
  })
})

const createNewShowroom = asyncHandler(async (req, res) => {
  const {name,address,colorScheme,contactName,contactNumber} = req.body
  con.query("INSERT INTO `showrooms` (`name`,`address`,`colorScheme`,`contactName`,`contactNumber`,`GSTIN`) VALUES (?,?,?,?,?)",
  [name,address,colorScheme,contactName,contactNumber],(err,result)=>{
    if(!err){throw "there is an issue"}
    res.send(result)
  })

})


const updateShowroom = asyncHandler(async (req, res) => {

})


const deleteShowroom = asyncHandler(async (req, res) => {
  connection.query('delete from showrooms where empid=?', [req.params.id], (err, result, fields) => {
      if (!err)
          res.send(result)
      else
          res.send(err);
  })
})

module.exports = {
    getAllShowrooms,
    createNewShowroom,
    updateShowroom,
    deleteShowroom,
    getShowroom
}
