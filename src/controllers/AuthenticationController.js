const  User  = require('../models/User');



const confirmAccount = async(req, res) => {
  const code = req.body.code
  if (code){
    let hasCode = await User.findOne({ where: { code } });
    if (hasCode?.code.toString() === code) {
      await User.update({ validated: 1 }, {
        where: {
          code: hasCode.code,
        },
      });
      res.json({ok:'Usuario Validado'})
   

    } else {
      res.json({error:'codigo não existe'})
    }
  }


}


const login = async (req, res) => {
  if (req.body.email && req.body.password) {
    const email = req.body.email
    const password = req.body.password

    let hasLogin = await User.findOne({where:{email,password}})
    if (hasLogin && hasLogin.validated === 1) {
      res.json({ok:"usuario logado"})
    } else{
      res.json({error:"usuario não validado"})
    } }else{
      res.json({error:"informe os dados corretamente"})
    }
}
  


module.exports =  {
  confirmAccount,
  login
};
