const userInfoQuery = `select users.nombre as username
	                          , users.apellido
	                          , pais.nombre as paisname
	                          , cryptos.*
                         from users
                         join pais
                           on pais.id = users.pais_id
                         join cryptos
                           on cryptos.id = users.id
                        where users.id = `;

const allowedCrptos = `select cryptos.*
  from cryptos
  join pais
    on pais.crypto_id = cryptos.id
  join users
    on users.cryptos_id = cryptos.id
   and users.pais_id = pais.id
 where users.pais_id = pais.id`;                        


module.exports = {
    userInfoQuery
}                      