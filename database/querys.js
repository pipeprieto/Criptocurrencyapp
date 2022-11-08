const userInfoQuery = `select users.nombre as username
	                          , users.apellido
	                          , pais.nombre as paisname
                            , pais.codigo as codigopais
	                          , cryptos.*
                         from users
                         join pais
                           on pais.id = users.pais_id
                         join userscryptos
                           on userscryptos.username = users.username
                         join cryptos
                           on cryptos.id = userscryptos.crypto_id
                        where users.username = `;
                          

const allowedCryptosByCountry = `select cryptos.*
                                   from cryptos
                                   join pais
                                     on pais.crypto_id = cryptos.id
                                  where pais.codigo = `;

const allowedUserCryptos = (pais_id,username)=>{
  return `select cryptos.*
            from cryptos
            join pais
              on pais.crypto_id = cryptos.id
            join userscryptos
              on userscryptos.crypto_id = cryptos.id
           where pais.codigo = '${pais_id}'
             and userscryptos.crypto_id not in(select userscryptos.crypto_id
						                                     from userscryptos
						                                     join cryptos
                                                   on cryptos.id = userscryptos.crypto_id
                                                 join users
                                                   on users.username = userscryptos.username
                                                where users.username = '${username}'
                                                    )`;
}                                
                                  
const countriesInfo = `select pais.nombre
                          , pais.codigo
                          , gestoras.nombre as gestorasname
                          , cryptos.simbolo
                       from pais
                       join gestoras
                         on gestoras.id = pais.gestora_id
                       join cryptos
                         on cryptos.id = pais.crypto_id`; 
                         
const countryByCodeInfo = `select pais.nombre
                                , pais.codigo
                                , gestoras.nombre as gestorasname
                                , cryptos.simbolo
                             from pais
                             join gestoras
                               on gestoras.id = pais.gestora_id
                             join cryptos
                               on cryptos.id = pais.crypto_id
                            where pais.codigo = `;                 


module.exports = {
  userInfoQuery,
  allowedCryptosByCountry,
  countriesInfo,
  countryByCodeInfo,
  allowedUserCryptos,
};                      