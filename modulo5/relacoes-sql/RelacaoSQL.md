#### Exercicio 1

a.Chave estrangeira (__FOREIGN KEY__) ?
 Para criarmos relações, precisaremos dar um jeito de relacionar (ou referenciar) uma tabela com outra.
 Para isso, usamos a FOREIGN KEY, que indica que a propriedade em questão é uma chave estrangeira
 FOREIGN KEY deve sempre se referenciar a uma PRIMARY KEY da outra tabela;

b)

```sql
INSERT INTO rating (id, comment, rate, movie_id)
VALUES
	("003","Muito bom!",7,"001"),
    ("004","Muito bom mesmo!",8,"001"),
    ("005","Muito bom demais!",9,"003"),
    ("006","Muito bom de verdade!",9,"004"),
    ("007","Excelente!",10,"007");
```

c) Falha, a chave estrangeira não existe na tabela referênciada


d)
```sql
ALTER TABLE movie DROP COLUMN rating;
```

e)Nâo foi possivel alterar a tabela, pois a mesma está sendo referênciado em outra tabela

---

#### Exercicio 2

a) Cada linha dessa tabela representa uma relacao ator-filme
Ela é nescesséria pois um ator trabalha em vários filmes, assim com em um filme trabalham vários atores

b)

```sql
INSERT INTO moviecast (movie_id, actor_id)
VALUES
	("001","002"),
	("002","002"),
	("003","002"),
	("004","003"),
	("007","003"),
	("001","003");
```

c) Não foi possível adicionar uma linha filha pois a pai nao existe

d) Não foi possível deletar pois está sendo referênciado em outra tabela

---

#### Exercicio 3

a) O 'JOIN' faz a junção das tabelas 'rating' e 'movie'.
O operador 'ON' indica quais linhas retornar por meio de uma comparacão.

b)

```sql
SELECT movie.id, movie.name as Title, rating.rate
FROM movie INNER JOIN rating
ON movie.id = rating.movie_id;
```
---

#### Exercicio 4

a)

```sql
SELECT movie.id, movie.name as Title, rating.rate, rating.comment
FROM movie LEFT JOIN rating
ON movie.id = rating.movie_id;
```

b)

```sql
SELECT movie.id as movie_id, movie.name as movie_name, moviecast.actor_id
FROM moviecast RIGHT JOIN movie
ON moviecast.movie_id = movie.id;
```

c)

```sql
SELECT AVG(rating.rate) as avg_rate, movie.name
FROM rating RIGHT JOIN movie
ON movie.id = rating.movie_id
GROUP BY movie.name;
```

