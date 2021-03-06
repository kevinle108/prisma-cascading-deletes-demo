CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE "public"."Post" (
  id SERIAL PRIMARY KEY,
  title TEXT,
  "authorId" INTEGER,
  CONSTRAINT author FOREIGN KEY ("authorId") REFERENCES "public"."User" (id) ON DELETE RESTRICT
);