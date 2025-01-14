/*
  Warnings:

  - You are about to drop the column `dueTime` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Event` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `Parent` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sex` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sex` on the `Teacher` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserSex" AS ENUM ('MALE', 'FEMALE');

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Result" DROP CONSTRAINT "Result_assignmentId_fkey";

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "dueTime",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "studentId";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Parent" ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "Result" ALTER COLUMN "assignmentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "classId" INTEGER NOT NULL,
DROP COLUMN "sex",
ADD COLUMN     "sex" "UserSex" NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
DROP COLUMN "sex",
ADD COLUMN     "sex" "UserSex" NOT NULL;

-- DropEnum
DROP TYPE "Usersex";

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
