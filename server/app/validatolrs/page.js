const { z } = require("zod")

const pageSchema = z.object({
    title: z.string(),
    url: z.string(),
    content: z.string(),
    img: z.string()
})

class Page {
    create (data) {
        return pageSchema.safeParse(data)
    }
}
module.exports = new Page()