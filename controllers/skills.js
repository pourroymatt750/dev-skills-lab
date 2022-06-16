import { skills } from '../data/skill-data.js'

function index(req, res) {
    res.render('skills/index', {
      skills: skills
    })
  }

  function newSkill(req, res) {
    res.render('skills/new')
  }

  export {
    index,
    newSkill as new
  }