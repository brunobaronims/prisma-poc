CREATE TABLE "Book" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"category" integer NOT NULL,
	"author" integer NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "Book_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "User" (
	"id" serial NOT NULL,
	"name" varchar(30) NOT NULL,
	"email" text NOT NULL UNIQUE,
	CONSTRAINT "User_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Profile" (
	"id" serial NOT NULL,
	"bio" varchar(255),
	"userId" integer NOT NULL UNIQUE,
	CONSTRAINT "Profile_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Book" ADD CONSTRAINT "Book_fk0" FOREIGN KEY ("userId") REFERENCES "User"("id");
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_fk0" FOREIGN KEY ("userId") REFERENCES "User"("id");