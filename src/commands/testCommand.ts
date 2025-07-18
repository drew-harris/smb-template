import z from "zod";
import { createCommand } from "../command/createCommand";

export const testCommand = createCommand(
  {
    name: "test",
    description: "simple test command",
    options: {
      question: {
        description: "Question",
        type: z.string().min(1),
      },
    },
  },
  async (inter) => {
    console.log("input: ", inter.input);
    inter.reply("you asked: " + inter.input.question);
  },
);
