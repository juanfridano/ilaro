import { Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";

interface SessionWrapper extends Session {
    user?: {
        id?: string | null
        name?: string | null
        email?: string | null
        image?: string | null
      }
}

interface SessionParams {
    session: SessionWrapper
    token: JWT
    user: AdapterUser
}

export default SessionParams