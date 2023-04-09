'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);

import { Authenticator } from "@aws-amplify/ui-react";

export default function App() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
                </main>
            )}
            </Authenticator>
        </div>
    )
}