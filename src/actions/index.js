import axios from 'axios';

const GITHUB_ROOT_URL = 'https://api.github.com';

export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_REPO = 'FETCH_USER_REPO';

export function fetchUserInfo(username) {
    const url = `${GITHUB_ROOT_URL}/users/${username}`;
    const request = axios.get(url);

    return {
        type: FETCH_USER_INFO,
        payload: request
    }
}

export function fetchUserRepositories(username) {
    const url = `${GITHUB_ROOT_URL}/users/${username}/repos`;
    const request = axios.get(url);

    return {
        type: FETCH_USER_REPO,
        payload: request
    }
}