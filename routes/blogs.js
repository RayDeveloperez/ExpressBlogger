

const express = require('express');
const router = express.Router();

//instantiate mongodb 
const { db } = require('../mongo');

/* GET all blogs listing. */
router.get("/all", async function (req, res, next){
  const blogs = await db()
    .collection('sample_blogs')
    .find()
    .toArray(function(err, result){
    if(err){
      res.status(400).send('error fetching blogs')
    }else{
      res.json(result)
    }
    })
  
    res.json({
    success:true,
    blogs: blogs,
    })
  
  });

  router.get("/one", async function (req, res, next){
    const blogs = await db()
      .collection('sample_blogs')
      .find()
      .limit(1)
      .toArray(function(err, result){
      if(err){
        res.status(400).send('error fetching blogs')
      }else{
        res.json(result)
      }
      })
    
      res.json({
      success:true,
      blogs: blogs,
      })
    
    });

    router.get("/one/:id", async function (req, res, next){
      const blogs = await db()
        .collection('sample_blogs')
        .findOne({id: req.params.id})
        
      
        res.json({
        success:true,
        blogs: blogs,
        })
      
      });


module.exports = router;