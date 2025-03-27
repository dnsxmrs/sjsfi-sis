import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Seed Users
    await prisma.user.createMany({
        data: [
            { name: "Alice Johnson", email: "alice@example.com" },
            { name: "Bob Smith", email: "bob@example.com" },
            { name: "Charlie Brown", email: "charlie@example.com" },
            { name: "David Lee", email: "david@example.com" },
            { name: "Emma Watson", email: "emma@example.com" },
        ],
    });

    // Seed Students
    await prisma.student.createMany({
        data: [
            { name: "Student One", email: "student1@example.com" },
            { name: "Student Two", email: "student2@example.com" },
            { name: "Student Three", email: "student3@example.com" },
            { name: "Student Four", email: "student4@example.com" },
            { name: "Student Five", email: "student5@example.com" },
        ],
    });

    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
