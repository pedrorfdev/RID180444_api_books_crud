-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "total_pages" INTEGER NOT NULL,
    "isbn_code" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_isbn_code_key" ON "books"("isbn_code");
