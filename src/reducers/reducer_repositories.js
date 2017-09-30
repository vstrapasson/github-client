import {FETCH_USER_REPO} from "../actions/index";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER_REPO:
            return action.payload.data;
    }

    return state;
}