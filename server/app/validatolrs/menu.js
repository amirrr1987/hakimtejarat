const { z } = require("zod")

const menuSchema = z.object({
    name: z.string(),
    url: z.string(),
    icon: z.string().optional()
})

class Menu {
    create (data) {
        return menuSchema.safeParse(data)
    }
}
module.exports = new Menu()