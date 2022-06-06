import Web3 from "web3";
import RockPaperScissorToken from "../../artifacts/contracts/RockPaperScissor.sol/RockPaperScissor.json";
import RPSToken from "../../artifacts/contracts/RPS.sol/RPS.json";
import { tokenaddress, rpsTokenAddress } from "../../config";
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
    return {
        type: "CONNECTION_REQUEST",
    };
};

const connectSuccess = (payload) => {
    return {
        type: "CONNECTION_SUCCESS",
        payload: payload,
    };
};

const connectFailed = (payload) => {
    return {
        type: "CONNECTION_FAILED",
        payload: payload,
    };
};

const updateAccountRequest = (payload) => {
    return {
        type: "UPDATE_ACCOUNT",
        payload: payload,
    };
};

export const connect = () => {
    return async (dispatch) => {
        console.log("connected");
        dispatch(connectRequest());
        if (window.ethereum) {
            let web3 = new Web3(window.ethereum);
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                const networkId = await window.ethereum.request({
                    method: "net_version",
                });
                console.log("accounts", accounts);
                console.log("network", networkId);
                // const rockPaperScissorData = await RockPaperScissorToken.networks[networkId];
                if (networkId && networkId == 80001) {
                    const rockPaperScissorToken = new web3.eth.Contract(
                        RockPaperScissorToken.abi,
                        tokenaddress
                    );
                    const rpsToken = new web3.eth.Contract(
                        RPSToken.abi,
                        rpsTokenAddress
                    );
                    dispatch(
                        connectSuccess({
                            account: accounts[0],
                            web3: web3,
                            rockPaperScissorToken: rockPaperScissorToken,
                            rpsToken: rpsToken,
                        })
                    );
                    window.ethereum.on("accountsChanged", (accounts) => {
                        dispatch(updateAccount(accounts[0]));
                    });
                    window.ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });
                } else if (networkId && networkId != 80001) {
                    dispatch(connectFailed("Please connect to Mumbai testnet"));
                    console.log("Please connect to Mumbai testnet");
                } else {
                    dispatch(connectFailed("Can not connect to network"));
                }
            } catch (err) {
                dispatch(connectFailed("Something went wrong."));
            }
        } else {
            dispatch(connectFailed("Install Metamask."));
        }
    };
};

export const connectWallet = () => {
    return async (dispatch) => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                dispatch(
                    connectSuccess({
                        account: accounts[0],
                    })
                );
            } catch (err) {
                dispatch(connectFailed("Something went wrong."));
            }
        } else {
            dispatch(connectFailed("Install Metamask."));
        }
    };
};

export const updateAccount = (account) => {
    return async (dispatch) => {
        dispatch(updateAccountRequest({ account: account }));
        dispatch(fetchData(account));
    };
};
