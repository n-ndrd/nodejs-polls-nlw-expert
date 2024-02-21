import { z } from "zod";
import { randomUUID } from "node:crypto";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

export async function voteOnPoll(app: FastifyInstance) {
    app.post('/polls/:pollId/votes', async (req, res) => {
        const voteOnPollBody = z.object({
            pollOptionId: z.string().uuid()
        })

        const voteOnPollParams = z.object({
            pollId: z.string().uuid(),
        })

        const { pollId } = voteOnPollParams.parse(req.params)
        const { pollOptionId } = voteOnPollBody.parse(req.body)

        const sessionId = randomUUID()



        return res.status(201).send()
    })
}