-- CreateEnum
CREATE TYPE "ShippingStatus" AS ENUM ('SHIPPING', 'DELIVERED', 'FAILED');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT[],
    "catName" TEXT NOT NULL,
    "soldAmount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Admin" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" INTEGER DEFAULT 3
);

-- CreateTable
CREATE TABLE "PurchaseHistory" (
    "invoice" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "buyerId" TEXT NOT NULL,
    "status" "ShippingStatus" NOT NULL DEFAULT 'SHIPPING'
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory_name_key" ON "ProductCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseHistory_invoice_key" ON "PurchaseHistory"("invoice");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catName_fkey" FOREIGN KEY ("catName") REFERENCES "ProductCategory"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
