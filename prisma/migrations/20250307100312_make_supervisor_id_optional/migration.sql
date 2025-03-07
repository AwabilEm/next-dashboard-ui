/*
  Warnings:

  - You are about to drop the column `descriptions` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `descriptions` on the `Event` table. All the data in the column will be lost.
  - Added the required column `description` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "descriptions",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "startTime",
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "descriptions",
ADD COLUMN     "description" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
