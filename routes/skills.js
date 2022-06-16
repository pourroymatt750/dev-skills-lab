import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users skills. */
router.get('/', skillsCtrl.index)
//GET users new skills
router.get('/new', skillsCtrl.new)
//POST new skill


export {
  router
}
