const users = [
	{
		email: "lamarr@labenu.com",
		password: "123456"
	},
	{
		email: "labenu@lamarr",
		password: "lamarr"
	}
]

const login = (email,password)=>{
   if(typeof email !='string'){
      return(`E-mail inavalido ! (email)`);
   }
   if (typeof password != 'string'){
      return(`Senha inválida! (password)`);
   }

   for(let user of users){
      if(user.email===email){
         if(user.password===password){
            return("Login realizado com sucesso!");
         }
      }
   }
   console.log(`email ou password com erro!`)
}

console.log(login("lamarr@labenucom","123456"));
console.log(login("labenulamarr","lamarr"));
console.log(login("lamarr@labenu.com","123456"));
console.log(login("labenu@lamarr","lamarr"));

