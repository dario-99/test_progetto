const express = require('express')
const testController = require('../controller/testController')
const router = express.Router();


router.get('/',(req,res)=>{
    testController.testGet(req,res);
}
);
router.post('/', (req,res)=>{
    testController.testPost(req,res);
});

module.exports = router;