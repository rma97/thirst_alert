-- CreateTable
CREATE TABLE "Plant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" VARCHAR(191) NOT NULL,
    "insertedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wateredAt" TIMESTAMP(3) NOT NULL,
    "sunNeeded" INTEGER NOT NULL,
    "waterNeeded" INTEGER NOT NULL,
    "imageUrl" VARCHAR(2047),
    "type" TEXT,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
