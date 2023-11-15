/*
  Warnings:

  - Made the column `updatedAt` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "updatedAt" SET NOT NULL;
