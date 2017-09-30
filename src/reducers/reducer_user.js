import {FETCH_USER_INFO} from "../actions/index";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER_INFO:
            return action.payload.data;
    }

    return state;
}