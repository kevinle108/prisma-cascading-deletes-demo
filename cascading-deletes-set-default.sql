CREATE TABLE "public"."TheLastUser" (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE "public"."TheLastPost" (
  id SERIAL PRIMARY KEY,
  title TEXT,
  "authorId" INTEGER DEFAULT 42,
  CONSTRAINT author FOREIGN KEY ("authorId") REFERENCES "public"."TheLastUser" (id) ON DELETE SET DEFAULT
);