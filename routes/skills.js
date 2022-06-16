import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users skills. */
router.get('/', skillsCtrl.index)
//GET users new skills
router.get('/new', skillsCtrl.new)
//GET id of skill
router.get('/:id', skillsCtrl.show)
//POST new skill
router.post('/', skillsCtrl.create)

export {
  router
}
