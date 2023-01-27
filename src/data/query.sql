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
	"countryId" integer NOT NULL,
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



CREATE TABLE "Publisher" (
	"id" serial NOT NULL,
	"name" varchar(30) NOT NULL UNIQUE,
	"countryId" integer NOT NULL,
	CONSTRAINT "Publisher_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Country" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL UNIQUE,
	CONSTRAINT "Country_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Book" ADD CONSTRAINT "Book_fk0" FOREIGN KEY ("categoryId") REFERENCES "Category"("id");
ALTER TABLE "Book" ADD CONSTRAINT "Book_fk1" FOREIGN KEY ("authorId") REFERENCES "Author"("id");
ALTER TABLE "Book" ADD CONSTRAINT "Book_fk2" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id");

ALTER TABLE "Author" ADD CONSTRAINT "Author_fk0" FOREIGN KEY ("countryId") REFERENCES "Country"("id");


ALTER TABLE "Publisher" ADD CONSTRAINT "Publisher_fk0" FOREIGN KEY ("countryId") REFERENCES "Country"("id");