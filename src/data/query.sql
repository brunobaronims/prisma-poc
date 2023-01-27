CREATE TABLE "Book" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"categoryId" integer NOT NULL,
	"authorId" integer NOT NULL,
	"read" BOOLEAN NOT NULL,
	"publisherId" integer NOT NULL,
	CONSTRAINT "Book_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Author" (
	"id" serial NOT NULL,
	"name" varchar(30) NOT NULL UNIQUE,
	CONSTRAINT "Author_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Category" (
	"id" serial NOT NULL,
	"name" varchar(30) NOT NULL UNIQUE,
	CONSTRAINT "Category_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Book" ADD CONSTRAINT "Book_fk0" FOREIGN KEY ("categoryId") REFERENCES "Category"("id");
ALTER TABLE "Book" ADD CONSTRAINT "Book_fk1" FOREIGN KEY ("authorId") REFERENCES "Author"("id");