const Portfolio = require('../models/portfolioModel');


exports.createPortfolio = async (req,res)=>{
    try {
        const portfolio = new Portfolio(req.body);
        await portfolio.save((err,createdPortfolio)=>{
            if(err){
                return res.status(422).send(err)
            }
            return res.json(createdPortfolio)
        })
    }catch (e) {
        res.status(422).send(e.message)
    }
};
exports.getPortfolio = async (req,res)=>{
    try {
        await Portfolio.find({})
            .sort({"startDate":1})              //// Sorting Portfolios by Date from Past to Present
            .exec((err, allPortfolio)=>{
                if(err){
                    return res.status(422).send(err,'error of something bad')
                }
                return res.json(allPortfolio)
            });
    }catch (e) {
        res.status(422).send('something happen')
    }
};
exports.getPortfolioById = (req,res) =>{
    const portfolioId = req.params.id;
    Portfolio.findById(portfolioId)
        .select("-_v")
        .exec((err,foundPortfolio)=>{
            if(err){
                return res.status(422).send(err)
            }
            return res.json(foundPortfolio);
        })
}
exports.updatePortfolio = (req,res)=>{
    const portfolioId = req.params.id;
    const portfolioData = req.body;
    Portfolio.findById(portfolioId,(err,foundPortfolio)=>{
        if(err){
            return res.status(422).send(err)
        }
        foundPortfolio.set(portfolioData);
        foundPortfolio.save((err)=>{
            if(err){
                return res.status(422).send(err)
            }
            return res.json(foundPortfolio)
        })
    })
};
exports.deletePortfolio = (req,res)=>{
    const portfolioId = req.params.id;
    Portfolio.deleteOne({_id:portfolioId},(err)=>{
        if(err){
            return res.status(422).send(err)
        }
        return res.json('Portfolio was deleted successfully')
    })
};
