import {FETCH_REPO_DETAILS} from "../actions/index";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_REPO_DETAILS:
            return action.payload.data;
    }

    return state;
}