const express = require("express");
const router = express.Router();
const sauce = require('../controlleurs/CtrlSauce');

const auth = require('../middleware/auth');

const multer = require('../middleware/multer-config');

router.put('/:id', auth, multer, sauce.update)
router.delete('/:id', auth, sauce.delete);

router.post('/', auth, multer, sauce.create);
router.get('/:id', auth, sauce.OneSauce);
router.get('/', auth, sauce.list);
router.post('/:id/like', auth, sauce.likeSauce);

module.exports = router;