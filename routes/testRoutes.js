module.exports = (app) => {
  app.get('/api/test',(req,res)=>{
    res.send({test:"success"})
  });

  app.get('/api/button',(req,res)=>{
      res.send({click:"success"})
  });
};

