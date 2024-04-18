import { NextApiRequest, NextApiResponse } from "next";

type CommentData = Record<string, any>;

const handler = (req: NextApiRequest, res: NextApiResponse<CommentData>) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (!email?.includes("@") || !name?.trim() || !text?.trim()) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    res.status(201).json({
      message: "Added comment",
      comment: {
        name,
        text,
        email,
        id: new Date().toISOString(),
      },
    });
  }

  if (req.method === "GET") {
    const comments = [1, 2].map((_, idx) => ({
      id: `c${idx + 1}`,
      name: `Name ${idx + 1}`,
      text: `A ${idx + 1} comment!`,
    }));
    res.status(200).json({
      comments,
    });
  }
};

export default handler;
