exports.numbers = async(req,res)=>{
         const data = req.body;
        const sorteddata = data.sort();
        return res.json({
            "numbers":sorteddata
        })
}