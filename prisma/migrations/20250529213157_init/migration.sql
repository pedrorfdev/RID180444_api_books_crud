-- CreateTable
CREATE TABLE "books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "total_pages" INTEGER NOT NULL,
    "isbn_code" TEXT NOT NULL,
    "publisher" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "books_isbn_code_key" ON "books"("isbn_code");
