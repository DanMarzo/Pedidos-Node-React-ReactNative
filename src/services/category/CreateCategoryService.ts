import prismaClient from "../../prisma"

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {
        if (name === "") {
            throw new Error("Name invalid");
        }
        const category = await prismaClient.category.create({
            data: { name },
            select: { name: true, id: true, create_at: true, update_at: true }
        })
        return category
    }
}
export { CreateCategoryService }