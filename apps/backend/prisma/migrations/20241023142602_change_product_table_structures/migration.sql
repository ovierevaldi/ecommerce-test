/*
  Warnings:

  - You are about to drop the column `catName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_catName_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "catName",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ALTER COLUMN "soldAmount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "PurchaseHistory";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "ShippingStatus";
