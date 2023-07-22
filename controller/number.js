exports.numbers = async(req,res)=>{
         const {numbers} = req.body; 
        const sorteddata = numbers.sort();
        return res.json({
            "numbers":sorteddata
        })
}
