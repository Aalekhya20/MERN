const testController = (req,res)=>{
    res.status(200).send({
        message: "hello, alekhya here",
        success: true,
    });
};

module.exports = {testController};