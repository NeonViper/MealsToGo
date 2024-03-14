import React from "react";

import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => (
    <AccountBackground>
        <AccountCover />
        <AccountContainer>
            <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => navigation.navigate("Login")}
            >
                Login
            </AuthButton>
            <Spacer position="top" size="large" />
            <AuthButton
                icon="email"
                mode="contained"
                onPress={() => navigation.navigate("Register")}
            >
                Register
            </AuthButton>
        </AccountContainer>
    </AccountBackground>
);
