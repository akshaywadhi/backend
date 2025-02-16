import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const refer = async (req,res) => {
  try {
    const { referrerName, referrerEmail, refereeName, refereeEmail, referralCode, message, termsAccepted } = req.body;

    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        referralCode,
        message,
        termsAccepted,
      },
    });

    res.status(201).json({ message: "Referral saved successfully!", referral });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}