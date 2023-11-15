/*
  Warnings:

  - Added the required column `descriptionURL` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "descriptionURL" TEXT NOT NULL;
