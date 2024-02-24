import User from "@models/user";
import { connectDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    async session({session}) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString()

        return session
    },
    async signIn({profile}) {
        console.log({profile})
        try {
            await connectDB();
            const email = profile.email
            const userExists = await User.findOne({
                email
            })

            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.handle,
                    image: profile.picture
                })
            }

            return true
        } catch(error) {
            console.log(error)
            return false;
        }

    },
})

export {handler as GET, handler as POST}