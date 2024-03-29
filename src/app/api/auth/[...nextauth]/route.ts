import User from "@models/user";
import { connectDB } from "@utils/database";
import { Account, Profile, Session, User as NextUser } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT} from "next-auth/jwt";
import NextAuth from "next-auth/next";
import { CredentialInput } from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

interface SessionParams{
    session: Session;
    token: JWT;
    user: AdapterUser;
}

interface SignInParams{
    user: NextUser | AdapterUser
    account: Account | null
    profile?: Profile
    email?: {
      verificationRequest?: boolean
    }
    credentials?: Record<string, CredentialInput>
  }

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
        async signIn(params: SignInParams) {
            if (!params.profile) return false
            const {profile, user} = params
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