import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
import withRouter from "next/router";
import Typed from 'react-typed';

const Profile = () => {
    const router = withRouter;
    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    const verification = ["Verifying User..."]
    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "dev-wpt9me02.us.auth0.com";

            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2/`,
                    scope: "read:current_user",
                });

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const {user_metadata} = await metadataResponse.json();

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata().then(() => {
            setTimeout(() => {
                router.push('/')
            }, 5000)
        });
    }, []);
    return isAuthenticated && (
        <BaseLayout>
            <BasePage>
                <div>
                    <Typed
                        loop
                        strings={verification}
                        typeSpeed={100}
                        backSpeed={0}
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        className="self-typed"
                        cursorChar="|"
                    />
                </div>
            </BasePage>
        </BaseLayout>
    )
};

export default Profile;
