/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `codigo` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "codigo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL
);
INSERT INTO "new_Produto" ("codigo", "nome", "preco") SELECT "codigo", "nome", "preco" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
