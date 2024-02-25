import SessionParams from "@models/authentication/session";
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
    callbacks:{
        async session(sessionParams: SessionParams) {
            const session = sessionParams.session
            if (session.user) {
                const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()
            }
            
            return session
        },
        async signIn({user, account, profile, email, credentials}) {
            // Debug: console.log({user, account, profile, email, credentials})
            if (!profile) return false
            try {
                await connectDB();
                const email = profile.email
                const userExists = await User.findOne({
                    email
                })
    
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.email?.split("@")[0],
                        image: user ? user.image : ""
                    })
                }
    
                return true
            } catch(error) {
                console.log(error)
                return false;
            }
    
        },
    }
})

export {handler as GET, handler as POST}